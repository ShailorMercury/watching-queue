const ITEMS = [
  { title: "Iron Man", type: "movie", where: "Disney+", why: "Arranque del MCU, Tony Stark" },
  { title: "Los Vengadores", type: "movie", where: "Disney+", why: "Primer team-up, base de todo" },
  { title: "Capitán América: El Soldado de Invierno", type: "movie", where: "Disney+", why: "Introduce a Bucky/Winter Soldier" },
  { title: "Avengers: Age of Ultron", type: "movie", where: "Disney+", why: "Base de la serie VisionQuest" },
  { title: "Capitán América: Civil War", type: "movie", where: "Disney+", why: "Fractura del equipo, clave para relaciones actuales" },
  { title: "Avengers: Endgame", type: "movie", where: "Disney+", why: "Cierre de la Saga del Infinito" },
  { title: "Black Widow", type: "movie", where: "Disney+", why: "Presenta a Yelena y Red Guardian — para antes de la escena post-créditos" },
  { title: "WandaVision", type: "show", where: "Disney+", why: "Arco de Wanda, base para VisionQuest", episodes: 9 },
  { title: "Loki, temporada 1", type: "show", where: "Disney+", why: "Multiverso, TVA, variantes", episodes: 6 },
  { title: "Doctor Strange en el Multiverso de la Locura", type: "movie", where: "Disney+", why: "Primera exploración real del multiverso" },
  { title: "Loki, temporada 2", type: "show", where: "Disney+", why: "Cierre del arco de Kang/TVA, sienta reglas para Doomsday", episodes: 6 },
  { title: "X2 (opcional)", type: "movie", where: "Disney+", why: "Vuelven Xavier y Magneto en Doomsday" },
  { title: "X-Men: Días del Futuro Pasado (opcional)", type: "movie", where: "Disney+", why: "Contexto extra del universo Fox mutante" },
  { title: "Deadpool & Wolverine", type: "movie", where: "Disney+", why: "Puente oficial entre X-Men (Fox) y MCU" },
  { title: "Thunderbolts*", type: "movie", where: "Disney+", why: "Se convierten en los “New Avengers”" },
  { title: "The Fantastic Four: First Steps", type: "movie", where: "Disney+", why: "Enlaza directo con Doomsday, no saltársela" },
  { title: "Daredevil: Born Again, temporada 2", type: "show", where: "Disney+", why: "Terminarla antes del siguiente punto", episodes: 8 },
  { title: "Spider-Man: Brand New Day", type: "movie", where: "Cines", why: "Escena post-créditos con peso para Doomsday" },
  { title: "VisionQuest", type: "show", where: "Disney+ (14 oct 2026)", why: "Última parada narrativa antes de Doomsday", episodes: 8 },
  { title: "Avengers: Doomsday", type: "movie", where: "Cines · 18 dic 2026", why: "🎯 El evento", event: true }
];

const STORAGE_KEY = "doomsday-checklist-state";
const EP_STORAGE_KEY = "doomsday-episode-state";
let state = {};
let episodeState = {};
let closedOpen = false;
const epOpen = new Set();

function typeLabel(t) { return t === "movie" ? "🎬 Película" : "📺 Serie"; }

function getEpArray(itemIdx) {
  const n = ITEMS[itemIdx].episodes;
  if (!episodeState[itemIdx]) episodeState[itemIdx] = new Array(n).fill(false);
  return episodeState[itemIdx];
}

function buildEpisodePanel(item, i) {
  if (!item.episodes) return "";
  const eps = getEpArray(i);
  const doneCount = eps.filter(Boolean).length;
  const open = epOpen.has(i);
  const chips = eps.map((done, epIdx) => `
    <button class="ep-chip${done ? ' done' : ''}" data-idx="${i}" data-ep="${epIdx}" aria-pressed="${done}" aria-label="Capítulo ${epIdx + 1} de ${item.title}, ${done ? 'visto' : 'pendiente'}">${epIdx + 1}</button>
  `).join("");

  return `
    <button class="ep-toggle" data-idx="${i}" aria-expanded="${open}" aria-controls="epPanel-${i}">
      <span>Capítulos</span>
      <span class="ep-toggle-count">${doneCount}/${item.episodes}</span>
      <span class="ep-toggle-arrow">▾</span>
    </button>
    <div class="ep-panel" id="epPanel-${i}" ${open ? "" : "hidden"}>${chips}</div>
  `;
}

