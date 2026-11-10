/* =========================================================================
   Configuración del concurso – PGN Convocatoria 217-2026
   Profesional Universitario 3PU-18 · Dirección de Apoyo Estratégico,
   Análisis de Datos e Información.
   Fuentes: Ficha del cargo (TH-F-211 v3), Res. 076/2026 (arts. 18-21),
   Diccionario de Competencias Comportamentales PGN (2012),
   Guías de orientación al aspirante de la Universidad de Antioquia.
   ========================================================================= */
window.BANCO = [];
window.BANCO_COMP = [];

/* Helper para registrar un ítem de conocimientos (formato UdeA):
   id, eje, dificultad (bajo|medio|alto), dimensión (recordar|comprender|aplicar|analizar),
   enunciado, opciones[4], índice correcto, justificaciones[4], referencia normativa */
window.Q = function (id, eje, dif, dim, e, o, c, j, r) {
  // Distractores reescritos para equilibrar la longitud de las opciones (js/ajuste_opciones.js).
  const ov = window.OPC && window.OPC[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (+k !== c && o[+k] != null) o[+k] = ov[k]; }); }
  // Reubica la opción correcta en una posición (A-D) derivada del id, para que
  // la clave quede equilibrada entre las cuatro letras aunque no se barajen opciones.
  let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const t = h % 4;
  if (t !== c) {
    o = o.slice(); j = j.slice();
    [o[t], o[c]] = [o[c], o[t]]; [j[t], j[c]] = [j[c], j[t]];
    c = t;
  }
  window.BANCO.push({ id, eje, dif, dim, e, o, c, j, r });
};
/* Ítem comportamental: id, competencia, enunciado, opciones[3], puntajes[3] (2=máximo ajuste,1=parcial,0=bajo), justificaciones[3] */
window.C = function (id, comp, e, o, p, j) {
  const ov = window.OPC_C && window.OPC_C[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (p[+k] !== 2 && o[+k] != null) o[+k] = ov[k]; }); }
  window.BANCO_COMP.push({ id, comp, e, o, p, j });
};

window.CONCURSO = {
  nombre: 'Concurso Abierto de Méritos PGN 2026',
  convocatoria: 'Convocatoria 217-2026',
  cargo: 'Profesional Universitario 3PU-18',
  dependencia: 'Dirección de Apoyo Estratégico, Análisis de Datos e Información',
  operador: 'Universidad de Antioquia',
  minimo: 65,
  pesos: { conocimientos: 70, comportamental: 20, antecedentes: 10 },
  umbralElegibles: 70,
  duracionMin: 240,
  /* Estado del proceso según el portal oficial. Actualizar a mano cuando haya avisos nuevos. */
  estado: {
    corte: '9 de noviembre de 2026',
    portal: 'www.meritoconstruyendoexcelencia.com.co',
    etapa: 'Reclutamiento – verificación de requisitos mínimos (reclamaciones y apelaciones en trámite). Aún no hay citación ni fecha para las pruebas escritas.',
    cronograma: [
      ['Inscripciones (cerradas)', '7 al 18 de septiembre de 2026'],
      ['Lista de admitidos y no admitidos', '30 de octubre de 2026'],
      ['Reclamaciones contra la lista', '3 y 4 de noviembre de 2026'],
      ['Decisión de reclamaciones', '11 de noviembre de 2026 (publicación 12 y 13)'],
      ['Término para apelar', '17 de noviembre de 2026'],
      ['Decisión y publicación de apelaciones', '27 y 30 de noviembre de 2026'],
      ['Lista DEFINITIVA de admitidos', '30 de noviembre de 2026'],
      ['Pruebas escritas (conocimientos y comportamental, el mismo día)', 'Por definir – pendiente la Guía de Orientación']
    ],
    notas: [
      '295.925 aspirantes inscritos en todo el concurso; 314 vacantes de Profesional Universitario 3PU-18 (Res. 243 de 2026), 5 de ellas en la Convocatoria 217.',
      'Reglas vigentes: Res. 076 de 2026, modificada por las Res. 108, 133, 212 y 243 de 2026; la Res. 298 de 2026 dispuso la continuidad del concurso. Ninguna cambió los pesos ni el mínimo de 65.',
      'Calificaciones con dos decimales truncados; reclamaciones contra resultados de las pruebas dentro de los 2 días hábiles siguientes a su publicación, pidiendo allí mismo el acceso al material (arts. 18, 23 y 24).',
      'Desempate (art. 35): víctima; mayor puntaje en conocimientos; haber votado; discapacidad; judicatura en casas de justicia; decisión del Procurador.'
    ]
  },
  /* Análisis de antecedentes, nivel profesional (Res. 133 de 2026, arts. 28 y 29): 50 educación + 50 experiencia.
     esp y prof: valores leídos de una versión OCR poco legible; confírmelos en la resolución. */
  antecedentes: { maxEdu: 50, maxExp: 50, doc: 50, mae: 25, esp: 10, prof: 4, anio: 10, maxEsp: 2, maxMae: 1,
    docencia: [[97, 30], [79, 25], [61, 20], [43, 15], [24, 10]] }
};

