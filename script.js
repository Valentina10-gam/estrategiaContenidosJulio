const filters = [
  "Todas",
  "Instagram / Facebook",
  "LinkedIn",
  "Reel",
  "TikTok",
  "YouTube Shorts",
  "Estático",
  "Expediente técnico",
  "Carta ejecutiva",
  "Testimonios",
  "Hídriko",
  "TKC Security",
  "Requiere validación",
  "Requiere material",
  "Alta prioridad",
  "Publicadas"
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
  "Sectores y operación": "#250045",
  "Contenido de oportunidad": "#53C6E8",
  "Prevención articulada": "#3F3A66",
  "Contenido humano / TKC Corp": "#53C6E8",
  "Centros comerciales": "#250045",
  "Diferenciales / LinkedIn ejecutivo": "#3F3A66",
  "Hoteles": "#250045",
  "TKC Security (SST)": "#6E5BAA",
  "Historia y trayectoria": "#53C6E8",
  "Diferenciales frente a solo fumigar": "#3F3A66",
  "Colegios y clínicas": "#250045",
  "Testimonios / prueba social": "#53C6E8",
  "Propiedad horizontal": "#250045",
  "Diferenciales / restaurantes y alimentos": "#3F3A66",
  "Cierre operativo del mes": "#53C6E8",
  "Bodegas / industria": "#250045",
  "Certificaciones y respaldo técnico": "#3F3A66"
};

const statusOptions = [
  { value: "Publicado", icon: "✅" },
  { value: "Programar", icon: "🟡" },
  { value: "En producción", icon: "🟠" },
  { value: "En revisión", icon: "🔵" },
  { value: "Reutilizable", icon: "⚪" }
];

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
  const status = getPieceStatus(piece);
  const primarySchedule = getPublishSchedule(piece)[0];
  const formatType = getFormatType(piece);
  return `
    <article class="piece-card" role="button" tabindex="0" data-piece-id="${piece.id}" style="--accent:${accents[piece.pillar] || "#53C6E8"}">
      <span class="format-badge format-${formatType.key}">
        <i data-lucide="${formatType.icon}"></i>${formatType.label}
      </span>
      <span class="piece-date">${piece.date}</span>
      <h3>${piece.title}</h3>
      <span class="status">${status.icon} ${status.value}</span>
      ${primarySchedule ? `<span class="schedule-preview"><i data-lucide="clock-3"></i>${primarySchedule.network}: ${primarySchedule.time}</span>` : ""}
      <div class="piece-meta">
        <span class="chip">${piece.format}</span>
        <span class="chip">${piece.network}${piece.adaptation ? ` + ${piece.adaptation}` : ""}</span>
        <span class="chip">${piece.pillar}</span>
        <span class="chip">${piece.sector}</span>
      </div>
      ${renderStatusSelect(piece)}
      <span class="open-cue"><i data-lucide="panel-right-open"></i>Clic para ver ficha</span>
    </article>
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
  const status = getPieceStatus(piece);
  const formatType = getFormatType(piece);
  modalContent.innerHTML = `
    <p class="eyebrow">Ficha creativa de campaña · Pieza ${piece.id}</p>
    <h2>${piece.title}</h2>
    <span class="format-badge format-${formatType.key} modal-format">
      <i data-lucide="${formatType.icon}"></i>${formatType.label}
    </span>
    <div class="modal-hero">
      <div>
        <strong>Material visual pendiente de confirmación</strong>
        <p>Preview creativo para ${piece.format}</p>
      </div>
    </div>
    <div class="detail-grid">
      ${detail("Fecha", piece.date)}
      ${detail("Tipo de pieza", formatType.description)}
      ${detail("Formato", piece.format)}
      ${detail("Red principal", piece.network)}
      ${detail("Adaptaciones", getAdaptations(piece))}
      <div class="detail">${renderStatusSelect(piece, "modal")}</div>
      ${detail("Objetivo", piece.objective, true)}
      ${detail("Sector", piece.sector)}
      ${detail("Pilar", piece.pillar)}
      ${piece.content ? detailList("Idea principal", piece.content) : detail("Idea principal", piece.hook, true)}
      ${detail("Hook o portada", piece.hook, true)}
      ${detail("CTA", piece.cta, true)}
      ${detailList("Horarios sugeridos de publicación", getPublishSchedule(piece).map((item) => `${item.network}: ${item.time} · ${item.reason}`))}
      ${detailList("Historias de apoyo", piece.stories)}
      ${detail("Material requerido", piece.material, true)}
      ${detail("Estado base", piece.status)}
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
    if (event.target.closest("[data-status-select]")) return;
    const card = event.target.closest("[data-piece-id]");
    if (!card) return;
    const piece = contentPieces.find((item) => item.id === Number(card.dataset.pieceId));
    if (piece) openModal(piece);
  });

  calendarGrid.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key) || event.target.closest("[data-status-select]")) return;
    const card = event.target.closest("[data-piece-id]");
    if (!card) return;
    event.preventDefault();
    const piece = contentPieces.find((item) => item.id === Number(card.dataset.pieceId));
    if (piece) openModal(piece);
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-status-select]");
    if (!select) return;
    const pieceId = select.dataset.statusSelect;
    localStorage.setItem(`tkc-piece-status-${pieceId}`, select.value);
    renderCalendar();
    const openPiece = contentPieces.find((item) => item.id === Number(pieceId));
    if (modal.classList.contains("open") && openPiece) openModal(openPiece);
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

