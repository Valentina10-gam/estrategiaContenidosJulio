const filters = [
  "Todas",
  "Instagram / Facebook",
  "LinkedIn",
  "Reel",
  "Carrusel",
  "Hídriko",
  "TKC Security",
  "Sectores",
  "Autoridad",
  "Capacidades técnicas"
];

const accents = {
  "Capacidades técnicas": "#53C6E8",
  "Autoridad técnica": "#3F3A66",
  "Innovación": "#7FDBF1",
  "Riesgos por sector": "#250045",
  "Hídriko": "#2FA8CF",
  "TKC Security": "#6E5BAA",
  "Respaldo y trayectoria": "#53C6E8",
  "Prevención y seguimiento": "#3F3A66",
  "Seguimiento y trazabilidad": "#3F3A66",
  "Sectores y operación": "#250045"
};

let activeFilter = "Todas";
let activeQuery = "";

const calendarGrid = document.querySelector("#calendarGrid");
const filtersEl = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const modal = document.querySelector("#pieceModal");
const modalContent = document.querySelector("#modalContent");
const readProgress = document.querySelector("#readProgress");
const backTop = document.querySelector("#backTop");
const nav = document.querySelector("#nav");
const menuToggle = document.querySelector("#menuToggle");

function init() {
  renderFilters();
  renderCalendar();
  renderStories();
  bindEvents();
  observeReveals();
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function renderFilters() {
  filtersEl.innerHTML = filters.map((filter) => `
    <button class="filter-btn ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">
      ${filter}
    </button>
  `).join("");
}

function pieceMatches(piece) {
  const haystack = [
    piece.date,
    piece.format,
    piece.network,
    piece.adaptation || "",
    piece.pillar,
    piece.sector,
    piece.title,
    piece.status,
    ...(piece.content || []),
    ...piece.tags
  ].join(" ").toLowerCase();
  const filterOk = activeFilter === "Todas" || piece.tags.includes(activeFilter);
  const queryOk = !activeQuery || haystack.includes(activeQuery.toLowerCase());
  return filterOk && queryOk;
}

function renderCalendar() {
  const pieces = contentPieces.filter(pieceMatches);
  const weeks = [...new Set(contentPieces.map((piece) => piece.week))];

  calendarGrid.innerHTML = weeks.map((week) => {
    const weekPieces = pieces.filter((piece) => piece.week === week);
    if (!weekPieces.length) return "";
    return `
      <section class="week-block reveal visible">
        <div class="week-title">${week}</div>
        <div class="piece-row">
          ${weekPieces.map(renderPieceCard).join("")}
        </div>
      </section>
    `;
  }).join("") || `<div class="no-results">No hay piezas que coincidan con el filtro actual.</div>`;

  refreshIcons();
}

function renderPieceCard(piece) {
  return `
    <button class="piece-card" type="button" data-piece-id="${piece.id}" style="--accent:${accents[piece.pillar] || "#53C6E8"}">
      <span class="piece-date">${piece.date}</span>
      <h3>${piece.title}</h3>
      <span class="status">${piece.status}</span>
      <div class="piece-meta">
        <span class="chip">${piece.format}</span>
        <span class="chip">${piece.network}${piece.adaptation ? ` + ${piece.adaptation}` : ""}</span>
        <span class="chip">${piece.pillar}</span>
        <span class="chip">${piece.sector}</span>
      </div>
      <span class="open-cue"><i data-lucide="panel-right-open"></i>Clic para ver ficha</span>
    </button>
  `;
}

function renderStories() {
  const timeline = document.querySelector("#storiesTimeline");
  const storyItems = contentPieces
    .filter((piece) => piece.stories.some((story) => story !== "No aplica."))
    .map((piece) => `
      <article class="timeline-item reveal">
        <h3>${piece.date} · ${piece.title}</h3>
        <p>${piece.format} principal: ${piece.network}</p>
        <ul>${piece.stories.slice(0, 2).map((story) => `<li>${story}</li>`).join("")}</ul>
      </article>
    `);

  const special = specialStories.map((item) => `
    <article class="timeline-item reveal">
      <h3>${item.date} · ${item.title}</h3>
      <p>${item.text}</p>
      <p><strong>${item.note}</strong></p>
    </article>
  `);

  timeline.innerHTML = [...storyItems.slice(0, 11), ...special, ...storyItems.slice(11)].join("");
}

function openModal(piece) {
  modalContent.innerHTML = `
    <p class="eyebrow">Ficha creativa de campaña · Pieza ${piece.id}</p>
    <h2>${piece.title}</h2>
    <div class="modal-hero">
      <div>
        <strong>Material visual pendiente de confirmación</strong>
        <p>Preview creativo para ${piece.format}</p>
      </div>
    </div>
    <div class="detail-grid">
      ${detail("Fecha", piece.date)}
      ${detail("Formato", piece.format)}
      ${detail("Red principal", piece.network)}
      ${detail("Adaptaciones", getAdaptations(piece))}
      ${detail("Objetivo", piece.objective, true)}
      ${detail("Sector", piece.sector)}
      ${detail("Pilar", piece.pillar)}
      ${piece.content ? detailList("Idea principal", piece.content) : detail("Idea principal", piece.hook, true)}
      ${detail("Hook o portada", piece.hook, true)}
      ${detail("CTA", piece.cta, true)}
      ${detailList("Historias de apoyo", piece.stories)}
      ${detail("Material requerido", piece.material, true)}
      ${detail("Estado", piece.status)}
      ${detail("Alternativa si no se puede producir", piece.alternative, true)}
      ${piece.note ? detail("Nota", piece.note, true) : ""}
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function detail(label, value, full = false) {
  return `<div class="detail ${full ? "full" : ""}"><b>${label}</b><span>${value}</span></div>`;
}

function detailList(label, items) {
  return `
    <div class="detail full">
      <b>${label}</b>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function getAdaptations(piece) {
  if (piece.adaptation) return piece.adaptation;
  if (piece.network.includes("TikTok") || piece.network.includes("YouTube")) return "Adaptación vertical para TikTok y YouTube Shorts según red principal.";
  if (piece.network.includes("LinkedIn") && piece.network.includes("Instagram")) return "Adaptación a feed social y versión profesional para LinkedIn.";
  if (piece.network === "LinkedIn") return "Publicación nativa para LinkedIn; posible placa simple o post de texto.";
  return "Adaptación principal a Instagram y Facebook.";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindEvents() {
  filtersEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderFilters();
    renderCalendar();
  });

  searchInput.addEventListener("input", (event) => {
    activeQuery = event.target.value.trim();
    renderCalendar();
  });

  calendarGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-piece-id]");
    if (!button) return;
    const piece = contentPieces.find((item) => item.id === Number(button.dataset.pieceId));
    if (piece) openModal(piece);
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  window.addEventListener("scroll", updateScrollUi, { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.addEventListener("click", () => nav.classList.remove("open"));
}

function updateScrollUi() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  readProgress.style.width = `${progress}%`;
  backTop.classList.toggle("show", window.scrollY > 700);
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

init();
