const ITEMS = [
  { title: "Capitán América: El Primer Vengador", type: "movie", universe: "MCU", platform: "Disney+", why: "Origen de Steve Rogers, Bucky y el Teseracto; conecta directamente con Endgame y el regreso de personajes clásicos en Doomsday." },
  { title: "Marvel One-Shot: Agent Carter", type: "movie", universe: "MCU", platform: "Disney+", why: "Peggy Carter tras la guerra, lidiando con amenazas ligadas a Howard Stark; puente hacia la serie Agent Carter." },
  { title: "Agent Carter, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, why: "Peggy investiga una conspiración tecnológica; profundiza en ella, Howard Stark y el origen de piezas del MCU televisivo." },
  { title: "Agent Carter, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 10, why: "Peggy se traslada a Los Ángeles tras una amenaza científica; cierra su arco televisivo y amplía la historia temprana del universo." },
  { title: "X-Men: Primera Generación", type: "movie", universe: "Fox", platform: "Disney+", why: "Xavier y Magneto se conocen y forman el primer grupo mutante; presenta a las versiones jóvenes que Marvel recupera." },
  { title: "X-Men Orígenes: Lobezno", type: "movie", universe: "Fox", platform: "Disney+", why: "Explora el pasado de Logan y el experimento Weapon X; da contexto al Lobezno que vuelve en Deadpool & Wolverine." },
  { title: "X-Men", type: "movie", universe: "Fox", platform: "Disney+", why: "Logan se une a los X-Men frente a una sociedad que teme a los mutantes; versión clásica de Xavier, Magneto y compañía." },
  { title: "X-Men 2", type: "movie", universe: "Fox", platform: "Disney+", why: "Los X-Men enfrentan una amenaza gubernamental; profundiza en la familia mutante del legado multiversal de Fox." },
  { title: "X-Men: La Decisión Final", type: "movie", universe: "Fox", platform: "Disney+", why: "Una cura para la mutación divide a los X-Men; cierra la primera etapa de la saga clásica." },
  { title: "The Wolverine", type: "movie", universe: "Fox", platform: "Disney+", why: "Logan viaja a Japón enfrentando su pasado e inmortalidad; prepara el contexto emocional de su etapa posterior." },
  { title: "X-Men: Días del Futuro Pasado", type: "movie", universe: "Fox", platform: "Disney+", why: "Los X-Men viajan mentalmente al pasado para impedir un futuro dominado por Centinelas; pieza clave del multiverso mutante." },
  { title: "X-Men: Apocalipsis", type: "movie", universe: "Fox", platform: "Disney+", why: "Los jóvenes X-Men enfrentan a Apocalipsis; amplía la continuidad mutante tras el cambio de línea temporal." },
  { title: "Dark Phoenix", type: "movie", universe: "Fox", platform: "Disney+", why: "Jean Grey pierde el control de un poder cósmico; cierra la etapa de los X-Men jóvenes de Fox." },
  { title: "Blade", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", why: "Blade lucha contra una conspiración sobrenatural; parte del legado cinematográfico que Marvel puede recuperar." },
  { title: "Blade II", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", why: "Blade colabora con vampiros contra una nueva amenaza; continúa su legado." },
  { title: "Blade: Trinity", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", why: "Blade forma alianza con cazadores más jóvenes; cierra la trilogía clásica." },
  { title: "Spider-Man", type: "movie", universe: "Sony", platform: "HBO Max", why: "Peter Parker obtiene poderes y aprende sobre la responsabilidad; establece la variante de Tobey Maguire." },
  { title: "Spider-Man 2", type: "movie", universe: "Sony", platform: "HBO Max", why: "Peter equilibra su vida y su identidad frente al Doctor Octopus; una de las historias más importantes de la variante Raimi." },
  { title: "Spider-Man 3", type: "movie", universe: "Sony", platform: "HBO Max", why: "Peter se enfrenta a Venom y Sandman; completa la trilogía Raimi que reaparece en No Way Home." },
  { title: "The Amazing Spider-Man", type: "movie", universe: "Sony", platform: "HBO Max", why: "Peter descubre la verdad sobre sus padres en una nueva continuidad; introduce la variante de Andrew Garfield." },
  { title: "The Amazing Spider-Man 2", type: "movie", universe: "Sony", platform: "HBO Max", why: "Peter protege a Gwen frente a Electro; completa el arco de esta versión antes de su regreso multiversal." },
  { title: "Ghost Rider", type: "movie", universe: "Marvel Legacy", platform: "Netflix", why: "Johnny Blaze se convierte en Ghost Rider tras un pacto sobrenatural; parte del catálogo de continuidades previas al MCU." },
  { title: "Ghost Rider: Spirit of Vengeance", type: "movie", universe: "Marvel Legacy", platform: "Netflix", why: "Johnny protege a un niño perseguido por fuerzas sobrenaturales; continúa esa continuidad." },
  { title: "Daredevil (2003)", type: "movie", universe: "Marvel Legacy", platform: "Disney+", why: "Matt Murdock lucha contra el crimen ocultando su identidad; primera versión cinematográfica antes de su reinvención en el MCU." },
  { title: "Elektra", type: "movie", universe: "Marvel Legacy", platform: "Disney+", why: "Elektra intenta redimirse protegiendo a una joven; amplía la continuidad de Daredevil (2003)." },
  { title: "The Punisher (2004)", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", why: "Frank Castle se convierte en vigilante tras perder a su familia; otra versión cinematográfica del personaje." },
  { title: "Punisher: War Zone", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", why: "Frank Castle se enfrenta a Jigsaw; otra continuidad independiente de Punisher." },
  { title: "Fantastic Four (2005)", type: "movie", universe: "Fox", platform: "Disney+", why: "Reed Richards y su equipo adquieren poderes cósmicos; primera gran versión moderna de los 4 Fantásticos." },
  { title: "Fantastic Four: Rise of the Silver Surfer", type: "movie", universe: "Fox", platform: "Disney+", why: "Los 4 Fantásticos enfrentan al Silver Surfer; amplía esa mitología cósmica." },
  { title: "Hulk (2003)", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", why: "Bruce Banner se convierte en Hulk tras un experimento; continuidad independiente del Hulk del MCU." },
  { title: "Spider-Man: Into the Spider-Verse", type: "movie", universe: "Sony", platform: "Netflix", why: "Miles Morales descubre que existen múltiples Spider-Man; introducción perfecta al concepto de variantes." },
  { title: "Spider-Man: Across the Spider-Verse", type: "movie", universe: "Sony", platform: "Netflix", why: "Miles descubre una red de Spider-People y una amenaza multiversal; profundiza en variantes y canon." },
  { title: "X-Men '97, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 10, why: "Los X-Men continúan tras la serie clásica; expande el legado animado y la idea de continuidades mutantes." },
  { title: "X-Men '97, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "Los X-Men afrontan amenazas mayores; continúa esa realidad animada y su relevancia multiversal." },
  { title: "Fantastic Four (2015)", type: "movie", universe: "Fox", platform: "Disney+", why: "Un experimento dimensional transforma a cuatro científicos; otra continuidad alternativa de los 4 Fantásticos." },
  { title: "Iron Man", type: "movie", universe: "MCU", platform: "Disney+", why: "Tony Stark construye su primera armadura; nacimiento del MCU moderno." },
  { title: "The Incredible Hulk", type: "movie", universe: "MCU", platform: "Disney+", why: "Bruce Banner intenta controlar a Hulk perseguido por el ejército; completa el grupo inicial de héroes del MCU." },
  { title: "Iron Man 2", type: "movie", universe: "MCU", platform: "Disney+", why: "Tony protege su tecnología frente a nuevos enemigos; presenta a Black Widow y prepara a los Vengadores." },
  { title: "Marvel One-Shot: The Consultant", type: "movie", universe: "MCU", platform: "Disney+", why: "S.H.I.E.L.D. resuelve un problema con Emil Blonsky; amplía la continuidad de Hulk." },
  { title: "Marvel One-Shot: A Funny Thing Happened...", type: "movie", universe: "MCU", platform: "Disney+", why: "Coulson vive una situación inesperada camino a Nuevo México; conecta Iron Man 2 con Thor." },
  { title: "Thor", type: "movie", universe: "MCU", platform: "Disney+", why: "Thor es desterrado a la Tierra y aprende humildad; presenta a Loki y la mitología asgardiana." },
  { title: "Los Vengadores", type: "movie", universe: "MCU", platform: "Disney+", why: "Los héroes se unen para detener a Loki; establece el equipo original y el peso de las Gemas del Infinito." },
  { title: "Iron Man 3", type: "movie", universe: "MCU", platform: "Disney+", why: "Tony afronta las secuelas psicológicas de Nueva York; profundiza en su evolución como héroe." },
  { title: "Thor: El Mundo Oscuro", type: "movie", universe: "MCU", platform: "Disney+", why: "Thor enfrenta a los Elfos Oscuros por el Éter; introduce una Gema del Infinito." },
  { title: "Capitán América: El Soldado de Invierno", type: "movie", universe: "MCU", platform: "Disney+", why: "Steve descubre una conspiración en S.H.I.E.L.D.; transforma el MCU y profundiza en Steve y Bucky." },
  { title: "Guardianes de la Galaxia", type: "movie", universe: "MCU", platform: "Disney+", why: "Un grupo de inadaptados protege una Gema del Infinito; amplía el MCU al espacio." },
  { title: "Guardianes de la Galaxia Vol. 2", type: "movie", universe: "MCU", platform: "Disney+", why: "Los Guardianes descubren el origen de Peter Quill; desarrolla al grupo antes de Infinity War." },
  { title: "Vengadores: La Era de Ultrón", type: "movie", universe: "MCU", platform: "Disney+", why: "Tony y Bruce crean una IA que se rebela; presenta a Wanda, Visión y más piezas esenciales." },
  { title: "Ant-Man", type: "movie", universe: "MCU", platform: "Disney+", why: "Scott Lang se convierte en Ant-Man; el Reino Cuántico será crucial más adelante." },
  { title: "Capitán América: Civil War", type: "movie", universe: "MCU", platform: "Disney+", why: "Los Vengadores se dividen por un conflicto moral; sus consecuencias llegan hasta Endgame." },
  { title: "Black Widow", type: "movie", universe: "MCU", platform: "Disney+", why: "Natasha afronta su pasado con su antigua familia de espías; conecta con personajes que vuelven en la nueva era." },
  { title: "Black Panther", type: "movie", universe: "MCU", platform: "Disney+", why: "T'Challa se convierte en rey de Wakanda; introduce un lugar y personajes clave del MCU." },
  { title: "Spider-Man: Homecoming", type: "movie", universe: "MCU", platform: "Disney+", why: "Peter Parker demuestra que puede ser un héroe; establece al Spider-Man de Tom Holland antes del multiverso." },
  { title: "Doctor Strange", type: "movie", universe: "MCU", platform: "Disney+", why: "Stephen Strange aprende artes místicas y a manipular el tiempo; será figura clave del multiverso." },
  { title: "Deadpool", type: "movie", universe: "Fox", platform: "Disney+", why: "Wade Wilson obtiene poderes y rompe la cuarta pared; establece la versión que acaba entrando al MCU." },
  { title: "Deadpool 2", type: "movie", universe: "Fox", platform: "Disney+", why: "Deadpool protege a un joven mutante y se cruza con viajes temporales; prepara el salto al multiverso." },
  { title: "Thor: Ragnarok", type: "movie", universe: "MCU", platform: "Disney+", why: "Thor detiene el Ragnarok mientras Asgard se destruye; conecta directamente con Infinity War." },
  { title: "Ant-Man y la Avispa", type: "movie", universe: "MCU", platform: "Disney+", why: "Scott explora el Reino Cuántico; pieza fundamental de Endgame." },
  { title: "Vengadores: Infinity War", type: "movie", universe: "MCU", platform: "Disney+", why: "Thanos reúne las Gemas del Infinito; el gran punto de ruptura que prepara Endgame." },
  { title: "Capitana Marvel", type: "movie", universe: "MCU", platform: "Disney+", why: "Carol Danvers descubre su pasado en una guerra cósmica; conecta con Nick Fury y la tecnología cósmica." },
  { title: "Vengadores: Endgame", type: "movie", universe: "MCU", platform: "Disney+", why: "Los héroes revierten el desastre de Thanos; cierra la Saga del Infinito." },
  { title: "WandaVision, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "Wanda crea una realidad propia procesando su pérdida; abre la puerta directa al multiverso." },
  { title: "The Falcon and the Winter Soldier", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Sam Wilson decide qué significa portar el escudo; establece al nuevo Capitán América." },
  { title: "Loki, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Una variante de Loki descubre la TVA; pieza clave para entender el multiverso y las variantes." },
  { title: "What If...?, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "El Watcher observa realidades alternativas del MCU; demuestra visualmente la existencia de variantes infinitas." },
  { title: "Spider-Man: Far From Home", type: "movie", universe: "MCU", platform: "Disney+", why: "Peter vuelve a la normalidad tras Endgame frente a Mysterio; prepara No Way Home." },
  { title: "Shang-Chi y la Leyenda de los Diez Anillos", type: "movie", universe: "MCU", platform: "Disney+", why: "Shang-Chi descubre el legado de su familia y los Diez Anillos; amplía el MCU moderno." },
  { title: "Hawkeye, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Clint cierra cuentas pendientes protegiendo a Kate Bishop; desarrolla el legado Hawkeye y el nuevo grupo de héroes." },
  { title: "Spider-Man: No Way Home", type: "movie", universe: "MCU", platform: "Disney+", why: "Peter rompe el hechizo de Strange y trae visitantes de otras realidades; reúne las tres generaciones de Spider-Man." },
  { title: "Doctor Strange en el Multiverso de la Locura", type: "movie", universe: "MCU", platform: "Disney+", why: "Strange y America Chavez viajan entre universos; expande las reglas del multiverso y las incursiones." },
  { title: "Ms. Marvel, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Kamala Khan descubre sus habilidades ligadas a su herencia; conecta después con Carol Danvers." },
  { title: "Thor: Love and Thunder", type: "movie", universe: "MCU", platform: "Disney+", why: "Thor enfrenta a Gorr mientras Jane adopta el manto de Mighty Thor; continúa su mitología." },
  { title: "Black Panther: Wakanda Forever", type: "movie", universe: "MCU", platform: "Disney+", why: "Wakanda afronta la pérdida de T'Challa frente a Namor; establece a Shuri como Black Panther." },
  { title: "Ant-Man y la Avispa: Quantumanía", type: "movie", universe: "MCU", platform: "Disney+", why: "La familia Lang entra al Reino Cuántico y enfrenta a Kang; introduce la amenaza multiversal de Kang." },
  { title: "Guardianes de la Galaxia Vol. 3", type: "movie", universe: "MCU", platform: "Disney+", why: "Los Guardianes salvan a Rocket cerrando una etapa; prepara el reparto cósmico del MCU." },
  { title: "The Marvels", type: "movie", universe: "MCU", platform: "Disney+", why: "Carol, Kamala y Monica quedan conectadas por un fenómeno; deja preparado el futuro de Kamala y los equipos jóvenes." },
  { title: "Loki, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Loki intenta salvar las líneas temporales en crisis; profundiza en la estructura del multiverso." },
  { title: "What If...?, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "El Watcher sigue explorando realidades alternativas; amplía el mapa de variantes." },
  { title: "What If...?, temporada 3", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, why: "Nuevas realidades muestran diferentes destinos para héroes conocidos; continúa la exploración del multiverso animado." },
  { title: "Logan", type: "movie", universe: "Fox", platform: "Disney+", why: "Un Logan envejecido protege a una joven mutante en un futuro oscuro; cierre emocional relevante para Deadpool & Wolverine." },
  { title: "Deadpool & Wolverine", type: "movie", universe: "MCU", platform: "Disney+", why: "Deadpool se ve arrastrado a un conflicto multiversal con una variante de Lobezno; puente directo entre Fox y el MCU." },
  { title: "Secret Invasion, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Nick Fury intenta detener una infiltración Skrull; amplía la situación política del MCU moderno." },
  { title: "Echo, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 5, why: "Maya Lopez afronta su pasado frente a Wilson Fisk; continúa el mundo de Daredevil y Kingpin." },
  { title: "Ironheart, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, why: "Riri Williams continúa el legado tecnológico de Stark frente a amenazas mágicas; introduce una nueva generación de héroes." },
  { title: "Agatha All Along, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "Agatha Harkness recorre el Camino de las Brujas; expande la magia introducida en WandaVision." },
  { title: "Daredevil: Born Again, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, why: "Matt Murdock vuelve a enfrentarse a Fisk; integra definitivamente a Daredevil y Kingpin en el MCU moderno." },
  { title: "Capitán América: Brave New World", type: "movie", universe: "MCU", platform: "Disney+", why: "Sam Wilson, como Capitán América, enfrenta una crisis internacional; consolida al nuevo Capitán y el tablero político." },
  { title: "Thunderbolts*", type: "movie", universe: "MCU", platform: "Disney+", why: "Un grupo de antihéroes se ve obligado a trabajar unido; establece a los New Avengers, pieza clave antes de Doomsday." },
  { title: "Daredevil: Born Again, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, why: "Matt continúa su lucha contra Fisk; sigue el lado urbano del MCU antes de la gran convergencia." },
  { title: "The Punisher: One Last Kill", type: "movie", universe: "MCU", platform: "Disney+", why: "Frank Castle regresa para una última misión; continúa su legado en el universo televisivo integrado." },
  { title: "Spider-Man: Brand New Day", type: "movie", universe: "MCU", platform: "Cines", why: "Peter afronta una nueva etapa tras los sucesos multiversales; escena post-créditos con peso directo para Doomsday." },
  { title: "VisionQuest", type: "show", universe: "MCU", platform: "Disney+ (14 oct 2026)", episodes: 8, why: "La historia de Visión continúa tras WandaVision; profundiza en él y en la identidad artificial justo antes del estreno." },
  { title: "The Fantastic Four: First Steps", type: "movie", universe: "MCU", platform: "Disney+", why: "Reed, Sue, Johnny y Ben forman su familia de héroes; introduce a Reed Richards, pieza clave ante Doctor Doom." },
  { title: "Avengers: Doomsday", type: "movie", universe: "MCU", platform: "Cines · 18 dic 2026", why: "🎯 La gran convergencia: Vengadores, mutantes, 4 Fantásticos y variantes multiversales frente a Doctor Doom.", event: true }
];

const STORAGE_KEY = "doomsday-checklist-state-v2";
const EP_STORAGE_KEY = "doomsday-episode-state-v2";
const DATE_STORAGE_KEY = "doomsday-watched-dates-v2";
const RATING_STORAGE_KEY = "doomsday-ratings-v2";
const ARCHIVE_STORAGE_KEY = "doomsday-archived-v2";

let state = {};
let episodeState = {};
let watchedDates = {};
let ratings = {};
let archived = {};
const epOpen = new Set();

function typeLabel(t) { return t === "movie" ? "🎬 Película" : "📺 Serie"; }

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
}

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

function buildWatchedMeta(item, i, done) {
  if (!done) return "";
  const dateIso = watchedDates[i];
  const dateText = dateIso ? `Visto el ${formatDate(dateIso)}` : "";
  const rating = ratings[i] || 0;
  const popcorns = [1, 2, 3, 4, 5].map(n => `
    <button class="popcorn-btn${n <= rating ? ' filled' : ''}" data-idx="${i}" data-value="${n}" aria-label="Puntuar con ${n} palomita${n > 1 ? 's' : ''}">🍿</button>
  `).join("");

  return `
    <div class="watched-meta">
      ${dateText ? `<span class="watched-date">${dateText}</span>` : ""}
      <div class="popcorn-rating">${popcorns}</div>
    </div>
  `;
}

function buildEntryHTML(item, i, done, isArchived) {
  const checkCell = isArchived
    ? `<button class="restore-link" data-idx="${i}" aria-label="Restaurar ${item.title}">↺ Restaurar</button>`
    : `
      <button class="stamp-btn${done ? ' checked' : ''}" aria-pressed="${done}" aria-label="Marcar ${item.title} como ${done ? 'pendiente' : 'vista'}" data-idx="${i}">
        <span class="stamp-mark">VISTO</span>
      </button>
      <button class="archive-link" data-idx="${i}" aria-label="Archivar ${item.title}"><span class="icon">🗄</span>Archivar</button>
    `;

  return `
    <div class="idx">Exp.<span class="num">${String(i+1).padStart(2,"0")}</span></div>
    <div>
      <p class="entry-title">${item.title}</p>
      <p class="why-label">Conexión con Doomsday</p>
      <p class="entry-why">${item.why}</p>
      <div class="badge-row">
        <span class="badge ${item.type === 'movie' ? 'type-movie' : 'type-show'}">${typeLabel(item.type)}</span>
        <span class="badge universe universe--${item.universe === 'MCU' ? 'mcu' : item.universe === 'Fox' ? 'fox' : item.universe === 'Sony' ? 'sony' : 'legacy'}">${item.universe}</span>
        <span class="badge where">${item.platform}</span>
      </div>
      ${isArchived ? "" : buildEpisodePanel(item, i)}
      ${isArchived ? "" : buildWatchedMeta(item, i, done)}
    </div>
    <div class="check-cell">
      ${checkCell}
    </div>
  `;
}

function render() {
  const pendingList = document.getElementById("caseList");
  const closedList = document.getElementById("closedList");
  const archivedList = document.getElementById("archivedList");
  const tabClosedCount = document.getElementById("tabClosedCount");
  const closedEmptyNote = document.getElementById("closedEmptyNote");
  const archivedEmptyNote = document.getElementById("archivedEmptyNote");

  pendingList.innerHTML = "";
  closedList.innerHTML = "";
  archivedList.innerHTML = "";

  let doneTotal = 0;
  let archivedTotal = 0;

  ITEMS.forEach((item, i) => {
    const isArchived = !!archived[i];
    const done = !!state[i];

    const li = document.createElement("li");
    li.id = `entry-${i}`;
    li.className = "entry" + (done ? " done" : "") + (item.event ? " event" : "");
    li.innerHTML = buildEntryHTML(item, i, done, isArchived);

    if (isArchived) {
      archivedTotal++;
      archivedList.appendChild(li);
    } else if (done) {
      doneTotal++;
      closedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
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

  document.querySelectorAll(".popcorn-btn").forEach(btn => {
    btn.addEventListener("click", () => setRating(parseInt(btn.dataset.idx, 10), parseInt(btn.dataset.value, 10)));
  });

  document.querySelectorAll(".archive-link").forEach(btn => {
    btn.addEventListener("click", () => setArchived(parseInt(btn.dataset.idx, 10), true));
  });

  document.querySelectorAll(".restore-link").forEach(btn => {
    btn.addEventListener("click", () => setArchived(parseInt(btn.dataset.idx, 10), false));
  });

  const openTotal = ITEMS.length - doneTotal - archivedTotal;
  tabClosedCount.textContent = doneTotal;
  document.getElementById("openCount").textContent = openTotal;
  document.getElementById("archivedCount").textContent = archivedTotal;
  closedEmptyNote.style.display = doneTotal === 0 ? "" : "none";
  closedList.style.display = doneTotal === 0 ? "none" : "";
  archivedEmptyNote.style.display = archivedTotal === 0 ? "" : "none";
  archivedList.style.display = archivedTotal === 0 ? "none" : "";

  updateProgress();
}

function setArchived(idx, value) {
  archived[idx] = value;
  render();
  highlightChange(idx);
  persist();
}

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
    markDone(itemIdx, true);
  } else if (!allDone && state[itemIdx]) {
    markDone(itemIdx, false);
  }

  render();
  highlightChange(itemIdx);
  persist();
}

function highlightChange(idx) {
  const el = document.getElementById(`entry-${idx}`);
  if (el) el.classList.add("just-changed");
}

function setRating(idx, value) {
  ratings[idx] = ratings[idx] === value ? 0 : value;
  render();
  persist();
}

function markDone(idx, isDone) {
  state[idx] = isDone;
  if (isDone) {
    if (!watchedDates[idx]) watchedDates[idx] = new Date().toISOString();
  } else {
    delete watchedDates[idx];
    delete ratings[idx];
  }
}

function updateProgress() {
  const activeIndices = ITEMS.map((_, i) => i).filter(i => !archived[i]);
  const total = activeIndices.length;
  const done = activeIndices.filter(i => state[i]).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

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

  const movies = ITEMS.filter((it, i) => it.type === "movie" && !archived[i]);
  const shows = ITEMS.filter((it, i) => it.type === "show" && !archived[i]);
  const moviesDone = ITEMS.reduce((acc, it, i) => acc + (it.type === "movie" && !archived[i] && state[i] ? 1 : 0), 0);
  const showsDone = ITEMS.reduce((acc, it, i) => acc + (it.type === "show" && !archived[i] && state[i] ? 1 : 0), 0);

  document.getElementById("movieCount").textContent = `${moviesDone}/${movies.length}`;
  document.getElementById("movieRail").style.width = movies.length ? `${(moviesDone / movies.length) * 100}%` : "0%";
  document.getElementById("showCount").textContent = `${showsDone}/${shows.length}`;
  document.getElementById("showRail").style.width = shows.length ? `${(showsDone / shows.length) * 100}%` : "0%";

  const nextIdx = ITEMS.findIndex((_, i) => !state[i] && !archived[i]);
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
      switchSubtab("abiertos");
      requestAnimationFrame(() => {
        const el = document.getElementById(`entry-${nextIdx}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };
  }
}

const TABS = ["resumen", "expedientes"];
const SUBTABS = ["abiertos", "cerrados", "archivados"];

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function switchTab(name) {
  TABS.forEach(t => {
    const panel = document.getElementById(`tab${capitalize(t)}`);
    const btn = document.getElementById(`tabBtn${capitalize(t)}`);
    const active = t === name;
    panel.hidden = !active;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
}

function switchSubtab(name) {
  SUBTABS.forEach(t => {
    const panel = document.getElementById(`subtab${capitalize(t)}`);
    const btn = document.getElementById(`subtabBtn${capitalize(t)}`);
    const active = t === name;
    panel.hidden = !active;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
}

TABS.forEach(t => {
  document.getElementById(`tabBtn${capitalize(t)}`).addEventListener("click", () => switchTab(t));
});

SUBTABS.forEach(t => {
  document.getElementById(`subtabBtn${capitalize(t)}`).addEventListener("click", () => switchSubtab(t));
});

function toggle(idx) {
  const newState = !state[idx];
  markDone(idx, newState);
  if (ITEMS[idx].episodes) {
    episodeState[idx] = new Array(ITEMS[idx].episodes).fill(newState);
  }
  render();
  highlightChange(idx);
  persist();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(EP_STORAGE_KEY, JSON.stringify(episodeState));
    localStorage.setItem(DATE_STORAGE_KEY, JSON.stringify(watchedDates));
    localStorage.setItem(RATING_STORAGE_KEY, JSON.stringify(ratings));
    localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(archived));
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
    const rawDates = localStorage.getItem(DATE_STORAGE_KEY);
    if (rawDates) watchedDates = JSON.parse(rawDates);
    const rawRatings = localStorage.getItem(RATING_STORAGE_KEY);
    if (rawRatings) ratings = JSON.parse(rawRatings);
    const rawArchived = localStorage.getItem(ARCHIVE_STORAGE_KEY);
    if (rawArchived) archived = JSON.parse(rawArchived);
  } catch (e) {
    state = {};
    episodeState = {};
    watchedDates = {};
    ratings = {};
    archived = {};
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

const UNIVERSE_COLORS = {
  "MCU": "var(--teal)",
  "Fox": "var(--stamp-dark)",
  "Sony": "var(--gold)",
  "Marvel Legacy": "var(--ink-faint)"
};

function normalizePlatform(p) {
  if (p.startsWith("Disney+")) return "Disney+";
  if (p.startsWith("Cines")) return "Cines";
  return p;
}

const PLATFORM_COLORS = {
  "Disney+": "var(--teal)",
  "HBO Max": "var(--stamp)",
  "Netflix": "var(--stamp-dark)",
  "Prime Video": "var(--gold)",
  "Cines": "var(--ink-soft)"
};

function renderStatBars(containerId, counts, colorMap) {
  const container = document.getElementById(containerId);
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map(e => e[1]));

  container.innerHTML = entries.map(([label, count]) => {
    const pct = Math.round((count / max) * 100);
    const color = colorMap[label] || "var(--ink-faint)";
    return `
      <div class="stat-bar-row">
        <span class="stat-bar-label">${label}</span>
        <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%; background:${color};"></div></div>
        <span class="stat-bar-count">${count}</span>
      </div>
    `;
  }).join("");
}

function renderCatalogStats() {
  const universeCounts = {};
  const platformCounts = {};

  ITEMS.forEach(item => {
    universeCounts[item.universe] = (universeCounts[item.universe] || 0) + 1;
    const p = normalizePlatform(item.platform);
    platformCounts[p] = (platformCounts[p] || 0) + 1;
  });

  renderStatBars("universeStats", universeCounts, UNIVERSE_COLORS);
  renderStatBars("platformStats", platformCounts, PLATFORM_COLORS);
}

loadState();
updateCountdown();
renderCatalogStats();
setInterval(updateCountdown, 1000 * 60 * 60);