function renderStatusSelect(piece, variant = "card") {
  const current = getPieceStatus(piece).value;
  return `
    <label class="status-control ${variant === "modal" ? "status-control-modal" : ""}" onclick="event.stopPropagation()">
      <span>${variant === "modal" ? "Estado editable" : "Estado"}</span>
      <select data-status-select="${piece.id}" aria-label="Estado de ${piece.title}">
        ${statusOptions.map((option) => `<option value="${option.value}" ${option.value === current ? "selected" : ""}>${option.icon} ${option.value}</option>`).join("")}
      </select>
    </label>
  `;
}

function getPieceStatus(piece) {
  const stored = localStorage.getItem(`tkc-piece-status-${piece.id}`);
  const base = stored || statusFromText(piece.status);
  return statusOptions.find((option) => option.value === base) || statusOptions[1];
}

function statusFromText(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes("publicado")) return "Publicado";
  if (normalized.includes("publicada")) return "Publicado";
  if (normalized.includes("listo")) return "Programar";
  if (normalized.includes("revisión")) return "En revisión";
  if (normalized.includes("validación")) return "En revisión";
  if (normalized.includes("edición")) return "En producción";
  if (normalized.includes("material")) return "En producción";
  if (normalized.includes("pendiente")) return "En producción";
  return "Programar";
}

function getPublishSchedule(piece) {
  const networks = parseNetworks(piece);
  return networks.map((network) => ({
    network,
    ...slotForNetwork(network, piece)
  }));
}

function parseNetworks(piece) {
  const source = `${piece.network}${piece.adaptation ? `, ${piece.adaptation}` : ""}`;
  const networks = [];
  if (/LinkedIn/i.test(source)) networks.push("LinkedIn");
  if (/Instagram/i.test(source)) networks.push("Instagram");
  if (/Facebook/i.test(source)) networks.push("Facebook");
  if (/TikTok/i.test(source)) networks.push("TikTok");
  if (/YouTube Shorts|YouTube/i.test(source)) networks.push("YouTube Shorts");
  return [...new Set(networks)];
}