window.NUCLEOS = {
  general: 'Núcleo general (conocimientos esenciales comunes)',
  especifico: 'Núcleo específico (conocimientos esenciales específicos)'
};

window.EJES = {
  estado:        { n: 'Gestión pública y funcionamiento del Estado', nucleo: 'general', ic: '🏛️' },
  pgn:           { n: 'Estructura y funciones de la PGN', nucleo: 'general', ic: '⚖️' },
  atencion:      { n: 'Atención al usuario y derecho de petición', nucleo: 'general', ic: '🤝' },
  documental:    { n: 'Gestión documental y documentos de oficina', nucleo: 'general', ic: '🗂️' },
  sistemas:      { n: 'Sistemas de gestión (MIPG, calidad, seguridad)', nucleo: 'general', ic: '🔁' },
  ofimatica:     { n: 'Herramientas ofimáticas', nucleo: 'general', ic: '💻' },
  constitucional:{ n: 'Derecho constitucional y administrativo', nucleo: 'especifico', ic: '📜' },
  informatico:   { n: 'Derecho informático y nuevas tecnologías', nucleo: 'especifico', ic: '🔐' },
  estadistica:   { n: 'Análisis de datos y estadística', nucleo: 'especifico', ic: '📊' },
  cienciadatos:  { n: 'Analítica, ciencia e ingeniería de datos', nucleo: 'especifico', ic: '🤖' },
  bd:            { n: 'Bases de datos y sistemas de información', nucleo: 'especifico', ic: '🗄️' },
  transparencia: { n: 'Transparencia, gobierno y datos abiertos', nucleo: 'especifico', ic: '🔎' },
  contratacion:  { n: 'Contratación estatal', nucleo: 'especifico', ic: '📑' }
};

window.DIMENSIONES = {
  recordar:   'Recordar: dominio de normas, conceptos, métodos o marcos de referencia.',
  comprender: 'Comprender: explicar relaciones entre datos o principios de una clasificación.',
  aplicar:    'Aplicar: seleccionar y usar datos y principios para resolver un problema concreto.',
  analizar:   'Analizar: descomponer un caso en sus partes y resolver problemas complejos.'
};

/* Competencias comportamentales exigidas por la ficha del cargo,
   con la definición y el nivel tomados del Diccionario de Competencias PGN. */