function buildEntryHTML(item, i, done) {
  return `
    <div class="idx">Exp.<span class="num">${String(i+1).padStart(2,"0")}</span></div>
    <div>
      <p class="entry-title">${item.title}</p>
      <p class="entry-why">${item.why}</p>
      <div class="badge-row">
        <span class="badge ${item.type === 'movie' ? 'type-movie' : 'type-show'}">${typeLabel(item.type)}</span>
        <span class="badge where">${item.where}</span>
      </div>
      ${buildEpisodePanel(item, i)}
    </div>
    <div class="check-cell">
      <button class="stamp-btn${done ? ' checked' : ''}" aria-pressed="${done}" aria-label="Marcar ${item.title} como ${done ? 'pendiente' : 'vista'}" data-idx="${i}">
        <span class="stamp-mark">VISTO</span>
      </button>
    </div>
  `;
}

function render() {
  const pendingList = document.getElementById("caseList");
  const closedList = document.getElementById("closedList");
  const closedCount = document.getElementById("closedCount");
  const closedToggle = document.getElementById("closedToggle");

  pendingList.innerHTML = "";
  closedList.innerHTML = "";

  let doneTotal = 0;

  ITEMS.forEach((item, i) => {
    const done = !!state[i];
    if (done) doneTotal++;

    const li = document.createElement("li");
    li.id = `entry-${i}`;
    li.className = "entry" + (done ? " done" : "") + (item.event ? " event" : "");
    li.innerHTML = buildEntryHTML(item, i, done);
    (done ? closedList : pendingList).appendChild(li);
  });

  document.querySelectorAll(".stamp-btn").forEach(btn => {
    btn.addEventListener("click", () => toggle(parseInt(btn.dataset.idx, 10)));
  });

  document.querySelectorAll(".ep-toggle").forEach(btn => {
    btn.addEventListener("click", () => toggleEpPanel(parseInt(btn.dataset.idx, 10)));
  });

  document.querySelectorAll(".ep-chip").forEach(btn => {
    btn.addEventListener("click", () => toggleEpisode(parseInt(btn.dataset.idx, 10), parseInt(btn.dataset.ep, 10)));
  });

  closedCount.textContent = doneTotal;
  closedList.hidden = !closedOpen;
  closedToggle.setAttribute("aria-expanded", String(closedOpen));

  updateProgress();
}

document.getElementById("closedToggle").addEventListener("click", () => {
  closedOpen = !closedOpen;
  const closedList = document.getElementById("closedList");
  closedList.hidden = !closedOpen;
  document.getElementById("closedToggle").setAttribute("aria-expanded", String(closedOpen));
});

function toggleEpPanel(itemIdx) {
  if (epOpen.has(itemIdx)) epOpen.delete(itemIdx);
  else epOpen.add(itemIdx);
  render();
}

function toggleEpisode(itemIdx, epIdx) {
  const eps = getEpArray(itemIdx);
  eps[epIdx] = !eps[epIdx];
  epOpen.add(itemIdx);

  const allDone = eps.every(Boolean);
  if (allDone && !state[itemIdx]) {
    state[itemIdx] = true;
  } else if (!allDone && state[itemIdx]) {
    state[itemIdx] = false;
  }

  render();
  persist();
}

function updateProgress() {
  const total = ITEMS.length;
  const done = Object.values(state).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  document.getElementById("countText").textContent = `${done} / ${total} cerrados`;
  document.getElementById("railFill").style.width = pct + "%";

  const circumference = 251.2;
  const offset = circumference - (pct / 100) * circumference;
  document.getElementById("ringFg").style.strokeDashoffset = offset;
  document.getElementById("ringPct").textContent = pct + "%";

  const stamp = document.getElementById("statusStamp");
  if (done === 0) { stamp.textContent = "Sin abrir"; }
  else if (done === total) { stamp.textContent = "Expediente cerrado"; }
  else { stamp.textContent = "En curso"; }

  updateDashboard(done, total);
}

