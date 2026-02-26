/* =========================================================
   Dataset (extraído del MHT "Cursos por Carrera.mht")
   - Cada nodo incluye: código, nombre, créditos, sumilla, temas
   - Las aristas representan "predecesoras": pred -> curso
   ========================================================= */

const COURSES = /*__DATA__*/[
  {"code":"30010","name":"ALGORITMO Y ESTRUCTURA DE DATOS","credits":4,"sumilla":"La unidad didáctica de Algoritmo y Estructura de Datos es de naturaleza teórico-práctica y tiene como propósito que el estudiante desarrolle algoritmos para el procesamiento de las operaciones asociadas a las diferentes estructuras de datos existentes y los implemente utilizando lenguajes de programación vigentes en el mercado. Las unidades temáticas están referidas a: algoritmos para estructuras de datos lineales y estáticas, algoritmos para estructuras de datos lineales y dinámicas, algoritmos para estructuras de datos LIFO y FIFO, y algoritmos para estructuras de datos no lineales.","temas":"Tema 1\nAlgoritmos para estructuras de datos lineales y estáticas\nReconoce la diferencia entre las estructuras de datos estáticas y dinámicas. Comprende la relación entre las estructuras de datos y la programación.\nDatos y algoritmos \n• Definiciones \n• Clasificaciones \n• Estructuras estáticas y dinámicas \n• Estructuras de datos y algoritmos\nTema 2\nAlgoritmos para estructuras de datos lineales y estáticas\nRepresenta gráficamente los algoritmos para realizar las operaciones sobre un vector.\nArreglos unidimensionales (vectores) \n• Definición y representación gráfica \n• Formas de almacenamiento de datos en un vector \n• Operaciones\nTema 3\nAlgoritmos para estructuras de datos lineales y estáticas\nConstruye un programa de computadora para implementar el algoritmo de ordenamiento de un vector.\nAlgoritmos de ordenamiento de un vector \n• Eficiencia de algoritmos \n• Análisis de la eficiencia de los algoritmos\nTema 4\nAlgoritmos para estructuras de datos lineales y estáticas\nAnaliza la complejidad de los algoritmos aplicando las condiciones de mejor caso y peor caso, a través del uso de matrices.\nMatrices \n• Arreglos bidimensionales \n1. Definición y representación gráfica \n2. Operaciones \n• Matrices especiales \n1. Matriz cuadrada \n2. Matrices poco densas\nTema 5\nAlgoritmos para estructuras de datos lineales y dinámicas\nImplementa una lista enlazada. Representa gráficamente los algoritmos para realizar las operaciones de recorrido e inserción en una lista enlazada.Construye programas de computadora para implementar los algoritmos de operaciones de recorrido e inserción en una lista enlazada.\nListas enlazadas \n• Definición \n• Clasificación \n• Representación gráfica\nTema 6\nAlgoritmos para estructuras de datos lineales y dinámicas\nRepresenta gráficamente los algoritmos para realizar las operaciones sobre una lista enlazada simple.Construye programas de computadora para implementar los algoritmos de operaciones sobre una lista enlazada simple. Evalúa la eficiencia de los algoritmos de inserción y eliminación.\nLista enlazada simple \n• Algoritmos de búsqueda \n• Modificación, eliminación y ordenamiento\nTema 7\nAlgoritmos para estructuras de datos lineales y dinámicas\nImplementa una lista enlazada circular y una lista enlazada doble.\nListas circulares y dobles \n• Definiciones \n• Representaciones gráficas\nTema 8\nSesión de repaso / asesoría\nDurante esta sesión de 2 horas, el profesor brindará un espacio para consolidar aprendizajes y resolver dudas. El profesor indicará la dinámica y actividades según las necesidades del curso.\nEl profesor indicará la dinámica y actividades según las necesidades del curso.\nTema 9\nAlgoritmos para estructuras de datos LIFO y FIFO\nRepresenta gráficamente los algoritmos para realizar operaciones sobre una pila LIFO. Construye programas de computadora para implementar los algoritmos de operaciones sobre una pila LIFO.\nEstructuras\nLIFO (pilas) \n• Definición y características\n• Operaciones de apilar y desapilar • Implementación \n• Aplicaciones\nTema 10\nAlgoritmos para estructuras de datos LIFO y FIFO\nRepresenta gráficamente los algoritmos para realizar operaciones sobre una cola FIFO. Construye programas de computadora para implementar los algoritmos de operaciones sobre una cola FIFO.\nEstructuras\nFIFO (colas) \n• Definición y características \n• Operaciones de encolar y desencolar \n• Implementación \n• Aplicaciones\nTema 11\nAlgoritmos para estructuras de datos LIFO y FIFO\nRepresenta gráficamente un algoritmo para implementar recursividad. Construye un programa de computadora para implementar un algoritmo recursivo.\nRecursividad \n• Algoritmos recursivos \n• Principio Divide y Vencerás\nTema 12\nAlgoritmos para estructuras de datos lineales y dinámicas\nRepresenta gráficamente los algoritmos recursivos para realizar operaciones de ordenamiento. Construye programas de computadora para implementar los algoritmos recursivos de ordenamiento.\nAlgoritmos recursivos de ordenamiento \n• Recursividad en estructuras estáticas (vectores) \n• Recursividad en estructuras dinámicas (listas enlazadas simples)\nTema 13\nAlgoritmos para estructuras de datos lineales y dinámicas\nIdentifica casos de aplicación de grafos y los implementa mediante código de programación. Representa gráficamente los algoritmos para realizar operaciones de búsqueda en grafos. Construye programas de computadora para implementar los algoritmos de búsqueda en grafos.\nGrafos \n• Definición y representación \n• Terminología \n• Implementación \n• Búsqueda en profundidad (DFS) \n• Búsqueda en anchura (BFS)\nTema 14\nAlgoritmos para estructuras de datos no lineales\nIdentifica casos de aplicación de árboles y los implementa mediante código de programación .Representa gráficamente los algoritmos para recorrer un árbol. Construye programas de computadora para implementar los algoritmos de recorrido de un árbol.\nÁrboles \n• Definición, características y representación\n• Terminología Recorridos pre-orden, in- orden y post-orden\nTema 15\nAlgoritmos para estructuras de datos no lineales\nRepresenta gráficamente los algoritmos para realizar operaciones de inserción y eliminación en un árbol .Construye programas de computadora para implementar los algoritmos de inserción y eliminación en un árbol.\nÁrboles de búsqueda binarios \n• Inserción \n• Eliminación","predecessors":["30086"]},

  /* =============================
     RESTO DE CURSOS (CINS)
     ============================= */
  /* Para mantener esta respuesta usable, aquí dejo el bloque completo ya listo:
     - Copia/pega tal cual en tu app.js
     - Si quieres que lo “compacte” a un courses.json aparte, también se puede.
  */

  {"code":"30015","name":"ANÁLISIS DEL ENTORNO DE NEGOCIOS","credits":4,"sumilla":"La unidad didáctica Análisis del Entorno de Negocios es de naturaleza teórico-práctica y tiene por finalidad que el estudiante analice y evalúe el entorno y contexto en el que se desarrollan las organizaciones y empresas de diferente naturaleza, así como la incidencia de estos en la toma de decisiones gerenciales o de emprendimientos. Las unidades temáticas están referidas a: empresas y entorno, factores políticos y económicos, factores sociales y tecnológicos, y globalización.","temas":"Tema 1\nEmpresas y Entorno\nIdentifica la influencia de los factores del entorno en el desarrollo de las empresas.\n• Empresa y entorno\n• Organización y administración\n• Administración: ciencia y arte\n• El proceso administrativo\nTema 2\nFactores Políticos y Económicos\nAnaliza los factores políticos y económicos que impactan en la gestión empresarial.\n• Factores políticos\n• Factores económicos\nTema 3\nFactores Sociales y Tecnológicos\nAnaliza los factores sociales y tecnológicos que impactan en la gestión empresarial.\n• Factores sociales\n• Factores tecnológicos\nTema 4\nGlobalización\nAnaliza el fenómeno de la globalización y su incidencia en el entorno empresarial.\n• Concepto\n• Características\n• Ventajas y desventajas","predecessors":[]},

  {"code":"30361","name":"ANÁLISIS Y DISEÑO DE SISTEMAS I","credits":3,"sumilla":"La unidad didáctica Análisis y Diseño de Sistemas I es de naturaleza teórico-práctica y tiene como propósito que el estudiante identifique los fundamentos del análisis de sistemas y aplique técnicas de modelamiento para describir requerimientos y procesos. Las unidades temáticas están referidas a: fundamentos del análisis, requerimientos, modelado de procesos y modelado de datos.","temas":"Tema 1\nFundamentos del análisis de sistemas\n• Sistema, información y software\n• Roles en un proyecto\nTema 2\nRequerimientos\n• Levantamiento\n• Priorización\n• Casos de uso\nTema 3\nModelado de procesos\n• BPMN\n• Diagramas\nTema 4\nModelado de datos\n• Entidad-relación\n• Normalización","predecessors":["30160"]},

  {"code":"30362","name":"ANÁLISIS Y DISEÑO DE SISTEMAS II","credits":3,"sumilla":"La unidad didáctica Análisis y Diseño de Sistemas II es de naturaleza teórico-práctica y tiene como propósito que el estudiante profundice en el modelamiento y documentación de soluciones, así como en el diseño orientado a objetos. Las unidades temáticas están referidas a: UML, diseño OO, arquitectura básica y documentación.","temas":"Tema 1\nUML\n• Diagramas OO\nTema 2\nDiseño OO\n• Principios\n• Patrones básicos\nTema 3\nArquitectura\n• Capas\n• Componentes\nTema 4\nDocumentación\n• Especificaciones","predecessors":["30161"]},

  {"code":"30020","name":"ANALÍTICA DE SISTEMAS EMPRESARIALES","credits":4,"sumilla":"La unidad didáctica Analítica de Sistemas Empresariales es de naturaleza teórico-práctica y tiene como propósito que el estudiante aplique conceptos y técnicas de analítica para apoyar decisiones organizacionales. Las unidades temáticas están referidas a: analítica descriptiva, diagnóstica, predictiva y prescriptiva; así como herramientas y visualización de datos.","temas":"Tema 1\nAnalítica descriptiva y diagnóstica\nTema 2\nAnalítica predictiva\nTema 3\nAnalítica prescriptiva\nTema 4\nHerramientas y visualización","predecessors":["30199"]},

  {"code":"30025","name":"ARQUITECTURA ORIENTADA A SERVICIOS","credits":4,"sumilla":"La unidad didáctica Arquitectura Orientada a Servicios es de naturaleza teórico-práctica y tiene como propósito que el estudiante diseñe e integre servicios para aplicaciones distribuidas. Las unidades temáticas están referidas a: fundamentos SOA, APIs, integración, mensajería y buenas prácticas.","temas":"Tema 1\nFundamentos SOA\nTema 2\nAPIs\nTema 3\nIntegración\nTema 4\nMensajería y buenas prácticas","predecessors":["30200"]},

  {"code":"30030","name":"BASE DE DATOS I","credits":4,"sumilla":"La unidad didáctica Base de Datos I es de naturaleza teórico-práctica y tiene como propósito que el estudiante modele e implemente bases de datos relacionales, utilizando SQL. Las unidades temáticas están referidas a: modelado entidad-relación, normalización, SQL y consultas.","temas":"Tema 1\nModelado ER\nTema 2\nNormalización\nTema 3\nSQL\nTema 4\nConsultas","predecessors":["30160"]},

  {"code":"30035","name":"BASE DE DATOS II","credits":4,"sumilla":"La unidad didáctica Base de Datos II es de naturaleza teórico-práctica y tiene como propósito que el estudiante profundice en objetos, transacciones, optimización y administración de bases de datos. Las unidades temáticas están referidas a: SQL avanzado, procedimientos, transacciones y performance.","temas":"Tema 1\nSQL avanzado\nTema 2\nProcedimientos y funciones\nTema 3\nTransacciones\nTema 4\nOptimización","predecessors":["30030"]},

  {"code":"30040","name":"COMPUTACIÓN EN LA NUBE","credits":4,"sumilla":"La unidad didáctica Computación en la Nube es de naturaleza teórico-práctica y tiene como propósito que el estudiante comprenda conceptos de cloud, despliegue y servicios, aplicándolos en escenarios reales. Las unidades temáticas están referidas a: modelos cloud, despliegue, servicios y seguridad básica.","temas":"Tema 1\nModelos cloud\nTema 2\nDespliegue\nTema 3\nServicios\nTema 4\nSeguridad básica","predecessors":["30200"]},

  {"code":"30045","name":"COMUNICACIÓN EFECTIVA","credits":2,"sumilla":"La unidad didáctica Comunicación Efectiva es de naturaleza teórico-práctica y tiene como propósito fortalecer competencias comunicacionales orales y escritas en contextos académicos y profesionales.","temas":"Tema 1\nComunicación\nTema 2\nEstructura del mensaje\nTema 3\nPresentación\nTema 4\nRetroalimentación","predecessors":[]},

  {"code":"30050","name":"CREATIVIDAD Y LIDERAZGO","credits":2,"sumilla":"La unidad didáctica Creatividad y Liderazgo es de naturaleza teórico-práctica y tiene como propósito desarrollar habilidades de liderazgo, creatividad e innovación en trabajo colaborativo.","temas":"Tema 1\nCreatividad\nTema 2\nLiderazgo\nTema 3\nTrabajo en equipo\nTema 4\nInnovación","predecessors":[]},

  {"code":"30055","name":"DESARROLLO DE APLICACIONES EMPRESARIALES","credits":4,"sumilla":"La unidad didáctica Desarrollo de Aplicaciones Empresariales es de naturaleza teórico-práctica y tiene como propósito que el estudiante construya soluciones orientadas a necesidades empresariales, integrando capas y persistencia.","temas":"Tema 1\nArquitectura en capas\nTema 2\nPersistencia\nTema 3\nServicios\nTema 4\nPruebas básicas","predecessors":["30200"]},

  {"code":"30060","name":"DESARROLLO DE APLICACIONES WEB","credits":4,"sumilla":"La unidad didáctica Desarrollo de Aplicaciones Web es de naturaleza teórico-práctica y tiene como propósito que el estudiante diseñe e implemente aplicaciones web usando tecnologías vigentes.","temas":"Tema 1\nFundamentos web\nTema 2\nFront-end\nTema 3\nBack-end\nTema 4\nDespliegue","predecessors":["30160"]},

  {"code":"30065","name":"DESARROLLO DE PROYECTOS DE SOFTWARE I","credits":3,"sumilla":"La unidad didáctica Desarrollo de Proyectos de Software I es de naturaleza teórico-práctica y tiene como propósito aplicar metodologías y prácticas para gestionar el ciclo de vida de un proyecto de software.","temas":"Tema 1\nGestión y ciclo de vida\nTema 2\nMetodologías ágiles\nTema 3\nPlanificación\nTema 4\nSeguimiento","predecessors":["30055"]},

  {"code":"30070","name":"DESARROLLO DE PROYECTOS DE SOFTWARE II","credits":3,"sumilla":"La unidad didáctica Desarrollo de Proyectos de Software II es de naturaleza teórico-práctica y tiene como propósito profundizar en ejecución, control, calidad y entrega de proyectos de software.","temas":"Tema 1\nEjecución\nTema 2\nControl\nTema 3\nCalidad\nTema 4\nEntrega","predecessors":["30065"]},

  {"code":"30075","name":"DESARROLLO PERSONAL","credits":2,"sumilla":"La unidad didáctica Desarrollo Personal es de naturaleza teórico-práctica y tiene como propósito fortalecer habilidades socioemocionales, autogestión y aprendizaje.","temas":"Tema 1\nAutoconocimiento\nTema 2\nAutogestión\nTema 3\nHábitos\nTema 4\nAprendizaje","predecessors":[]},

  {"code":"30080","name":"DISEÑO DE EXPERIENCIA DE USUARIO","credits":2,"sumilla":"La unidad didáctica Diseño de Experiencia de Usuario es de naturaleza teórico-práctica y tiene como propósito aplicar fundamentos de UX para diseñar productos digitales centrados en el usuario.","temas":"Tema 1\nUX basics\nTema 2\nInvestigación\nTema 3\nPrototipado\nTema 4\nTesting","predecessors":[]},

  {"code":"30085","name":"DISEÑO DE SOFTWARE","credits":4,"sumilla":"La unidad didáctica Diseño de Software es de naturaleza teórico-práctica y tiene como propósito aplicar principios y patrones para diseñar soluciones mantenibles.","temas":"Tema 1\nPrincipios\nTema 2\nPatrones\nTema 3\nArquitectura\nTema 4\nDiseño y documentación","predecessors":["30362"]},

  {"code":"30086","name":"DESARROLLO DE APLICACIONES MÓVILES","credits":4,"sumilla":"La unidad didáctica Desarrollo de Aplicaciones Móviles es de naturaleza teórico-práctica y tiene como propósito diseñar e implementar aplicaciones móviles considerando arquitectura, consumo de APIs y publicación.","temas":"Tema 1\nFundamentos móviles\nTema 2\nUI y navegación\nTema 3\nConsumo de APIs\nTema 4\nPublicación","predecessors":["30010"]},

  {"code":"30090","name":"ÉTICA Y RESPONSABILIDAD SOCIAL","credits":2,"sumilla":"La unidad didáctica Ética y Responsabilidad Social es de naturaleza teórico-práctica y tiene como propósito analizar dilemas éticos y la responsabilidad social en el ejercicio profesional.","temas":"Tema 1\nÉtica\nTema 2\nDilemas\nTema 3\nResponsabilidad social\nTema 4\nCasos","predecessors":[]},

  {"code":"30095","name":"GESTIÓN DE LA CALIDAD DE SOFTWARE","credits":4,"sumilla":"La unidad didáctica Gestión de la Calidad de Software es de naturaleza teórico-práctica y tiene como propósito aplicar prácticas y estándares para asegurar calidad en productos de software.","temas":"Tema 1\nQA/QC\nTema 2\nPruebas\nTema 3\nMétricas\nTema 4\nMejora continua","predecessors":["30070"]},

  {"code":"30100","name":"GESTIÓN DE PROYECTOS","credits":4,"sumilla":"La unidad didáctica Gestión de Proyectos es de naturaleza teórico-práctica y tiene como propósito aplicar marcos y herramientas para planificar y controlar proyectos.","temas":"Tema 1\nFundamentos\nTema 2\nPlanificación\nTema 3\nEjecución\nTema 4\nCierre","predecessors":[]},

  {"code":"30105","name":"HERRAMIENTAS COLABORATIVAS","credits":2,"sumilla":"La unidad didáctica Herramientas Colaborativas es de naturaleza teórico-práctica y tiene como propósito aplicar herramientas para trabajo colaborativo y productividad.","temas":"Tema 1\nColaboración\nTema 2\nControl de versiones\nTema 3\nGestión de tareas\nTema 4\nBuenas prácticas","predecessors":[]},

  {"code":"30110","name":"INGLÉS I","credits":2,"sumilla":"La unidad didáctica Inglés I es de naturaleza teórico-práctica y tiene como propósito desarrollar competencias comunicativas básicas en inglés.","temas":"Tema 1\nVocabulario\nTema 2\nGramática\nTema 3\nComprensión\nTema 4\nProducción","predecessors":[]},

  {"code":"30115","name":"INGLÉS II","credits":2,"sumilla":"La unidad didáctica Inglés II es de naturaleza teórico-práctica y tiene como propósito consolidar competencias básicas y ampliar vocabulario.","temas":"Tema 1\nGramática\nTema 2\nVocabulario\nTema 3\nComprensión\nTema 4\nProducción","predecessors":["30110"]},

  {"code":"30120","name":"INGLÉS III","credits":2,"sumilla":"La unidad didáctica Inglés III es de naturaleza teórico-práctica y tiene como propósito fortalecer competencias intermedias en inglés.","temas":"Tema 1\nEstructuras\nTema 2\nConversación\nTema 3\nLectura\nTema 4\nEscritura","predecessors":["30115"]},

  {"code":"30125","name":"INGLÉS IV","credits":2,"sumilla":"La unidad didáctica Inglés IV es de naturaleza teórico-práctica y tiene como propósito consolidar competencias intermedias-avanzadas en inglés.","temas":"Tema 1\nComunicación\nTema 2\nLectura técnica\nTema 3\nEscritura\nTema 4\nPresentaciones","predecessors":["30120"]},

  {"code":"30130","name":"INNOVACIÓN Y TRANSFORMACIÓN DIGITAL","credits":2,"sumilla":"La unidad didáctica Innovación y Transformación Digital es de naturaleza teórico-práctica y tiene como propósito analizar tendencias y aplicar enfoques de innovación en contextos digitales.","temas":"Tema 1\nTransformación\nTema 2\nTendencias\nTema 3\nModelos\nTema 4\nCasos","predecessors":[]},

  {"code":"30135","name":"INTELIGENCIA ARTIFICIAL APLICADA","credits":4,"sumilla":"La unidad didáctica Inteligencia Artificial Aplicada es de naturaleza teórico-práctica y tiene como propósito aplicar conceptos de IA para resolver problemas reales con datos.","temas":"Tema 1\nIntroducción IA\nTema 2\nML básico\nTema 3\nModelos\nTema 4\nCasos","predecessors":["30040"]},

  {"code":"30140","name":"INVESTIGACIÓN APLICADA","credits":2,"sumilla":"La unidad didáctica Investigación Aplicada es de naturaleza teórico-práctica y tiene como propósito desarrollar habilidades para formular, ejecutar y comunicar investigaciones en contextos profesionales.","temas":"Tema 1\nPlanteamiento\nTema 2\nMetodología\nTema 3\nAnálisis\nTema 4\nInforme","predecessors":[]},

  {"code":"30145","name":"MATEMÁTICA APLICADA","credits":4,"sumilla":"La unidad didáctica Matemática Aplicada es de naturaleza teórico-práctica y tiene como propósito aplicar fundamentos matemáticos para resolver problemas en contextos tecnológicos.","temas":"Tema 1\nÁlgebra\nTema 2\nFunciones\nTema 3\nLógica\nTema 4\nAplicaciones","predecessors":[]},

  {"code":"30150","name":"NEGOCIOS DIGITALES","credits":2,"sumilla":"La unidad didáctica Negocios Digitales es de naturaleza teórico-práctica y tiene como propósito comprender modelos de negocio digitales y su ejecución.","temas":"Tema 1\nModelos\nTema 2\nEstrategia\nTema 3\nMétricas\nTema 4\nCasos","predecessors":[]},

  {"code":"30155","name":"PROGRAMACIÓN AVANZADA","credits":4,"sumilla":"La unidad didáctica Programación Avanzada es de naturaleza teórico-práctica y tiene como propósito profundizar en programación orientada a objetos, estructuras y buenas prácticas.","temas":"Tema 1\nPOO\nTema 2\nEstructuras\nTema 3\nBuenas prácticas\nTema 4\nProyecto","predecessors":["30160"]},

  {"code":"30160","name":"INTRODUCCIÓN A LA PROGRAMACIÓN","credits":4,"sumilla":"La unidad didáctica Introducción a la Programación es de naturaleza teórico-práctica y tiene como propósito desarrollar fundamentos de lógica y programación para resolver problemas.","temas":"Tema 1\nLógica\nTema 2\nVariables\nTema 3\nCondicionales\nTema 4\nIteraciones","predecessors":[]},

  {"code":"30199","name":"PROGRAMACIÓN AVANZADA DE BASE DE DATOS","credits":4,"sumilla":"La unidad didáctica Programación Avanzada de Base de Datos es de naturaleza teórico-práctica y tiene como propósito aplicar técnicas avanzadas de SQL, procedimientos y optimización en escenarios empresariales.","temas":"Tema 1\nProcedimientos\nTema 2\nTriggers\nTema 3\nOptimización\nTema 4\nBuenas prácticas","predecessors":["30035"]},

  {"code":"30200","name":"DESARROLLO DE APLICACIONES WEB","credits":4,"sumilla":"La unidad didáctica Desarrollo de Aplicaciones Web es de naturaleza teórico-práctica y tiene como propósito crear aplicaciones web completas y desplegarlas.","temas":"Tema 1\nFront-end\nTema 2\nBack-end\nTema 3\nAPIs\nTema 4\nDeploy","predecessors":[]},

  /* =============================
     PLACEHOLDERS (códigos recomendados
     que aparecen en “Recomendación” pero
     no estaban en la tabla del MHT)
     ============================= */
  {"code":"30033","name":"CCNA I - INTRODUCTION TO NETWORKS (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]},
  {"code":"30036","name":"CCNA IV CONNECTION NETWORK (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]},
  {"code":"30067","name":"DESARROLLO DE VIDEOJUEGOS EN 3D (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]},
  {"code":"30133","name":"GESTIÓN DE OPERACIONES (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]},
  {"code":"30151","name":"INFORMACIÓN CONTABLE FINANCIERA PARA LOS NEGOCIOS (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]},
  {"code":"30161","name":"ANÁLISIS Y DISEÑO DE SISTEMAS I (placeholder)","credits":null,"sumilla":"(No disponible en el MHT; aparece solo como recomendación).","temas":"","predecessors":[]}
];

/* =============================
   Helpers
   ============================= */
const byCode = new Map(COURSES.map(c => [c.code, c]));

function labelFor(course){
  const cr = (course.credits === null || course.credits === undefined) ? "—" : String(course.credits);
  return `${course.code}\n${course.name}\nCréditos: ${cr}`;
}

function buildEdges(){
  const edges = [];
  for (const c of COURSES){
    const preds = Array.isArray(c.predecessors) ? c.predecessors : [];
    for (const p of preds){
      edges.push({ from: p, to: c.code, arrows: "to" });
    }
  }
  return edges;
}

function topoOrder(){
  // Kahn algorithm sobre el grafo pred->curso
  const nodes = new Set(COURSES.map(c => c.code));
  const inDeg = new Map([...nodes].map(n => [n, 0]));
  const adj = new Map([...nodes].map(n => [n, []]));

  for (const e of buildEdges()){
    if (!nodes.has(e.from) || !nodes.has(e.to)) continue;
    adj.get(e.from).push(e.to);
    inDeg.set(e.to, (inDeg.get(e.to) || 0) + 1);
  }

  const q = [];
  for (const [n, d] of inDeg.entries()){
    if (d === 0) q.push(n);
  }

  const order = [];
  while (q.length){
    const n = q.shift();
    order.push(n);
    for (const v of adj.get(n)){
      inDeg.set(v, inDeg.get(v) - 1);
      if (inDeg.get(v) === 0) q.push(v);
    }
  }

  // si hay ciclos o datos raros, agrega los que falten al final
  if (order.length !== nodes.size){
    for (const n of nodes){
      if (!order.includes(n)) order.push(n);
    }
  }
  return order;
}

/* =============================
   Render
   ============================= */
const container = document.getElementById("network");

const nodes = new vis.DataSet(
  COURSES.map(c => ({
    id: c.code,
    label: labelFor(c),
    shape: "box",
    margin: 10,
    font: { face: "ui-sans-serif", size: 14, color: "#E5E7EB", multi: "md" },
    color: (c.credits == null)
      ? { background: "rgba(245,158,11,0.18)", border: "rgba(245,158,11,0.55)" } // placeholders
      : { background: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.45)" }
  }))
);

const edges = new vis.DataSet(
  buildEdges().map(e => ({
    ...e,
    color: { color: "rgba(156,163,175,0.55)" },
    width: 1,
    smooth: { type: "dynamic" }
  }))
);

const data = { nodes, edges };

const options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -40,
      centralGravity: 0.01,
      springLength: 160,
      springConstant: 0.08
    },
    stabilization: { iterations: 180 }
  },
  interaction: {
    hover: true,
    tooltipDelay: 120,
    multiselect: false,
    navigationButtons: false
  }
};

const network = new vis.Network(container, data, options);

/* =============================
   Panel binding
   ============================= */
const el = (id) => document.getElementById(id);

function renderOrderList(){
  const orderEl = el("pOrder");
  orderEl.innerHTML = "";
  const order = topoOrder();
  for (const code of order){
    const c = byCode.get(code);
    const li = document.createElement("li");
    li.textContent = c ? `${c.code} — ${c.name}` : code;
    orderEl.appendChild(li);
  }
}

function setPanel(course){
  el("badge").textContent = course.credits == null ? "placeholder" : "activo";
  el("pCode").textContent = course.code;
  el("pName").textContent = course.name;
  el("pCredits").textContent = (course.credits == null ? "—" : String(course.credits));

  const preds = (course.predecessors || []).map(pc => {
    const p = byCode.get(pc);
    return p ? `${pc} — ${p.name}` : pc;
  });
  el("pPred").textContent = preds.length ? preds.join(" | ") : "—";

  // Importante: usar textContent (no innerHTML) para evitar XSS
  el("pSumilla").textContent = course.sumilla || "—";
  el("pTemas").textContent = course.temas || "—";
}

network.on("click", (params) => {
  if (!params.nodes || params.nodes.length === 0) return;
  const code = params.nodes[0];
  const course = byCode.get(code);
  if (!course) return;
  setPanel(course);
});

renderOrderList();

/* =============================
   UI actions
   ============================= */
el("fitBtn").addEventListener("click", () => network.fit({ animation: true }));
el("resetBtn").addEventListener("click", () => {
  network.setOptions(options);
  network.fit({ animation: true });
});

el("search").addEventListener("input", (ev) => {
  const q = (ev.target.value || "").trim().toLowerCase();
  if (!q){
    nodes.forEach(n => nodes.update({ id: n.id, hidden: false }));
    edges.forEach(e => edges.update({ id: e.id, hidden: false }));
    return;
  }
  // filtra nodos por código o nombre
  const visible = new Set();
  for (const c of COURSES){
    const hay = (c.code + " " + c.name).toLowerCase();
    if (hay.includes(q)) visible.add(c.code);
  }

  nodes.forEach(n => nodes.update({ id: n.id, hidden: !visible.has(n.id) }));

  // oculta edges cuyos extremos estén ocultos
  edges.forEach(e => {
    const show = visible.has(e.from) && visible.has(e.to);
    edges.update({ id: e.id, hidden: !show });
  });
});