window.COMPETENCIAS = {
  responsabilidad: {
    n: 'Responsabilidad con la organización', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de asumir compromiso con los objetivos de la Procuraduría General de la Nación o aquellos que le son asignados.',
    nivelTxt: 'Nivel B – Contribuye al desarrollo de los objetivos de la entidad y propone estrategias de mejoramiento continuo.',
    conductas: ['Enfoca su actividad hacia el cumplimiento de los objetivos de la institución.', 'Busca permanentemente la mejora de los procesos institucionales.']
  },
  organizacion: {
    n: 'Organización del trabajo', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de organización, excelencia y precisión en la realización de labores.',
    nivelTxt: 'Nivel B – Efectúa su trabajo con organización, calidad, oportunidad, seguimiento y verificación de sus labores y las de los demás.',
    conductas: ['Cumple con las normas establecidas para el desarrollo de las actividades a su cargo.', 'Implementa herramientas de control y seguimiento para vigilar el cumplimiento con calidad de las tareas asignadas al equipo.']
  },
  investigacion: {
    n: 'Investigación', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para buscar información relevante y pertinente para analizarla y evaluarla con dominio técnico y experticia.',
    nivelTxt: 'Nivel B – Diseña y realiza estudios conjuntamente para facilitar el funcionamiento de la entidad y proponer planes y programas de mejoramiento institucional.',
    conductas: ['Incorpora elementos en la búsqueda de métodos aplicables a la investigación.', 'Realiza alianzas con instituciones educativas reconocidas para desarrollar nuevos modelos de investigación.']
  },
  conceptual: {
    n: 'Pensamiento conceptual', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de entender una situación o un problema a partir de los elementos que la conforman.',
    nivelTxt: 'Nivel A (máximo) – Explica problemas de alta complejidad y formula directrices para atenderlos.',
    conductas: ['Aclara situaciones o problemas que requieren rigurosidad técnica y conceptual.', 'Genera lineamientos claros y precisos que permiten entender situaciones o problemas específicos.']
  },
  resultados: {
    n: 'Orientación a resultados', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de lograr las metas propuestas alineadas con la estrategia corporativa o con la misión de la entidad.',
    nivelTxt: 'Nivel A (máximo) – Establece, alcanza y supera los resultados esperados de metas desafiantes en la entidad.',
    conductas: ['Fija metas que trascienden los propósitos actuales.', 'Compromete recursos y tiempos para mejorar las metas establecidas.']
  },
  parametros: {
    n: 'Cumplimiento de parámetros de trabajo', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para aplicar en sus labores la normatividad interna o externa.',
    nivelTxt: 'Nivel B – Aplica criterios con el fin de desempeñarse dentro de procesos organizacionales.',
    conductas: ['Sigue las reglas y lineamientos establecidos para el desempeño dentro de diferentes procesos organizacionales.', 'Define objetivos para su equipo alineados con procedimientos definidos.']
  }
};

