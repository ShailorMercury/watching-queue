const ITEMS = [
  { title: "Iron Man", type: "movie", where: "Disney+", why: "Arranque del MCU, Tony Stark" },
  { title: "Los Vengadores", type: "movie", where: "Disney+", why: "Primer team-up, base de todo" },
  { title: "Capitán América: El Soldado de Invierno", type: "movie", where: "Disney+", why: "Introduce a Bucky/Winter Soldier" },
  { title: "Avengers: Age of Ultron", type: "movie", where: "Disney+", why: "Base de la serie VisionQuest" },
  { title: "Capitán América: Civil War", type: "movie", where: "Disney+", why: "Fractura del equipo, clave para relaciones actuales" },
  { title: "Avengers: Endgame", type: "movie", where: "Disney+", why: "Cierre de la Saga del Infinito" },
  { title: "Black Widow", type: "movie", where: "Disney+", why: "Presenta a Yelena y Red Guardian — para antes de la escena post-créditos" },
  { title: "WandaVision", type: "show", where: "Disney+", why: "Arco de Wanda, base para VisionQuest" },
  { title: "Loki, temporada 1", type: "show", where: "Disney+", why: "Multiverso, TVA, variantes" },
  { title: "Doctor Strange en el Multiverso de la Locura", type: "movie", where: "Disney+", why: "Primera exploración real del multiverso" },
  { title: "Loki, temporada 2", type: "show", where: "Disney+", why: "Cierre del arco de Kang/TVA, sienta reglas para Doomsday" },
  { title: "X2 (opcional)", type: "movie", where: "Disney+", why: "Vuelven Xavier y Magneto en Doomsday" },
  { title: "X-Men: Días del Futuro Pasado (opcional)", type: "movie", where: "Disney+", why: "Contexto extra del universo Fox mutante" },
  { title: "Deadpool & Wolverine", type: "movie", where: "Disney+", why: "Puente oficial entre X-Men (Fox) y MCU" },
  { title: "Thunderbolts*", type: "movie", where: "Disney+", why: "Se convierten en los “New Avengers”" },
  { title: "The Fantastic Four: First Steps", type: "movie", where: "Disney+", why: "Enlaza directo con Doomsday, no saltársela" },
  { title: "Daredevil: Born Again, temporada 2", type: "show", where: "Disney+", why: "Terminarla antes del siguiente punto" },
  { title: "Spider-Man: Brand New Day", type: "movie", where: "Cines", why: "Escena post-créditos con peso para Doomsday" },
  { title: "VisionQuest", type: "show", where: "Disney+ (16 oct 2026)", why: "Última parada narrativa antes de Doomsday" },
  { title: "Avengers: Doomsday", type: "movie", where: "Cines · 18 dic 2026", why: "🎯 El evento", event: true }
];

const STORAGE_KEY = "doomsday-checklist-state";
let state = {};
let closedOpen = false;

function typeLabel(t) { return t === "movie" ? "🎬 Película" : "📺 Serie"; }

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
    li.className = "entry" + (done ? " done" : "") + (item.event ? " event" : "");
    li.innerHTML = buildEntryHTML(item, i, done);
    (done ? closedList : pendingList).appendChild(li);
  });

  document.querySelectorAll(".stamp-btn").forEach(btn => {
    btn.addEventListener("click", () => toggle(parseInt(btn.dataset.idx, 10)));
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
}

function toggle(idx) {
  state[idx] = !state[idx];
  render();
  persist();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    if (raw) {
      state = JSON.parse(raw);
    }
  } catch (e) {
    state = {};
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
