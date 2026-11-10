/* Banco de ítems COMPORTAMENTALES – estilo UdeA (situación + 3 opciones, escala de ajuste).
   Puntaje por opción: 2 = máximo ajuste al nivel exigido, 1 = ajuste parcial, 0 = bajo ajuste.
   Las conductas de referencia provienen del Diccionario de Competencias PGN. */

/* ---- Responsabilidad con la organización (Nivel B) ---- */
C('CMP-RES-01','responsabilidad',
 'Usted nota que el procedimiento para consolidar los reportes mensuales de las regionales genera reprocesos y retrasos frecuentes, aunque nadie se ha quejado formalmente. Ante esta situación, usted',
 ['cumple con su parte del procedimiento tal como está establecido, porque modificarlo no es su responsabilidad.',
  'documenta los reprocesos, propone a su jefe una mejora concreta del procedimiento y ofrece apoyar su implementación.',
  'comenta con sus compañeros que el procedimiento es ineficiente y espera a que la dirección lo cambie.'],
 [0,2,1],
 ['Cumple, pero no contribuye a la mejora de los procesos (nivel D).','Propone estrategias de mejoramiento continuo y enfoca su actividad a los objetivos institucionales (nivel B).','Identifica el problema, pero no actúa para mejorarlo.'])

C('CMP-RES-02','responsabilidad',
 'Faltando un día para la entrega de un informe a la alta dirección, usted detecta un error en los datos que entregó otra dependencia y que afecta las conclusiones. Ante esta situación, usted',
 ['entrega el informe a tiempo con una nota al pie que advierte posibles inconsistencias.',
  'informa de inmediato a su jefe, contacta a la dependencia para corregir el dato, ajusta el análisis y propone una validación previa para futuras entregas.',
  'solicita un aplazamiento de la entrega hasta que la otra dependencia corrija sus datos.'],
 [1,2,0],
 ['Prioriza el plazo, pero traslada el problema al usuario del informe.','Busca la solución al problema y propone una mejora del proceso (nivel B).','No asume la solución y deja el resultado en manos de terceros.'])

C('CMP-RES-03','responsabilidad',
 'La dirección fijó como objetivo anual reducir el tiempo de elaboración de los informes estadísticos. A usted solo le asignaron tareas de procesamiento. Ante esta situación, usted',
 ['ejecuta sus tareas de procesamiento con calidad y en el tiempo asignado.',
  'automatiza parte de su procesamiento, mide el ahorro de tiempo y presenta la propuesta para extenderla a otros informes.',
  'espera instrucciones específicas sobre cómo contribuir al objetivo.'],
 [1,2,0],
 ['Cumple con calidad sus actividades (niveles C-D).','Contribuye al objetivo institucional y propone mejoramiento continuo (nivel B).','Muestra baja iniciativa frente a los objetivos.'])

C('CMP-RES-04','responsabilidad',
 'Un usuario interno se queja de que los tableros que usted construyó son difíciles de interpretar, aunque cumplen con lo pedido. Ante esta situación, usted',
 ['le explica que los tableros cumplen con los requerimientos aprobados.',
  'indaga qué decisiones necesita tomar con los tableros, ajusta el diseño y valida con él la nueva versión.',
  'le envía un manual de uso de la herramienta de visualización.'],
 [0,2,1],
 ['Se limita a defender el cumplimiento formal.','Se enfoca en el objetivo y mejora el producto con el usuario.','Ayuda parcialmente, sin resolver la causa del problema.'])

C('CMP-RES-05','responsabilidad',
 'Le asignan una tarea que no está relacionada con el análisis de datos, pero que es urgente para la entidad, en una semana en la que tiene carga alta. Ante esta situación, usted',
 ['acepta la tarea y organiza sus prioridades con su jefe para cumplir lo urgente sin descuidar sus compromisos.',
  'manifiesta que la tarea no corresponde a su perfil y sugiere que la asignen a otra persona.',
  'acepta la tarea y la realiza cuando termine sus pendientes habituales.'],
 [2,0,1],
 ['Asume compromiso con los objetivos y gestiona las prioridades.','Prioriza su perfil sobre la necesidad institucional.','Acepta, pero puede no responder a la urgencia.'])