/* Fichas de estudio por eje: normas y conceptos clave a dominar */
window.FICHAS = {
  estado: ['C.P. arts. 113-121: ramas del poder, órganos autónomos e independientes; organismos de control (Ministerio Público y Contraloría).', 'Ley 489 de 1998: estructura de la administración; delegación (arts. 9-12), desconcentración y descentralización; sector central y descentralizado.', 'C.P. art. 209: principios de la función administrativa (igualdad, moralidad, eficacia, economía, celeridad, imparcialidad, publicidad).', 'C.P. art. 125: carrera administrativa como regla general; mérito; excepciones (elección popular, libre nombramiento, trabajadores oficiales).', 'Ley 909 de 2004 y regímenes especiales de carrera (PGN: Decreto Ley 262 de 2000, administrado por la propia entidad).', 'Planeación: Ley 152 de 1994 (Plan Nacional de Desarrollo), Plan de Acción institucional, indicadores de eficacia, eficiencia y efectividad.'],
  pgn: ['C.P. art. 118: integran el Ministerio Público el Procurador General, el Defensor del Pueblo, procuradores delegados, agentes del MP y personeros municipales.', 'C.P. art. 276: el Procurador es elegido por el Senado de terna del Presidente, la Corte Suprema y el Consejo de Estado, para un periodo de 4 años.', 'C.P. art. 277: funciones (vigilar cumplimiento de la Constitución, proteger DD.HH., defender intereses colectivos, ejercer vigilancia superior de la conducta oficial, poder disciplinario preferente, intervenir en procesos).', 'C.P. art. 278: funciones directas e indelegables del Procurador.', 'Decreto Ley 262 de 2000: estructura, organización y régimen de carrera de la PGN; modificado por Decreto Ley 1851 de 2021.', 'Ley 1952 de 2019 (Código General Disciplinario), modificada por Ley 2094 de 2021. Sentencia C-030 de 2023: la PGN actúa como autoridad administrativa (se declaró inexequible la atribución de funciones jurisdiccionales); las sanciones de destitución, suspensión e inhabilidad a elegidos popularmente requieren revisión del Consejo de Estado.', 'Sanciones (art. 48): destitución e inhabilidad general (gravísimas dolosas o con culpa gravísima); suspensión (graves); multa (leves dolosas); amonestación escrita (leves culposas).', 'C.P. art. 281 (A.L. 02 de 2015): el Defensor del Pueblo ejerce sus funciones de manera autónoma. Ley 2553 de 2025: el IEMP se transforma en la Universidad del Ministerio Público.', 'Normas del concurso publicadas en el portal: Decretos Ley 262, 263, 264 y 265 de 2000, Decreto Ley 1851 de 2021, Ley 909 de 2004 (supletoria) y Manual Específico de Funciones.', 'Ley 1712 de 2014, art. 23: el Ministerio Público, encabezado por la PGN, vela por el cumplimiento de la ley de transparencia (ITA).'],
  atencion: ['C.P. art. 23 y Ley 1755 de 2015: derecho fundamental de petición.', 'Términos: 15 días (regla general); 10 días (documentos e información); 30 días (consultas). Entre autoridades: 10 días.', 'Petición incompleta: requerir dentro de 10 días; el peticionario tiene 1 mes para completar (prorrogable) – si no, desistimiento tácito.', 'Falta de competencia: remitir al competente dentro de 5 días y comunicar al peticionario.', 'Peticiones verbales (Decreto 1166 de 2016): deben recibirse y dejar constancia.', 'Atención con enfoque diferencial, lenguaje claro, accesibilidad (Ley 1618 de 2013) y canales de PQRSD.'],
  documental: ['Ley 594 de 2000: Ley General de Archivos; AGN como ente rector.', 'Ciclo vital del documento: archivo de gestión, archivo central y archivo histórico.', 'Instrumentos archivísticos: TRD, TVD, CCD, PGD, PINAR, inventario documental (FUID), Banco Terminológico.', 'Principios archivísticos: procedencia y orden original.', 'Expediente electrónico: índice electrónico, foliado electrónico, firma y metadatos. Acuerdo AGN 001 de 2024: Acuerdo Único de la Función Archivística (compila los acuerdos anteriores).', 'Documentos de oficina: GTC 185 (ICONTEC) – cartas, memorandos, actas, circulares; lenguaje claro.'],
  sistemas: ['MIPG (Decreto 1499 de 2017): 7 dimensiones – Talento humano; Direccionamiento estratégico y planeación; Gestión con valores para resultados; Evaluación de resultados; Información y comunicación; Gestión del conocimiento y la innovación; Control interno.', 'FURAG: instrumento de medición del desempeño institucional.', 'Líneas de defensa (MECI): estratégica, primera, segunda y tercera (control interno).', 'Ciclo PHVA; ISO 9001 (calidad); ISO 27001 (seguridad de la información); MSPI de MinTIC.', 'Gestión del riesgo: identificación, análisis (probabilidad e impacto), valoración de controles, tratamiento y monitoreo.'],
  ofimatica: ['Excel: referencias relativas/absolutas ($A$1), BUSCARX/BUSCARV, SI, SI.ERROR, CONTAR.SI.CONJUNTO, SUMAR.SI.CONJUNTO, tablas dinámicas, validación de datos, formato condicional.', 'Power Query (ETL), Power Pivot / modelo de datos, gráficos adecuados al tipo de dato.', 'Word: estilos, tablas de contenido automáticas, combinación de correspondencia, control de cambios.', 'Colaboración en la nube: versionamiento, permisos, coautoría.'],
  constitucional: ['C.P. art. 1: Estado Social de Derecho; art. 4: supremacía constitucional y excepción de inconstitucionalidad.', 'Acciones: tutela (art. 86, fallo en 10 días), cumplimiento (art. 87), populares y de grupo (art. 88), hábeas data (art. 15), acceso a documentos públicos (art. 74).', 'CPACA (Ley 1437 de 2011): acto administrativo, presunción de legalidad (art. 88), recursos (art. 74: reposición, apelación, queja; 10 días – art. 76), silencio negativo (3 meses – art. 83), revocatoria directa (art. 93).', 'Medios de control: nulidad, nulidad y restablecimiento (caducidad 4 meses), reparación directa (2 años), controversias contractuales (2 años).', 'Notificaciones: personal, por aviso (art. 69), electrónica.'],
  informatico: ['Ley 1581 de 2012 y Decreto 1377 de 2013: protección de datos personales; principios; datos sensibles; autorización previa, expresa e informada; SIC como autoridad; consultas 10 días y reclamos 15 días hábiles.', 'Ley 1266 de 2008: hábeas data financiero.', 'Ley 1273 de 2009: delitos informáticos (arts. 269A a 269J del Código Penal).', 'Ley 527 de 1999: mensajes de datos, equivalente funcional, firma digital y entidades de certificación.', 'Ley 1341 de 2009 (modif. Ley 1978 de 2019): sector TIC y neutralidad tecnológica.', 'Política de Gobierno Digital (Decreto 767 de 2022); servicios ciudadanos digitales (Decreto 620 de 2020); CONPES 3975 de 2019 (transformación digital e IA) y CONPES 4144 de 2025 (Política Nacional de IA); ética y riesgos de la IA.'],
  estadistica: ['Medidas de tendencia central y dispersión; robustez de la mediana frente a atípicos.', 'Distribución normal (regla 68-95-99,7); puntaje z.', 'Muestreo: aleatorio simple, estratificado, por conglomerados, sistemático; sesgo de selección.', 'Inferencia: intervalos de confianza, pruebas de hipótesis, valor p, errores tipo I y II.', 'Correlación ≠ causalidad; regresión lineal; R²; paradoja de Simpson.', 'Probabilidad condicional y teorema de Bayes.'],
  cienciadatos: ['CRISP-DM: comprensión del negocio, comprensión de los datos, preparación, modelado, evaluación y despliegue.', 'Aprendizaje supervisado vs. no supervisado; sobreajuste; validación cruzada; fuga de datos.', 'Métricas: exactitud, precisión, exhaustividad (recall), F1, matriz de confusión, AUC; clases desbalanceadas.', 'Ingeniería de datos: ETL/ELT, data warehouse vs. data lake, esquema estrella (hechos y dimensiones), orquestación de pipelines.', 'Gobierno y calidad de datos (DAMA-DMBOK): completitud, exactitud, consistencia, oportunidad, unicidad, validez.', 'Anonimización vs. seudonimización; PLN y modelos de lenguaje; sesgos algorítmicos.'],
  bd: ['Modelo relacional: llaves primarias y foráneas, integridad referencial.', 'Normalización: 1FN, 2FN, 3FN.', 'SQL: SELECT, JOIN (INNER/LEFT), GROUP BY, HAVING, subconsultas, índices.', 'Transacciones ACID; niveles de aislamiento.', 'NoSQL: documental, clave-valor, columnar, grafos; teorema CAP.', 'Seguridad: inyección SQL, mínimo privilegio, respaldo (RPO/RTO).'],
  transparencia: ['Ley 1712 de 2014: máxima publicidad; información pública, clasificada (art. 18) y reservada (art. 19, máximo 15 años).', 'Decreto 103 de 2015 (compilado en Decreto 1081 de 2015): esquema de publicación, registro de activos de información, índice de información clasificada y reservada.', 'Resolución MinTIC 1519 de 2020: estándares de publicación, accesibilidad web y datos abiertos.', 'Datos abiertos: primarios, sin procesar, en formatos estándar e interoperables, de libre acceso y reutilización (Ley 1712, art. 6).', 'Portal datos.gov.co; CONPES 3920 de 2018 (política de explotación de datos – Big Data).', 'ITA: Índice de Transparencia y Acceso a la Información, administrado por la PGN.'],
  contratacion: ['Ley 80 de 1993, Ley 1150 de 2007, Ley 1474 de 2011, Decreto 1082 de 2015, Ley 2195 de 2022.', 'Modalidades: licitación pública, selección abreviada, concurso de méritos, contratación directa y mínima cuantía.', 'Principios: transparencia, economía, responsabilidad, selección objetiva, planeación.', 'Cláusulas excepcionales (Ley 80, art. 14): interpretación, modificación y terminación unilaterales y caducidad.', 'Supervisión e interventoría (Ley 1474, arts. 83-84).', 'Colombia Compra Eficiente, SECOP II, Acuerdos Marco de Precios (obligatorios para entidades del Estatuto General: Ley 2069 de 2020, art. 41), documentos tipo (Ley 2022 de 2020).', 'Liquidación (Ley 1150, art. 11).']
};

