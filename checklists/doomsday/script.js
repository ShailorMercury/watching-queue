const ITEMS = [
  { title: "Capitán América: El Primer Vengador", type: "movie", universe: "MCU", platform: "Disney+", phase: "🕰️ Fase I — El Nacimiento", durationMin: 124, synopsis: "Steve Rogers se convierte en Capitán América durante la Segunda Guerra Mundial. Presenta el Teseracto y establece el origen de Steve, Bucky y una pieza cósmica que volverá a ser fundamental.", why: "Origen de Steve Rogers, Bucky y el Teseracto; conecta directamente con Endgame y el regreso de personajes clásicos en Doomsday." },
  { title: "Marvel One-Shot: Agent Carter", type: "movie", universe: "MCU", platform: "Disney+", phase: "🕰️ Fase I — El Nacimiento", durationMin: 17, synopsis: "Peggy Carter continúa trabajando tras la guerra mientras lidia con amenazas relacionadas con Howard Stark.", why: "Peggy Carter tras la guerra, lidiando con amenazas ligadas a Howard Stark; puente hacia la serie Agent Carter." },
  { title: "Agent Carter, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, phase: "🕰️ Fase I — El Nacimiento", durationMin: 360, synopsis: "Peggy investiga una conspiración tecnológica mientras demuestra que puede actuar como agente por derecho propio.", why: "Peggy investiga una conspiración tecnológica; profundiza en ella, Howard Stark y el origen de piezas del MCU televisivo." },
  { title: "Agent Carter, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 10, phase: "🕰️ Fase I — El Nacimiento", durationMin: 450, synopsis: "Peggy se traslada a Los Ángeles para investigar una amenaza científica ligada a una misteriosa materia.", why: "Peggy se traslada a Los Ángeles tras una amenaza científica; cierra su arco televisivo y amplía la historia temprana del universo." },
  { title: "X-Men: Primera Generación", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 132, synopsis: "Charles Xavier y Erik Lehnsherr se conocen y forman el primer grupo de mutantes moderno.", why: "Xavier y Magneto se conocen y forman el primer grupo mutante; presenta a las versiones jóvenes que Marvel recupera." },
  { title: "X-Men Orígenes: Lobezno", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 107, synopsis: "Explora el pasado de Logan, su relación con Victor Creed y el experimento que termina convirtiéndolo en el arma conocida como Weapon X.", why: "Explora el pasado de Logan y el experimento Weapon X; da contexto al Lobezno que vuelve en Deadpool & Wolverine." },
  { title: "X-Men", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 104, synopsis: "Logan se une a los X-Men mientras Xavier intenta proteger a los mutantes de una sociedad que los teme.", why: "Logan se une a los X-Men frente a una sociedad que teme a los mutantes; versión clásica de Xavier, Magneto y compañía." },
  { title: "X-Men 2", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 134, synopsis: "Los X-Men se enfrentan a una amenaza gubernamental que pone en peligro a todos los mutantes.", why: "Los X-Men enfrentan una amenaza gubernamental; profundiza en la familia mutante del legado multiversal de Fox." },
  { title: "X-Men: La Decisión Final", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 104, synopsis: "Una cura para la mutación divide a los X-Men y enfrenta a los mutantes entre sí.", why: "Una cura para la mutación divide a los X-Men; cierra la primera etapa de la saga clásica." },
  { title: "The Wolverine", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 126, synopsis: "Logan viaja a Japón y se enfrenta a enemigos relacionados con su pasado y con su propia inmortalidad.", why: "Logan viaja a Japón enfrentando su pasado e inmortalidad; prepara el contexto emocional de su etapa posterior." },
  { title: "X-Men: Días del Futuro Pasado", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 131, synopsis: "Los X-Men viajan mentalmente al pasado para impedir un futuro dominado por los Centinelas.", why: "Los X-Men viajan mentalmente al pasado para impedir un futuro dominado por Centinelas; pieza clave del multiverso mutante." },
  { title: "X-Men: Apocalipsis", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 144, synopsis: "Los jóvenes X-Men se enfrentan a Apocalipsis, un mutante ancestral que pretende rehacer el mundo.", why: "Los jóvenes X-Men enfrentan a Apocalipsis; amplía la continuidad mutante tras el cambio de línea temporal." },
  { title: "Dark Phoenix", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase II — Los Mutantes", durationMin: 114, synopsis: "Jean Grey pierde el control de un poder cósmico extraordinario y los X-Men intentan salvarla.", why: "Jean Grey pierde el control de un poder cósmico; cierra la etapa de los X-Men jóvenes de Fox." },
  { title: "Blade", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 120, synopsis: "Blade, un cazador mitad humano y mitad vampiro, lucha contra una conspiración sobrenatural.", why: "Blade lucha contra una conspiración sobrenatural; parte del legado cinematográfico que Marvel puede recuperar." },
  { title: "Blade II", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 117, synopsis: "Blade se ve obligado a colaborar con vampiros para combatir una nueva amenaza.", why: "Blade colabora con vampiros contra una nueva amenaza; continúa su legado." },
  { title: "Blade: Trinity", type: "movie", universe: "Marvel Legacy", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 113, synopsis: "Blade combate una nueva amenaza vampírica mientras forma una alianza con cazadores más jóvenes.", why: "Blade forma alianza con cazadores más jóvenes; cierra la trilogía clásica." },
  { title: "Spider-Man", type: "movie", universe: "Sony", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 121, synopsis: "Peter Parker obtiene poderes y aprende que ser héroe implica responsabilidad y sacrificios personales.", why: "Peter Parker obtiene poderes y aprende sobre la responsabilidad; establece la variante de Tobey Maguire." },
  { title: "Spider-Man 2", type: "movie", universe: "Sony", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 127, synopsis: "Peter intenta equilibrar su vida personal con su identidad como Spider-Man mientras se enfrenta al Doctor Octopus.", why: "Peter equilibra su vida y su identidad frente al Doctor Octopus; una de las historias más importantes de la variante Raimi." },
  { title: "Spider-Man 3", type: "movie", universe: "Sony", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 139, synopsis: "Peter se enfrenta a Venom, Sandman y a sus propios impulsos mientras su vida se desmorona.", why: "Peter se enfrenta a Venom y Sandman; completa la trilogía Raimi que reaparece en No Way Home." },
  { title: "The Amazing Spider-Man", type: "movie", universe: "Sony", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 136, synopsis: "Peter Parker descubre la verdad sobre sus padres y se convierte en Spider-Man en una nueva continuidad.", why: "Peter descubre la verdad sobre sus padres en una nueva continuidad; introduce la variante de Andrew Garfield." },
  { title: "The Amazing Spider-Man 2", type: "movie", universe: "Sony", platform: "HBO Max", phase: "🌌 Fase III — Universos Perdidos", durationMin: 141, synopsis: "Peter intenta proteger a Gwen mientras se enfrenta a Electro y otros enemigos.", why: "Peter protege a Gwen frente a Electro; completa el arco de esta versión antes de su regreso multiversal." },
  { title: "Ghost Rider", type: "movie", universe: "Marvel Legacy", platform: "Netflix", phase: "🌌 Fase III — Universos Perdidos", durationMin: 97, synopsis: "Johnny Blaze se convierte en Ghost Rider tras un pacto sobrenatural y lucha contra fuerzas demoníacas.", why: "Johnny Blaze se convierte en Ghost Rider tras un pacto sobrenatural; parte del catálogo de continuidades previas al MCU." },
  { title: "Ghost Rider: Spirit of Vengeance", type: "movie", universe: "Marvel Legacy", platform: "Netflix", phase: "🌌 Fase III — Universos Perdidos", durationMin: 96, synopsis: "Johnny vuelve a transformarse en Ghost Rider para proteger a un niño perseguido por fuerzas sobrenaturales.", why: "Johnny protege a un niño perseguido por fuerzas sobrenaturales; continúa esa continuidad." },
  { title: "Daredevil (2003)", type: "movie", universe: "Marvel Legacy", platform: "Disney+", phase: "🌌 Fase III — Universos Perdidos", durationMin: 103, synopsis: "Matt Murdock lucha contra el crimen en Hell's Kitchen mientras oculta su identidad de Daredevil.", why: "Matt Murdock lucha contra el crimen ocultando su identidad; primera versión cinematográfica antes de su reinvención en el MCU." },
  { title: "Elektra", type: "movie", universe: "Marvel Legacy", platform: "Disney+", phase: "🌌 Fase III — Universos Perdidos", durationMin: 97, synopsis: "Elektra intenta redimirse mientras protege a una joven perseguida por una organización criminal.", why: "Elektra intenta redimirse protegiendo a una joven; amplía la continuidad de Daredevil (2003)." },
  { title: "The Punisher (2004)", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", phase: "🌌 Fase III — Universos Perdidos", durationMin: 124, synopsis: "Frank Castle se convierte en un vigilante implacable tras perder a su familia.", why: "Frank Castle se convierte en vigilante tras perder a su familia; otra versión cinematográfica del personaje." },
  { title: "Punisher: War Zone", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", phase: "🌌 Fase III — Universos Perdidos", durationMin: 103, synopsis: "Frank Castle continúa su guerra contra el crimen y se enfrenta a Jigsaw.", why: "Frank Castle se enfrenta a Jigsaw; otra continuidad independiente de Punisher." },
  { title: "Fantastic Four (2005)", type: "movie", universe: "Fox", platform: "Disney+", phase: "🌌 Fase III — Universos Perdidos", durationMin: 106, synopsis: "Reed Richards y su equipo adquieren poderes tras una exposición cósmica.", why: "Reed Richards y su equipo adquieren poderes cósmicos; primera gran versión moderna de los 4 Fantásticos." },
  { title: "Fantastic Four: Rise of the Silver Surfer", type: "movie", universe: "Fox", platform: "Disney+", phase: "🌌 Fase III — Universos Perdidos", durationMin: 92, synopsis: "Los 4 Fantásticos se enfrentan al Silver Surfer y a una amenaza cósmica mayor.", why: "Los 4 Fantásticos enfrentan al Silver Surfer; amplía esa mitología cósmica." },
  { title: "Hulk (2003)", type: "movie", universe: "Marvel Legacy", platform: "Prime Video", phase: "🌌 Fase III — Universos Perdidos", durationMin: 138, synopsis: "Bruce Banner se convierte en Hulk tras un experimento que altera su biología.", why: "Bruce Banner se convierte en Hulk tras un experimento; continuidad independiente del Hulk del MCU." },
  { title: "Spider-Man: Into the Spider-Verse", type: "movie", universe: "Sony", platform: "Netflix", phase: "🌌 Fase III — Universos Perdidos", durationMin: 117, synopsis: "Miles Morales descubre que existen múltiples Spider-Man y que distintas realidades pueden cruzarse.", why: "Miles Morales descubre que existen múltiples Spider-Man; introducción perfecta al concepto de variantes." },
  { title: "Spider-Man: Across the Spider-Verse", type: "movie", universe: "Sony", platform: "Netflix", phase: "🌌 Fase III — Universos Perdidos", durationMin: 140, synopsis: "Miles descubre una red de Spider-People conectados entre universos y una amenaza para las propias realidades.", why: "Miles descubre una red de Spider-People y una amenaza multiversal; profundiza en variantes y canon." },
  { title: "X-Men '97, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 10, phase: "🌌 Fase III — Universos Perdidos", durationMin: 270, synopsis: "Los X-Men continúan su vida tras la serie animada clásica y afrontan nuevas amenazas como equipo.", why: "Los X-Men continúan tras la serie clásica; expande el legado animado y la idea de continuidades mutantes." },
  { title: "X-Men '97, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "🌌 Fase III — Universos Perdidos", durationMin: 270, synopsis: "Los X-Men siguen enfrentándose a amenazas cada vez mayores mientras evoluciona su mundo.", why: "Los X-Men afrontan amenazas mayores; continúa esa realidad animada y su relevancia multiversal." },
  { title: "Fantastic Four (2015)", type: "movie", universe: "Fox", platform: "Disney+", phase: "🌌 Fase III — Universos Perdidos", durationMin: 100, synopsis: "Un experimento dimensional transforma a cuatro jóvenes científicos en seres con habilidades extraordinarias.", why: "Un experimento dimensional transforma a cuatro científicos; otra continuidad alternativa de los 4 Fantásticos." },
  { title: "Iron Man", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 126, synopsis: "Tony Stark construye su primera armadura y se convierte en Iron Man.", why: "Tony Stark construye su primera armadura; nacimiento del MCU moderno." },
  { title: "The Incredible Hulk", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 112, synopsis: "Bruce Banner intenta controlar a Hulk mientras es perseguido por fuerzas militares.", why: "Bruce Banner intenta controlar a Hulk perseguido por el ejército; completa el grupo inicial de héroes del MCU." },
  { title: "Iron Man 2", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 124, synopsis: "Tony intenta proteger su tecnología mientras aparecen nuevos enemigos y Natasha Romanoff.", why: "Tony protege su tecnología frente a nuevos enemigos; presenta a Black Widow y prepara a los Vengadores." },
  { title: "Marvel One-Shot: The Consultant", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 4, synopsis: "S.H.I.E.L.D. intenta resolver un problema relacionado con Emil Blonsky.", why: "S.H.I.E.L.D. resuelve un problema con Emil Blonsky; amplía la continuidad de Hulk." },
  { title: "Marvel One-Shot: A Funny Thing Happened...", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 4, synopsis: "Coulson se encuentra con una situación inesperada mientras viaja hacia Nuevo México.", why: "Coulson vive una situación inesperada camino a Nuevo México; conecta Iron Man 2 con Thor." },
  { title: "Thor", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 115, synopsis: "Thor es desterrado a la Tierra y aprende humildad antes de recuperar su poder.", why: "Thor es desterrado a la Tierra y aprende humildad; presenta a Loki y la mitología asgardiana." },
  { title: "Los Vengadores", type: "movie", universe: "MCU", platform: "Disney+", phase: "🦸 Fase IV — El Nacimiento de los Vengadores", durationMin: 143, synopsis: "Los héroes principales se unen para detener una invasión dirigida por Loki.", why: "Los héroes se unen para detener a Loki; establece el equipo original y el peso de las Gemas del Infinito." },
  { title: "Iron Man 3", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 130, synopsis: "Tony Stark afronta las consecuencias psicológicas de la batalla de Nueva York.", why: "Tony afronta las secuelas psicológicas de Nueva York; profundiza en su evolución como héroe." },
  { title: "Thor: El Mundo Oscuro", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 112, synopsis: "Thor se enfrenta a los Elfos Oscuros y a una amenaza relacionada con el Éter.", why: "Thor enfrenta a los Elfos Oscuros por el Éter; introduce una Gema del Infinito." },
  { title: "Capitán América: El Soldado de Invierno", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 136, synopsis: "Steve Rogers descubre una conspiración dentro de S.H.I.E.L.D. y se enfrenta al Soldado de Invierno.", why: "Steve descubre una conspiración en S.H.I.E.L.D.; transforma el MCU y profundiza en Steve y Bucky." },
  { title: "Guardianes de la Galaxia", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 122, synopsis: "Un grupo de inadaptados se une para proteger una Gema del Infinito.", why: "Un grupo de inadaptados protege una Gema del Infinito; amplía el MCU al espacio." },
  { title: "Guardianes de la Galaxia Vol. 2", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 137, synopsis: "Los Guardianes descubren secretos sobre el origen de Peter Quill.", why: "Los Guardianes descubren el origen de Peter Quill; desarrolla al grupo antes de Infinity War." },
  { title: "Vengadores: La Era de Ultrón", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 141, synopsis: "Tony y Bruce crean una inteligencia artificial que se vuelve contra la humanidad.", why: "Tony y Bruce crean una IA que se rebela; presenta a Wanda, Visión y más piezas esenciales." },
  { title: "Ant-Man", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 117, synopsis: "Scott Lang se convierte en Ant-Man y descubre el poder del Reino Cuántico.", why: "Scott Lang se convierte en Ant-Man; el Reino Cuántico será crucial más adelante." },
  { title: "Capitán América: Civil War", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 147, synopsis: "Los Vengadores se dividen por un conflicto político y moral.", why: "Los Vengadores se dividen por un conflicto moral; sus consecuencias llegan hasta Endgame." },
  { title: "Black Widow", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 134, synopsis: "Natasha afronta su pasado y se reúne con su antigua familia de espías.", why: "Natasha afronta su pasado con su antigua familia de espías; conecta con personajes que vuelven en la nueva era." },
  { title: "Black Panther", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 134, synopsis: "T'Challa se convierte en rey de Wakanda y defiende su país de Killmonger.", why: "T'Challa se convierte en rey de Wakanda; introduce un lugar y personajes clave del MCU." },
  { title: "Spider-Man: Homecoming", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 133, synopsis: "Peter Parker intenta demostrar que puede ser un héroe mientras equilibra su vida adolescente.", why: "Peter Parker demuestra que puede ser un héroe; establece al Spider-Man de Tom Holland antes del multiverso." },
  { title: "Doctor Strange", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 115, synopsis: "Stephen Strange descubre las artes místicas y aprende a manipular el tiempo y la realidad.", why: "Stephen Strange aprende artes místicas y a manipular el tiempo; será figura clave del multiverso." },
  { title: "Deadpool", type: "movie", universe: "Fox", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 108, synopsis: "Wade Wilson obtiene poderes y se convierte en Deadpool, rompiendo constantemente la cuarta pared.", why: "Wade Wilson obtiene poderes y rompe la cuarta pared; establece la versión que acaba entrando al MCU." },
  { title: "Deadpool 2", type: "movie", universe: "Fox", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 119, synopsis: "Deadpool intenta proteger a un joven mutante y se cruza con viajes temporales.", why: "Deadpool protege a un joven mutante y se cruza con viajes temporales; prepara el salto al multiverso." },
  { title: "Thor: Ragnarok", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 130, synopsis: "Thor debe detener el Ragnarok mientras Asgard se enfrenta a su destrucción.", why: "Thor detiene el Ragnarok mientras Asgard se destruye; conecta directamente con Infinity War." },
  { title: "Ant-Man y la Avispa", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 118, synopsis: "Scott Lang explora el Reino Cuántico y conoce mejor sus extrañas propiedades.", why: "Scott explora el Reino Cuántico; pieza fundamental de Endgame." },
  { title: "Vengadores: Infinity War", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 149, synopsis: "Thanos reúne las Gemas del Infinito para completar su plan.", why: "Thanos reúne las Gemas del Infinito; el gran punto de ruptura que prepara Endgame." },
  { title: "Capitana Marvel", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 124, synopsis: "Carol Danvers descubre su pasado y sus poderes mientras se desarrolla una guerra cósmica.", why: "Carol Danvers descubre su pasado en una guerra cósmica; conecta con Nick Fury y la tecnología cósmica." },
  { title: "Vengadores: Endgame", type: "movie", universe: "MCU", platform: "Disney+", phase: "💎 Fase V — Infinity", durationMin: 182, synopsis: "Los héroes supervivientes intentan revertir el desastre causado por Thanos.", why: "Los héroes revierten el desastre de Thanos; cierra la Saga del Infinito." },
  { title: "WandaVision, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 360, synopsis: "Wanda crea una realidad propia mientras procesa su pérdida.", why: "Wanda crea una realidad propia procesando su pérdida; abre la puerta directa al multiverso." },
  { title: "The Falcon and the Winter Soldier", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 300, synopsis: "Sam Wilson decide qué significa portar el escudo del Capitán América.", why: "Sam Wilson decide qué significa portar el escudo; establece al nuevo Capitán América." },
  { title: "Loki, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 270, synopsis: "Una variante de Loki es capturada por la TVA y descubre una estructura que controla las líneas temporales.", why: "Una variante de Loki descubre la TVA; pieza clave para entender el multiverso y las variantes." },
  { title: "What If...?, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 270, synopsis: "El Watcher observa realidades alternativas donde acontecimientos del MCU suceden de forma diferente.", why: "El Watcher observa realidades alternativas del MCU; demuestra visualmente la existencia de variantes infinitas." },
  { title: "Spider-Man: Far From Home", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 129, synopsis: "Peter intenta volver a la normalidad tras Endgame y se enfrenta a Mysterio.", why: "Peter vuelve a la normalidad tras Endgame frente a Mysterio; prepara No Way Home." },
  { title: "Shang-Chi y la Leyenda de los Diez Anillos", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 132, synopsis: "Shang-Chi descubre el legado de su familia y de los Diez Anillos.", why: "Shang-Chi descubre el legado de su familia y los Diez Anillos; amplía el MCU moderno." },
  { title: "Hawkeye, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 300, synopsis: "Clint Barton intenta cerrar cuentas pendientes mientras protege a Kate Bishop.", why: "Clint cierra cuentas pendientes protegiendo a Kate Bishop; desarrolla el legado Hawkeye y el nuevo grupo de héroes." },
  { title: "Spider-Man: No Way Home", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 148, synopsis: "Peter provoca una ruptura del hechizo de Doctor Strange que trae visitantes de otras realidades.", why: "Peter rompe el hechizo de Strange y trae visitantes de otras realidades; reúne las tres generaciones de Spider-Man." },
  { title: "Doctor Strange en el Multiverso de la Locura", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 126, synopsis: "Doctor Strange y America Chavez viajan por diferentes universos mientras Wanda busca poder para recuperar a sus hijos.", why: "Strange y America Chavez viajan entre universos; expande las reglas del multiverso y las incursiones." },
  { title: "Ms. Marvel, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 270, synopsis: "Kamala Khan descubre que posee habilidades extraordinarias ligadas a su herencia.", why: "Kamala Khan descubre sus habilidades ligadas a su herencia; conecta después con Carol Danvers." },
  { title: "Thor: Love and Thunder", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 119, synopsis: "Thor se enfrenta a Gorr mientras Jane Foster adopta el manto de Mighty Thor.", why: "Thor enfrenta a Gorr mientras Jane adopta el manto de Mighty Thor; continúa su mitología." },
  { title: "Black Panther: Wakanda Forever", type: "movie", universe: "MCU", platform: "Disney+", phase: "🌀 Fase VI — El Despertar del Multiverso", durationMin: 161, synopsis: "Wakanda afronta la pérdida de T'Challa y la amenaza de Namor.", why: "Wakanda afronta la pérdida de T'Challa frente a Namor; establece a Shuri como Black Panther." },
  { title: "Ant-Man y la Avispa: Quantumanía", type: "movie", universe: "MCU", platform: "Disney+", phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 124, synopsis: "La familia Lang entra en el Reino Cuántico y se enfrenta a Kang.", why: "La familia Lang entra al Reino Cuántico y enfrenta a Kang; introduce la amenaza multiversal de Kang." },
  { title: "Guardianes de la Galaxia Vol. 3", type: "movie", universe: "MCU", platform: "Disney+", phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 150, synopsis: "Los Guardianes emprenden una misión para salvar a Rocket y cerrar una etapa del grupo.", why: "Los Guardianes salvan a Rocket cerrando una etapa; prepara el reparto cósmico del MCU." },
  { title: "The Marvels", type: "movie", universe: "MCU", platform: "Disney+", phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 105, synopsis: "Carol Danvers, Kamala Khan y Monica Rambeau quedan conectadas por un fenómeno que intercambia sus posiciones.", why: "Carol, Kamala y Monica quedan conectadas por un fenómeno; deja preparado el futuro de Kamala y los equipos jóvenes." },
  { title: "Loki, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 300, synopsis: "Loki intenta salvar las líneas temporales mientras la TVA afronta una crisis existencial.", why: "Loki intenta salvar las líneas temporales en crisis; profundiza en la estructura del multiverso." },
  { title: "What If...?, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 270, synopsis: "El Watcher continúa explorando realidades alternativas del MCU.", why: "El Watcher sigue explorando realidades alternativas; amplía el mapa de variantes." },
  { title: "What If...?, temporada 3", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, phase: "⏳ Fase VII — La Guerra de las Realidades", durationMin: 270, synopsis: "Nuevas realidades alternativas muestran diferentes destinos para héroes conocidos.", why: "Nuevas realidades muestran diferentes destinos para héroes conocidos; continúa la exploración del multiverso animado." },
  { title: "Logan", type: "movie", universe: "Fox", platform: "Disney+", phase: "🧬 Fase VIII — El Regreso", durationMin: 137, synopsis: "Un Logan envejecido protege a una joven mutante en un futuro oscuro.", why: "Un Logan envejecido protege a una joven mutante en un futuro oscuro; cierre emocional relevante para Deadpool & Wolverine." },
  { title: "Deadpool & Wolverine", type: "movie", universe: "MCU", platform: "Disney+", phase: "🧬 Fase VIII — El Regreso", durationMin: 128, synopsis: "Deadpool se ve arrastrado a un conflicto multiversal que lo lleva a cruzarse con una variante de Lobezno.", why: "Deadpool se ve arrastrado a un conflicto multiversal con una variante de Lobezno; puente directo entre Fox y el MCU." },
  { title: "Secret Invasion, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 300, synopsis: "Nick Fury intenta detener una infiltración Skrull mientras el mundo pierde confianza en sus defensores.", why: "Nick Fury intenta detener una infiltración Skrull; amplía la situación política del MCU moderno." },
  { title: "Echo, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 5, phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 240, synopsis: "Maya Lopez vuelve a su pueblo y afronta su pasado mientras se enfrenta a Wilson Fisk.", why: "Maya Lopez afronta su pasado frente a Wilson Fisk; continúa el mundo de Daredevil y Kingpin." },
  { title: "Ironheart, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 6, phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 300, synopsis: "Riri Williams continúa el legado tecnológico de Tony Stark y se enfrenta a amenazas mágicas y tecnológicas.", why: "Riri Williams continúa el legado tecnológico de Stark frente a amenazas mágicas; introduce una nueva generación de héroes." },
  { title: "Agatha All Along, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 300, synopsis: "Agatha Harkness emprende un viaje por el misterioso Camino de las Brujas.", why: "Agatha Harkness recorre el Camino de las Brujas; expande la magia introducida en WandaVision." },
  { title: "Daredevil: Born Again, temporada 1", type: "show", universe: "MCU", platform: "Disney+", episodes: 9, phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 495, synopsis: "Matt Murdock vuelve a enfrentarse a Wilson Fisk en una batalla por el control de Nueva York.", why: "Matt Murdock vuelve a enfrentarse a Fisk; integra definitivamente a Daredevil y Kingpin en el MCU moderno." },
  { title: "Capitán América: Brave New World", type: "movie", universe: "MCU", platform: "Disney+", phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 118, synopsis: "Sam Wilson, ya como Capitán América, se enfrenta a una crisis internacional y a nuevas amenazas.", why: "Sam Wilson, como Capitán América, enfrenta una crisis internacional; consolida al nuevo Capitán y el tablero político." },
  { title: "Thunderbolts*", type: "movie", universe: "MCU", platform: "Disney+", phase: "⚡ Fase IX — El Nuevo Mundo", durationMin: 127, synopsis: "Un grupo de antihéroes y personajes problemáticos se ve obligado a trabajar unido.", why: "Un grupo de antihéroes se ve obligado a trabajar unido; establece a los New Avengers, pieza clave antes de Doomsday." },
  { title: "Daredevil: Born Again, temporada 2", type: "show", universe: "MCU", platform: "Disney+", episodes: 8, phase: "🔮 Fase X — El Último Tablero", durationMin: 360, synopsis: "Matt Murdock continúa su lucha contra el poder de Wilson Fisk y las amenazas de Nueva York.", why: "Matt continúa su lucha contra Fisk; sigue el lado urbano del MCU antes de la gran convergencia." },
  { title: "The Punisher: One Last Kill", type: "movie", universe: "MCU", platform: "Disney+", phase: "🔮 Fase X — El Último Tablero", durationMin: 60, synopsis: "Frank Castle regresa para afrontar una última misión.", why: "Frank Castle regresa para una última misión; continúa su legado en el universo televisivo integrado." },
  { title: "Spider-Man: Brand New Day", type: "movie", universe: "MCU", platform: "Cines", phase: "🔮 Fase X — El Último Tablero", durationMin: 130, synopsis: "Peter Parker afronta una nueva etapa después de los acontecimientos multiversales que cambiaron su vida.", why: "Peter afronta una nueva etapa tras los sucesos multiversales; escena post-créditos con peso directo para Doomsday." },
  { title: "VisionQuest", type: "show", universe: "MCU", platform: "Disney+ (14 oct 2026)", episodes: 8, phase: "🔮 Fase X — El Último Tablero", durationMin: 360, synopsis: "La historia de Vision continúa después de los acontecimientos de WandaVision.", why: "La historia de Visión continúa tras WandaVision; profundiza en él y en la identidad artificial justo antes del estreno." },
  { title: "The Fantastic Four: First Steps", type: "movie", universe: "MCU", platform: "Disney+", phase: "🔮 Fase X — El Último Tablero", durationMin: 130, synopsis: "Reed Richards, Sue Storm, Johnny Storm y Ben Grimm forman una familia de héroes en una realidad con estética retrofuturista.", why: "Reed, Sue, Johnny y Ben forman su familia de héroes; introduce a Reed Richards, pieza clave ante Doctor Doom." },
  { title: "Avengers: Doomsday", type: "movie", universe: "MCU", platform: "Cines · 18 dic 2026", phase: "💀 Fase XI — Doomsday", durationMin: 150, synopsis: "La gran convergencia de héroes y personajes procedentes de distintas realidades.", why: "🎯 La gran convergencia: Vengadores, mutantes, 4 Fantásticos y variantes multiversales frente a Doctor Doom.", event: true }
];

// orden real de las fases, tal y como aparecen por primera vez en ITEMS
// (los títulos ya están ordenados cronológicamente, así que esto respeta ese orden)
const PHASES_ORDER = [];
ITEMS.forEach(it => { if (!PHASES_ORDER.includes(it.phase)) PHASES_ORDER.push(it.phase); });

const STORAGE_KEY = "doomsday-checklist-state-v2";
const EP_STORAGE_KEY = "doomsday-episode-state-v2";
const DATE_STORAGE_KEY = "doomsday-watched-dates-v2";
const EP_DATE_STORAGE_KEY = "doomsday-episode-watched-dates-v2";
const RATING_STORAGE_KEY = "doomsday-ratings-v2";
const ARCHIVE_STORAGE_KEY = "doomsday-archived-v2";
const GRANULARITY_STORAGE_KEY = "doomsday-chart-granularity-v2";

let state = {};
let episodeState = {};
let watchedDates = {};
let episodeWatchedDates = {};
let ratings = {};
let archived = {};
let chartGranularity = "day";

function typeLabel(t) { return t === "movie" ? "🎬 Película" : "📺 Serie"; }

function formatDuration(min) {
  if (!min) return "";
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}min`;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function getEpArray(itemIdx) {
  const n = ITEMS[itemIdx].episodes;
  if (!episodeState[itemIdx]) episodeState[itemIdx] = new Array(n).fill(false);
  return episodeState[itemIdx];
}

function seasonLabel(title) {
  const m = title.match(/temporada\s+(\d+)/i);
  const num = m ? parseInt(m[1], 10) : 1;
  return "Temporada " + String(num).padStart(3, "0");
}

function buildEpisodePanel(item, i) {
  if (!item.episodes) return "";
  const eps = getEpArray(i);
  const chips = eps.map((done, epIdx) => `
    <button class="ep-chip${done ? ' done' : ''}" data-idx="${i}" data-ep="${epIdx}" aria-pressed="${done}" aria-label="Capítulo ${epIdx + 1} de ${item.title}, ${done ? 'visto' : 'pendiente'}">${epIdx + 1}</button>
  `).join("");

  return `
    <div class="ep-row">
      <span class="ep-row-label">${seasonLabel(item.title)}:</span>
      <div class="ep-chips">${chips}</div>
    </div>
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
  const expBadge = `<div class="exp-badge">Exp.<span class="num">${String(i+1).padStart(3,"0")}</span></div>`;

  const checkCell = isArchived
    ? `${expBadge}<button class="restore-link" data-idx="${i}" aria-label="Restaurar ${item.title}">↺ Restaurar</button>`
    : `
      ${expBadge}
      <button class="visto-checkbox${done ? ' checked' : ''}" role="checkbox" aria-checked="${done}" aria-label="Marcar ${item.title} como ${done ? 'pendiente' : 'vista'}" data-idx="${i}">
        <span class="check-mark">✓</span>
      </button>
      <button class="skip-btn" data-idx="${i}" aria-label="Archivar ${item.title}" title="Archivar">⏭</button>
    `;

  return `
    <div class="check-cell">
      ${checkCell}
    </div>
    <div>
      <p class="entry-title">${item.title}</p>
      <p class="why-label">${item.phase}</p>
      <p class="entry-synopsis"><b>¿De qué va?</b> ${item.synopsis}</p>
      <p class="entry-why"><b>¿Por qué importa?</b> ${item.why}</p>
      <div class="badge-row">
        <span class="badge ${item.type === 'movie' ? 'type-movie' : 'type-show'}">${typeLabel(item.type)}</span>
        <span class="badge universe universe--${item.universe === 'MCU' ? 'mcu' : item.universe === 'Fox' ? 'fox' : item.universe === 'Sony' ? 'sony' : 'legacy'}">${item.universe}</span>
        <span class="badge where">${item.platform}</span>
        <span class="badge duration">⏱ ${formatDuration(item.durationMin)}</span>
      </div>
      ${isArchived ? "" : buildEpisodePanel(item, i)}
      ${isArchived ? "" : buildWatchedMeta(item, i, done)}
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

  document.querySelectorAll(".visto-checkbox").forEach(btn => {
    btn.addEventListener("click", () => toggle(parseInt(btn.dataset.idx, 10)));
  });

  document.querySelectorAll(".ep-chip").forEach(btn => {
    btn.addEventListener("click", () => toggleEpisode(parseInt(btn.dataset.idx, 10), parseInt(btn.dataset.ep, 10)));
  });

  document.querySelectorAll(".popcorn-btn").forEach(btn => {
    btn.addEventListener("click", () => setRating(parseInt(btn.dataset.idx, 10), parseInt(btn.dataset.value, 10)));
  });

  document.querySelectorAll(".skip-btn").forEach(btn => {
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

// registra (o borra) la fecha en la que se vio un capítulo concreto — es lo que
// alimenta la gráfica de progreso por barras (distingue películas de capítulos)
function setEpisodeWatched(itemIdx, epIdx, isDone) {
  const key = `${itemIdx}_${epIdx}`;
  if (isDone) {
    if (!episodeWatchedDates[key]) episodeWatchedDates[key] = new Date().toISOString();
  } else {
    delete episodeWatchedDates[key];
  }
}

function toggleEpisode(itemIdx, epIdx) {
  const eps = getEpArray(itemIdx);
  eps[epIdx] = !eps[epIdx];
  setEpisodeWatched(itemIdx, epIdx, eps[epIdx]);

  const allDone = eps.every(Boolean);
  if (allDone && !state[itemIdx]) {
    markDone(itemIdx, true);
  } else if (!allDone && state[itemIdx]) {
    markDone(itemIdx, false);
  }

  render();
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

function renderStatusDonut(vistos, pendientes, archivados) {
  const chart = document.getElementById("statusDonut");
  const legend = document.getElementById("statusLegend");
  const data = [
    { label: "Vistos", count: vistos, color: "var(--teal)" },
    { label: "Pendientes", count: pendientes, color: "var(--stamp)" },
    { label: "Archivados", count: archivados, color: "var(--ink-faint)" }
  ].filter(d => d.count > 0);

  const total = data.reduce((a, d) => a + d.count, 0) || 1;
  const cx = 40, cy = 40, r = 28, strokeWidth = 15;
  const circumference = 2 * Math.PI * r;

  let cumulative = 0;
  const circles = data.map(d => {
    const segLen = (d.count / total) * circumference;
    const dashoffset = -cumulative;
    cumulative += segLen;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${strokeWidth}" stroke-dasharray="${segLen} ${circumference - segLen}" stroke-dashoffset="${dashoffset}" transform="rotate(-90 ${cx} ${cy})"><title>${d.label}: ${d.count}</title></circle>`;
  }).join("");

  chart.innerHTML = `<svg viewBox="0 0 80 80">${circles}</svg>`;

  legend.innerHTML = data.map(d => {
    const pct = Math.round((d.count / total) * 100);
    return `
      <div class="status-legend-item">
        <span class="sw" style="background:${d.color};"></span>
        <span>${d.label}</span>
        <span class="ct">${d.count} (${pct}%)</span>
      </div>
    `;
  }).join("");
}

function updateProgress() {
  const activeIndices = ITEMS.map((_, i) => i).filter(i => !archived[i]);
  const total = activeIndices.length;
  const done = activeIndices.filter(i => state[i]).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  document.getElementById("countText").textContent = `${done} / ${total} cerrados`;
  document.getElementById("notchRailFill").style.width = pct + "%";
  document.getElementById("notchRailPct").textContent = pct + "%";

  const stamp = document.getElementById("statusStamp");
  if (done === 0) { stamp.textContent = "Sin abrir"; }
  else if (done === total) { stamp.textContent = "Expediente cerrado"; }
  else { stamp.textContent = "En curso"; }

  renderProgressChart();
  updateDashboard(done, total);
}

function renderProgressChart() {
  const el = document.getElementById("progressChart");

  // dos fuentes de fechas: películas vistas (watchedDates, solo títulos sin
  // episodios) y capítulos vistos (episodeWatchedDates, uno por cada capítulo
  // marcado individualmente) — así la barra de cada periodo puede distinguir
  // cuánto fue "película" y cuánto fue "capítulos de serie"
  const movieDates = Object.entries(watchedDates)
    .filter(([idx]) => !ITEMS[idx].episodes)
    .map(([, iso]) => new Date(iso));
  const episodeDates = Object.values(episodeWatchedDates).map(iso => new Date(iso));
  const allDates = [...movieDates, ...episodeDates].sort((a, b) => a - b);

  // el ancho del viewBox se toma del ancho real del contenedor (en vez de un valor
  // fijo) para que las barras se estiren siempre hasta los bordes reales de la hoja,
  // en vez de quedar centradas con huecos si el contenedor es más ancho que el valor fijo
  const W = Math.round(el.clientWidth) || 600, H = 130, padL = 20, padR = 10, padT = 14, padB = 22;

  if (allDates.length === 0) {
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}"><text x="${W/2}" y="${H/2}" font-size="11" font-family="'IBM Plex Mono', monospace" fill="var(--ink-faint)" text-anchor="middle" dominant-baseline="middle">Aún no hay días con progreso registrado</text></svg>`;
    return;
  }

  const dayMs = 24 * 60 * 60 * 1000;
  const dayKey = d => d.toISOString().slice(0, 10);
  const firstDay = new Date(dayKey(allDates[0]));
  const today = new Date(dayKey(new Date()));

  // según la granularidad elegida (día / semana / mes), agrupamos las fechas
  // en "cubos" (buckets). bucketKey convierte una fecha en su clave de cubo,
  // bucketLabel la convierte en el texto que se ve en el eje X, y buckets es
  // la lista ordenada de claves desde el primer día visto hasta hoy.
  let bucketKey, bucketLabel, buckets;

  if (chartGranularity === "month") {
    bucketKey = d => d.toISOString().slice(0, 7); // yyyy-mm
    bucketLabel = key => {
      const [y, m] = key.split("-").map(Number);
      return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("es-ES", { month: "short", year: "2-digit" });
    };
    buckets = [];
    let cursor = new Date(Date.UTC(firstDay.getUTCFullYear(), firstDay.getUTCMonth(), 1));
    const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1));
    while (cursor <= end) {
      buckets.push(bucketKey(cursor));
      cursor = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1));
    }
  } else if (chartGranularity === "week") {
    const weekOf = d => Math.floor((new Date(dayKey(d)) - firstDay) / (dayMs * 7));
    bucketKey = d => `w${weekOf(d)}`;
    bucketLabel = key => {
      const w = parseInt(key.slice(1), 10);
      return new Date(firstDay.getTime() + w * 7 * dayMs).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
    };
    const totalWeeks = Math.max(0, Math.floor((today - firstDay) / (dayMs * 7)));
    buckets = Array.from({ length: totalWeeks + 1 }, (_, w) => `w${w}`);
  } else {
    bucketKey = d => dayKey(d);
    bucketLabel = key => new Date(key).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
    const totalDays = Math.max(0, Math.round((today - firstDay) / dayMs));
    buckets = Array.from({ length: totalDays + 1 }, (_, d) => dayKey(new Date(firstDay.getTime() + d * dayMs)));
  }

  // conteo POR PERIODO (no acumulado): cuántas películas y cuántos capítulos
  // caen en cada cubo — el acumulado total ya se ve en las tarjetas/donut de
  // arriba, aquí interesa más "cuánto viste en cada tramo"
  const movieCounts = {};
  movieDates.forEach(d => { const k = bucketKey(d); movieCounts[k] = (movieCounts[k] || 0) + 1; });
  const episodeCounts = {};
  episodeDates.forEach(d => { const k = bucketKey(d); episodeCounts[k] = (episodeCounts[k] || 0) + 1; });

  const points = buckets.map((key, i) => ({
    x: i,
    key,
    movies: movieCounts[key] || 0,
    episodes: episodeCounts[key] || 0
  }));

  const lastX = Math.max(1, points.length - 1);
  const maxY = Math.max(...points.map(p => p.movies + p.episodes), 1);
  const innerW = W - padL - padR;
  const slot = innerW / points.length;
  const barW = Math.max(2, Math.min(slot * 0.62, 26));
  const scaleX = x => padL + x * slot + (slot - barW) / 2;
  const scaleH = c => (c / maxY) * (H - padT - padB);

  // eje X: mostrar el primer y el último cubo (día/semana/mes según toque)
  const xLabels = points.length === 1
    ? [{ x: scaleX(0) + barW / 2, text: bucketLabel(points[0].key) }]
    : [
        { x: scaleX(0) + barW / 2, text: bucketLabel(points[0].key) },
        { x: scaleX(lastX) + barW / 2, text: bucketLabel(points[points.length - 1].key) }
      ];

  const bars = points.map(p => {
    if (p.movies === 0 && p.episodes === 0) return "";
    const x = scaleX(p.x);
    const movieH = scaleH(p.movies);
    const epH = scaleH(p.episodes);
    const baseY = H - padB;
    const parts = [];
    if (p.movies > 0) {
      parts.push(`<rect x="${x}" y="${baseY - movieH}" width="${barW}" height="${movieH}" rx="1.5" fill="var(--teal)"><title>${bucketLabel(p.key)}: ${p.movies} película${p.movies === 1 ? "" : "s"}</title></rect>`);
    }
    if (p.episodes > 0) {
      const y = baseY - movieH - epH;
      parts.push(`<rect x="${x}" y="${y}" width="${barW}" height="${epH}" rx="1.5" fill="var(--stamp)"><title>${bucketLabel(p.key)}: ${p.episodes} capítulo${p.episodes === 1 ? "" : "s"}</title></rect>`);
    }
    return parts.join("");
  }).join("");

  const gridLines = [0, 0.5, 1].map(f => {
    const y = padT + f * (H - padT - padB);
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="var(--line)" stroke-width="1" stroke-dasharray="2 3"/>`;
  }).join("");

  el.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      ${gridLines}
      ${bars}
      <text x="${padL}" y="${H - 6}" font-size="9" font-family="'IBM Plex Mono', monospace" fill="var(--ink-faint)">${xLabels[0].text}</text>
      <text x="${W - padR}" y="${H - 6}" font-size="9" font-family="'IBM Plex Mono', monospace" fill="var(--ink-faint)" text-anchor="end">${xLabels[xLabels.length - 1].text}</text>
      <text x="${padL - 6}" y="${padT}" font-size="9" font-family="'IBM Plex Mono', monospace" fill="var(--ink-faint)" text-anchor="end" dominant-baseline="middle">${maxY}</text>
      <text x="${padL - 6}" y="${H - padB}" font-size="9" font-family="'IBM Plex Mono', monospace" fill="var(--ink-faint)" text-anchor="end" dominant-baseline="middle">0</text>
    </svg>
  `;
}

function updateDashboard(done, total) {
  document.getElementById("statTotal").textContent = total;

  const totalMin = ITEMS.reduce((acc, it, i) => archived[i] ? acc : acc + (it.durationMin || 0), 0);
  document.getElementById("statTiempoTotal").textContent = `${Math.floor(totalMin / 60)}h`;

  // tiempo restante: suma la duración de todo lo pendiente (no archivado, no visto) —
  // se muestra en la tarjeta de "Próximo expediente". en las series con capítulos,
  // se reparte la duración total entre los capítulos y solo cuenta como pendiente
  // los que faltan por ver, para que baje según vas marcando capítulos sueltos
  // y no solo al completar la temporada entera
  const pendingMin = ITEMS.reduce((acc, it, i) => {
    if (archived[i]) return acc;
    if (it.episodes) {
      const eps = episodeState[i] || [];
      const doneCount = eps.filter(Boolean).length;
      const remainingEps = Math.max(0, it.episodes - doneCount);
      return acc + remainingEps * (it.durationMin / it.episodes);
    }
    return acc + (state[i] ? 0 : (it.durationMin || 0));
  }, 0);
  const pendingMinRounded = Math.round(pendingMin);
  const totalHours = Math.floor(pendingMinRounded / 60);
  const mins = pendingMinRounded % 60;
  const timeLeftEl = document.getElementById("nextCardTimeLeft");
  timeLeftEl.textContent = pendingMinRounded === 0
    ? "Sin pendientes"
    : `Quedan ${totalHours}h ${mins}min`;

  const archivedCount = Object.values(archived).filter(Boolean).length;
  renderStatusDonut(done, total - done, archivedCount);

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
  const nextEpisode = document.getElementById("nextEpisode");
  const nextBtn = document.getElementById("nextCardBtn");
  const nextExpBadge = document.getElementById("nextExpBadge");
  const nextExpNum = document.getElementById("nextExpNum");
  const nextBadgeRow = document.getElementById("nextBadgeRow");

  if (nextIdx === -1) {
    nextTitle.textContent = "¡Expediente cerrado! 🎉 Lista para Doomsday.";
    nextEpisode.textContent = "";
    nextBadgeRow.innerHTML = "";
    nextExpBadge.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    const item = ITEMS[nextIdx];
    nextExpBadge.style.display = "";
    nextExpNum.textContent = String(nextIdx + 1).padStart(3, "0");
    nextTitle.textContent = item.title;

    // si es una serie, indicamos también qué capítulo concreto toca ver ahora
    if (item.episodes) {
      const eps = episodeState[nextIdx] || [];
      const nextEpIdx = eps.findIndex(e => !e);
      const epNum = nextEpIdx === -1 ? item.episodes : nextEpIdx + 1;
      nextEpisode.textContent = `▶ Siguiente: capítulo ${epNum} de ${item.episodes}`;
    } else {
      nextEpisode.textContent = "";
    }

    nextBadgeRow.innerHTML = `
      <span class="badge ${item.type === 'movie' ? 'type-movie' : 'type-show'}">${typeLabel(item.type)}</span>
      <span class="badge universe universe--${item.universe === 'MCU' ? 'mcu' : item.universe === 'Fox' ? 'fox' : item.universe === 'Sony' ? 'sony' : 'legacy'}">${item.universe}</span>
      <span class="badge where">${item.platform}</span>
    `;
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

  renderPhaseTracker(nextIdx);
}

// dibuja el "recorrido por las fases": un punto por cada una de las 11 fases,
// marcando cuáles ya se completaron y en cuál estás ahora mismo (la del
// próximo expediente pendiente), con el progreso dentro de esa fase concreta
function renderPhaseTracker(nextIdx) {
  const dotsEl = document.getElementById("phaseDots");
  const nameEl = document.getElementById("phaseTrackerName");
  const progressEl = document.getElementById("phaseTrackerProgress");

  const allDone = nextIdx === -1;
  const currentPhase = allDone ? PHASES_ORDER[PHASES_ORDER.length - 1] : ITEMS[nextIdx].phase;
  const currentPhaseIdx = PHASES_ORDER.indexOf(currentPhase);

  dotsEl.innerHTML = PHASES_ORDER.map((phase, i) => {
    const status = allDone || i < currentPhaseIdx ? "done" : i === currentPhaseIdx ? "current" : "";
    return `<span class="phase-dot${status ? ` phase-dot--${status}` : ""}" title="${phase}"></span>`;
  }).join("");

  const phaseItems = ITEMS.filter((it, i) => it.phase === currentPhase && !archived[i]);
  const phaseDone = ITEMS.reduce((acc, it, i) => acc + (it.phase === currentPhase && !archived[i] && state[i] ? 1 : 0), 0);

  nameEl.textContent = `${currentPhase} (${currentPhaseIdx + 1}/${PHASES_ORDER.length})`;
  progressEl.textContent = allDone
    ? "¡Recorrido completo! 🎉"
    : `${phaseDone}/${phaseItems.length} títulos vistos en esta fase`;
}

const TABS = ["resumen", "expedientes"];
const SUBTABS = ["abiertos", "cerrados", "archivados"];

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function switchTab(name) {
  TABS.forEach(t => {
    const panel = document.getElementById(`tab${capitalize(t)}`);
    const btn = document.getElementById(`tabBtn${capitalize(t)}`);
    const notch = document.getElementById(`notch${capitalize(t)}`);
    const active = t === name;
    panel.hidden = !active;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
    if (notch) notch.hidden = !active;
  });
  // la gráfica de progreso mide el ancho real de su contenedor (ver renderProgressChart),
  // así que si se actualizó mientras "Resumen" estaba oculta hay que volver a medirla
  // ahora que vuelve a ser visible, o se queda con el ancho de reserva
  if (name === "resumen") renderProgressChart();
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

document.getElementById("chartGranularity").addEventListener("change", (e) => {
  chartGranularity = e.target.value;
  try { localStorage.setItem(GRANULARITY_STORAGE_KEY, chartGranularity); } catch (err) {}
  renderProgressChart();
});

function toggle(idx) {
  const newState = !state[idx];
  markDone(idx, newState);
  if (ITEMS[idx].episodes) {
    episodeState[idx] = new Array(ITEMS[idx].episodes).fill(newState);
    for (let e = 0; e < ITEMS[idx].episodes; e++) setEpisodeWatched(idx, e, newState);
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
    localStorage.setItem(EP_DATE_STORAGE_KEY, JSON.stringify(episodeWatchedDates));
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
    const rawEpDates = localStorage.getItem(EP_DATE_STORAGE_KEY);
    if (rawEpDates) episodeWatchedDates = JSON.parse(rawEpDates);
    const rawRatings = localStorage.getItem(RATING_STORAGE_KEY);
    if (rawRatings) ratings = JSON.parse(rawRatings);
    const rawArchived = localStorage.getItem(ARCHIVE_STORAGE_KEY);
    if (rawArchived) archived = JSON.parse(rawArchived);
    const rawGranularity = localStorage.getItem(GRANULARITY_STORAGE_KEY);
    if (rawGranularity) chartGranularity = rawGranularity;
  } catch (e) {
    state = {};
    episodeState = {};
    watchedDates = {};
    episodeWatchedDates = {};
    ratings = {};
    archived = {};
    chartGranularity = "day";
  }
  const granularitySelect = document.getElementById("chartGranularity");
  if (granularitySelect) granularitySelect.value = chartGranularity;
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

function renderInlineDonut(chartId, counts, colorMap, centerLabel, keepOrder, labelFormatter) {
  const chart = document.getElementById(chartId);
  const infoEl = document.getElementById(chartId + "Info");
  const entries = keepOrder ? Object.entries(counts) : Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((acc, [, c]) => acc + c, 0);
  const fmt = labelFormatter || (l => l);

  const cx = 110, cy = 110, r = 78, strokeWidth = 40;
  const circumference = 2 * Math.PI * r;

  let cumulative = 0;
  const segs = entries.map(([label, count]) => {
    const color = colorMap[label] || "var(--ink-faint)";
    const frac = count / total;
    const segLen = frac * circumference;
    const dashoffset = -cumulative;
    const midAngle = -90 + ((cumulative + segLen / 2) / circumference) * 360;
    cumulative += segLen;
    const pct = Math.round(frac * 100);
    const mid = (midAngle * Math.PI) / 180;
    const tx = cx + r * Math.cos(mid);
    const ty = cy + r * Math.sin(mid);
    return { label, count, color, segLen, dashoffset, pct, tx, ty };
  });

  const circles = segs.map((s, i) => `
    <circle class="seg" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.color}" stroke-width="${strokeWidth}"
      stroke-dasharray="${s.segLen} ${circumference - s.segLen}" stroke-dashoffset="${s.dashoffset}"
      transform="rotate(-90 ${cx} ${cy})" data-seg="${i}">
      <title>${fmt(s.label)} — ${s.count} títulos (${s.pct}%)</title>
    </circle>
  `).join("");

  const pctLabels = segs.filter(s => s.pct >= 6).map(s => `
    <text x="${s.tx}" y="${s.ty}" font-size="12" font-weight="700" font-family="'IBM Plex Mono', monospace" fill="var(--paper)" text-anchor="middle" dominant-baseline="middle" pointer-events="none">${s.pct}%</text>
  `).join("");

  chart.innerHTML = `
    <svg viewBox="0 0 220 220">
      ${circles}
      ${pctLabels}
      <text x="${cx}" y="${cy}" font-size="16" font-weight="700" font-family="'Space Mono', monospace" fill="var(--ink)" text-anchor="middle" dominant-baseline="middle" pointer-events="none">${centerLabel.toUpperCase()}</text>
    </svg>
  `;

  chart.querySelectorAll(".seg").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const s = segs[parseInt(el.dataset.seg, 10)];
      if (infoEl) {
        infoEl.textContent = `${fmt(s.label)} — ${s.count} títulos (${s.pct}%)`;
        infoEl.classList.add("active");
      }
    });
  });
}

const PHASE_COLORS = {};
const PHASE_PALETTE = ["#2b6e63", "#b4401f", "#c99a3a", "#6b6459", "#3d6ea5", "#8a4b8a", "#3f8f6f", "#d4772e", "#a13d5c", "#4a5568", "#7a5c3e"];

function shortPhaseLabel(phase) {
  const m = phase.match(/Fase\s+[IVXL]+/i);
  return m ? m[0] : phase;
}

function renderCatalogStats() {
  const universeCounts = {};
  const platformCounts = {};
  const phaseCounts = {};

  ITEMS.forEach(item => {
    universeCounts[item.universe] = (universeCounts[item.universe] || 0) + 1;
    const p = normalizePlatform(item.platform);
    platformCounts[p] = (platformCounts[p] || 0) + 1;
    phaseCounts[item.phase] = (phaseCounts[item.phase] || 0) + 1;
  });

  Object.keys(phaseCounts).forEach((phase, idx) => {
    PHASE_COLORS[phase] = PHASE_PALETTE[idx % PHASE_PALETTE.length];
  });

  renderInlineDonut("universeDonut", universeCounts, UNIVERSE_COLORS, "Universo");
  renderInlineDonut("platformDonut", platformCounts, PLATFORM_COLORS, "Plataforma");
  renderInlineDonut("phaseDonut", phaseCounts, PHASE_COLORS, "Fases", true, shortPhaseLabel);
}

loadState();
updateCountdown();
renderCatalogStats();
setInterval(updateCountdown, 1000 * 60 * 60);

// re-dibuja la gráfica de progreso si cambia el ancho de la ventana, ya que el
// viewBox usa el ancho real en píxeles del contenedor (ver renderProgressChart)
let resizeChartTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeChartTimer);
  resizeChartTimer = setTimeout(renderProgressChart, 150);
});