function slotForNetwork(network, piece) {
  const isReel = /reel|trend/i.test(piece.format);
  const isLinkedInOnly = network === "LinkedIn";
  const isStoryFriendly = piece.stories.some((story) => story !== "No aplica.");

  if (isLinkedInOnly) {
    return {
      time: "8:30 a.m.",
      reason: "ventana B2B de inicio de jornada para decisores, operaciones y administración"
    };
  }
  if (network === "Instagram") {
    return {
      time: isReel ? "6:30 p.m." : "11:30 a.m.",
      reason: isReel ? "mejor ventana de consumo para video corto y retención" : "buena ventana para guardados, lectura y carruseles"
    };
  }
  if (network === "Facebook") {
    return {
      time: isReel ? "7:00 p.m." : "12:15 p.m.",
      reason: isReel ? "consumo posterior a jornada y mayor permanencia en video" : "franja de pausa laboral para revisar contenido útil"
    };
  }
  if (network === "TikTok") {
    return {
      time: "7:30 p.m.",
      reason: "franja recomendada para video corto, finalización y repetición"
    };
  }
  if (network === "YouTube Shorts") {
    return {
      time: "7:00 p.m.",
      reason: "ventana de consumo extendido para Shorts y retención"
    };
  }
  return {
    time: isStoryFriendly ? "5:30 p.m." : "10:00 a.m.",
    reason: "horario base para visibilidad orgánica"
  };
}

function getFormatType(piece) {
  const text = `${piece.format} ${piece.network} ${piece.title}`.toLowerCase();
  if (text.includes("reel") || text.includes("tiktok") || text.includes("shorts") || text.includes("pov") || text.includes("entrevista") || text.includes("montaje") || text.includes("mini doc") || text.includes("split screen")) {
    return {
      key: "reel",
      label: "Reel / video corto",
      icon: "video",
      description: "Pieza audiovisual para Reels, TikTok, YouTube Shorts o video social."
    };
  }
  if (text.includes("expediente")) {
    return {
      key: "expediente",
      label: "Expediente técnico",
      icon: "folder-search",
      description: "Formato documental/caso técnico con enfoque de hallazgo, registro o expediente."
    };
  }
  if (text.includes("carta")) {
    return {
      key: "carta",
      label: "LinkedIn / carta",
      icon: "file-text",
      description: "Pieza editorial ejecutiva para LinkedIn, tipo carta, nota o argumentación."
    };
  }
  if (text.includes("bitácora") || text.includes("bitacora")) {
    return {
      key: "bitacora",
      label: "Bitácora técnica",
      icon: "clipboard-list",
      description: "Formato de registro operativo con hallazgo, seguimiento o visita técnica."
    };
  }
  if (text.includes("glosario")) {
    return {
      key: "glosario",
      label: "Glosario técnico",
      icon: "book-marked",
      description: "Pieza educativa breve para explicar un concepto técnico."
    };
  }
  if (text.includes("reveal")) {
    return {
      key: "reveal",
      label: "Reveal de datos",
      icon: "badge-check",
      description: "Pieza de revelación o explicación de datos, sellos o credenciales."
    };
  }
  if (text.includes("post argumentativo") || text.includes("post + adaptación")) {
    return {
      key: "post",
      label: "Post editorial",
      icon: "message-square-text",
      description: "Post editorial o argumentativo con adaptación por canal cuando aplique."
    };
  }
  if (text.includes("carrusel")) {
    return {
      key: "carrusel",
      label: text.includes("catálogo") || text.includes("catalogo") ? "Carrusel catálogo" : "Carrusel",
      icon: "panels-top-left",
      description: "Secuencia gráfica para lectura por slides."
    };
  }
  if (text.includes("estático") || text.includes("trend")) {
    return {
      key: "estatico",
      label: text.includes("trend") ? "Trend" : "Estático",
      icon: text.includes("trend") ? "sparkles" : "image",
      description: text.includes("trend") ? "Contenido de oportunidad basado en tendencia." : "Pieza gráfica estática para feed."
    };
  }
  if (text.includes("caso")) {
    return {
      key: "caso",
      label: "Caso narrado",
      icon: "book-open-text",
      description: "Historia/caso anonimizado narrado como pieza editorial."
    };
  }
  return {
    key: "otro",
    label: "Otro formato",
    icon: "layout-template",
    description: "Formato editorial específico de la parrilla."
  };
}

init();