/* Análisis del estilo de preguntas de la Universidad de Antioquia */
window.ESTILO_UDEA = [
  { t: 'Selección múltiple con única respuesta', d: 'Los ítems de conocimientos tienen un enunciado y cuatro opciones (A, B, C, D) con una sola correcta. En la prueba de la CGR 2024-2026 la UdeA aplicó 30 ítems de competencias básicas + 60 específicas + 40 comportamentales (130 en total) en máximo 4 horas.' },
  { t: 'Enunciado que se completa', d: 'El enunciado suele plantear un caso y terminar en una frase abierta («Ante esta situación, el funcionario debe…», «…así como es procedente la delegación de…»). Las opciones completan la frase y empiezan en minúscula.' },
  { t: 'Casos situados en la entidad', d: 'Las preguntas ubican al aspirante en una situación real del cargo o de la entidad (un ciudadano que no sabe escribir, una delegación de funciones, un informe para entes de control). Rara vez preguntan definiciones sueltas.' },
  { t: 'Taxonomía de Bloom (Anderson & Krathwohl)', d: 'Cada ítem se construye desde una matriz con eje temático, nivel de dificultad (bajo, medio, alto) y dimensión cognitiva: recordar, comprender, aplicar y analizar. Predominan aplicar y analizar.' },
  { t: 'Distractores con «porque…»', d: 'Las opciones incorrectas suelen ser plausibles y venir con una razón aparentemente jurídica («…porque los casos de analfabetismo le corresponden al Ministerio Público»). La trampa está en la justificación, no solo en la acción.' },
  { t: 'Justificación normativa', d: 'Cada ítem tiene una justificación que cita la norma exacta (artículo y ley). Estudie con la norma en la mano: la respuesta correcta debe poder defenderse con un artículo.' },
  { t: 'Comportamentales de 3 opciones (ipsativas)', d: 'Una única situación laboral por ítem y tres opciones (A, B, C). No hay correctas o incorrectas absolutas: cada opción refleja un nivel distinto de ajuste a la competencia. La de mayor puntaje es la que muestra las conductas asociadas del nivel exigido (proactiva, con método, que comparte y hace seguimiento).' },
  { t: 'Calificación estandarizada', d: 'Las hojas se leen por lectura óptica y el resultado se lleva a una escala estándar de 0 a 100. Después del análisis psicométrico la UdeA puede eliminar ítems defectuosos. Una pregunta sin responder vale cero: no hay penalización por error, así que conviene responder todas.' },
  { t: 'Dos núcleos en la prueba de conocimientos', d: 'Según el art. 19 de la Res. 076 de 2026, la prueba de conocimientos tiene un núcleo general y uno específico. Es eliminatoria y exige 65/100. Las dos pruebas escritas (conocimientos y comportamental) se presentan el mismo día.' }
];
