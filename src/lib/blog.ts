import { desc, eq, sql } from "drizzle-orm";
import { getDb } from "@/db";
import { blogPosts, type BlogPost, type BlogTranslations } from "@/db/schema";

export type PublicPost = Pick<
  BlogPost,
  "slug" | "author" | "coverEmoji" | "coverImage" | "publishedAt" | "translations"
>;

export const SEED_POSTS: PublicPost[] = [
  {
    slug: "how-cathay-cargo-terminal-powers-hkia-daily-logistics",
    author: "LoBot LLC Team",
    coverEmoji: "✈️",
    coverImage: "/images/blog/cathay cargo terminal.jpg",
    publishedAt: "2026-11-13",
    translations: {
      en: {
        title:
          "How Cathay Cargo Terminal powers the daily logistics of HKIA, the world’s busiest cargo airport",
        excerpt:
          "HKIA has been named the world’s busiest cargo airport for the 15th time since 2010. After a field visit to the Cathay Cargo Terminal, the LoBot team explains how it moves millions of import and export items, how the HKIA Cargo Data Platform keeps data flowing with governance and confidentiality, and what it all means for the future of air cargo logistics.",
        body: [
          "Hong Kong International Airport (HKIA) has just confirmed — for the 15th time since 2010 — its title as the world’s busiest cargo airport, with full-year 2025 data from Airports Council International showing cargo throughput of 5.07 million tonnes [1]. Behind every tonne stands a network of highly specialized cargo terminals that move, inspect, store, and secure shipments around the clock. As part of our field research into global logistics operations, the LoBot team recently visited one of them: the Cathay Cargo Terminal (CCT), the common-use facility at HKIA operated by Cathay Pacific Services Limited, a wholly owned subsidiary of Cathay [5]. In 2025 alone, the terminal provided cargo-handling services for the Cathay Group and 10 other scheduled airlines and handled 1.7 million tonnes of cargo, an 8% increase from 2024 [3]. Here is what our visit taught us about how it all works — including answers to the four questions we are asked most often about aviation cargo logistics in Hong Kong.",
          "__IMAGE__:/images/blog/hong kong international airport.jpg|HKIA terminal and runway at dusk with an aircraft departing|The aviation gateway of the Greater Bay Area, repeatedly ranked the world’s busiest cargo airport.",
          "Why does the world’s busiest airport need such complex cargo terminals to import and export goods between China, Hong Kong, and the rest of the world? The answer begins with geography and ends with physics. HKIA is the aviation gateway of a Greater Bay Area that is home to 86 million consumers and one of the world’s largest manufacturing belts, and Cathay Cargo connects this region to more than 100 destinations worldwide from its home hub [4]. The goods that justify air freight — semiconductors, pharmaceuticals, fresh seafood, live animals, urgent spare parts, and an enormous e-commerce volume — are precisely the goods that punish the slightest delay, temperature drift, or documentation error. Air cargo is therefore not simply “boxes on planes”: it is a precision supply chain in which speed, temperature control, security screening, customs compliance, and data accuracy must all be right the first time, at scale, every single day.",
          "Scale makes this complexity unavoidable. Around 140 airlines serve HKIA, connecting to more than 200 destinations, and the airport’s cargo community operates five air cargo handling facilities with more than 7 million tonnes of combined annual handling capacity, led by SuperTerminal 1 at 3.5 million tonnes per year [2], [6]. The Three-Runway System lifts HKIA’s long-term design capacity to 120 million passengers and 10 million tonnes of cargo annually [2]. Meanwhile, new initiatives continue to widen the import and export gateway between China, Hong Kong, and the world: the Air-Land Fresh Lane now moves premium perishables from HKIA into Greater Bay Area cities within hours, and the HKIA Dongguan Logistics Park has handled cargo valued at more than RMB 57 billion since its pilot launch [1]. Daily operations at this intensity can only be choreographed inside purpose-built cargo terminals.",
          "So how can Cathay Cargo Terminal handle millions of import and export items? Start with size: the terminal covers 246,000 m² over seven floors and is designed for an annual throughput of 2.7 million tonnes — one of the biggest and most sophisticated cargo terminals in the world [4], [5]. Continue with automation: storage-and-retrieval cranes move unit load devices (ULDs) through multi-level racking while digital systems synchronize acceptance checks, security screening, storage, build-up, and dispatch into one workflow. And continue with specialization: the terminal’s Pharma Handling Centre doubled its temperature-controlled capacity and can process around 235,000 tonnes of pharmaceuticals per year [4]. Combine this with Cathay Cargo’s hub network of more than 90 return freighter flights per week to over 40 destinations, plus belly capacity on passenger flights serving 100+ destinations [4], and you get a system designed to keep each shipment moving in minutes rather than days — which, compounded over a year, is exactly how millions of items clear the airport.",
          "__IMAGE__:/images/blog/hong kong air cargo handling.png|Ramp handling dollies and ground crew moving cargo at the airport|Ramp operations keep unit load devices flowing between aircraft and terminal around the clock.",
          "Our own observations on the ground filled in the operational detail of the import process. Shipments unloaded from arriving aircraft are transferred by autoloaders and vehicles such as crane trucks into the terminal, where each shipment passes a quality inspection — with any issue documented before it can move onward — and is then placed into specialized storage. Storage assignment reflects the nature of the goods: temperature-controlled environments for pharmaceutical and perishable items, secure storage for high-value cargo, and segregated space for dangerous goods. After customs formalities are cleared, shipments are retrieved and released for collection — steps that are increasingly digital, since Cathay Cargo Terminal became the first cargo terminal operator in Hong Kong to provide an end-to-end digitalised import collection process via its Electronic Shipment Release Form (eSRF) on the HKIA Cargo Data Platform [9].",
          "The export flow mirrors it in reverse — and is even more screening-heavy. Export shipments arrive at the terminal’s acceptance docks, are weighed and documented, and must pass security checks, including X-ray screening, before being accepted into storage. Hazardous and flammable cargoes are handled separately, in dedicated areas of the storage system that use distinctly colored cranes — the blue and red cranes observed during our visit are reserved for this category of cargo, keeping the risk isolated from general freight. Finally, accepted shipments are built up into aircraft-ready ULDs and dispatched to their flights on the ramp.",
          "What impressed us as much as the machinery was the discipline around exceptions. Overweight cargo triggers additional inspections and weight verification before a shipment is permitted anywhere near an aircraft. Shipments with missing documentation are held in dedicated storage while the terminal contacts the importer or forwarder to resolve the discrepancy; nothing moves until the documents and the goods agree. In a peak-season terminal where turnaround windows are measured in hours, such exception handling is what separates a contained exception from a cascading delay — and it protects flight safety and regulatory compliance first, customer timelines second.",
          "__IMAGE__:/images/blog/cargo warning.jpg|A “fragile — handle with care” warning label on a carton|Special and sensitive shipments are given marked handling paths, from fragile cartons to live animals.",
          "Then there is cargo that eats, breathes, and needs a bed. Our observations of special cargo handling showed how strictly the terminal treats live animals. General animals in cages receive continuous care — feeding, checks, and monitoring — for a maximum of around six hours at a time. Equine shipments travel an even more specialized path: a large, climate-controlled facility where horses are fed, cared for, inspected on dedicated handling platforms, and prepared for international transport — for example, exports to Australia or the Chinese mainland, or imports from Xinjiang. Standard practice here is backed by accreditation: Cathay Cargo and Cathay Cargo Terminal both hold IATA CEIV Live Animals certification — the first carrier in Asia to do so [10] — and the terminal offers a temperature-controlled animal store room, a large animal handling area, and a horse handling platform for direct transfer between stalls and trucks [10]. When 65 of the world’s best showjumping horses arrived for the Hong Kong International Horse Show, they were received through the terminal’s air-conditioned Large Animal Reception Room before continuing by truck [11], and Cathay Cargo moves more than 1,000 horses every year [12].",
          "Our third question concerns the invisible layer: how can the HKIA Cargo Data Platform help store and share the millions of data records generated by HKIA, Cathay Cargo Terminal, and similar operators — making Hong Kong’s cargo logistics industry more seamless while every entity’s data remains governed and confidential? Launched in 2021, the platform is a blockchain-enabled digital ecosystem network connecting the key air cargo stakeholders, namely freight forwarders, airlines, and cargo terminal operators, replacing point-to-point integrations and paper with a single neutral, synchronised data exchange [8]. It is organized into five core modules — Import, Export, sea–air transhipment (STFS), Dongguan, and Trade Declaration — and follows a “share once, use many” data-sharing principle, providing track-and-trace visibility and consensus standards for processes and data [7].",
          "Openness does not mean a free-for-all — governance is what makes sharing safe. Data collected on the platform is shared with third parties, for example financial institutions through the Hong Kong Monetary Authority’s Commercial Data Interchange, only with the consent of the participating users [8], and the platform’s own data pledge is anchored on transparency, security, and integrity under Hong Kong’s Personal Data (Privacy) Ordinance. Each operator — Cathay Cargo Terminal included — thus retains custody of its records while contributing exactly the schema fields the community needs, because the platform provides a neutral network for consensus-based data sharing and sets process and data standards for everyone [7]. The same rails have produced industry firsts: end-to-end digital import collection at Cathay Cargo Terminal [9], and the award-winning platform family now also includes HKIA Cargo Connect, the world’s first airport-led digital platform for airline partnerships [1].",
          "__IMAGE__:/images/blog/HKIA air cargo data platform.jpg|HKIA Cargo Data Platform graphic over an illustrated airport apron|The community platform connects freight forwarders, airlines, and cargo terminal operators on one shared digital backbone.",
          "So how does Cathay Cargo Terminal become a key logistics hub that ensures smooth daily operations at HKIA? It is the airport’s largest common-use cargo terminal partner, serving the Cathay Group and 10 other scheduled airlines [3]; its 1.7 million tonnes handled in 2025 represent roughly a third of the airport’s total throughput [1], [3]; and its safety culture earned the HKIA Safety Excellence Award — Silver under the Airport Safety Recognition Scheme 2025/26 [4]. As the Three-Runway System raises HKIA’s long-term capacity to 10 million tonnes of cargo [2] and e-commerce fulfilment becomes a strategic growth segment [1], the terminal’s blend of physical automation, specialized storage, exception discipline, and data connectivity is exactly what lets the world’s busiest cargo airport keep its daily promise.",
          "For LoBot, the visit was more than sightseeing. Certified pharma lanes, color-coded dangerous-goods cranes, six-hour live-animal protocols, and consent-based data sharing all working together — every single day — reinforce our conviction that the next generation of logistics intelligence, from shipment visibility platforms to AI-assisted products like our own LoBot TecnoIndicator, must be built on the same principles: precise data standards, honest exception handling, and respect for the physical journey of every item [13].",
        ],
        references: [
          {
            label:
              "Hong Kong International Airport, “HKIA Crowned World’s Busiest Cargo Airport in 2025,” Airport Authority Hong Kong, Apr. 14, 2026. [Online]. Available: https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859 (accessed Nov. 13, 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859",
          },
          {
            label:
              "Airport Authority Hong Kong, “Hong Kong International Airport Annual Report 2024/25,” Airport Authority Hong Kong, Jun. 25, 2025. [Online]. Available: https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf (accessed Nov. 13, 2026).",
            url: "https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “The Cathay Group announces 2025 Annual Results,” Cathay Pacific, Mar. 11, 2026. [Online]. Available: https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf (accessed Nov. 13, 2026).",
            url: "https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf",
          },
          {
            label:
              "Cathay Cargo, “Cathay Cargo and the Greater Bay Area,” Cathay Cargo, 2026. [Online]. Available: https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html (accessed Nov. 13, 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “Subsidiaries, Associates & Services — Cathay Cargo Terminal (Cathay Pacific Services Limited),” Cathay Pacific, 2026. [Online]. Available: https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html (accessed Nov. 13, 2026).",
            url: "https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html",
          },
          {
            label:
              "Hong Kong Trade Development Council, “Logistics Industry in Hong Kong,” HKTDC Research, Sep. 22, 2026. [Online]. Available: https://research.hktdc.com/en/article/MzExMjkxOTgy (accessed Nov. 13, 2026).",
            url: "https://research.hktdc.com/en/article/MzExMjkxOTgy",
          },
          {
            label:
              "Airport Authority Hong Kong, “HKIA Cargo Data Platform — Connecting Hong Kong’s air cargo community smarter,” HKIA Cargo Intelligent Portal, 2026. [Online]. Available: https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform (accessed Nov. 13, 2026).",
            url: "https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform",
          },
          {
            label:
              "Airport Authority Hong Kong, “Airport Authority Supports Digital Trade Finance Leveraging HKIA Cargo Data,” Airport Authority Hong Kong, Jul. 28, 2025. [Online]. Available: https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804 (accessed Nov. 13, 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804",
          },
          {
            label:
              "International Air Transport Association, “An end-to-end digital import process,” Airlines Magazine, Mar. 11, 2024. [Online]. Available: https://airlines.iata.org/2024/03/11/end-end-digital-import-process (accessed Nov. 13, 2026).",
            url: "https://airlines.iata.org/2024/03/11/end-end-digital-import-process",
          },
          {
            label:
              "Cathay Cargo, “Cathay Live Animal — Animal logistics solution,” Cathay Cargo, 2026. [Online]. Available: https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html (accessed Nov. 13, 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html",
          },
          {
            label:
              "Cathay Cargo, “Behind the scenes: how we flew 65 of the world’s best horses to Hong Kong,” Cathay Cargo, Feb. 27, 2025. [Online]. Available: https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html (accessed Nov. 13, 2026).",
            url: "https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html",
          },
          {
            label:
              "Cathay Pacific, “Cathay Cargo flies CAVALLUNA’s equine cast to its first stage outside Europe,” Cathay Pacific Newsroom, 2026. [Online]. Available: https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav (accessed Nov. 13, 2026).",
            url: "https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Online]. Available: https://tecnoindicator.vercel.app/ (accessed Nov. 13, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      es: {
        title:
          "Cómo la Cathay Cargo Terminal impulsa la logística diaria de HKIA, el aeropuerto de carga más transitado del mundo",
        excerpt:
          "HKIA ha sido nombrado el aeropuerto de carga más transitado del mundo por 15.ª vez desde 2010. Tras una visita de campo a la Cathay Cargo Terminal, el equipo de LoBot explica cómo maneja millones de artículos de importación y exportación, cómo el HKIA Cargo Data Platform mantiene los datos fluyendo con gobernanza y confidencialidad, y qué significa todo esto para el futuro de la logística de carga aérea.",
        body: [
          "El aeropuerto internacional de Hong Kong (HKIA) acaba de confirmar —por 15.ª vez desde 2010— su título de aeropuerto de carga más transitado del mundo, con datos de todo el año 2025 de Airports Council International que muestran un volumen de carga de 5,07 millones de toneladas [1]. Detrás de cada tonelada hay una red de terminales de carga altamente especializadas que mueven, inspeccionan, almacenan y protegen los envíos sin interrupción. Como parte de nuestra investigación de campo sobre operaciones logísticas globales, el equipo de LoBot visitó recientemente una de ellas: la Cathay Cargo Terminal (CCT), la instalación de uso común en HKIA operada por Cathay Pacific Services Limited, una filial de propiedad total de Cathay [5]. Solo en 2025, la terminal prestó servicios de manipulación de carga al Cathay Group y a otras 10 aerolíneas programadas, y manejó 1,7 millones de toneladas de carga, un 8% más que en 2024 [3]. Esto es lo que aprendimos durante nuestra visita —cómo funciona todo junto— incluidas las respuestas a las cuatro preguntas que más nos hacen sobre la logística de carga aérea en Hong Kong.",
          "__IMAGE__:/images/blog/hong kong international airport.jpg|Terminal y pista de HKIA al atardecer con un avión despegando|La puerta aérea del Gran Área de la Bahía, clasificada repetidamente como el aeropuerto de carga más transitado del mundo.",
          "¿Por qué el aeropuerto de carga más transitado del mundo necesita terminales de carga tan complejas para importar y exportar mercancías entre China, Hong Kong y el resto del mundo? La respuesta comienza en la geografía y termina en la física. HKIA es la puerta aérea del Gran Área de la Bahía, hogar de 86 millones de consumidores y de uno de los cinturones de manufactura más grandes del mundo, y Cathay Cargo conecta esta región con más de 100 destinos en todo el mundo desde su centro de operaciones [4]. Las mercancías que justifican el transporte aéreo —semiconductores, productos farmacéuticos, mariscos frescos, animales vivos, repuestos urgentes y un enorme volumen de comercio electrónico— son precisamente las que castigan cualquier retraso, desviación de temperatura o error de documentación, por mínimo que sea. La carga aérea no es simplemente “cajas en aviones”: es una cadena de suministro de precisión en la que velocidad, control de temperatura, inspección de seguridad, cumplimiento aduanero y exactitud de datos deben estar bien a la primera, a gran escala, todos los días.",
          "La escala hace inevitable esta complejidad. Alrededor de 140 aerolíneas sirven a HKIA, con conexiones a más de 200 destinos, y la comunidad de carga del aeropuerto opera cinco instalaciones de manipulación de carga con más de 7 millones de toneladas de capacidad anual combinada, encabezada por SuperTerminal 1 con 3,5 millones de toneladas al año [2], [6]. El sistema de tres pistas eleva la capacidad de diseño a largo plazo de HKIA a 120 millones de pasajeros y 10 millones de toneladas de carga al año [2]. Mientras tanto, nuevas iniciativas siguen ampliando la puerta de importación y exportación entre China, Hong Kong y el mundo: el carril aéreo-terrestre Air-Land Fresh Lane mueve ahora perecederos de primera calidad desde HKIA hasta ciudades del Gran Área de la Bahía en cuestión de horas, y el HKIA Dongguan Logistics Park ha manejado carga valorada en más de 57.000 millones de RMB desde su lanzamiento piloto [1]. Operaciones diarias de esta intensidad solo se pueden coreografiar dentro de terminales de carga construidas a propósito.",
          "Entonces, ¿cómo puede la Cathay Cargo Terminal manejar millones de artículos de importación y exportación? Empecemos por el tamaño: la terminal cubre 246.000 m² en siete pisos y está diseñada para un rendimiento anual de 2,7 millones de toneladas, una de las terminales de carga más grandes y sofisticadas del mundo [4], [5]. Sigamos con la automatización: grúas de almacenamiento y recuperación mueven contenedores de carga (ULD) a través de estanterías de varios niveles, mientras los sistemas digitales sincronizan aceptación, inspección de seguridad, almacenamiento, consolidación y despacho en un solo flujo. Y sigamos con la especialización: el Pharma Handling Centre de la terminal duplicó su capacidad de temperatura controlada y puede procesar alrededor de 235.000 toneladas de productos farmacéuticos al año [4]. Sume a esto la red de centro de operaciones de Cathay Cargo, con más de 90 vuelos cargueros de ida y vuelta por semana a más de 40 destinos, más la capacidad de bodega en vuelos de pasajeros hacia más de 100 destinos [4]: el resultado es un sistema diseñado para mantener cada envío en movimiento en minutos y no en días, que, acumulado durante un año, es exactamente como millones de artículos circulan por el aeropuerto.",
          "__IMAGE__:/images/blog/hong kong air cargo handling.png|Carros porta-palets y personal de tierra moviendo carga en el aeropuerto|Las operaciones en rampa mantienen los ULD fluyendo entre aviones y terminal sin interrupción.",
          "Nuestras propias observaciones en tierra completaron el detalle operativo del proceso de importación. Los envíos descargados de los aviones que llegan se transfieren mediante autoloaders y vehículos como camiones grúa hacia la terminal, donde cada envío pasa una inspección de calidad —con cualquier incidencia documentada antes de continuar— y luego se coloca en almacenamiento especializado. La asignación de almacenamiento refleja la naturaleza de las mercancías: ambientes de temperatura controlada para artículos farmacéuticos y perecederos, almacenamiento seguro para carga de alto valor y espacios segregados para mercancías peligrosas. Una vez completadas las formalidades aduaneras, los envíos se recuperan y se liberan para su recogida —pasos cada vez más digitales, ya que la Cathay Cargo Terminal fue el primer operador de terminales de carga de Hong Kong en ofrecer una recogida de importación digitalizada de extremo a extremo mediante su Electronic Shipment Release Form (eSRF) en el HKIA Cargo Data Platform [9].",
          "El flujo de exportación funciona en sentido inverso —y requiere aún más inspecciones. Los envíos de exportación llegan a los muelles de aceptación de la terminal, se pesan y se documentan, y deben pasar controles de seguridad, incluida la inspección por rayos X, antes de ser aceptados en el almacén. Las mercancías peligrosas e inflamables se manipulan por separado, en áreas dedicadas del sistema de almacenamiento que utilizan grúas de colores distintivos: las grúas azules y rojas observadas durante nuestra visita están reservadas para esta categoría de carga, aislando el riesgo del resto del flete. Finalmente, los envíos aceptados se consolidan en ULD listos para avión y se despachan a sus vuelos en la rampa.",
          "Tanto como la maquinaria, nos impresionó la disciplina frente a las excepciones. La carga con sobrepeso activa inspecciones adicionales y verificación de peso antes de que el envío pueda acercarse a un avión. Los envíos con documentación faltante quedan en espera en almacenes dedicados mientras la terminal contacta al importador o al transitario para resolver la discrepancia; nada se mueve hasta que los documentos y las mercancías concuerden. En una terminal en temporada alta, donde las ventanas de rotación se miden en horas, este manejo de excepciones es lo que separa una excepción contenida de un retraso en cascada, y protege primero la seguridad operacional y el cumplimiento regulatorio, y después los plazos del cliente.",
          "__IMAGE__:/images/blog/cargo warning.jpg|Etiqueta de advertencia “fragil — manipular con cuidado” en un cartón|Los envíos especiales y sensibles reciben rutas de manipulación señalizadas, desde cartones frágiles hasta animales vivos.",
          "Luego está la carga que come, respira y necesita una cama. Nuestras observaciones de la carga especial mostraron con cuánto rigor trata la terminal a los animales vivos. Los animales en general, en jaulas, reciben cuidado continuo —alimentación, controles y monitoreo— por un máximo de alrededor de seis horas a la vez. Los envíos equinos recorren un camino aún más especializado: una gran instalación controlada donde los caballos se alimentan, se cuidan, se inspeccionan en plataformas dedicadas y se preparan para transporte internacional —por ejemplo, exportaciones a Australia o a China continental, o importaciones desde Xinjiang. La práctica estándar aquí cuenta con acreditación: Cathay Cargo y Cathay Cargo Terminal poseen ambas la certificación IATA CEIV Live Animals, siendo la primera aerolínea de Asia en lograrlo [10], y la terminal ofrece un almacén para animales con temperatura controlada, una amplia área de manejo de animales y una plataforma de manejo equino para la transferencia directa entre establos y camiones [10]. Cuando 65 de los mejores caballos de salto del mundo llegaron para el Hong Kong International Horse Show, fueron recibidos por la Sala de Recepción de Grandes Animales de la terminal, climatizada, antes de continuar en camión [11], y Cathay Cargo transporta más de 1.000 caballos cada año [12].",
          "Nuestra tercera pregunta se refiere a la capa invisible: ¿cómo puede el HKIA Cargo Data Platform ayudar a almacenar y compartir los millones de registros de datos generados por HKIA, la Cathay Cargo Terminal y operadores similares, haciendo la industria de logística de carga de Hong Kong más fluida mientras los datos de cada entidad permanecen gobernados y confidenciales? Lanzada en 2021, la plataforma es una red de ecosistema digital habilitada por blockchain que conecta a los actores clave de la carga aérea —transitarios, aerolíneas y operadores de terminales de carga—, reemplazando las integraciones punto a punto y el papel por un intercambio de datos único, neutral y sincronizado [8]. Se organiza en cinco módulos principales (importación, exportación, transbordo mar-aire STFS, Dongguan y declaración de comercio) y sigue el principio de compartir “una vez compartido, úsese muchas veces”, ofreciendo visibilidad de rastreo y estándares consensuados de procesos y de datos [7].",
          "La apertura no significa que todo vale todo: la gobernanza es lo que hace que compartir sea seguro. Los datos recopilados en la plataforma solo se comparten con terceros —por ejemplo, con instituciones financieras a través del Commercial Data Interchange de la Autoridad Monetaria de Hong Kong— con el consentimiento de los usuarios participantes [8], y el compromiso de datos de la plataforma se ancla en la transparencia, la seguridad y la integridad bajo la Ordenanza de Privacidad de Datos Personales de Hong Kong. Cada operador —incluida la Cathay Cargo Terminal— conserva así la custodia de sus registros mientras aporta exactamente los campos del esquema que la comunidad necesita, porque la plataforma ofrece una red neutral para un consenso en el intercambio de datos y fija estándares de procesos y de datos para todos [7]. Sobre los mismos rieles se produjeron hitos pioneros: la recogida de importación digitalizada de extremo a extremo en la Cathay Cargo Terminal [9] y, en la galardonada familia de plataformas, el nuevo HKIA Cargo Connect, la primera plataforma digital de aerolíneas liderada por un aeropuerto en el mundo [1].",
          "__IMAGE__:/images/blog/HKIA air cargo data platform.jpg|Gráfico del HKIA Cargo Data Platform sobre una plataforma ilustrada de aeropuerto|La plataforma comunitaria conecta transitarios, aerolíneas y operadores de terminales en una única base digital compartida.",
          "Entonces, ¿cómo se convierte la Cathay Cargo Terminal en un centro logístico clave que garantice el buen funcionamiento diario de HKIA? Es el socio de terminales de carga de uso común más grande del aeropuerto, al servicio del Cathay Group y de otras 10 aerolíneas [3]; sus 1,7 millones de toneladas manejadas en 2025 representan aproximadamente un tercio del volumen total del aeropuerto [1], [3]; y su cultura de seguridad le mereció el HKIA Safety Excellence Award, plata en el Airport Safety Recognition Scheme 2025/26 [4]. A medida que el sistema de tres pistas eleve la capacidad a largo plazo de HKIA a 10 millones de toneladas de carga [2] y la logística de pedidos de comercio electrónico se convierta en un segmento estratégico en crecimiento [1], la combinación de automatización física, almacenamiento especializado, disciplina de excepciones y conectividad de datos es exactamente lo que permite al aeropuerto de carga más transitado del mundo cumplir su promesa diaria.",
          "Para LoBot, la visita fue más que turismo. Carriles farmacéuticos certificados, grúas de mercancías peligrosas codificadas por colores, protocolos de animales vivos de seis horas e intercambio de datos basado en consentimiento, todo funcionando junto —día tras día— refuerza nuestra convicción de que la próxima generación de inteligencia logística, desde plataformas de visibilidad de envíos hasta productos asistidos por IA como nuestro propio LoBot TecnoIndicator, debe construirse sobre los mismos principios: estándar de datos precisos, manejo honesto de excepciones y respeto por el viaje físico de cada artículo [13].",
        ],
        references: [
          {
            label:
              "Hong Kong International Airport, “HKIA Crowned World’s Busiest Cargo Airport in 2025,” Airport Authority Hong Kong, 14 abr. 2026. [En línea]. Disponible: https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859 (consultado: 13 nov. 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859",
          },
          {
            label:
              "Airport Authority Hong Kong, “Hong Kong International Airport Annual Report 2024/25,” Airport Authority Hong Kong, 25 jun. 2025. [En línea]. Disponible: https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf (consultado: 13 nov. 2026).",
            url: "https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “The Cathay Group announces 2025 Annual Results,” Cathay Pacific, 11 mar. 2026. [En línea]. Disponible: https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf (consultado: 13 nov. 2026).",
            url: "https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf",
          },
          {
            label:
              "Cathay Cargo, “Cathay Cargo and the Greater Bay Area,” Cathay Cargo, 2026. [En línea]. Disponible: https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html (consultado: 13 nov. 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “Subsidiaries, Associates & Services — Cathay Cargo Terminal (Cathay Pacific Services Limited),” Cathay Pacific, 2026. [En línea]. Disponible: https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html (consultado: 13 nov. 2026).",
            url: "https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html",
          },
          {
            label:
              "Hong Kong Trade Development Council, “Logistics Industry in Hong Kong,” HKTDC Research, 22 sep. 2026. [En línea]. Disponible: https://research.hktdc.com/en/article/MzExMjkxOTgy (consultado: 13 nov. 2026).",
            url: "https://research.hktdc.com/en/article/MzExMjkxOTgy",
          },
          {
            label:
              "Airport Authority Hong Kong, “HKIA Cargo Data Platform — Connecting Hong Kong’s air cargo community smarter,” HKIA Cargo Intelligent Portal, 2026. [En línea]. Disponible: https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform (consultado: 13 nov. 2026).",
            url: "https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform",
          },
          {
            label:
              "Airport Authority Hong Kong, “Airport Authority Supports Digital Trade Finance Leveraging HKIA Cargo Data,” Airport Authority Hong Kong, 28 jul. 2025. [En línea]. Disponible: https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804 (consultado: 13 nov. 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804",
          },
          {
            label:
              "International Air Transport Association, “An end-to-end digital import process,” Airlines Magazine, 11 mar. 2024. [En línea]. Disponible: https://airlines.iata.org/2024/03/11/end-end-digital-import-process (consultado: 13 nov. 2026).",
            url: "https://airlines.iata.org/2024/03/11/end-end-digital-import-process",
          },
          {
            label:
              "Cathay Cargo, “Cathay Live Animal — Animal logistics solution,” Cathay Cargo, 2026. [En línea]. Disponible: https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html (consultado: 13 nov. 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html",
          },
          {
            label:
              "Cathay Cargo, “Behind the scenes: how we flew 65 of the world’s best horses to Hong Kong,” Cathay Cargo, 27 feb. 2025. [En línea]. Disponible: https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html (consultado: 13 nov. 2026).",
            url: "https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html",
          },
          {
            label:
              "Cathay Pacific, “Cathay Cargo flies CAVALLUNA’s equine cast to its first stage outside Europe,” Cathay Pacific Newsroom, 2026. [En línea]. Disponible: https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav (consultado: 13 nov. 2026).",
            url: "https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [En línea]. Disponible: https://tecnoindicator.vercel.app/ (consultado: 13 nov. 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      vi: {
        title:
          "Cách Cathay Cargo Terminal vận hành logistics hằng ngày của HKIA — sân bay có lượng hàng hóa bận rộn nhất thế giới",
        excerpt:
          "HKIA vừa lần thứ 15 kể từ năm 2010 được vinh danh là sân bay hàng hóa bận rộn nhất thế giới. Sau chuyến thăm thực địa tại Cathay Cargo Terminal, nhóm LoBot giải thích cách nhà ga này đưa hàng triệu kiện hàng nhập khẩu và xuất khẩu qua sân bay, cách nền tảng dữ liệu HKIA Cargo Data Platform giúp dữ liệu luân chuyển có quản trị và bảo mật, và tất cả có ý nghĩa gì cho tương lai của nghiệp vụ vận tải hàng không.",
        body: [
          "Sân bay quốc tế Hong Kong (HKIA) vừa xác nhận — lần thứ 15 kể từ năm 2010 — danh hiệu sân bay có lượng hàng hóa bận rộn nhất thế giới: dữ liệu cả năm 2025 của Airports Council International cho thấy tổng lượng hàng thông qua đạt 5,07 triệu tấn [1]. Phía sau từng tấn hàng là một mạng lưới các nhà ga hàng hóa chuyên biệt cao, nơi hàng hóa được chuyển, kiểm tra, lưu trữ và bảo đảm suốt ngày đêm. Trong khuôn khổ nghiên cứu thực địa về vận hành logistics toàn cầu, nhóm LoBot gần đây đã ghé thăm một trong số đó: Cathay Cargo Terminal (CCT) — nhà ga hàng hóa dùng chung tại HKIA do Cathay Pacific Services Limited, công ty con hoàn toàn thuộc Cathay, vận hành [5]. Chỉ riêng năm 2025, nhà ga đã cung cấp dịch vụ xử lý hàng hóa cho Cathay Group cùng 10 hãng hàng không theo lịch bay khác và xử lý 1,7 triệu tấn hàng, tăng 8% so với năm 2024 [3]. Đây là những điều chuyến thăm giúp chúng tôi hiểu về cách mọi thứ vận hành — kèm theo lời giải cho bốn câu hỏi mà chúng tôi thường được hỏi nhiều nhất về nghiệp vụ hàng hóa hàng không tại Hong Kong.",
          "__IMAGE__:/images/blog/hong kong international airport.jpg|Nhà ga và đường băng của HKIA lúc hoàng hôn với chuyến bay đang cất cánh|Cổng hàng không của Vùng Vịnh Lớn, nhiều lần được vinh danh là sân bay hàng hóa bận rộn nhất thế giới.",
          "Vì sao sân bay bận rộn nhất thế giới lại cần những nhà ga hàng hóa phức tạp đến vậy để nhập khẩu và xuất khẩu hàng hóa giữa Trung Quốc, Hong Kong và phần còn lại của thế giới? Câu trả lời bắt đầu từ địa lý và khép lại ở vật lý. HKIA là cổng hàng không của Vùng Vịnh Lớn — nơi sinh sống của 86 triệu người tiêu dùng và thuộc về một trong những vành đai sản xuất lớn nhất thế giới — và Cathay Cargo kết nối khu vực này với hơn 100 điểm đến trên toàn cầu từ trung tâm tại Hong Kong [4]. Những mặt hàng xứng đáng đi đường hàng không — bán dẫn, dược phẩm, hải sản tươi sống, động vật sống, phụ tùng khẩn cấp và khối lượng thương mại điện tử khổng lồ — cũng chính là những mặt hàng “dễ tổn thương” nhất trước mọi chậm trễ, sai lệch nhiệt độ hay lỗi chứng từ. Vì thế, hàng hóa hàng không không đơn thuần là “các thùng hàng trên máy bay”: đó là một chuỗi cung ứng chính xác, nơi tốc độ, kiểm soát nhiệt độ, kiểm tra an ninh, tuân thủ hải quan và độ chính xác của dữ liệu đều phải đúng ngay từ lần đầu tiên, ở quy mô lớn, mỗi ngày.",
          "Quy mô khiến độ phức tạp này trở thành điều không thể tránh. Khoảng 140 hãng hàng không khai thác tại HKIA với kết nối đến hơn 200 điểm đến, và cộng đồng hàng hóa của sân bay vận hành năm cơ sở xử lý hàng hóa với tổng công suất trên 7 triệu tấn mỗi năm, dẫn đầu là SuperTerminal 1 với công suất 3,5 triệu tấn mỗi năm [2], [6]. Hệ thống ba đường băng nâng công suất thiết kế dài hạn của HKIA lên 120 triệu hành khách và 10 triệu tấn hàng hóa mỗi năm [2]. Trong khi đó, các sáng kiến mới tiếp tục mở rộng cổng xuất nhập khẩu giữa Trung Quốc, Hong Kong và thế giới: tuyến Air-Land Fresh Lane đưa hàng tươi đạt chuẩn từ HKIA về các thành phố trong Vùng Vịnh Lớn chỉ sau vài giờ, còn Khu logistics HKIA Dongguan Logistics Park đã xử lý lượng hàng trị giá hơn 57 tỷ nhân dân tệ kể từ khi vận hành thí điểm [1]. Nghiệp vụ hằng ngày với cường độ này chỉ có thể được biên đạo bên trong những nhà ga hàng hóa được thiết kế chuyên dụng.",
          "Vậy Cathay Cargo Terminal xử lý hàng triệu kiện hàng nhập và xuất khẩu bằng cách nào? Hãy bắt đầu từ quy mô: nhà ga trải rộng 246.000 m² trên bảy tầng, được thiết kế cho công suất 2,7 triệu tấn mỗi năm — một trong những nhà ga hàng hóa lớn nhất và hiện đại nhất thế giới [4], [5]. Tiếp đến là tự động hóa: các cần cẩu lưu trữ – lấy hàng di chuyển thùng hàng chuẩn (ULD) qua hệ thống kệ nhiều tầng, trong khi hệ thống số đồng bộ hóa các bước kiểm nhận, kiểm tra an ninh, lưu kho, đóng kiện và điều phối thành một quy trình duy nhất. Và tiếp nữa là chuyên biệt hóa: Trung tâm xử lý dược phẩm (Pharma Handling Centre) của nhà ga đã nhân đôi công suất lưu trữ kiểm soát nhiệt độ và có thể xử lý khoảng 235.000 tấn dược phẩm mỗi năm [4]. Cộng hưởng với mạng lưới trung tâm của Cathay Cargo — hơn 90 chuyến hàng nguyên máy khứ hồi mỗi tuần đến hơn 40 điểm đến, cộng thêm công suất khoang hàng của các chuyến bay hành khách phục vụ hơn 100 điểm đến [4] — ta có một hệ thống được thiết kế để từng lô hàng luôn di chuyển theo phút thay vì theo ngày; và cộng dồn qua một năm, đó chính là cách hàng triệu kiện hàng thông qua sân bay.",
          "__IMAGE__:/images/blog/hong kong air cargo handling.png|Xe chở pallet và tổ mặt đất đang chuyển hàng tại sân bay|Nghiệp vụ tại sân bay giữ dòng ULD lưu thông giữa máy bay và nhà ga suốt ngày đêm.",
          "Những quan sát thực địa của chính chúng tôi đã giúp bổ sung chi tiết nghiệp vụ cho quy trình nhập khẩu. Hàng hóa được dỡ khỏi máy bay hạ cánh sẽ được chuyển bằng xe tải tự động (autoloader) và các phương tiện như xe cần cẩu vào nhà ga, nơi từng lô hàng trải qua bước kiểm tra chất lượng — mọi vấn đề phát sinh đều được ghi nhận trước khi hàng tiếp tục di chuyển — sau đó được đưa vào kho lưu trữ chuyên biệt. Việc phân bổ kho phản ánh tính chất hàng hóa: môi trường kiểm soát nhiệt độ cho dược phẩm và hàng tươi sống, kho an toàn cho hàng hóa giá trị cao, và khu vực tách biệt cho hàng nguy hiểm. Khi thủ tục hải quan hoàn tất, hàng được đưa ra khỏi kho và trao cho người nhận — những bước đang ngày càng được số hóa: Cathay Cargo Terminal là nhà ga khai thác hàng hóa đầu tiên tại Hong Kong cung cấp quy trình nhận hàng nhập khẩu được số hóa trọn vẹn từ đầu đến cuối qua biểu mẫu Electronic Shipment Release Form (eSRF) trên nền tảng HKIA Cargo Data Platform [9].",
          "Dòng hàng xuất khẩu phản chiếu theo chiều ngược lại — và còn dày đặc khâu kiểm tra hơn. Hàng xuất khẩu được giao đến các bãi nhận hàng của nhà ga, được cân và lập chứng từ, rồi phải vượt qua các kiểm tra an ninh, trong đó có soi chiếu tia X, trước khi được tiếp nhận vào kho. Hàng nguy hiểm và dễ cháy được xử lý tách biệt, tại những khu vực chuyên dụng của hệ thống kho sử dụng các cần cẩu được phân biệt bằng màu sắc — những cần cẩu xanh và đỏ mà nhóm chúng tôi quan sát trong chuyến thăm được dành riêng cho dòng hàng này, giúp cô lập rủi ro khỏi hàng thông thường. Cuối cùng, hàng đã tiếp nhận sẽ được đóng thành các ULD sẵn sàng lên máy bay và được điều phối xuống đường băng cho các chuyến bay cất cánh.",
          "Điều khiến chúng tôi ấn tượng ngang với máy móc là kỷ luật xử lý ngoại lệ. Hàng quá tải kích hoạt kiểm tra bổ sung và đối chiếu cân nặng trước khi được phép đến gần bất kỳ chuyến bay nào. Hàng thiếu chứng từ được giữ tại kho chuyên dụng trong khi nhà ga liên hệ với bên nhập khẩu hoặc người giao nhận để xử lý thiếu sót; không có gì được giải phóng cho đến khi hồ sơ và hàng hóa khớp với nhau. Trong một nhà ga mùa cao điểm, nơi “cửa sổ” quá cảnh được tính bằng giờ, chính kỷ luật ngoại lệ này là ranh giới giữa một ngoại lệ được kiềm chế và một chuỗi trễ dây chuyền — nó bảo vệ an toàn khai thác cùng sự tuân thủ quy định trước, tiến độ của khách hàng sau.",
          "__IMAGE__:/images/blog/cargo warning.jpg|Nhãn cảnh báo “dễ vỡ — xin cẩn thận” trên thùng hàng|Hàng đặc biệt và nhạy cảm được cấp lộ trình xử lý riêng, từ thùng hàng dễ vỡ đến động vật sống.",
          "Rồi còn có loại hàng hóa biết ăn, biết thở và cần chỗ nghỉ riêng. Quan sát của chúng tôi về xử lý hàng đặc biệt cho thấy nhà ga nghiêm ngặt đến mức nào với động vật sống. Động vật nói chung trong lồng được chăm sóc liên tục — cho ăn, kiểm tra và theo dõi — tối đa khoảng sáu giờ mỗi lần. Ngựa đi trên lộ trình chuyên biệt hơn nữa: một cơ sở lớn được kiểm soát khí hậu, nơi từng con được cho ăn, chăm sóc, khám trên nền chuyên dụng và chuẩn bị cho vận chuyển quốc tế — ví dụ, xuất khẩu sang Úc hoặc vào Trung Quốc đại lục, hoặc nhập khẩu từ Tân Cương (Xinjiang). Thực hành chuẩn ở đây được bảo chứng bằng chứng nhận: cả Cathay Cargo lẫn Cathay Cargo Terminal đều đạt chứng nhận IATA CEIV Live Animals — hãng vận tải đầu tiên tại châu Á đạt được điều này [10] — và nhà ga có kho chứa động vật kiểm soát nhiệt độ, khu xử lý động vật rộng rãi cùng nền tiếp nhận ngựa chuyên dụng cho việc chuyển trực tiếp giữa chuồng và xe tải [10]. Khi 65 chú ngựa nhảy rào hay nhất thế giới đến Hong Kong dự giải Hong Kong International Horse Show, chúng được tiếp nhận qua Phòng tiếp nhận động vật lớn có điều hòa của nhà ga trước khi tiếp tục hành trình bằng xe tải [11], và Cathay Cargo mỗi năm vận chuyển hơn 1.000 con ngựa [12].",
          "Câu hỏi thứ ba liên quan đến tầng vô hình: HKIA Cargo Data Platform giúp gì trong việc lưu trữ và chia sẻ hàng triệu bản ghi dữ liệu do HKIA, Cathay Cargo Terminal và những nhà khai thác tương tự tạo ra — để ngành logistics hàng hóa của Hong Kong vận hành suôn sẻ hơn, trong khi dữ liệu của từng bên vẫn được quản trị đầy đủ và giữ bảo mật? Ra mắt năm 2021, nền tảng là một mạng sinh thái số dùng công nghệ blockchain, kết nối các bên liên quan chủ chốt của hàng hóa hàng không — công ty giao nhận, hãng hàng không và nhà khai thác nhà ga hàng hóa — thay thế các tích hợp điểm-điểm và giấy tờ bằng một kênh trao đổi dữ liệu trung lập, duy nhất và đồng bộ [8]. Nền tảng gồm năm phân hệ lõi — Nhập khẩu, Xuất khẩu, chuyển tải biển–hàng không (STFS), Dongguan và Tờ khai thương mại — và theo nguyên tắc chia sẻ dữ liệu “chia một lần, dùng nhiều lần”, cung cấp khả năng theo dõi hành trình lô hàng cùng các tiêu chuẩn đồng thuận về quy trình và dữ liệu [7].",
          "Mở không đồng nghĩa với tràn lan — chính yếu tố quản trị làm cho việc chia sẻ trở nên an toàn. Dữ liệu thu trên nền tảng chỉ được chia sẻ với bên thứ ba — chẳng hạn các định chế tài chính qua Kênh trao đổi dữ liệu thương mại (Commercial Data Interchange) của Cơ quan Tiền tệ Hong Kong (HKMA) — khi có sự đồng ý của người dùng tham gia [8], và cam kết dữ liệu của chính nền tảng dựa trên minh bạch, an ninh và toàn vẹn theo Pháp lệnh Bảo vệ Dữ liệu Cá nhân của Hong Kong. Nhờ vậy, mỗi nhà khai thác — trong đó có Cathay Cargo Terminal — vẫn giữ quyền quản lý hồ sơ của mình, đồng thời đóng góp chính xác những trường dữ liệu (schema) mà cộng đồng cần, vì nền tảng cung cấp một mạng trung lập cho việc chia sẻ dữ liệu dựa trên sự đồng thuận và đặt ra chuẩn quy trình cùng chuẩn dữ liệu cho tất cả [7]. Trên chính những “đường ray” đó đã xuất hiện những cột mốc tiên phong: quy trình nhận hàng nhập khẩu số hóa trọn vẹn tại Cathay Cargo Terminal [9], và dòng nền tảng đoạt giải giờ còn có HKIA Cargo Connect — nền tảng số do sân bay dẫn dắt đầu tiên trên thế giới dành cho quan hệ đối tác hãng hàng không [1].",
          "__IMAGE__:/images/blog/HKIA air cargo data platform.jpg|Đồ họa HKIA Cargo Data Platform trên hình minh họa sân bay|Nền tảng cộng đồng kết nối công ty giao nhận, hãng hàng không và nhà khai thác nhà ga trên cùng một xương sống dữ liệu dùng chung.",
          "Vậy Cathay Cargo Terminal trở thành một trung tâm logistics trọng điểm bảo đảm cho các vận hành suôn sẻ mỗi ngày tại HKIA như thế nào? Đó là đối tác nhà ga dùng chung lớn nhất của sân bay, phục vụ Cathay Group và 10 hãng hàng không khác [3]; 1,7 triệu tấn hàng năm 2025 tương đương khoảng một phần ba tổng lượng thông qua của sân bay [1], [3]; và văn hóa an toàn của nhà ga đã giành giải HKIA Safety Excellence Award — hạng Bạc theo Chương trình ghi nhận An toàn Sân bay 2025/26 [4]. Khi Hệ thống ba đường băng nâng công suất dài hạn của HKIA lên 10 triệu tấn hàng [2] và hoàn tất đơn thương mại điện tử trở thành phân khúc tăng trưởng chiến lược [1], sự pha trộn giữa tự động hóa vật lý, kho chuyên biệt, kỷ luật ngoại lệ và kết nối dữ liệu chính là thứ giúp sân bay hàng hóa bận rộn nhất thế giới giữ vững lời hứa hằng ngày.",
          "Với LoBot, chuyến thăm là hơn cả việc ngắm cảnh. Các làn dược phẩm đạt chứng nhận, những cần cẩu hàng nguy hiểm phân màu theo cấp độ rủi ro, quy trình động vật sống sáu giờ và việc chia sẻ dữ liệu dựa trên sự đồng ý — tất cả cùng vận hành mỗi ngày — củng cố niềm tin của chúng tôi rằng thế hệ nghiệp vụ logistics tiếp theo, từ nền tảng theo dõi lô hàng đến các sản phẩm có AI hỗ trợ như chính LoBot TecnoIndicator của chúng tôi, phải được xây dựng trên các nguyên tắc tương tự: chuẩn dữ liệu chính xác, xử lý ngoại lệ trung thực, và tôn trọng hành trình thực của từng kiện hàng [13].",
        ],
        references: [
          {
            label:
              "Hong Kong International Airport, “HKIA Crowned World’s Busiest Cargo Airport in 2025,” Airport Authority Hong Kong, 14 thg. 4, 2026. [Trực tuyến]. Có tại: https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859 (truy cập: 13 thg. 11, 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1859",
          },
          {
            label:
              "Airport Authority Hong Kong, “Hong Kong International Airport Annual Report 2024/25,” Airport Authority Hong Kong, 25 thg. 6, 2025. [Trực tuyến]. Có tại: https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf (truy cập: 13 thg. 11, 2026).",
            url: "https://www.hongkongairport.com/iwov-resources/file/airport-authority/publications/annual-and-interim-reports/en/24_25/Eng_AR2025_full_book_bookmarked.pdf",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “The Cathay Group announces 2025 Annual Results,” Cathay Pacific, 11 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf (truy cập: 13 thg. 11, 2026).",
            url: "https://www.cathaypacific.com/content/dam/cx/about-us/investor-relations/announcements/en/2025-cx-annual-results-en.pdf",
          },
          {
            label:
              "Cathay Cargo, “Cathay Cargo and the Greater Bay Area,” Cathay Cargo, 2026. [Trực tuyến]. Có tại: https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html (truy cập: 13 thg. 11, 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/greater-bay-area.html",
          },
          {
            label:
              "Cathay Pacific Airways Limited, “Subsidiaries, Associates & Services — Cathay Cargo Terminal (Cathay Pacific Services Limited),” Cathay Pacific, 2026. [Trực tuyến]. Có tại: https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html (truy cập: 13 thg. 11, 2026).",
            url: "https://www.cathaypacific.com/cx/en_HK/about-us/about-our-airline/subsidiaries-and-associates.html",
          },
          {
            label:
              "Hong Kong Trade Development Council, “Logistics Industry in Hong Kong,” HKTDC Research, 22 thg. 9, 2026. [Trực tuyến]. Có tại: https://research.hktdc.com/en/article/MzExMjkxOTgy (truy cập: 13 thg. 11, 2026).",
            url: "https://research.hktdc.com/en/article/MzExMjkxOTgy",
          },
          {
            label:
              "Airport Authority Hong Kong, “HKIA Cargo Data Platform — Connecting Hong Kong’s air cargo community smarter,” HKIA Cargo Intelligent Portal, 2026. [Trực tuyến]. Có tại: https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform (truy cập: 13 thg. 11, 2026).",
            url: "https://www.hkiacargo.com/en/digital-solutions/hkia-cargo-data-platform",
          },
          {
            label:
              "Airport Authority Hong Kong, “Airport Authority Supports Digital Trade Finance Leveraging HKIA Cargo Data,” Airport Authority Hong Kong, 28 thg. 7, 2025. [Trực tuyến]. Có tại: https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804 (truy cập: 13 thg. 11, 2026).",
            url: "https://www.hongkongairport.com/en/media-centre/press-release/2025/pr_1804",
          },
          {
            label:
              "International Air Transport Association, “An end-to-end digital import process,” Airlines Magazine, 11 thg. 3, 2024. [Trực tuyến]. Có tại: https://airlines.iata.org/2024/03/11/end-end-digital-import-process (truy cập: 13 thg. 11, 2026).",
            url: "https://airlines.iata.org/2024/03/11/end-end-digital-import-process",
          },
          {
            label:
              "Cathay Cargo, “Cathay Live Animal — Animal logistics solution,” Cathay Cargo, 2026. [Trực tuyến]. Có tại: https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html (truy cập: 13 thg. 11, 2026).",
            url: "https://www.cathaycargo.com/en-us/solutions/cathay-live-animal.html",
          },
          {
            label:
              "Cathay Cargo, “Behind the scenes: how we flew 65 of the world’s best horses to Hong Kong,” Cathay Cargo, 27 thg. 2, 2025. [Trực tuyến]. Có tại: https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html (truy cập: 13 thg. 11, 2026).",
            url: "https://www.cathaycargo.com/en-us/stories/cargo-in-action/cathay-cargo-flew-the-best-horses-to-hong-kong.html",
          },
          {
            label:
              "Cathay Pacific, “Cathay Cargo flies CAVALLUNA’s equine cast to its first stage outside Europe,” Cathay Pacific Newsroom, 2026. [Trực tuyến]. Có tại: https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav (truy cập: 13 thg. 11, 2026).",
            url: "https://news.cathaypacific.com/cathay-cargo-flies-cavalluna-s-equine-cast-to-its-first-stage-outside-europe-htvbav",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Trực tuyến]. Có tại: https://tecnoindicator.vercel.app/ (truy cập: 13 thg. 11, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
    },
  },
  {
    slug: "how-operation-epic-fury-inspired-lobot-tecnoindicator",
    author: "LoBot LLC Team",
    coverEmoji: "🛢️",
    coverImage: "/images/blog/operation epic fury.png",
    publishedAt: "2026-11-07",
    translations: {
      en: {
        title:
          "How Operation Epic Fury and the ongoing Middle East wars greatly inspired the launch of LoBot TecnoIndicator",
        excerpt:
          "The 2026 Middle East conflict and the historic disruption of global oil flows exposed how fragile planning can be. Here is how those events shaped LoBot TecnoIndicator and how it helps leaders prepare for volatility.",
        body: [
          "In early 2026, a new wave of conflict in the Middle East turned energy markets into a real-time stress test for the global economy [1], [8]. For LoBot LLC, the turmoil was not just headline news — it was a clear signal that business and logistics leaders need faster, clearer, and more explainable ways to understand commodity risk. That urgency strongly inspired the launch of LoBot TecnoIndicator [10], our AI-powered energy intelligence product built to help teams make future-ready decisions when markets become unpredictable.",
          "__IMAGE__:/images/blog/oil rigs.png|Military and regional escalation imagery associated with the 2026 conflict|Conflict escalation and shipping disruption became a catalyst for energy-market volatility.",
          "Operation Epic Fury began on 28 February 2026, when the United States and Israel launched coordinated strikes against Iranian targets [1], [9]. Iran responded with missile and drone attacks across the region, and the conflict quickly expanded beyond isolated military exchanges [1], [9]. Shipping through the Strait of Hormuz — a narrow passage that normally carries a large share of the world’s seaborne oil, refined products, and liquefied natural gas — was severely disrupted [1], [4], [9]. By March 2026, the International Energy Agency described the situation as the largest supply disruption in the history of the global oil market [1], [2], [7], with crude and product flows through the Strait plunging from around 20 million barrels per day (mb/d) before the war to a fraction of normal levels and Gulf producers curtailing output as storage filled and export routes became unsafe [1], [2], [4], [9].",
          "The following months showed how quickly a regional war can ripple through global energy systems [1], [8]. Attacks and threats affected not only crude production but also refineries, pipelines, shipping, and insurance [1], [3], [6], [8]. The IEA and other market observers reported repeated shocks: tanker movements slowed or rerouted, freight and insurance costs surged, alternative pipelines were used where possible, and emergency stock releases were coordinated to cushion the market [1], [3], [4], [6]. Even when some exports recovered through ship-to-ship transfers and bypass routes, renewed attacks and risks in the Gulf and Red Sea kept markets tense [1], [3], [4]. By late 2026, refined-product markets — especially diesel and jet fuel — remained strained because refinery outages, constrained shipping, and lost export flows made it harder to deliver usable fuels, not just crude oil [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil price rise.png|Oil infrastructure and market volatility concept|When supply routes are disrupted, price spikes can move faster than business plans.",
          "Oil prices responded with historic volatility [1], [2], [6]. Before the conflict, Brent crude traded near the low-$70s per barrel range in early 2026 market context; after the outbreak, prices spiked sharply, with major benchmarks surging and physical markets showing even larger swings [1], [2], [6]. Across 2026, agencies and analysts reported periods where Brent moved above $100 and, at times, much higher in intraday or physical-market stress, while diesel and other refined fuels often rose faster than crude because of bottlenecks in refining and transport [1], [3], [5], [6]. The World Bank, IMF, EIA, and IEA all highlighted the same pattern: constrained supply, depleted inventories, expensive freight, and fragile confidence can keep prices elevated and unpredictable even when some shipments resume [3], [5], [6].",
          "These price changes were not abstract numbers on a trading screen. They affected millions of people in everyday ways. Higher oil and fuel prices raise transportation costs, which can increase the price of food, medicine, construction materials, and consumer goods [5], [8]. Airlines, trucking companies, manufacturers, farmers, and small businesses face higher operating costs [8]. Governments in fuel-importing countries may spend more on subsidies or imports, leaving less room for social services [5]. Households feel the impact at the pump, in electricity bills where fuel costs matter, and through inflation that quietly reduces purchasing power [5], [8]. In conflict-affected and import-dependent regions, fuel shortages and price spikes can also disrupt access to essential services [5].",
          "For contractors and business owners, the crisis raised difficult but necessary questions: How exposed is our cost structure to a single shipping chokepoint such as the Strait of Hormuz [1], [4], [9]? Do our budgets assume stable fuel prices when history shows sudden shocks [2], [6]? Which suppliers, routes, and contracts would fail first if freight rates double [6], [8]? Are we reacting to yesterday’s headlines, or planning with scenarios for the next 1, 3, 5, or 10 years? And when prices move overnight, do our teams have a shared, trustworthy view of what changed and why?",
          "__IMAGE__:/images/blog/logistics.png|Global logistics and supply-chain operations|Business and logistics leaders face pressure when fuel, freight, and timing all change at once.",
          "It is understandable why many businessmen and logistics managers have felt panic during this period. Operations depend on timing, margins, and reliable delivery. When oil prices jump, freight contracts become harder to price, fuel surcharges change, inventory planning becomes uncertain, and customers may delay orders [6], [8]. A manufacturer may struggle to forecast production costs; a logistics operator may need to reroute cargo around risky corridors [4], [8]; a retailer may face higher landed costs; and a finance team may watch cash-flow assumptions break in weeks. The pain is not only the high price — it is the uncertainty. Leaders are forced to make high-stakes decisions with incomplete, fast-changing information [1], [5].",
          "This is exactly the gap LoBot TecnoIndicator was designed to address [10]. TecnoIndicator helps users explore energy-price scenarios, understand key market drivers, and turn complex signals into decision support [10]. Instead of asking teams to stitch together scattered news, raw charts, and static spreadsheets, TecnoIndicator aims to provide a clearer view of where prices may go, what factors could move them, and how businesses can respond [10]. For logistics and operations teams, that means better planning for fuel budgets, routing assumptions, contract timing, and risk discussions. For executives and analysts, it means a more structured way to evaluate optimistic, baseline, and pessimistic outcomes before volatility becomes a crisis.",
          "__IMAGE__:/images/blog/tecnoindicator promotion.png|LoBot TecnoIndicator concept graphic|TecnoIndicator turns energy-market complexity into actionable planning insight.",
          "Operation Epic Fury and the broader Middle East conflict reminded us that global markets are interconnected: a military escalation, a threatened chokepoint, or damaged infrastructure can reshape costs for people and companies thousands of miles away [1], [8], [9]. LoBot TecnoIndicator was inspired by that reality [10]. Our goal is not to predict the future with false certainty — it is to give business and logistics leaders practical intelligence, transparent scenarios, and AI-assisted analysis so they can plan with more confidence, act earlier, and protect the people and operations that depend on them.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [Online]. Available: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, Mar. 12, 2026. [Online]. Available: https://www.iea.org/reports/oil-market-report-march-2026 (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, Oct. 14, 2026. [Online]. Available: https://www.iea.org/reports/oil-market-report-october-2026 (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [Online]. Available: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (accessed Nov. 7, 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, Nov. 5, 2026. [Online]. Available: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (accessed Nov. 7, 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [Online]. Available: https://www.eia.gov/outlooks/steo/report/global_oil.php (accessed Nov. 7, 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, Mar. 12, 2026. [Online]. Available: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (accessed Nov. 7, 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, Mar. 6, 2026. [Online]. Available: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (accessed Nov. 7, 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [Online]. Available: https://www.congress.gov/crs-product/R45281 (accessed Nov. 7, 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Online]. Available: https://tecnoindicator.vercel.app/ (accessed Nov. 7, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      es: {
        title:
          "Cómo la Operación Furia Épica y las guerras en curso en Oriente Medio inspiraron el lanzamiento de LoBot TecnoIndicator",
        excerpt:
          "El conflicto de Oriente Medio en 2026 y la histórica interrupción de los flujos mundiales de petróleo mostraron lo frágil que puede ser la planificación. Así influyeron esos hechos en LoBot TecnoIndicator y cómo ayuda a prepararse ante la volatilidad.",
        body: [
          "A comienzos de 2026, una nueva ola de conflicto en Oriente Medio convirtió los mercados energéticos en una prueba de resistencia en tiempo real para la economía mundial [1], [8]. Para LoBot LLC, la turbulencia no fue solo un titular: fue una señal clara de que los líderes empresariales y logísticos necesitan formas más rápidas, claras y explicables de entender el riesgo de las materias primas. Esa urgencia inspiró en gran medida el lanzamiento de LoBot TecnoIndicator [10], nuestro producto de inteligencia energética con IA diseñado para ayudar a los equipos a tomar decisiones preparadas para el futuro cuando los mercados se vuelven impredecibles.",
          "__IMAGE__:/images/blog/oil rigs.png|Imagen asociada a la escalada militar y regional del conflicto de 2026|La escalada del conflicto y la interrupción del transporte marítimo impulsaron la volatilidad energética.",
          "La Operación Furia Épica comenzó el 28 de febrero de 2026, cuando Estados Unidos e Israel lanzaron ataques coordinados contra objetivos iraníes [1], [9]. Irán respondió con misiles y drones en toda la región, y el conflicto se amplió rápidamente más allá de intercambios militares aislados [1], [9]. El transporte marítimo por el estrecho de Ormuz —un paso estrecho que normalmente transporta una gran parte del petróleo, los productos refinados y el gas natural licuado que se mueven por mar— sufrió graves interrupciones [1], [4], [9]. En marzo de 2026, la Agencia Internacional de la Energía describió la situación como la mayor interrupción del suministro en la historia del mercado mundial del petróleo [1], [2], [7]: los flujos de crudo y productos por el estrecho cayeron desde unos 20 millones de barriles diarios (mb/d) antes de la guerra a una fracción de los niveles normales, mientras los productores del Golfo reducían la producción al llenarse los almacenamientos y volverse inseguras las rutas de exportación [1], [2], [4], [9].",
          "Los meses siguientes mostraron con qué rapidez una guerra regional puede propagarse por los sistemas energéticos mundiales [1], [8]. Los ataques y las amenazas afectaron no solo a la producción de crudo, sino también a refinerías, oleoductos, transporte marítimo y seguros [1], [3], [6], [8]. La AIE y otros observadores informaron de choques repetidos: los buques cisterna redujeron su actividad o cambiaron de ruta, los costos de flete y seguro se dispararon, se utilizaron oleoductos alternativos cuando fue posible y se coordinaron liberaciones de reservas de emergencia para amortiguar el mercado [1], [3], [4], [6]. Incluso cuando algunas exportaciones se recuperaron mediante transferencias barco a barco y rutas alternativas, los nuevos ataques y riesgos en el Golfo y el mar Rojo mantuvieron la tensión [1], [3], [4]. A finales de 2026, los mercados de productos refinados —especialmente el diésel y el combustible de aviación— seguían bajo presión porque las paradas de refinerías, las limitaciones marítimas y la pérdida de flujos de exportación dificultaban la entrega de combustibles utilizables, no solo de crudo [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil price rise.png|Concepto de infraestructura petrolera y volatilidad del mercado|Cuando se interrumpen las rutas de suministro, los precios pueden cambiar más rápido que los planes empresariales.",
          "Los precios del petróleo respondieron con una volatilidad histórica [1], [2], [6]. Antes del conflicto, el Brent cotizaba en un contexto cercano a los 70 dólares por barril a comienzos de 2026; tras el estallido, los precios subieron con fuerza y los mercados físicos mostraron oscilaciones aún mayores [1], [2], [6]. Durante 2026, agencias y analistas informaron de periodos en los que el Brent superó los 100 dólares y, en momentos de tensión, alcanzó niveles mucho más altos, mientras que el diésel y otros combustibles refinados a menudo subieron más rápido que el crudo debido a los cuellos de botella en refino y transporte [1], [3], [5], [6]. El Banco Mundial, el FMI, la EIA y la AIE señalaron el mismo patrón: oferta limitada, inventarios agotados, fletes caros y confianza frágil pueden mantener los precios elevados e impredecibles incluso cuando se reanudan algunos envíos [3], [5], [6].",
          "Estos cambios de precios no fueron cifras abstractas. Afectaron a millones de personas en la vida cotidiana. Los precios más altos del petróleo y los combustibles elevan los costos de transporte, lo que puede encarecer alimentos, medicinas, materiales de construcción y bienes de consumo [5], [8]. Las aerolíneas, las empresas de transporte, los fabricantes, los agricultores y las pequeñas empresas enfrentan mayores costos operativos [8]. Los gobiernos de países importadores pueden gastar más en subsidios o importaciones, dejando menos margen para servicios sociales [5]. Los hogares lo sienten en el surtidor, en las facturas de energía cuando importa el costo del combustible y mediante una inflación que reduce el poder adquisitivo [5], [8]. En regiones dependientes de las importaciones o afectadas por conflictos, la escasez de combustible y las subidas de precios también pueden interrumpir servicios esenciales [5].",
          "Para contratistas y proprietarios de negocio, la crisis planteó preguntas difíciles pero necesarias: ¿Cuán expuesta está nuestra estructura de costos a un único punto crítico marítimo como el estrecho de Ormuz [1], [4], [9]? ¿Nuestros presupuestos asumen precios estables del combustible cuando la historia muestra choques repentinos [2], [6]? ¿Qué proveedores, rutas y contratos fallarían primero si las tarifas de flete se duplican [6], [8]? ¿Estamos reaccionando a los titulares de ayer o planificando con escenarios para los próximos 1, 3, 5 o 10 años? Y cuando los precios cambian de la noche a la mañana, ¿nuestros equipos tienen una visión compartida y confiable de lo que cambió y por qué?",
          "__IMAGE__:/images/blog/logistics.png|Operaciones logísticas y de cadena de suministro global|Los líderes empresariales y logísticos sienten presión cuando cambian a la vez el combustible, el flete y los plazos.",
          "Es comprensible que muchos empresarios y gerentes de logística hayan sentido pánico en este periodo. Las operaciones dependen del tiempo, los márgenes y la entrega confiable. Cuando los precios del petróleo suben, los contratos de flete son más difíciles de calcular, cambian los recargos por combustible, la planificación de inventarios se vuelve incierta y los clientes pueden retrasar pedidos [6], [8]. Un fabricante puede tener dificultades para prever los costos de producción; un operador logístico puede necesitar desviar cargas por corredores más seguros [4], [8]; un minorista puede enfrentar costos de importación más altos; y un equipo financiero puede ver cómo los supuestos de flujo de caja se rompen en pocas semanas. El problema no es solo el precio alto: es la incertidumbre. Los líderes deben tomar decisiones de alto impacto con información incompleta y cambiante [1], [5].",
          "Precisamente esa brecha es la que LoBot TecnoIndicator fue diseñado para cubrir [10]. TecnoIndicator ayuda a explorar escenarios de precios energéticos, comprender los factores clave del mercado y convertir señales complejas en apoyo para la toma de decisiones [10]. En lugar de obligar a los equipos a unir noticias dispersas, gráficos sin contexto y hojas de cálculo estáticas, TecnoIndicator busca ofrecer una visión más clara de hacia dónde pueden ir los precios, qué factores podrían moverlos y cómo pueden responder las empresas [10]. Para logística y operaciones, eso significa planificar mejor presupuestos de combustible, supuestos de rutas, tiempos de contratación y discusiones de riesgo. Para directivos y analistas, ofrece una forma más estructurada de evaluar resultados optimistas, base y pesimistas antes de que la volatilidad se convierta en crisis.",
          "__IMAGE__:/images/blog/tecnoindicator promotion.png|Gráfico conceptual de LoBot TecnoIndicator|TecnoIndicator convierte la complejidad del mercado energético en información práctica para planificar.",
          "La Operación Furia Épica y el conflicto más amplio en Oriente Medio nos recordaron que los mercados globales están interconectados: una escalada militar, un punto crítico marítimo amenazado o una infraestructura dañada pueden cambiar los costos de personas y empresas a miles de kilómetros [1], [8], [9]. LoBot TecnoIndicator nació inspirado por esa realidad [10]. Nuestro objetivo no es predecir el futuro con una certeza falsa, sino ofrecer inteligencia práctica, escenarios transparentes y análisis asistido por IA para que los líderes empresariales y logísticos planifiquen con más confianza, actúen antes y protejan a las personas y operaciones que dependen de ellos.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [En línea]. Disponible: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, 12 mar. 2026. [En línea]. Disponible: https://www.iea.org/reports/oil-market-report-march-2026 (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, 14 oct. 2026. [En línea]. Disponible: https://www.iea.org/reports/oil-market-report-october-2026 (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [En línea]. Disponible: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (consultado: 7 nov. 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, 5 nov. 2026. [En línea]. Disponible: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (consultado: 7 nov. 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [En línea]. Disponible: https://www.eia.gov/outlooks/steo/report/global_oil.php (consultado: 7 nov. 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, 12 mar. 2026. [En línea]. Disponible: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (consultado: 7 nov. 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, 6 mar. 2026. [En línea]. Disponible: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (consultado: 7 nov. 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [En línea]. Disponible: https://www.congress.gov/crs-product/R45281 (consultado: 7 nov. 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [En línea]. Disponible: https://tecnoindicator.vercel.app/ (consultado: 7 nov. 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
      vi: {
        title:
          "Chiến dịch Epic Fury và các cuộc chiến tương tự ở khu vực Trung Đông đã tác động đến sự ra mắt của LoBot TecnoIndicator như thế nào",
        excerpt:
          "Xung đột Trung Đông năm 2026 và sự gián đoạn lịch sử của dòng chảy dầu mỏ toàn cầu cho thấy việc hoạch định có thể mong manh đến mức nào. Đây là cách những sự kiện đó định hình LoBot TecnoIndicator và cách công cụ này hỗ trợ ứng phó biến động.",
        body: [
          "Đầu năm 2026, một làn sóng xung đột mới tại Trung Đông đã biến thị trường năng lượng thành bài kiểm tra sức chịu đựng theo thời gian thực của nền kinh tế toàn cầu [1], [8]. Với LoBot LLC, biến động ấy không chỉ là tin tức — đó là tín hiệu rõ ràng rằng các nhà lãnh đạo doanh nghiệp và logistics cần những cách nhanh hơn, rõ ràng hơn và dễ giải thích hơn để hiểu rủi ro hàng hóa. Sự cấp bách đó đã truyền cảm hứng mạnh mẽ cho việc ra mắt LoBot TecnoIndicator [10], sản phẩm trí tuệ năng lượng ứng dụng AI của chúng tôi, được xây dựng để giúp các đội ngũ đưa ra quyết định sẵn sàng cho tương lai khi thị trường trở nên khó lường.",
          "__IMAGE__:/images/blog/oil rigs.png|Hình ảnh gợi liên tưởng đến leo thang quân sự và khu vực trong xung đột năm 2026|Leo thang xung đột và gián đoạn vận tải biển trở thành chất xúc tác cho biến động thị trường năng lượng.",
          "Chiến dịch Epic Fury bắt đầu vào ngày 28 tháng 2 năm 2026, khi Hoa Kỳ và Israel tiến hành các cuộc tấn công phối hợp nhằm vào các mục tiêu của Iran [1], [9]. Iran đáp trả bằng tên lửa và máy bay không người lái trên khắp khu vực, và xung đột nhanh chóng lan rộng vượt ra ngoài các cuộc trao đổi quân sự riêng lẻ [1], [9]. Hoạt động vận tải qua eo biển Hormuz — tuyến đường hẹp thường vận chuyển một phần lớn dầu thô, sản phẩm tinh chế và khí tự nhiên hóa lỏng đi bằng đường biển của thế giới — bị gián đoạn nghiêm trọng [1], [4], [9]. Đến tháng 3 năm 2026, Cơ quan Năng lượng Quốc tế (IEA) mô tả đây là sự gián đoạn nguồn cung lớn nhất trong lịch sử thị trường dầu mỏ toàn cầu [1], [2], [7]: dòng chảy dầu thô và sản phẩm qua eo biển giảm từ khoảng 20 triệu thùng/ngày (mb/d) trước chiến tranh xuống chỉ còn một phần nhỏ so với mức bình thường, trong khi các nhà sản xuất vùng Vịnh phải cắt giảm sản lượng khi kho chứa đầy và tuyến xuất khẩu trở nên không an toàn [1], [2], [4], [9].",
          "Những tháng tiếp theo cho thấy một cuộc chiến khu vực có thể lan sang hệ thống năng lượng toàn cầu nhanh đến mức nào [1], [8]. Các cuộc tấn công và đe dọa không chỉ ảnh hưởng đến sản xuất dầu thô mà còn tác động đến nhà máy lọc dầu, đường ống, vận tải biển và bảo hiểm [1], [3], [6], [8]. IEA cùng các tổ chức theo dõi thị trường ghi nhận nhiều cú sốc liên tiếp: tàu chở dầu giảm tốc hoặc đổi tuyến, chi phí vận chuyển và bảo hiểm tăng vọt, các đường ống thay thế được sử dụng khi có thể, và các đợt xả kho dự trữ khẩn cấp được phối hợp để hạ nhiệt thị trường [1], [3], [4], [6]. Dù một số hoạt động xuất khẩu phục hồi nhờ chuyển tải ngoài khơi và các tuyến vòng, các cuộc tấn công mới cùng rủi ro tại Vịnh Ba Tư và Biển Đỏ vẫn khiến thị trường căng thẳng [1], [3], [4]. Đến cuối năm 2026, thị trường sản phẩm tinh chế — đặc biệt là dầu diesel và nhiên liệu hàng không — vẫn chịu áp lực vì nhà máy lọc dầu ngừng hoạt động, vận tải bị hạn chế và dòng xuất khẩu sụt giảm khiến việc cung ứng nhiên liệu sử dụng được khó khăn hơn, không chỉ là dầu thô [1], [3], [5], [6].",
          "__IMAGE__:/images/blog/oil price rise.png|Khái niệm hạ tầng dầu mỏ và biến động thị trường|Khi các tuyến cung ứng bị gián đoạn, giá có thể biến động nhanh hơn kế hoạch kinh doanh.",
          "Giá dầu phản ứng bằng mức biến động lịch sử [1], [2], [6]. Trước xung đột, dầu Brent giao dịch quanh vùng đầu 70 USD/thùng trong bối cảnh đầu năm 2026; sau khi chiến sự bùng phát, giá tăng mạnh, các chỉ báo chính tăng vọt và thị trường thực tế còn dao động lớn hơn [1], [2], [6]. Trong năm 2026, các cơ quan và chuyên gia ghi nhận nhiều giai đoạn Brent vượt 100 USD/thùng và có lúc còn cao hơn nhiều trong các nhịp căng thẳng, trong khi diesel và các nhiên liệu tinh chế khác thường tăng nhanh hơn dầu thô do tắc nghẽn ở khâu lọc và vận chuyển [1], [3], [5], [6]. Ngân hàng Thế giới, IMF, EIA và IEA đều chỉ ra cùng một quy luật: nguồn cung bị hạn chế, tồn kho cạn dần, cước vận tải đắt đỏ và niềm tin mong manh có thể giữ giá ở mức cao và khó đoán ngay cả khi một phần hàng hóa được nối lại [3], [5], [6].",
          "Những thay đổi về giá không phải là con số trừu tượng. Chúng ảnh hưởng đến hàng triệu người trong đời sống hằng ngày. Giá dầu và nhiên liệu tăng làm chi phí vận chuyển tăng theo, từ đó có thể đẩy giá thực phẩm, thuốc men, vật liệu xây dựng và hàng tiêu dùng lên cao [5], [8]. Hãng hàng không, doanh nghiệp vận tải, nhà sản xuất, nông dân và doanh nghiệp nhỏ phải đối mặt với chi phí vận hành lớn hơn [8]. Chính phủ ở các nước nhập khẩu nhiên liệu có thể phải chi nhiều hơn cho trợ giá hoặc nhập khẩu, làm giảm dư địa cho dịch vụ xã hội [5]. Hộ gia đình cảm nhận tác động tại trạm xăng, trong hóa đơn năng lượng khi chi phí nhiên liệu tăng, và qua lạm phát làm giảm sức mua [5], [8]. Ở những khu vực phụ thuộc nhập khẩu hoặc bị ảnh hưởng bởi xung đột, tình trạng thiếu nhiên liệu và giá tăng đột biến còn có thể làm gián đoạn các dịch vụ thiết yếu [5].",
          "Riêng đối với các nhà thầu và các chủ đầu tư doanh nghiệp, cuộc khủng hoảng đặt ra những câu hỏi khó nhưng cần thiết: Cơ cấu chi phí của chúng ta phụ thuộc vào một điểm nghẽn vận tải như eo biển Hormuz đến mức nào [1], [4], [9]? Ngân sách có đang giả định giá nhiên liệu ổn định trong khi lịch sử cho thấy những cú sốc bất ngờ [2], [6]? Nhà cung cấp, tuyến đường và hợp đồng nào sẽ gặp rủi ro đầu tiên nếu cước vận tải tăng gấp đôi [6], [8]? Chúng ta đang phản ứng theo tin tức hôm qua hay đang hoạch định bằng các kịch bản cho 1, 3, 5 hay 10 năm tới? Và khi giá thay đổi chỉ sau một đêm, các đội ngũ có cùng một bức tranh đáng tin cậy về điều gì đã thay đổi và vì sao không?",
          "__IMAGE__:/images/blog/logistics.png|Hoạt động logistics và chuỗi cung ứng toàn cầu|Các nhà lãnh đạo doanh nghiệp và logistics chịu áp lực khi nhiên liệu, cước phí và thời gian đều thay đổi cùng lúc.",
          "Có thể hiểu vì sao nhiều doanh nhân và nhà quản lý logistics cảm thấy hoang mang trong giai đoạn này. Hoạt động kinh doanh phụ thuộc vào thời gian, biên lợi nhuận và khả năng giao hàng đáng tin cậy. Khi giá dầu tăng, hợp đồng vận chuyển khó định giá hơn, phụ phí nhiên liệu thay đổi, kế hoạch tồn kho trở nên bất định và khách hàng có thể trì hoãn đơn hàng [6], [8]. Một nhà sản xuất có thể gặp khó khi dự báo chi phí sản xuất; một đơn vị logistics có thể phải đổi tuyến hàng hóa để tránh hành lang rủi ro [4], [8]; một nhà bán lẻ có thể chịu chi phí đầu vào cao hơn; và đội tài chính có thể thấy các giả định dòng tiền bị phá vỡ chỉ trong vài tuần. Nỗi đau không chỉ nằm ở mức giá cao — mà còn ở sự bất định. Các nhà lãnh đạo buộc phải đưa ra quyết định lớn với thông tin không đầy đủ và thay đổi liên tục [1], [5].",
          "Đó chính là khoảng trống mà LoBot TecnoIndicator được tạo ra để giải quyết [10]. TecnoIndicator giúp người dùng khám phá các kịch bản giá năng lượng, hiểu các động lực thị trường quan trọng và chuyển tín hiệu phức tạp thành hỗ trợ ra quyết định [10]. Thay vì buộc các đội ngũ phải ghép nối tin tức rời rạc, biểu đồ thô và bảng tính tĩnh, TecnoIndicator hướng tới việc cung cấp cái nhìn rõ hơn về xu hướng giá, những yếu tố có thể tác động và cách doanh nghiệp ứng phó [10]. Với đội ngũ logistics và vận hành, điều đó có nghĩa là lập kế hoạch tốt hơn cho ngân sách nhiên liệu, giả định tuyến đường, thời điểm ký hợp đồng và thảo luận rủi ro. Với lãnh đạo và chuyên viên phân tích, đó là cách tiếp cận có cấu trúc hơn để đánh giá các kịch bản lạc quan, cơ sở và bi quan trước khi biến động trở thành khủng hoảng.",
          "__IMAGE__:/images/blog/tecnoindicator promotion.png|Đồ họa khái niệm LoBot TecnoIndicator|TecnoIndicator biến sự phức tạp của thị trường năng lượng thành thông tin hoạch định có thể hành động.",
          "Chiến dịch Epic Fury và xung đột Trung Đông rộng hơn đã nhắc chúng tôi rằng các thị trường toàn cầu có liên kết chặt chẽ: một đợt leo thang quân sự, một điểm nghẽn vận tải bị đe dọa hay hạ tầng bị tấn công có thể làm thay đổi chi phí của con người và doanh nghiệp ở cách xa hàng nghìn kilomet [1], [8], [9]. LoBot TecnoIndicator được truyền cảm hứng từ thực tế đó [10]. Mục tiêu của chúng tôi không phải dự đoán tương lai với sự chắc chắn sai lầm — mà là cung cấp trí tuệ thực tiễn, kịch bản minh bạch và phân tích hỗ trợ bởi AI để các nhà lãnh đạo doanh nghiệp và logistics có thể hoạch định tự tin hơn, hành động sớm hơn và bảo vệ những con người cùng hoạt động phụ thuộc vào họ.",
        ],
        references: [
          {
            label:
              "International Energy Agency, “The Middle East and Global Energy Markets,” IEA, 2026. [Trực tuyến]. Có tại: https://www.iea.org/topics/the-middle-east-and-global-energy-markets (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/topics/the-middle-east-and-global-energy-markets",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - March 2026,” IEA, 12 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.iea.org/reports/oil-market-report-march-2026 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-march-2026",
          },
          {
            label:
              "International Energy Agency, “Oil Market Report - October 2026,” IEA, 14 thg. 10, 2026. [Trực tuyến]. Có tại: https://www.iea.org/reports/oil-market-report-october-2026 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/reports/oil-market-report-october-2026",
          },
          {
            label:
              "International Energy Agency, “Middle East Maritime Chokepoints Shipping Monitor,” IEA, 2026. [Trực tuyến]. Có tại: https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor (truy cập: 7 thg. 11, 2026).",
            url: "https://www.iea.org/data-and-statistics/data-tools/middle-east-maritime-chokepoints-shipping-monitor",
          },
          {
            label:
              "World Bank, “Depleted inventories leave oil markets exposed to further supply disruptions,” World Bank Blogs, 5 thg. 11, 2026. [Trực tuyến]. Có tại: https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply (truy cập: 7 thg. 11, 2026).",
            url: "https://blogs.worldbank.org/en/opendata/depleted-inventories-leave-oil-markets-exposed-to-further-supply",
          },
          {
            label:
              "U.S. Energy Information Administration, “Short-Term Energy Outlook: Global Oil,” EIA, 2026. [Trực tuyến]. Có tại: https://www.eia.gov/outlooks/steo/report/global_oil.php (truy cập: 7 thg. 11, 2026).",
            url: "https://www.eia.gov/outlooks/steo/report/global_oil.php",
          },
          {
            label:
              "Reuters, “World faces largest-ever oil supply disruption on Middle East war, IEA says,” Reuters, 12 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/ (truy cập: 7 thg. 11, 2026).",
            url: "https://www.reuters.com/business/energy/world-faces-largest-ever-oil-supply-disruption-middle-east-war-iea-says-2026-03-12/",
          },
          {
            label:
              "Reuters, “U.S.-Israel war with Iran sends shockwaves through global business,” Reuters, 6 thg. 3, 2026. [Trực tuyến]. Có tại: https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/ (truy cập: 7 thg. 11, 2026).",
            url: "https://www.reuters.com/world/europe/us-israel-war-with-iran-sends-shockwaves-through-global-business-2026-03-06/",
          },
          {
            label:
              "Congressional Research Service, “The Strait of Hormuz: Security Developments and Impacts on Oil,” U.S. Congress, 2026. [Trực tuyến]. Có tại: https://www.congress.gov/crs-product/R45281 (truy cập: 7 thg. 11, 2026).",
            url: "https://www.congress.gov/crs-product/R45281",
          },
          {
            label:
              "LoBot LLC, “LoBot TecnoIndicator,” LoBot, 2026. [Trực tuyến]. Có tại: https://tecnoindicator.vercel.app/ (truy cập: 7 thg. 11, 2026).",
            url: "https://tecnoindicator.vercel.app/",
          },
        ],
      },
    } satisfies BlogTranslations,
  },
  {
    slug: "introducing-lobot-llc",
    author: "LoBot LLC Team",
    coverEmoji: "🚀",
    coverImage: null,
    publishedAt: "2026-10-28",
    translations: {
      en: {
        title: "Introducing LoBot LLC: building future-ready decision tools",
        excerpt:
          "From an open-source energy forecasting app to an AI-native company — here's why we founded LoBot LLC and what comes next.",
        body: [
          "Today we're proud to officially introduce LoBot LLC — an AI-native startup that creates business solutions enabling enterprises to make future-ready strategic decisions.",
          "Our story began in September 2026 with TecnoIndicator, an open-source web app that forecasts global oil, electricity and water prices accurately up to ten years ahead. We built it because the business and logistics managers we talked to were committing budgets, contracts and routes years in advance — while the forecasts they needed were locked behind expensive enterprise subscriptions, buried in long reports, or simply too short-term to be useful.",
          "TecnoIndicator quickly grew a passionate, fast-moving community. Human developers and AI agents contributed hundreds of commits and dozens of pull requests, improving everything from regional intelligence and multi-currency support to AI-curated price drivers and strategy recommendations. That momentum made one thing clear: this was bigger than a single project.",
          "We began officially forming the company as LoBot LLC in October of this year, with a simple mission: empower businesses of every size with robust logistics and productivity solutions, accelerate innovation with AI built on open-source foundations, keep open source at our core, and design architectures that scale from startups to large enterprises.",
          "We're highly agile, AI-native, human-centric and transparent-first company. We believe trust is our priority number one, that quality matters more than volume, and that technology must benefit everyone in the 4.0 tech era today — which is why we're always ready to share valuable resources so that everyone can access.",
          "What's next? We'll keep continuously improving TecnoIndicator and building similar useful tools for business and logistics managers. Don't forget to try the latest and best products from LoBot to boost your company's performance!\nIf you want to build and grow together with the LoBot community, isn't this the perfect moment to apply to LoBot right away?\n\nWELCOME TO LOBOT LLC!!!!!",
        ],
      },
      es: {
        title: "Presentamos LoBot LLC: herramientas de decisión preparadas para el futuro",
        excerpt:
          "De una app open source de pronóstico energético a una empresa nativa en IA: por qué fundamos LoBot LLC y lo que viene.",
        body: [
          "Hoy nos enorgullece presentar oficialmente LoBot LLC, una startup nativa en IA que crea soluciones empresariales para que las empresas tomen decisiones estratégicas preparadas para el futuro.",
          "Nuestra historia comenzó en septiembre de 2026 con TecnoIndicator, una app web de código abierto que pronostica con precisión los precios globales del petróleo, la electricidad y el agua hasta diez años. La creamos porque los gerentes de negocio y logística con los que hablamos comprometían presupuestos, contratos y rutas con años de antelación, mientras que los pronósticos que necesitaban estaban tras costosas suscripciones, enterrados en largos informes o eran demasiado cortoplacistas.",
          "TecnoIndicator creó rápidamente una comunidad apasionada y dinámica. Desarrolladores humanos y agentes de IA aportaron cientos de commits y decenas de pull requests, mejorando desde la inteligencia regional y el soporte multimoneda hasta los factores curados por IA y las recomendaciones estratégicas. Ese impulso dejó algo claro: esto era más grande que un solo proyecto.",
          "Comenzamos oficialmente a formar la empresa LoBot LLC en octubre de este año, con una misión sencilla: empoderar a empresas de todos los tamaños con soluciones robustas de logística y productividad, acelerar la innovación con IA sobre bases open source, mantener el código abierto como núcleo y diseñar arquitecturas que escalen de startups a grandes empresas.",
          "Somos una empresa excesivamente ágil, AI-native, centradas en las personas y con \"transparencia\" como nuestra prioridad número uno. También creemos que la tecnología debe servir a todas las personas que están accediendo a la era de la tecnología 4.0 hoy en día, y al mismo tiempo la calidad del producto que las personas aportan es más importante que la cantidad de productos — por lo tanto, siempre estamos listos para compartir recursos valiosos para que todo el mundo pueda acceder.",
          "¿Cuáles serán los próximos pasos que debemos tomar en el futuro? Seguiremos mejorando TecnoIndicator y creando herramientas útiles similares para gerentes de negocio y logística. ¡No olviden usar los productos más nuevos y mejores de LoBot para impulsar el rendimiento de su empresa!\nSi quieren crecer y construir junto a la comunidad de LoBot, ¿no es este el momento perfecto para postularse a LoBot ahora mismo?\n\n¡BIENVENIDOS A LOBOT LLC!!!!!",
        ],
      },
      vi: {
        title: "Giới thiệu LoBot LLC: xây dựng công cụ ra quyết định cho tương lai",
        excerpt:
          "Từ một ứng dụng dự báo năng lượng mã nguồn mở đến một công ty AI-native — lý do chúng tôi thành lập LoBot LLC và chặng đường phía trước.",
        body: [
          "Hôm nay, chúng tôi tự hào chính thức giới thiệu LoBot LLC — startup AI-native tạo ra các giải pháp kinh doanh giúp doanh nghiệp đưa ra quyết định chiến lược sẵn sàng cho tương lai.",
          "Câu chuyện bắt đầu vào tháng 9/2026 với TecnoIndicator, ứng dụng web mã nguồn mở dự báo giá dầu, điện và nước toàn cầu chính xác lên đến mười năm. Chúng tôi xây dựng nó vì các nhà quản lý kinh doanh và logistics phải cam kết ngân sách, hợp đồng và tuyến đường trước nhiều năm — trong khi dự báo họ cần lại nằm sau các gói doanh nghiệp đắt đỏ, bị chôn vùi trong báo cáo dài, hoặc quá ngắn hạn.",
          "TecnoIndicator nhanh chóng hình thành một cộng đồng đầy nhiệt huyết và năng động. Lập trình viên và tác nhân AI đã đóng góp hàng trăm commit và hàng chục pull request, cải thiện từ thông tin khu vực, hỗ trợ đa tiền tệ đến các yếu tố giá do AI chọn lọc và khuyến nghị chiến lược. Động lực đó cho thấy: đây không chỉ là một dự án.",
          "chúng tôi chính thức bắt đầu thành lập công ty LoBot LLC vào tháng 10 năm nay, với một sứ mệnh rất đơn giện: trao quyền cho doanh nghiệp ở mọi quy mô bằng giải pháp logistics và năng suất mạnh mẽ, tăng tốc đổi mới bằng AI trên nền tảng mã nguồn mở, giữ mã nguồn mở là cốt lõi và thiết kế kiến trúc mở rộng từ startup đến tập đoàn.",
          "Chúng tôi là một công ty hết sức linh hoạt, AI-native, lấy con người làm trung tâm và đặt hai chữ \"Minh bạch\" là ưu tiên hàng đầu số một của chúng tôi. Chúng tôi cũng tin rằng, công nghệ cần phải phục vụ mọi người đang tiếp cận với thời đại công nghệ 4.0 ngày nay, đồng thời chất lượng sản phẩm mà mọi người mang lại còn quan trọng hơn cả số lượng sản phẩm — vì thế chúng tôi luôn sẵn sàng chia sẻ các tài nguyên quý giá để tất cả mọi người ai cũng có thể tiếp cận.",
          "Thế thì bước tiếp theo của chúng ta sẽ cần phải làm gì trong tương lai? Chúng tôi sẽ liên tục cải tiến TecnoIndicator và xây dựng các công cụ hữu ích tương tự cho nhà quản lý kinh doanh và logistics. Các bạn hãy nhớ đừng quên sử dụng các sản phẩm mới nhất và tốt nhất đến từ LoBot để có thể boost hiệu suất của doanh nghiệp của bạn nhé!\nNếu các bạn muốn cùng nhau phát triển chung với cộng đồng LoBot, phải chăng đây có phải là thời điểm rất phù hợp để apply ngay vô LoBot, phải không nào?\n\nWELCOME TO LOBOT LLC!!!!!",
        ],
      },
    } satisfies BlogTranslations,
  },
];

let ready: Promise<void> | null = null;

/** Ensures the table exists and seed posts are present (idempotent, runs once per process). */
function ensureReady(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      const d = getDb();
      await d.execute(sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id serial PRIMARY KEY,
          slug text NOT NULL UNIQUE,
          author text NOT NULL DEFAULT 'LoBot LLC Team',
          cover_emoji text NOT NULL DEFAULT '🚀',
          cover_image text,
          published_at date NOT NULL,
          translations jsonb NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )`);
      await d.execute(sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS cover_image text`);
      await d.insert(blogPosts).values(SEED_POSTS).onConflictDoNothing({ target: blogPosts.slug });
      // The code owns the seeded editorial posts: keep existing rows in sync with copy changes.
      for (const post of SEED_POSTS) {
        await d
          .update(blogPosts)
          .set({
            translations: post.translations,
            publishedAt: post.publishedAt,
            coverEmoji: post.coverEmoji,
            coverImage: post.coverImage ?? null,
          })
          .where(eq(blogPosts.slug, post.slug));
      }
    })().catch((err) => {
      ready = null;
      throw err;
    });
  }
  return ready;
}

const select = {
  slug: blogPosts.slug,
  author: blogPosts.author,
  coverEmoji: blogPosts.coverEmoji,
  coverImage: blogPosts.coverImage,
  publishedAt: blogPosts.publishedAt,
  translations: blogPosts.translations,
};

export async function listPosts(): Promise<PublicPost[]> {
  try {
    await ensureReady();
    return await getDb().select(select).from(blogPosts).orderBy(desc(blogPosts.publishedAt), desc(blogPosts.id));
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS;
  }
}

export async function getPost(slug: string): Promise<PublicPost | null> {
  try {
    await ensureReady();
    const rows = await getDb().select(select).from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return rows[0] ?? null;
  } catch (err) {
    console.error("[blog] falling back to seed posts:", err);
    return SEED_POSTS.find((p) => p.slug === slug) ?? null;
  }
}