function updateDashboard(done, total) {
  document.getElementById("statTotal").textContent = total;
  document.getElementById("statVistos").textContent = done;
  document.getElementById("statPendientes").textContent = total - done;

  const movies = ITEMS.filter(it => it.type === "movie");
  const shows = ITEMS.filter(it => it.type === "show");
  const moviesDone = ITEMS.reduce((acc, it, i) => acc + (it.type === "movie" && state[i] ? 1 : 0), 0);
  const showsDone = ITEMS.reduce((acc, it, i) => acc + (it.type === "show" && state[i] ? 1 : 0), 0);

  document.getElementById("movieCount").textContent = `${moviesDone}/${movies.length}`;
  document.getElementById("movieRail").style.width = `${(moviesDone / movies.length) * 100}%`;
  document.getElementById("showCount").textContent = `${showsDone}/${shows.length}`;
  document.getElementById("showRail").style.width = `${(showsDone / shows.length) * 100}%`;

  const nextIdx = ITEMS.findIndex((_, i) => !state[i]);
  const nextTitle = document.getElementById("nextTitle");
  const nextBtn = document.getElementById("nextCardBtn");
  if (nextIdx === -1) {
    nextTitle.textContent = "¡Expediente cerrado! 🎉 Lista para Doomsday.";
    nextBtn.style.display = "none";
  } else {
    nextTitle.textContent = `${typeLabel(ITEMS[nextIdx].type)} · ${ITEMS[nextIdx].title}`;
    nextBtn.style.display = "";
    nextBtn.onclick = () => {
      switchTab("expedientes");
      requestAnimationFrame(() => {
        const el = document.getElementById(`entry-${nextIdx}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };
  }
}

function switchTab(name) {
  const resumenPanel = document.getElementById("tabResumen");
  const expedientesPanel = document.getElementById("tabExpedientes");
  const resumenBtn = document.getElementById("tabBtnResumen");
  const expedientesBtn = document.getElementById("tabBtnExpedientes");

  const showResumen = name === "resumen";
  resumenPanel.hidden = !showResumen;
  expedientesPanel.hidden = showResumen;
  resumenBtn.classList.toggle("active", showResumen);
  expedientesBtn.classList.toggle("active", !showResumen);
  resumenBtn.setAttribute("aria-selected", String(showResumen));
  expedientesBtn.setAttribute("aria-selected", String(!showResumen));
}

document.getElementById("tabBtnResumen").addEventListener("click", () => switchTab("resumen"));
document.getElementById("tabBtnExpedientes").addEventListener("click", () => switchTab("expedientes"));

function toggle(idx) {
  state[idx] = !state[idx];
  if (ITEMS[idx].episodes) {
    episodeState[idx] = new Array(ITEMS[idx].episodes).fill(state[idx]);
  }
  render();
  persist();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(EP_STORAGE_KEY, JSON.stringify(episodeState));
    flashSaved();
  } catch (e) {
    console.error("No se pudo guardar el progreso:", e);
  }
}

function flashSaved() {
  const flag = document.getElementById("saveFlag");
  flag.classList.add("show");
  clearTimeout(flashSaved._t);
  flashSaved._t = setTimeout(() => flag.classList.remove("show"), 1200);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
    const rawEp = localStorage.getItem(EP_STORAGE_KEY);
    if (rawEp) episodeState = JSON.parse(rawEp);
  } catch (e) {
    state = {};
    episodeState = {};
  }
  render();
}

function updateCountdown() {
  const target = new Date("2026-12-18T00:00:00");
  const now = new Date();
  const diff = target - now;
  const el = document.getElementById("countdownText");
  if (diff <= 0) {
    el.innerHTML = "<b>Ya en cines</b>";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  el.innerHTML = `Quedan <b>${days}</b> días`;
}

loadState();
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);