/* ---- Organización del trabajo (Nivel B) ---- */
C('CMP-ORG-01','organizacion',
 'Usted coordina con dos compañeros la depuración de una base de datos con fecha límite en tres semanas. Ante esta situación, usted',
 ['divide la base en tres partes iguales y deja que cada uno avance a su ritmo.',
  'define un plan con actividades, responsables y fechas, acuerda criterios de calidad y establece revisiones periódicas del avance.',
  'trabaja en su parte y, al final, revisa que los demás hayan terminado.'],
 [1,2,0],
 ['Distribuye el trabajo, pero sin seguimiento ni criterios de calidad.','Organiza con calidad, oportunidad y seguimiento de las labores propias y de los demás (nivel B).','No hace seguimiento oportuno.'])

C('CMP-ORG-02','organizacion',
 'Tiene simultáneamente tres solicitudes: un requerimiento de un ente de control con vencimiento mañana, un informe interno para la próxima semana y una mejora de un tablero sin fecha. Ante esta situación, usted',
 ['atiende las solicitudes en el orden en que llegaron.',
  'prioriza por vencimiento e impacto: atiende primero el requerimiento del ente de control, programa el informe y agenda la mejora del tablero.',
  'empieza por la mejora del tablero porque es la tarea más rápida.'],
 [0,2,1],
 ['El orden de llegada no considera la importancia ni los plazos.','Organiza el trabajo según oportunidad e impacto.','Puede generar incumplimientos de lo prioritario.'])

C('CMP-ORG-03','organizacion',
 'Al revisar un informe que elaboró un compañero de su equipo, encuentra cifras que no coinciden con la fuente. Ante esta situación, usted',
 ['corrige las cifras usted mismo sin comentarlo, para no demorar la entrega.',
  'le muestra las diferencias, verifican juntos la fuente, corrigen y proponen una lista de chequeo para futuras revisiones.',
  'devuelve el informe indicando que tiene errores.'],
 [1,2,0],
 ['Resuelve la urgencia, pero no hay aprendizaje ni control.','Verifica las labores de los demás e implementa herramientas de control (nivel B).','Señala el error sin aportar a la solución ni al seguimiento.'])

C('CMP-ORG-04','organizacion',
 'La dirección le pide documentar el proceso de actualización de las bases de datos que usted realiza desde hace un año. Ante esta situación, usted',
 ['elabora un documento con los pasos, responsables, controles, fuentes y tiempos, y lo valida con quien eventualmente lo reemplazaría.',
  'escribe un resumen con los pasos principales, pues conoce bien el proceso.',
  'considera que no es necesario porque el proceso está automatizado.'],
 [2,1,0],
 ['Trabaja con organización, precisión y pensando en el seguimiento del proceso.','Cumple parcialmente; el documento no garantiza la continuidad.','Desconoce la importancia del control documentado.'])

C('CMP-ORG-05','organizacion',
 'A mitad de un proyecto, se da cuenta de que no alcanzará a cumplir la fecha pactada por una demora en la entrega de datos. Ante esta situación, usted',
 ['sigue trabajando y avisa el día de la entrega.',
  'informa con anticipación a su jefe, presenta un plan ajustado con alternativas y hace seguimiento a la entrega de datos pendiente.',
  'reduce el alcance del análisis para cumplir la fecha sin informar.'],
 [0,2,1],
 ['El aviso tardío impide ajustar.','Gestiona con oportunidad, seguimiento y transparencia.','Cumple la fecha a costa de la calidad, sin acordarlo.'])

/* ---- Investigación (Nivel B) ---- */
C('CMP-INV-01','investigacion',
 'La dirección necesita entender por qué aumentaron las quejas contra alcaldías en un departamento. Ante esta situación, usted',
 ['descarga los datos disponibles y presenta gráficos del aumento.',
  'formula preguntas de investigación, combina fuentes (quejas, contratación, informes de control), aplica un método de análisis y propone acciones de mejora con base en los hallazgos.',
  'consulta a los funcionarios de la regional su opinión sobre las causas.'],
 [1,2,0],
 ['Describe el fenómeno, pero no investiga sus causas.','Diseña un estudio con método y propone planes de mejoramiento (nivel B).','Usa una sola fuente subjetiva.'])

