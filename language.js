/* Spanish source copy is kept in the HTML. Each row is [Spanish, English, Italian]. */
(() => {
  const rows = [
    ['Ir al contenido','Skip to content','Vai al contenuto'],
    ['MR Studio, ir al inicio','MR Studio, go to home','MR Studio, vai alla pagina iniziale'],
    ['Navegación principal','Main navigation','Navigazione principale'],
    ['Inicio','Home','Home'],
    ['Sobre mí','About me','Chi sono'],
    ['Servicios','Services','Servizi'],
    ['Portfolio','Portfolio','Portfolio'],
    ['Contacto','Contact','Contatti'],
    ['Menú','Menu','Menu'],
    ['Cerrar','Close','Chiudi'],
    ['Aviso legal','Legal notice','Note legali'],
    ['Aviso Legal','Legal notice','Note legali'],
    ['Privacidad','Privacy','Privacy'],
    ['Cookies','Cookies','Cookie'],
    ['Política de Privacidad','Privacy policy','Informativa sulla privacy'],
    ['Política de Cookies','Cookie policy','Informativa sui cookie'],
    ['Una mirada','A dual','Una visione'],
    ['doble.','perspective.','duplice.'],
    ['Soy Mar. Creo moda que emociona, funciona y encuentra su lugar en el armario.','I’m Mar. I create fashion that moves people, works in real life and finds its place in their wardrobes.','Sono Mar. Creo moda che emoziona, funziona e trova il suo posto nel guardaroba.'],
    ['Me formé en el Istituto Marangoni de Milán y trabajé en el sector del lujo. Allí aprendí que una buena idea también debe conectar con quien la lleva. Hoy combino intuición creativa y criterio comercial en cada colección.','I trained at Istituto Marangoni in Milan and worked in the luxury sector. There I learned that a good idea must also connect with the person who wears it. Today I bring creative intuition and commercial judgement to every collection.','Mi sono formata all’Istituto Marangoni di Milano e ho lavorato nel settore del lusso. Lì ho imparato che una buona idea deve anche entrare in sintonia con chi la indossa. Oggi unisco intuizione creativa e sensibilità commerciale in ogni collezione.'],
    ['Desde Barcelona colaboro con marcas en swimwear, beachwear, prêt-à-porter y homewear. También fundé Luau Studio, mi marca de vestidos de fiesta: conozco de primera mano lo que significa crear una firma y llevarla al mercado.','Based in Barcelona, I work with brands across swimwear, beachwear, ready-to-wear and homewear. I also founded Luau Studio, my occasionwear label, so I know first-hand what it takes to build a brand and bring it to market.','Da Barcellona collaboro con brand di swimwear, beachwear, prêt-à-porter e homewear. Ho anche fondato Luau Studio, il mio marchio di abiti da cerimonia: so in prima persona cosa significa creare un brand e portarlo sul mercato.'],
    ['Hablemos de tu proyecto','Let’s talk about your project','Parliamo del tuo progetto'],
    ['Dirección de producto','Product direction','Direzione prodotto'],
    ['Diseño de colección','Collection design','Design di collezione'],
    ['Fichas técnicas','Technical specifications','Schede tecniche'],
    ['Producción worldwide','Worldwide production','Produzione internazionale'],
    ['Tarifa fija mensual','Fixed monthly fee','Tariffa fissa mensile'],
    ['Dirección de producto, diseño de colección, fichas técnicas y planificación de producción','Product direction, collection design, technical specifications and production planning','Direzione prodotto, design di collezione, schede tecniche e pianificazione della produzione'],
    ['De la visión','From vision','Dalla visione'],
    ['al producto.','to product.','al prodotto.'],
    ['Una colección sólida empieza mucho antes del primer boceto. Doy forma a la identidad de producto de tu marca y te acompaño durante todo el proceso, del diseño a la planificación de producción.','A strong collection begins long before the first sketch. I shape your brand’s product identity and guide you through the whole process, from design to production planning.','Una collezione solida nasce molto prima del primo bozzetto. Do forma all’identità di prodotto del tuo brand e ti accompagno lungo l’intero percorso, dal design alla pianificazione della produzione.'],
    ['Diseño de colección y fichas técnicas','Collection design and technical specifications','Design di collezione e schede tecniche'],
    ['Planificación de producción worldwide','Worldwide production planning','Pianificazione della produzione internazionale'],
    ['Antes de diseñar, definimos el estilo de tu marca: qué la hace reconocible, a quién se dirige y cómo debe expresarse en cada prenda. Esa dirección se convierte en la guía de toda la colección.','Before designing, we define your brand’s style: what makes it recognisable, who it speaks to and how it should be expressed in every garment. That direction becomes the guide for the entire collection.','Prima di disegnare, definiamo lo stile del tuo brand: cosa lo rende riconoscibile, a chi si rivolge e come deve esprimersi in ogni capo. Questa direzione diventa la guida dell’intera collezione.'],
    ['Transformo esa visión en prendas concretas: siluetas, colores, tejidos y detalles pensados para funcionar juntos. Desarrollo las fichas técnicas necesarias para comunicar cada diseño con claridad.','I turn that vision into garments: silhouettes, colours, fabrics and details designed to work together. I prepare the technical specifications needed to communicate each design clearly.','Trasformo questa visione in capi concreti: silhouette, colori, tessuti e dettagli pensati per funzionare insieme. Preparo le schede tecniche necessarie per comunicare ogni modello con chiarezza.'],
    ['Organizo el camino del diseño a la producción, teniendo en cuenta tiempos, necesidades técnicas y coordinación con los equipos y proveedores implicados, estén donde estén.','I organise the journey from design to production, considering timelines, technical requirements and coordination with the teams and suppliers involved, wherever they are.','Organizzo il percorso dal design alla produzione, tenendo conto dei tempi, delle esigenze tecniche e del coordinamento con team e fornitori coinvolti, ovunque si trovino.'],
    ['Una colaboración continuada que reúne dirección de producto, diseño de colección, fichas técnicas y planificación de producción en una única tarifa mensual. Así cuentas con acompañamiento durante todo el proceso.','An ongoing collaboration bringing together product direction, collection design, technical specifications and production planning under one monthly fee. You have support throughout the entire process.','Una collaborazione continuativa che riunisce direzione prodotto, design di collezione, schede tecniche e pianificazione della produzione in un’unica tariffa mensile. Così hai un supporto durante tutto il percorso.'],
    ['Cuéntame qué necesitas','Tell me what you need','Raccontami di cosa hai bisogno'],
    ['Mi','My','Il mio'],
    ['trabajo.','work.','lavoro.'],
    ['Explora mi trabajo por tipo de producto. Abre una categoría para ver sus imágenes y conocer mejor cada colección.','Explore my work by product category. Open a category to see its images and learn more about each collection.','Esplora il mio lavoro per tipologia di prodotto. Apri una categoria per vedere le immagini e conoscere meglio ogni collezione.'],
    ["Women's swimwear", "Women's swimwear", 'Costumi donna'],
    ["Men's swimwear", "Men's swimwear", 'Costumi uomo'],
    ['Occasionwear','Occasionwear','Abiti da cerimonia'],
    ['Beachwear','Beachwear','Beachwear'],
    ['Homewear','Homewear','Homewear'],
    ['Hagamos algo','Let’s create something','Creiamo qualcosa di'],
    ['bonito.','beautiful.','bello.'],
    ['¿Tienes una idea, una colección o una marca en marcha? Me encantará conocerla.','Have an idea, a collection or a brand in the making? I’d love to hear about it.','Hai un’idea, una collezione o un brand in crescita? Mi piacerebbe conoscerlo.'],
    ['Cuéntame','Tell me about','Raccontami'],
    ['tu proyecto.','your project.','il tuo progetto.'],
    ['Nombre','Name','Nome'],
    ['Marca','Brand','Brand'],
    ['Email *','Email *','Email *'],
    ['Servicio de interés *','Service of interest *','Servizio di interesse *'],
    ['Mensaje','Message','Messaggio'],
    ['Tu nombre','Your name','Il tuo nome'],
    ['Nombre de tu marca','Your brand name','Nome del tuo brand'],
    ['Selecciona un servicio','Choose a service','Seleziona un servizio'],
    ['¿En qué puedo ayudarte?','How can I help?','Come posso aiutarti?'],
    ['Al continuar se abrirá tu aplicación de correo con el mensaje preparado. Podrás revisarlo antes de enviarlo.','Continuing will open your email app with a prepared message. You can review it before sending.','Continuando si aprirà la tua app di posta con il messaggio già preparato. Potrai rileggerlo prima di inviarlo.'],
    ['Continuar en mi correo ↗','Continue in my email app ↗','Continua nella mia app di posta ↗'],
    ['Enviar un correo a mar@mar-rosales.com','Email mar@mar-rosales.com','Invia un’email a mar@mar-rosales.com'],
    ['Instagram de Mar Rosales','Mar Rosales on Instagram','Mar Rosales su Instagram'],
    ['Ver dirección de producto','View product direction','Scopri la direzione prodotto'],
    ['Ver diseño de colección y fichas técnicas','View collection design and technical specifications','Scopri il design di collezione e le schede tecniche'],
    ['Ver planificación de producción','View production planning','Scopri la pianificazione della produzione'],
    ['Ver tarifa fija mensual','View the fixed monthly fee','Scopri la tariffa fissa mensile'],
    ['Ver detalles de dirección de producto','View product direction details','Scopri i dettagli della direzione prodotto'],
    ['Ver detalles de diseño de colección y fichas técnicas','View collection design and technical specifications details','Scopri i dettagli del design di collezione e delle schede tecniche'],
    ['Ver detalles de planificación de producción','View production planning details','Scopri i dettagli della pianificazione della produzione'],
    ['Ver detalles de tarifa fija mensual','View fixed monthly fee details','Scopri i dettagli della tariffa fissa mensile'],
    ['Ver Prêt-à-porter: 10 imágenes','View ready-to-wear: 10 images','Vedi prêt-à-porter: 10 immagini'],
    ["Ver Women's swimwear: 18 imágenes", "View women's swimwear: 18 images", 'Vedi costumi donna: 18 immagini'],
    ['Ver Occasionwear: 21 imágenes','View occasionwear: 21 images','Vedi abiti da cerimonia: 21 immagini'],
    ['Ver Beachwear: 7 imágenes','View beachwear: 7 images','Vedi beachwear: 7 immagini'],
    ["Ver Men's swimwear: 9 imágenes", "View men's swimwear: 9 images", 'Vedi costumi uomo: 9 immagini'],
    ['Ver Homewear: 21 imágenes','View homewear: 21 images','Vedi homewear: 21 immagini'],
    ['Mar Rosales — Diseño de moda y desarrollo de colecciones','Mar Rosales — Fashion design and collection development','Mar Rosales — Design di moda e sviluppo di collezioni'],
    ['Mar Rosales, diseñadora de moda freelance en Barcelona. Diseño de colecciones, desarrollo de producto y consultoría para marcas de moda.','Mar Rosales, freelance fashion designer in Barcelona. Collection design, product development and consultancy for fashion brands.','Mar Rosales, fashion designer freelance a Barcellona. Design di collezione, sviluppo prodotto e consulenza per brand di moda.'],
    ['Una mirada creativa y comercial para colecciones que se llevan y se venden.','A creative and commercial eye for collections people wear and buy.','Uno sguardo creativo e commerciale per collezioni da indossare e da vendere.'],
    ['Mar Rosales trabajando con muestras de tejidos','Mar Rosales working with fabric swatches','Mar Rosales al lavoro con campioni di tessuto'],
    ['Mar Rosales junto a maniquíes y muestras de tejidos','Mar Rosales beside mannequins and fabric swatches','Mar Rosales accanto a manichini e campioni di tessuto'],
    ['Cuatro páginas de fichas técnicas de Luau Studio: diseño, materiales, confección y medidas','Four pages of Luau Studio technical specifications: design, materials, construction and measurements','Quattro pagine di schede tecniche di Luau Studio: design, materiali, confezione e misure'],
    ['Confección de una prenda azul con máquina de coser','Sewing a blue garment on a sewing machine','Confezione di un capo blu con una macchina da cucire'],
    ['Espacio creativo con bocetos, tejidos y prendas de moda','Creative workspace with sketches, fabrics and garments','Spazio creativo con bozzetti, tessuti e capi di moda'],
    ['Actuación impulsada y subvencionada por el Departament d’Empresa i Treball y cofinanciada por la Unión Europea','Project promoted and subsidised by the Departament d’Empresa i Treball and co-funded by the European Union','Progetto promosso e sovvenzionato dal Departament d’Empresa i Treball e cofinanziato dall’Unione Europea'],
    ["Actuación impulsada y subvencionada por el Departament d'Empresa i Treball y cofinanciada por la Unión Europea",'Project promoted and subsidised by the Departament d’Empresa i Treball and co-funded by the European Union','Progetto promosso e sovvenzionato dal Departament d’Empresa i Treball e cofinanziato dall’Unione Europea'],
    ['Logotipos de las entidades financiadoras','Logos of the funding bodies','Loghi degli enti finanziatori'],
    ['Modelo con bañador naranja de Munich, SS25','Model wearing orange Munich swim shorts, SS25','Modello con costume da bagno arancione Munich, SS25'],
    ['Enlaces legales','Legal links','Link legali'],
    ['← Volver a servicios','← Back to services','← Torna ai servizi'],
    ['Dirección','Product','Direzione'],
    ['de producto.','direction.','prodotto.'],
    ['Antes de dibujar la primera prenda, definimos qué debe contar tu colección y cómo reconocerla como parte de tu marca.','Before sketching the first garment, we define what your collection should say and how it will be recognised as part of your brand.','Prima di disegnare il primo capo, definiamo cosa deve raccontare la tua collezione e come renderla riconoscibile come parte del tuo brand.'],
    ['Alcance','Scope','Ambito'],
    ['Qué incluye','What’s included','Cosa comprende'],
    ['Encaje','Best suited to','A chi si rivolge'],
    ['Para quién','Who it’s for','Per chi'],
    ['Proceso','Process','Processo'],
    ['Cómo trabajaremos','How we’ll work','Come lavoreremo'],
    ['Revisión del punto de partida de la marca y sus objetivos.','Review of your brand’s starting point and goals.','Analisi del punto di partenza del brand e dei suoi obiettivi.'],
    ['Definición del estilo, el universo visual y las claves que harán reconocible el producto.','Definition of the style, visual world and distinctive elements that will make the product recognisable.','Definizione dello stile, dell’universo visivo e degli elementi che renderanno riconoscibile il prodotto.'],
    ['Orientación sobre público, categorías, siluetas, color y materiales.','Guidance on audience, categories, silhouettes, colour and materials.','Indicazioni su pubblico, categorie, silhouette, colori e materiali.'],
    ['Una dirección clara para tomar decisiones coherentes durante el diseño.','A clear direction for making consistent decisions throughout the design process.','Una direzione chiara per prendere decisioni coerenti durante il design.'],
    ['Para marcas que van a lanzar una colección y necesitan definir su identidad de producto antes de diseñarla.','For brands about to launch a collection that need to define their product identity before designing it.','Per i brand che stanno per lanciare una collezione e hanno bisogno di definire la propria identità di prodotto prima di disegnarla.'],
    ['También para proyectos que ya existen, pero quieren ordenar su propuesta, actualizarla o ganar coherencia entre prendas y temporadas.','Also for established projects that want to clarify their offer, refresh it or create greater consistency across garments and seasons.','Anche per progetti già avviati che vogliono mettere ordine nella propria proposta, aggiornarla o dare più coerenza a capi e stagioni.'],
    ['Empezaremos por entender tu marca, tu cliente y lo que quieres conseguir. A partir de ahí, pondremos en común referencias y decisiones de producto para construir una dirección compartida.','We’ll start by understanding your brand, your customer and what you want to achieve. From there, we’ll bring together references and product decisions to build a shared direction.','Inizieremo comprendendo il tuo brand, il tuo cliente e ciò che vuoi raggiungere. Da lì condivideremo riferimenti e scelte di prodotto per costruire una direzione comune.'],
    ['El alcance concreto se adapta al momento de tu proyecto y se acuerda antes de empezar.','The exact scope is tailored to the stage of your project and agreed before we begin.','L’ambito specifico si adatta alla fase del tuo progetto e viene concordato prima di iniziare.'],
    ['Empecemos por','Let’s start with','Partiamo'],
    ['la idea.','the idea.','dall’idea.'],
    ['Cuéntame tu proyecto','Tell me about your project','Raccontami il tuo progetto'],
    ['← Todos los servicios','← All services','← Tutti i servizi'],
    ['Siguiente: diseño de colección →','Next: collection design →','Avanti: design di collezione →'],
    ['Diseño de colección','Collection design','Design di collezione'],
    ['y fichas técnicas.','and technical specifications.','e schede tecniche.'],
    ['Convierto la dirección de producto en prendas que funcionan juntas y en información clara para desarrollarlas.','I turn product direction into garments that work together, supported by clear information for their development.','Trasformo la direzione prodotto in capi che funzionano insieme e in informazioni chiare per svilupparli.'],
    ['Desarrollo del concepto de colección y de sus líneas de producto.','Development of the collection concept and its product lines.','Sviluppo del concept della collezione e delle sue linee di prodotto.'],
    ['Propuestas de siluetas, colores, tejidos y detalles.','Proposals for silhouettes, colours, fabrics and details.','Proposte di silhouette, colori, tessuti e dettagli.'],
    ['Diseño de las prendas con una visión de conjunto y sentido comercial.','Garment design with an overall vision and commercial awareness.','Design dei capi con una visione d’insieme e sensibilità commerciale.'],
    ['Las fichas técnicas incluyen dibujos técnicos, medidas, bill of materials (lista de materiales), indicaciones de construcción de la prenda y puntadas, colores de cada prenda, referencias Pantone y notas. Todo listo para producción.','The technical specifications include technical drawings, measurements, a bill of materials, garment construction and stitch details, colourways for each garment, Pantone references and notes. Everything is ready for production.','Le schede tecniche includono disegni tecnici, misure, distinta base dei materiali (BOM), indicazioni sulla costruzione del capo e sulle cuciture, colori di ogni capo, riferimenti Pantone e note. Tutto pronto per la produzione.'],
    ['Para marcas que tienen una idea, una identidad o un briefing y necesitan convertirlos en una colección concreta.','For brands with an idea, identity or brief that need to turn it into a tangible collection.','Per i brand che hanno un’idea, un’identità o un brief e hanno bisogno di trasformarli in una collezione concreta.'],
    ['También para equipos que requieren apoyo externo en diseño y documentación técnica durante una temporada.','Also for teams that need external design and technical documentation support for a season.','Anche per i team che necessitano di supporto esterno nel design e nella documentazione tecnica durante una stagione.'],
    ['Partimos de la dirección de marca y definimos las categorías y prioridades de la colección. Trabajaremos las propuestas, revisaremos contigo las decisiones clave y prepararemos la información técnica de las prendas acordadas.','We start from your brand direction and define the collection’s categories and priorities. We’ll develop proposals, review key decisions with you and prepare technical information for the agreed garments.','Partiamo dalla direzione del brand e definiamo le categorie e le priorità della collezione. Svilupperemo le proposte, rivedremo insieme le decisioni chiave e prepareremo le informazioni tecniche dei capi concordati.'],
    ['El número de modelos y el nivel de detalle se definirán según tu proyecto.','The number of styles and level of detail will be defined according to your project.','Il numero di modelli e il livello di dettaglio saranno definiti in base al tuo progetto.'],
    ['¿Necesitas también fitting y/o patronaje?','Do you also need fitting and/or pattern making?','Hai bisogno anche di fitting e/o modellistica?'],
    ['Consúltame','Get in touch','Contattami'],
    ['y valoraremos cómo incorporarlos al proyecto.','and we’ll see how to include them in the project.','e valuteremo come integrarli nel progetto.'],
    ['De la idea','From idea','Dall’idea'],
    ['a la prenda.','to garment.','al capo.'],
    ['← Dirección de producto','← Product direction','← Direzione prodotto'],
    ['Siguiente: producción →','Next: production →','Avanti: produzione →'],
    ['Planificación','Production','Pianificazione'],
    ['de producción.','planning.','della produzione.'],
    ['Una buena colección necesita un camino claro para pasar del diseño al producto, también cuando intervienen equipos en distintos países.','A strong collection needs a clear path from design to product, even when teams in different countries are involved.','Una buona collezione ha bisogno di un percorso chiaro dal design al prodotto, anche quando sono coinvolti team in paesi diversi.'],
    ['Organización de las fases necesarias para desarrollar y producir la colección.','Organisation of the stages needed to develop and produce the collection.','Organizzazione delle fasi necessarie per sviluppare e produrre la collezione.'],
    ['Revisión de tiempos, prioridades y necesidades técnicas de cada etapa.','Review of timelines, priorities and technical requirements at each stage.','Revisione di tempi, priorità ed esigenze tecniche di ogni fase.'],
    ['Preparación y seguimiento de la información que necesitan los equipos implicados.','Preparation and follow-up of the information required by the teams involved.','Preparazione e monitoraggio delle informazioni necessarie ai team coinvolti.'],
    ['Coordinación del proceso con colaboradores y proveedores, también a escala internacional.','Coordination of the process with collaborators and suppliers, including internationally.','Coordinamento del processo con collaboratori e fornitori, anche a livello internazionale.'],
    ['Para marcas que ya tienen diseños definidos y quieren ordenar su paso a producción.','For brands with established designs that want to organise the transition to production.','Per i brand che hanno già definito i modelli e vogliono organizzare il passaggio alla produzione.'],
    ['Especialmente útil cuando hay varios interlocutores, proveedores o países implicados y es importante mantener una visión de conjunto.','Especially useful when several contacts, suppliers or countries are involved and an overall view is essential.','Particolarmente utile quando sono coinvolti più interlocutori, fornitori o paesi ed è importante mantenere una visione d’insieme.'],
    ['Primero revisaremos el estado de los diseños, los interlocutores y el calendario. Después trazaremos las fases y puntos de decisión para que cada parte sepa qué necesita y cuándo.','First we’ll review the status of the designs, the people involved and the schedule. Then we’ll map the stages and decision points so everyone knows what is needed and when.','Per prima cosa esamineremo lo stato dei modelli, gli interlocutori e il calendario. Poi definiremo fasi e momenti decisionali, così che ogni parte sappia cosa serve e quando.'],
    ['El acompañamiento se adapta a los equipos y proveedores con los que ya trabajes.','Support is adapted to the teams and suppliers you already work with.','Il supporto si adatta ai team e ai fornitori con cui lavori già.'],
    ['Del diseño','From design','Dal design'],
    ['a la realidad.','to reality.','alla realtà.'],
    ['← Diseño de colección','← Collection design','← Design di collezione'],
    ['Siguiente: tarifa mensual →','Next: monthly fee →','Avanti: tariffa mensile →'],
    ['Tarifa fija','Fixed monthly','Tariffa fissa'],
    ['mensual.','fee.','mensile.'],
    ['Una forma de trabajar juntos de manera continuada: de la dirección de producto al seguimiento del camino hacia producción.','An ongoing way to work together: from product direction to following the journey towards production.','Un modo di lavorare insieme con continuità: dalla direzione prodotto al monitoraggio del percorso verso la produzione.'],
    ['Dirección de producto y definición del estilo de marca.','Product direction and definition of the brand’s style.','Direzione prodotto e definizione dello stile del brand.'],
    ['Diseño de colección y desarrollo de fichas técnicas.','Collection design and development of technical specifications.','Design di collezione e sviluppo delle schede tecniche.'],
    ['Planificación del proceso de producción worldwide.','Planning of the worldwide production process.','Pianificazione del processo di produzione internazionale.'],
    ['Acompañamiento continuado para mantener la coherencia entre las decisiones.','Ongoing support to keep decisions consistent.','Supporto continuativo per mantenere la coerenza tra le decisioni.'],
    ['Para marcas que no necesitan incorporar a un diseñador in-house, pero sí contar con alguien que cuide de todas las fases necesarias del proyecto.','For brands that do not need an in-house designer, but do need someone to take care of every necessary stage of the project.','Per i brand che non hanno bisogno di assumere un designer interno, ma desiderano qualcuno che si occupi di tutte le fasi necessarie del progetto.'],
    ['Un apoyo externo y continuado que acompaña la dirección de producto, el diseño de la colección, las fichas técnicas y la planificación de producción, sin necesidad de ampliar el equipo en plantilla.','Ongoing external support covering product direction, collection design, technical specifications and production planning, without expanding your in-house team.','Un supporto esterno e continuativo che accompagna la direzione prodotto, il design della collezione, le schede tecniche e la pianificazione della produzione, senza ampliare il team interno.'],
    ['Definiremos las prioridades del mes, el calendario y una forma de revisar avances y decisiones. Así puedo acompañarte en las fases que estén activas en cada momento.','We’ll set monthly priorities, a schedule and a way to review progress and decisions. That lets me support you through whichever stages are active at any given time.','Definiremo le priorità del mese, il calendario e un modo per rivedere progressi e decisioni. Così potrò accompagnarti nelle fasi attive in ogni momento.'],
    ['La dedicación, el volumen de trabajo y la tarifa se acuerdan contigo según las necesidades de la marca antes de comenzar.','The time commitment, workload and fee are agreed with you according to the brand’s needs before we begin.','Impegno, volume di lavoro e tariffa vengono concordati con te in base alle esigenze del brand prima di iniziare.'],
    ['Un mismo equipo,','One team,','Un unico team,'],
    ['de principio a fin.','from start to finish.','dall’inizio alla fine.'],
    ['← Planificación de producción','← Production planning','← Pianificazione della produzione'],
    ['Todos los servicios →','All services →','Tutti i servizi →'],
    ['Otros servicios','Other services','Altri servizi'],
    ['Dirección de producto — mr.studio','Product direction — mr.studio','Direzione prodotto — mr.studio'],
    ['Diseño de colección y fichas técnicas — mr.studio','Collection design and technical specifications — mr.studio','Design di collezione e schede tecniche — mr.studio'],
    ['Planificación de producción worldwide — mr.studio','Worldwide production planning — mr.studio','Pianificazione della produzione internazionale — mr.studio'],
    ['Tarifa fija mensual — mr.studio','Fixed monthly fee — mr.studio','Tariffa fissa mensile — mr.studio'],
    ['Define el estilo y la dirección de producto de tu marca antes de empezar a diseñar. Descubre cómo trabaja Mar Rosales.','Define your brand’s style and product direction before design begins. Discover how Mar Rosales works.','Definisci lo stile e la direzione prodotto del tuo brand prima di iniziare a disegnare. Scopri come lavora Mar Rosales.'],
    ['Diseño de colecciones de moda y desarrollo de fichas técnicas con una visión creativa y comercial. Descubre el servicio de Mar Rosales.','Fashion collection design and technical specifications with a creative and commercial vision. Discover Mar Rosales’ service.','Design di collezioni moda e sviluppo di schede tecniche con una visione creativa e commerciale. Scopri il servizio di Mar Rosales.'],
    ['Planificación del paso del diseño a la producción de moda, con atención a tiempos, necesidades técnicas y coordinación internacional.','Planning the transition from fashion design to production, with attention to timing, technical needs and international coordination.','Pianificazione del passaggio dal design alla produzione moda, con attenzione a tempi, esigenze tecniche e coordinamento internazionale.'],
    ['Una colaboración mensual que reúne dirección de producto, diseño de colección, fichas técnicas y planificación de producción para marcas de moda.','A monthly collaboration combining product direction, collection design, technical specifications and production planning for fashion brands.','Una collaborazione mensile che riunisce direzione prodotto, design di collezione, schede tecniche e pianificazione della produzione per brand di moda.'],
    ['← Volver al portfolio','← Back to portfolio','← Torna al portfolio'],
    ['Galería de imágenes del portfolio','Portfolio image gallery','Galleria immagini del portfolio'],
    ['Mostrar fotos anteriores','Show previous photos','Mostra le foto precedenti'],
    ['Mostrar fotos siguientes','Show next photos','Mostra le foto successive'],
    ['← Anterior','← Previous','← Precedente'],
    ['Siguiente →','Next →','Successiva →'],
    ['Pausar','Pause','Pausa'],
    ['Reproducir','Play','Riprendi'],
    ['Foto ampliada','Enlarged photo','Foto ingrandita'],
    ['Cerrar foto ampliada','Close enlarged photo','Chiudi la foto ingrandita'],
    ['Cerrar ×','Close ×','Chiudi ×'],
    ['← Todas las categorías','← All categories','← Tutte le categorie'],
    ['Hablemos de tu proyecto ↗','Let’s talk about your project ↗','Parliamo del tuo progetto ↗'],
    ['Categoría no encontrada','Category not found','Categoria non trovata'],
    ['Vuelve al portfolio para elegir un tipo de producto.','Return to the portfolio to choose a product category.','Torna al portfolio per scegliere una tipologia di prodotto.'],
    ['Diseño prendas tanto de tejido de plana como de punto para el día a día, siempre dentro de colecciones con identidad propia. En cada propuesta, la silueta, el color y los detalles dan forma al carácter de la marca.','I design everyday garments in both woven and knitted fabrics, always as part of collections with a distinct identity. In every piece, silhouette, colour and detail shape the character of the brand.','Disegno capi quotidiani sia in tessuto a navetta sia in maglia, sempre all’interno di collezioni con una propria identità. In ogni proposta, silhouette, colore e dettagli danno forma al carattere del brand.'],
    ['Propuestas para los momentos junto al mar y la piscina. En esta selección conviven prendas ligeras, colores y detalles que amplían el universo de una colección de verano.','Pieces for days by the sea and pool. This selection brings together light garments, colours and details that expand the world of a summer collection.','Proposte per i momenti al mare e in piscina. Questa selezione riunisce capi leggeri, colori e dettagli che ampliano l’universo di una collezione estiva.'],
    ['Una selección de diseños de baño para mujer. Formas, colores y acabados muestran distintas maneras de trasladar la identidad de una marca a una prenda de baño.','A selection of women’s swimwear designs. Shapes, colours and finishes show different ways to express a brand’s identity through swimwear.','Una selezione di costumi da bagno donna. Forme, colori e finiture mostrano diversi modi di esprimere l’identità di un brand attraverso un costume.'],
    ['Diseños de baño para hombre donde la forma, el estampado y los detalles definen cada propuesta. Una mirada al producto desde la comodidad y el carácter de marca.','Men’s swimwear in which shape, print and detail define each piece. A product perspective guided by comfort and brand character.','Costumi da bagno uomo in cui forma, stampa e dettagli definiscono ogni proposta. Uno sguardo al prodotto guidato dal comfort e dal carattere del brand.'],
    ['Prendas para ocasiones especiales, con atención a la silueta, el movimiento y los detalles. Una selección de piezas que buscan tener presencia sin perder naturalidad.','Garments for special occasions, with attention to silhouette, movement and detail. Pieces designed to make an impression while retaining a natural ease.','Capi per occasioni speciali, con attenzione a silhouette, movimento e dettagli. Una selezione di pezzi che si fanno notare senza perdere naturalezza.'],
    ['Prendas pensadas para estar en casa y sentirse bien. Esta selección explora el equilibrio entre comodidad, forma y estilo en diferentes colecciones.','Garments designed for feeling good at home. This selection explores the balance between comfort, shape and style across different collections.','Capi pensati per stare a casa e sentirsi bene. Questa selezione esplora l’equilibrio tra comfort, forma e stile in diverse collezioni.'],
    ['Portfolio — mr.studio','Portfolio — mr.studio','Portfolio — mr.studio'],
    ['Explora el portfolio de Mar Rosales por tipo de producto: prêt-à-porter, beachwear, swimwear, occasionwear y homewear.','Explore Mar Rosales’ portfolio by product category: ready-to-wear, beachwear, swimwear, occasionwear and homewear.','Esplora il portfolio di Mar Rosales per tipologia di prodotto: prêt-à-porter, beachwear, swimwear, abiti da cerimonia e homewear.'],
    ['← Volver','← Back','← Indietro'],
    ['Legal','Legal','Legale'],
    ['Revisado: junio de 2025','Reviewed: June 2025','Revisionato: giugno 2025'],
    ['Nombre:','Name:','Nome:'],
    ['Marca:','Brand:','Brand:'],
    ['Email:','Email:','Email:'],
    ['Servicio de interés:','Service of interest:','Servizio di interesse:'],
    ['Consulta sobre','Enquiry about','Richiesta informazioni su'],
    ['1. Datos identificativos','1. Identification details','1. Dati identificativi'],
    ['En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:','In accordance with Article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:','Ai sensi dell’articolo 10 della legge spagnola 34/2002 dell’11 luglio sui servizi della società dell’informazione e sul commercio elettronico (LSSI-CE), si forniscono le seguenti informazioni:'],
    ['Titular:','Owner:','Titolare:'],
    ['Identidad:','Identity:','Identità:'],
    ['NIF:','Spanish tax ID (NIF):','Codice fiscale spagnolo (NIF):'],
    ['Actividad:','Activity:','Attività:'],
    ['Diseñadora de moda freelance','Freelance fashion designer','Fashion designer freelance'],
    ['Domicilio:','Address:','Indirizzo:'],
    ['Correo electrónico:','Email:','Email:'],
    ['Correo de contacto:','Contact email:','Email di contatto:'],
    ['2. Objeto y ámbito de aplicación','2. Purpose and scope','2. Oggetto e ambito di applicazione'],
    ['El presente Aviso Legal regula el acceso, navegación y uso del sitio web mar-rosales.com (en adelante, «el Sitio»). El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones.','This Legal Notice governs access to, browsing and use of the website mar-rosales.com (hereinafter, the “Site”). Accessing the Site implies full and unconditional acceptance of these terms.','Le presenti Note legali disciplinano l’accesso, la navigazione e l’utilizzo del sito mar-rosales.com (di seguito, il «Sito»). L’accesso al Sito implica la piena accettazione, senza riserve, delle presenti condizioni.'],
    ['3. Propiedad intelectual e industrial','3. Intellectual and industrial property','3. Proprietà intellettuale e industriale'],
    ['Todos los contenidos del Sitio —textos, imágenes, fotografías, diseños, logotipos, ilustraciones y demás elementos— son propiedad exclusiva de Mar Rosales Viura o de terceros que han autorizado su uso, y están protegidos por la normativa española y europea de propiedad intelectual e industrial.','All Site content—including text, images, photographs, designs, logos, illustrations and other elements—is the exclusive property of Mar Rosales Viura or of third parties who have authorised its use, and is protected by Spanish and European intellectual and industrial property law.','Tutti i contenuti del Sito — testi, immagini, fotografie, design, loghi, illustrazioni e altri elementi — sono di proprietà esclusiva di Mar Rosales Viura o di terzi che ne hanno autorizzato l’uso e sono tutelati dalla normativa spagnola ed europea in materia di proprietà intellettuale e industriale.'],
    ['Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin autorización previa y por escrito de la titular.','Reproducing, distributing, communicating to the public or adapting this content without the owner’s prior written authorisation is expressly prohibited.','È espressamente vietato riprodurre, distribuire, comunicare al pubblico o modificare tali contenuti senza la previa autorizzazione scritta della titolare.'],
    ['4. Responsabilidad','4. Liability','4. Responsabilità'],
    ['Mar Rosales Viura no se responsabiliza de los daños o perjuicios de cualquier naturaleza derivados del acceso o uso del Sitio, ni de la información contenida en el mismo, salvo lo dispuesto en la legislación vigente.','Mar Rosales Viura is not liable for damages of any kind arising from access to or use of the Site or the information it contains, except as provided by applicable law.','Mar Rosales Viura non è responsabile di danni di qualsiasi natura derivanti dall’accesso o dall’utilizzo del Sito o dalle informazioni in esso contenute, salvo quanto previsto dalla normativa vigente.'],
    ['El Sitio puede contener enlaces a sitios web de terceros. Mar Rosales Viura no controla ni se hace responsable de los contenidos o políticas de privacidad de dichos sitios.','The Site may contain links to third-party websites. Mar Rosales Viura does not control and is not responsible for the content or privacy policies of those sites.','Il Sito può contenere collegamenti a siti web di terzi. Mar Rosales Viura non controlla e non è responsabile dei contenuti o delle informative sulla privacy di tali siti.'],
    ['5. Legislación aplicable y jurisdicción','5. Applicable law and jurisdiction','5. Legge applicabile e giurisdizione'],
    ['Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales de la ciudad de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.','These terms are governed by Spanish law. For the resolution of any dispute, the parties submit to the courts and tribunals of the city of Barcelona, expressly waiving any other jurisdiction that might otherwise apply.','Le presenti condizioni sono disciplinate dalla legge spagnola. Per la risoluzione di qualsiasi controversia, le parti si sottopongono ai tribunali della città di Barcellona, rinunciando espressamente a qualsiasi altro foro eventualmente competente.'],
    ['1. Responsable del tratamiento','1. Data controller','1. Titolare del trattamento'],
    ['2. Datos que se recogen','2. Data collected','2. Dati raccolti'],
    ['Este sitio web no cuenta con formularios de registro. El formulario de contacto prepara un mensaje en tu aplicación de correo; no envía ni guarda tus datos en la web. Los datos personales que se tratan son los que proporcionas al enviar ese correo:','This website has no registration forms. The contact form prepares a message in your email app; it does not send or store your data on the website. The personal data processed is the information you provide when you send that email:','Questo sito non dispone di moduli di registrazione. Il modulo di contatto prepara un messaggio nella tua app di posta; non invia né conserva i tuoi dati sul sito. I dati personali trattati sono quelli che fornisci quando invii tale email:'],
    ['La web utiliza el idioma configurado en tu navegador como idioma inicial. Si eliges otro idioma, esa preferencia se guarda en el almacenamiento local de tu navegador para recordarla en próximas visitas.','The site uses the language set in your browser as its initial language. If you choose another language, that preference is saved in your browser’s local storage for future visits.','Il sito usa inizialmente la lingua impostata nel tuo browser. Se scegli un’altra lingua, la preferenza viene salvata nella memoria locale del browser per ricordarla nelle visite successive.'],
    ['Nombre y apellidos','First and last name','Nome e cognome'],
    ['Dirección de correo electrónico','Email address','Indirizzo email'],
    ['Cualquier información que incluyas en el cuerpo del mensaje','Any information you include in the body of the message','Qualsiasi informazione inserita nel corpo del messaggio'],
    ['3. Finalidad y base legal del tratamiento','3. Purpose and legal basis for processing','3. Finalità e base giuridica del trattamento'],
    ['Finalidad','Purpose','Finalità'],
    ['Base legal','Legal basis','Base giuridica'],
    ['Responder a tu consulta o solicitud de cita','Responding to your enquiry or appointment request','Rispondere alla tua richiesta di informazioni o di appuntamento'],
    ['Ejecución de un contrato o aplicación de medidas precontractuales a petición del interesado (art. 6.1.b RGPD)','Performance of a contract or steps taken at your request before entering into a contract (Art. 6(1)(b) GDPR)','Esecuzione di un contratto o di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b, GDPR)'],
    ['Gestión de la relación comercial','Managing the business relationship','Gestione del rapporto commerciale'],
    ['Interés legítimo (art. 6.1.f RGPD)','Legitimate interest (Art. 6(1)(f) GDPR)','Legittimo interesse (art. 6, par. 1, lett. f, GDPR)'],
    ['4. Conservación de los datos','4. Data retention','4. Conservazione dei dati'],
    ['Los datos se conservarán durante el tiempo necesario para atender tu solicitud y, en su caso, durante el plazo legalmente exigido para el cumplimiento de obligaciones contables y fiscales (mínimo 5 años).','Data will be retained for as long as necessary to handle your request and, where applicable, for the period required by law to comply with accounting and tax obligations (at least five years).','I dati saranno conservati per il tempo necessario a gestire la tua richiesta e, ove applicabile, per il periodo previsto dalla legge per adempiere agli obblighi contabili e fiscali (almeno cinque anni).'],
    ['5. Destinatarios','5. Recipients','5. Destinatari'],
    ['Los datos no se cederán a terceros salvo obligación legal. El sitio web utiliza Google Fonts, que puede registrar la dirección IP del visitante al cargar las tipografías. Consulta la política de privacidad de Google para más información.','Data will not be shared with third parties except where legally required. The website uses Google Fonts, which may record a visitor’s IP address when loading fonts. See Google’s privacy policy for more information.','I dati non saranno comunicati a terzi salvo obbligo di legge. Il sito utilizza Google Fonts, che potrebbe registrare l’indirizzo IP del visitatore durante il caricamento dei caratteri. Consulta l’informativa sulla privacy di Google per maggiori informazioni.'],
    ['6. Tus derechos','6. Your rights','6. I tuoi diritti'],
    ['En virtud del Reglamento General de Protección de Datos (RGPD) y la LOPDGDD, puedes ejercer los siguientes derechos dirigiéndote a','Under the General Data Protection Regulation (GDPR) and Spain’s LOPDGDD, you may exercise the following rights by contacting','Ai sensi del Regolamento generale sulla protezione dei dati (GDPR) e della legge spagnola LOPDGDD, puoi esercitare i seguenti diritti scrivendo a'],
    ['Acceso:','Access:','Accesso:'],
    ['conocer qué datos tuyos tratamos.','find out which of your data we process.','conoscere quali tuoi dati trattiamo.'],
    ['Rectificación:','Rectification:','Rettifica:'],
    ['corregir datos inexactos.','correct inaccurate data.','correggere dati inesatti.'],
    ['Supresión:','Erasure:','Cancellazione:'],
    ['solicitar el borrado de tus datos.','request deletion of your data.','richiedere la cancellazione dei tuoi dati.'],
    ['Limitación:','Restriction:','Limitazione:'],
    ['solicitar la restricción del tratamiento.','request restriction of processing.','richiedere la limitazione del trattamento.'],
    ['Portabilidad:','Portability:','Portabilità:'],
    ['recibir tus datos en formato estructurado.','receive your data in a structured format.','ricevere i tuoi dati in un formato strutturato.'],
    ['Oposición:','Objection:','Opposizione:'],
    ['oponerte al tratamiento basado en interés legítimo.','object to processing based on legitimate interest.','opporti al trattamento basato sul legittimo interesse.'],
    ['También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (','You also have the right to lodge a complaint with the Spanish Data Protection Agency (','Hai inoltre il diritto di presentare un reclamo all’Agenzia spagnola per la protezione dei dati ('],
    ['¿Qué son las cookies?','What are cookies?','Cosa sono i cookie?'],
    ['Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Sirven para recordar preferencias, analizar el uso del sitio o mostrar contenido personalizado.','Cookies are small text files that websites store on your device when you visit them. They can remember preferences, analyse site usage or display personalised content.','I cookie sono piccoli file di testo che i siti web memorizzano sul tuo dispositivo quando li visiti. Servono a ricordare le preferenze, analizzare l’uso del sito o mostrare contenuti personalizzati.'],
    ['Cookies que utiliza este sitio','Cookies used by this site','Cookie utilizzati da questo sito'],
    ['Este sitio web es un portfolio estático sin sistema de analítica ni publicidad. Las únicas cookies o solicitudes externas que pueden generarse son las siguientes:','This website is a static portfolio with no analytics or advertising system. The only cookies or external requests that may be generated are listed below:','Questo sito è un portfolio statico senza sistemi di analisi o pubblicità. Gli unici cookie o richieste esterne che possono essere generati sono i seguenti:'],
    ['Cookie / solicitud','Cookie / request','Cookie / richiesta'],
    ['Origen','Source','Origine'],
    ['Tipo','Type','Tipo'],
    ['Duración','Duration','Durata'],
    ['Solicitud de tipografía','Font request','Richiesta dei caratteri'],
    ['Técnica','Technical','Tecnico'],
    ['Cargar las fuentes DM Sans y Manrope desde los servidores de Google. Google puede registrar la IP del visitante.','Load the DM Sans and Manrope fonts from Google’s servers. Google may record the visitor’s IP address.','Caricare i caratteri DM Sans e Manrope dai server di Google. Google potrebbe registrare l’indirizzo IP del visitatore.'],
    ['Sesión','Session','Sessione'],
    ['Actualmente no se utilizan cookies de analítica, seguimiento, publicidad ni redes sociales. Esta política se actualizará cuando se incorporen herramientas de medición de visitas o comunicación por correo electrónico.','No analytics, tracking, advertising or social media cookies are currently used. This policy will be updated if visitor-measurement or email-communication tools are added.','Attualmente non vengono utilizzati cookie di analisi, tracciamento, pubblicità o social media. Questa informativa sarà aggiornata se verranno aggiunti strumenti di misurazione delle visite o di comunicazione via email.'],
    ['La elección de idioma se guarda en el almacenamiento local del navegador, no en una cookie. Puedes eliminarla borrando los datos del sitio en tu navegador.','Your language choice is saved in your browser’s local storage, not in a cookie. You can remove it by clearing the site’s data in your browser.','La lingua scelta viene salvata nella memoria locale del browser, non in un cookie. Puoi eliminarla cancellando i dati del sito dal browser.'],
    ['Cómo gestionar o desactivar las cookies','How to manage or disable cookies','Come gestire o disattivare i cookie'],
    ['Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que esto puede afectar al correcto funcionamiento de algunos sitios web. Aquí tienes los enlaces de ayuda de los navegadores más habituales:','You can configure your browser to block or delete cookies at any time. Bear in mind that this may affect how some websites work. Here are help links for common browsers:','Puoi configurare il browser per bloccare o eliminare i cookie in qualsiasi momento. Tieni presente che questo può influire sul funzionamento di alcuni siti. Ecco i link di aiuto dei browser più comuni:'],
    ['Actualizaciones de esta política','Updates to this policy','Aggiornamenti di questa informativa'],
    ['Esta política puede actualizarse si se incorporan nuevas funcionalidades al sitio. La fecha de «revisión» en la parte superior indicará cuándo se revisó el texto.','This policy may be updated if new features are added to the site. The “reviewed” date above indicates when the text was reviewed.','Questa informativa può essere aggiornata se vengono aggiunte nuove funzionalità al sito. La data di «revisione» riportata sopra indica quando il testo è stato revisionato.'],
    ['Aviso de cookies','Cookie notice','Avviso sui cookie'],
    ['Usamos cookies técnicas necesarias para el funcionamiento del sitio. Puedes consultar nuestra','We use technical cookies necessary for the site to function. You can read our','Utilizziamo cookie tecnici necessari al funzionamento del sito. Puoi consultare la nostra'],
    ['política de cookies','cookie policy','informativa sui cookie'],
    ['y nuestra','and our','e la nostra'],
    ['política de privacidad','privacy policy','informativa sulla privacy'],
    ['Solo necesarias','Necessary only','Solo necessari'],
    ['Aceptar todas','Accept all','Accetta tutti'],
    ['Aviso Legal — Mar Rosales','Legal notice — Mar Rosales','Note legali — Mar Rosales'],
    ['Política de Privacidad — Mar Rosales','Privacy policy — Mar Rosales','Informativa sulla privacy — Mar Rosales'],
    ['Política de Cookies — Mar Rosales','Cookie policy — Mar Rosales','Informativa sui cookie — Mar Rosales'],
  ];

  const translations = Object.fromEntries(rows.map(([es, en, it]) => [es, { en, it }]));
  const browserLanguage = () => {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'es'];
    const preferred = languages[0]?.toLowerCase() || 'es';
    if (preferred.startsWith('ca')) return 'es';
    return ['es', 'en', 'it'].includes(preferred.slice(0, 2)) ? preferred.slice(0, 2) : 'en';
  };
  const storedLanguage = () => {
    try { return localStorage.getItem('mr_studio_language'); } catch { return null; }
  };
  const saveLanguage = language => {
    try { localStorage.setItem('mr_studio_language', language); } catch { /* Storage may be disabled. */ }
  };
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  let language = ['es', 'en', 'it'].includes(queryLanguage) ? queryLanguage : storedLanguage() || browserLanguage();
  if (queryLanguage && ['es', 'en', 'it'].includes(queryLanguage)) saveLanguage(queryLanguage);
  document.documentElement.lang = language;

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const translate = value => {
    if (language === 'es') return value;
    if (translations[value]?.[language]) return translations[value][language];
    const prefixes = {
      'Ampliar foto: ': { en: 'Enlarge photo: ', it: 'Ingrandisci foto: ' },
      'Galería de ': { en: 'Gallery of ', it: 'Galleria di ' },
      'Swimwear mujer de ': { en: "Women's swimwear by ", it: 'Costumi donna di ' },
      'Swimwear hombre de ': { en: "Men's swimwear by ", it: 'Costumi uomo di ' },
      'Occasionwear de ': { en: 'Occasionwear by ', it: 'Abiti da cerimonia di ' },
      'Beachwear de ': { en: 'Beachwear by ', it: 'Beachwear di ' },
      'Homewear de ': { en: 'Homewear by ', it: 'Homewear di ' },
      'Prêt-à-porter de ': { en: 'Ready-to-wear by ', it: 'Prêt-à-porter di ' }
    };
    for (const [prefix, target] of Object.entries(prefixes)) {
      if (value.startsWith(prefix)) return target[language] + translate(value.slice(prefix.length));
    }
    return value;
  };

  function applyTranslations() {
    document.documentElement.lang = language;
    document.querySelectorAll('.language-switch button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script,style,.language-switch') || !node.nodeValue.trim()
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      node.nodeValue = source.replace(trimmed, translate(trimmed));
    }
    document.querySelectorAll('[aria-label],[alt],[placeholder],[content]').forEach(element => {
      for (const attribute of ['aria-label', 'alt', 'placeholder', 'content']) {
        if (!element.hasAttribute(attribute)) continue;
        let source = originalAttributes.get(element);
        if (!source) { source = {}; originalAttributes.set(element, source); }
        if (!(attribute in source)) source[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, translate(source[attribute]));
      }
    });
    if (!document.documentElement.dataset.originalTitle) document.documentElement.dataset.originalTitle = document.title;
    document.title = translate(document.documentElement.dataset.originalTitle);
    document.dispatchEvent(new CustomEvent('site-language-change', { detail: { language } }));
  }

  function choose(nextLanguage) {
    if (!['es', 'en', 'it'].includes(nextLanguage)) return;
    language = nextLanguage;
    saveLanguage(language);
    if (queryLanguage && typeof history !== 'undefined' && history.replaceState) {
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', language);
        history.replaceState(null, '', url);
      } catch { /* Some browsers restrict history changes for local files. */ }
    }
    applyTranslations();
  }

  function addSwitch() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const existing = header.querySelector('.language-switch');
    if (existing) {
      existing.querySelectorAll('button[data-lang]').forEach(button => button.addEventListener('click', () => choose(button.dataset.lang)));
      return;
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'language-switch';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Language / Idioma / Lingua');
    ['es', 'en', 'it'].forEach((code, index) => {
      if (index) {
        const separator = document.createElement('span');
        separator.textContent = '/';
        separator.setAttribute('aria-hidden', 'true');
        wrapper.append(separator);
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.lang = code;
      button.lang = code;
      button.textContent = code.toUpperCase();
      button.setAttribute('aria-label', { es: 'Español', en: 'English', it: 'Italiano' }[code]);
      button.addEventListener('click', () => choose(code));
      wrapper.append(button);
    });
    header.append(wrapper);
  }

  window.siteLanguage = { get: () => language, t: translate, choose, apply: applyTranslations, hasTranslation: value => Boolean(translations[value]) };
  document.addEventListener('DOMContentLoaded', () => {
    addSwitch();
    applyTranslations();
  });
})();