C('CMP-INV-02','investigacion',
 'Una universidad propone a la dirección un proyecto conjunto para desarrollar modelos de detección de riesgos de corrupción. Ante esta situación, usted',
 ['recomienda no participar porque la entidad tiene sus propios analistas.',
  'analiza la propuesta, identifica cómo complementaría las capacidades internas y sugiere un convenio con reglas claras de protección de datos.',
  'participa solo si la universidad asume todo el trabajo técnico.'],
 [0,2,1],
 ['Desaprovecha la oportunidad de investigación.','Realiza alianzas con instituciones educativas para nuevos modelos de investigación (nivel B).','Muestra una participación limitada.'])

C('CMP-INV-03','investigacion',
 'Debe elaborar un concepto sobre la viabilidad de usar inteligencia artificial para clasificar quejas. Ante esta situación, usted',
 ['revisa literatura técnica, experiencias de otras entidades, la normatividad aplicable y prueba un piloto con datos reales antes de concluir.',
  'consulta un artículo de prensa sobre el tema y redacta el concepto.',
  'reutiliza un concepto similar elaborado hace tres años.'],
 [2,0,1],
 ['Busca información relevante, la analiza con dominio técnico y experimenta con método.','Fuente insuficiente y poco rigurosa.','Puede estar desactualizado.'])

C('CMP-INV-04','investigacion',
 'Los resultados de su análisis contradicen una hipótesis que la alta dirección consideraba cierta. Ante esta situación, usted',
 ['ajusta la presentación para que los resultados no generen controversia.',
  'presenta los resultados con la evidencia y la metodología, explica sus limitaciones y sugiere estudios complementarios.',
  'repite el análisis con otros datos hasta obtener resultados acordes a la hipótesis.'],
 [1,2,0],
 ['Matiza la evidencia, afectando la objetividad.','Aporta información confiable y veraz con rigor metodológico.','Sesga la investigación (búsqueda de confirmación).'])

C('CMP-INV-05','investigacion',
 'Se le encarga identificar buenas prácticas internacionales sobre gobierno de datos para organismos de control. Ante esta situación, usted',
 ['busca en internet el primer documento disponible y lo resume.',
  'selecciona fuentes reconocidas, compara modelos según criterios definidos y presenta una propuesta adaptada a la PGN.',
  'solicita a otro compañero que le comparta lo que sepa del tema.'],
 [0,2,1],
 ['No evalúa la pertinencia ni la calidad de la fuente.','Busca información pertinente, la evalúa y propone mejoras institucionales.','Recurre a conocimiento disponible, pero sin método investigativo.'])

/* ---- Pensamiento conceptual (Nivel A) ---- */
C('CMP-PC-01','conceptual',
 'Le piden explicar a la alta dirección por qué el índice de riesgo de una entidad subió, siendo un modelo con veinte variables. Ante esta situación, usted',
 ['presenta la fórmula completa del modelo y la tabla con todas las variables.',
  'identifica los factores que más explican el cambio, los presenta de forma clara y propone lineamientos para su interpretación y uso.',
  'explica que el modelo es complejo y que el resultado es confiable.'],
 [1,2,0],
 ['Es riguroso, pero no aclara el problema a la audiencia.','Explica problemas complejos y formula directrices (nivel A).','No aclara la situación.'])

C('CMP-PC-02','conceptual',
 'Diferentes dependencias usan definiciones distintas de «queja resuelta», y sus cifras no coinciden. Ante esta situación, usted',
 ['usa la definición de su dependencia para el informe consolidado.',
  'analiza las definiciones, identifica sus diferencias y su efecto en las cifras, y propone una definición estándar con lineamientos para todas las dependencias.',
  'reporta las cifras de cada dependencia por separado con una nota aclaratoria.'],
 [0,2,1],
 ['Ignora el problema conceptual de fondo.','Entiende el problema desde sus elementos y genera lineamientos claros (nivel A).','Aclara parcialmente, sin resolver el problema.'])

C('CMP-PC-03','conceptual',
 'En una reunión se discute un problema de baja calidad de datos que involucra aspectos técnicos, jurídicos y de procesos. Ante esta situación, usted',
 ['propone una solución técnica de limpieza de datos.',
  'descompone el problema en sus componentes (origen, responsables, normas, sistemas), explica cómo se relacionan y propone directrices para atender cada uno.',
  'sugiere conformar una mesa de trabajo para estudiar el tema.'],
 [1,2,0],
 ['Atiende solo una parte del problema.','Entiende el problema a partir de sus elementos y formula directrices.','Aplaza la comprensión del problema.'])

C('CMP-PC-04','conceptual',
 'Un indicador de cumplimiento muestra una mejora del 30 %, pero usted percibe que no refleja la realidad de la gestión. Ante esta situación, usted',
 ['reporta la mejora, pues el indicador es el oficialmente aprobado.',
  'analiza la construcción del indicador, identifica qué no está midiendo y propone ajustes metodológicos sustentados.',
  'reporta la mejora con una observación sobre su posible inexactitud.'],
 [0,2,1],
 ['No analiza el problema.','Aclara situaciones con rigurosidad técnica y conceptual.','Advierte, pero no aclara el problema.'])

C('CMP-PC-05','conceptual',
 'Un procurador regional solicita un concepto técnico sobre si una base de datos municipal es suficiente para soportar un hallazgo. Ante esta situación, usted',
 ['responde que la base es oficial y, por lo tanto, suficiente.',
  'evalúa la calidad, cobertura y limitaciones de la base, y emite un concepto claro con condiciones y recomendaciones de uso.',
  'remite la consulta al área jurídica.'],
 [0,2,1],
 ['Concluye sin análisis técnico.','Realiza análisis técnico y emite un concepto que aclara la situación.','No ejerce su competencia técnica.'])

/* ---- Orientación a resultados (Nivel A) ---- */
C('CMP-OR-01','resultados',
 'La meta anual del equipo es publicar 10 conjuntos de datos abiertos y ya se cumplió en septiembre. Ante esta situación, usted',
 ['reporta el cumplimiento de la meta y continúa con las demás tareas.',
  'propone una meta más desafiante para el resto del año, centrada en la calidad y el uso de los datos, y compromete recursos para lograrla.',
  'publica algunos conjuntos adicionales si hay tiempo disponible.'],
 [0,2,1],
 ['Se conforma con la meta (nivel D).','Fija metas que trascienden los propósitos actuales (nivel A).','Supera la meta sin una estrategia.'])

C('CMP-OR-02','resultados',
 'Un proyecto de analítica clave para la entidad enfrenta un obstáculo: el proveedor de datos se retrasó dos meses. Ante esta situación, usted',
 ['informa que el proyecto queda suspendido hasta recibir los datos.',
  'busca fuentes alternativas, reorganiza el cronograma para avanzar en otros componentes y negocia una entrega parcial con el proveedor.',
  'avanza en la documentación mientras llegan los datos.'],
 [0,2,1],
 ['No enfrenta los obstáculos.','Realiza las acciones necesarias para lograr los objetivos enfrentando los obstáculos.','Avanza parcialmente.'])

C('CMP-OR-03','resultados',
 'Le piden reducir a la mitad el tiempo de generación de un informe recurrente, una meta que el equipo considera irreal. Ante esta situación, usted',
 ['explica a su jefe por qué la meta no es alcanzable.',
  'analiza dónde se consume el tiempo, propone automatizaciones y un plan por etapas con indicadores para alcanzar o superar la meta.',
  'intenta hacerlo más rápido trabajando horas adicionales.'],
 [0,2,1],
 ['Descarta la meta sin analizarla.','Asume la meta desafiante con estrategia e indicadores (nivel A).','Esfuerzo individual sin cambio estructural.'])

C('CMP-OR-04','resultados',
 'El tablero que usted lideró se entregó a tiempo, pero los directivos casi no lo usan. Ante esta situación, usted',
 ['considera cumplido el objetivo, porque el producto se entregó a tiempo.',
  'mide el uso, indaga las causas con los usuarios y ajusta el producto y su estrategia de adopción hasta que genere decisiones.',
  'envía un correo recordando la existencia del tablero.'],
 [0,2,1],
 ['Confunde entrega con resultado.','Se orienta al resultado real y compromete esfuerzos para lograrlo.','Acción mínima.'])

C('CMP-OR-05','resultados',
 'Al finalizar un trimestre, su equipo no alcanzó una de las metas por una decisión técnica suya. Ante esta situación, usted',
 ['explica que la meta dependía también de otras dependencias.',
  'asume la responsabilidad, analiza la causa y presenta un plan para recuperar el rezago en el siguiente trimestre.',
  'propone reducir la meta para el siguiente periodo.'],
 [0,2,1],
 ['Evade la responsabilidad.','Asume la responsabilidad por los resultados y busca alcanzarlos.','Rebaja la exigencia en lugar de superar el obstáculo.'])

/* ---- Cumplimiento de parámetros de trabajo (Nivel B) ---- */
C('CMP-PAR-01','parametros',
 'Para cumplir una entrega urgente, un compañero le sugiere copiar una base con datos personales a su correo personal y trabajar desde casa. Ante esta situación, usted',
 ['rechaza la propuesta y trabaja con las herramientas y accesos autorizados por la entidad, informando a su jefe si el plazo está en riesgo.',
  'copia solo una parte de la base para reducir el riesgo.',
  'acepta, porque la prioridad es cumplir con la entrega.'],
 [2,1,0],
 ['Aplica la normatividad interna y externa (seguridad de la información y datos personales).','Reduce el riesgo, pero sigue incumpliendo los lineamientos.','Desconoce las normas.'])

C('CMP-PAR-02','parametros',
 'La entidad adoptó un nuevo procedimiento para la publicación de datos abiertos que agrega dos pasos de validación. Ante esta situación, usted',
 ['sigue publicando como antes, porque el nuevo procedimiento demora el proceso.',
  'aplica el nuevo procedimiento, orienta a su equipo para que lo siga y propone ajustes por los canales formales si encuentra oportunidades de mejora.',
  'aplica el nuevo procedimiento solo cuando publica conjuntos de datos sensibles.'],
 [0,2,1],
 ['Desconoce los lineamientos establecidos.','Sigue las reglas, alinea a su equipo con los procedimientos y propone mejoras formalmente (nivel B).','Aplicación parcial y discrecional.'])

C('CMP-PAR-03','parametros',
 'Un directivo le pide entregar de inmediato una base de datos a un tercero sin que exista convenio ni autorización. Ante esta situación, usted',
 ['la entrega, porque la orden viene de un superior.',
  'le explica respetuosamente los requisitos normativos para compartir datos y propone tramitar el instrumento correspondiente.',
  'la entrega, pero elimina algunas columnas.'],
 [0,2,1],
 ['Incumple la normatividad.','Aplica la normatividad con criterio y propone una solución dentro del proceso.','Mitiga parcialmente, pero sin cumplir los requisitos.'])

C('CMP-PAR-04','parametros',
 'Usted encuentra que una plantilla oficial para informes de gestión no incluye campos necesarios para reportar indicadores del nuevo plan. Ante esta situación, usted',
 ['diseña su propia plantilla y la usa a partir de ahora.',
  'usa la plantilla oficial e informa al área responsable la necesidad de actualizarla, sugiriendo los campos faltantes.',
  'usa la plantilla oficial sin reportar los indicadores faltantes.'],
 [0,2,1],
 ['Desconoce el parámetro institucional.','Aplica el criterio dentro del proceso y propone el ajuste por el canal adecuado.','Cumple la forma, pero no el propósito.'])

C('CMP-PAR-05','parametros',
 'En un proceso de contratación en el que usted participa como apoyo técnico, un oferente le pide una reunión privada para «aclarar» el anexo técnico. Ante esta situación, usted',
 ['acepta la reunión para resolver dudas rápidamente.',
  'le indica que las aclaraciones deben solicitarse por el canal oficial del proceso (SECOP) para que sean públicas y para todos los oferentes.',
  'le responde informalmente por correo electrónico.'],
 [0,2,0],
 ['Vulnera los principios de transparencia e igualdad.','Aplica la normatividad del proceso contractual.','Comunicación por fuera del proceso, sin publicidad.'])
