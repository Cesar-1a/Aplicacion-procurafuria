/* Banco COMPORTAMENTAL – ampliación 2 (6 ítems adicionales por competencia).
   Las tres opciones tienen longitud similar y la de mayor ajuste cambia de posición. */

/* ---- Responsabilidad con la organización (Nivel B) ---- */
C('CMP-RES-08','responsabilidad',
 'La dirección adoptó un plan de acción con metas trimestrales y usted nota que una actividad a su cargo ya no aporta a ninguna de ellas. Ante esta situación, usted',
 ['continúa ejecutándola como siempre, porque está en su plan de trabajo y nadie le ha pedido cambiarla.',
  'la suspende por su cuenta y dedica ese tiempo a otras tareas que considera más útiles para la dirección.',
  'presenta a su jefe el análisis y propone reorientarla hacia una de las metas, con un entregable concreto.'],
 [1,0,2],
 ['Cumple lo asignado, pero sin enfocar su actividad en los objetivos vigentes.','Actúa sin coordinación ni aval, afectando compromisos institucionales.','Enfoca su actividad hacia los objetivos de la institución y propone mejoramiento (nivel B).'])

C('CMP-RES-09','responsabilidad',
 'Un ente externo solicita a la entidad un reporte que nadie tiene asignado y cuyo plazo vence en tres días. Usted conoce los datos necesarios. Ante esta situación, usted',
 ['avisa a su jefe, se ofrece a elaborarlo, coordina los insumos faltantes y propone asignar un responsable permanente.',
  'espera a que la dirección defina quién debe elaborarlo, pues no hace parte de sus funciones habituales.',
  'envía por correo los datos que tiene a quien considere que podría encargarse, sin más seguimiento.'],
 [2,0,1],
 ['Asume compromiso con los objetivos de la entidad y propone una mejora del proceso.','No asume compromiso frente a una necesidad institucional evidente.','Colabora parcialmente, sin asegurar el resultado.'])

C('CMP-RES-10','responsabilidad',
 'En una reunión se aprueba una estrategia institucional de datos con la que usted no está del todo de acuerdo. Ante esta situación, usted',
 ['la aplica con reservas y comenta sus desacuerdos con los colegas cada vez que surge una dificultad.',
  'expone sus argumentos por el canal adecuado y, adoptada la decisión, la ejecuta con compromiso y propone ajustes sustentados.',
  'sigue trabajando con su propio enfoque, porque considera que técnicamente ofrece mejores resultados.'],
 [1,2,0],
 ['Cumple, pero debilita el compromiso del equipo con el objetivo.','Asume compromiso con los objetivos institucionales y aporta a su mejora.','Se aparta de los objetivos definidos por la entidad.'])

C('CMP-RES-11','responsabilidad',
 'Usted termina sus tareas del mes una semana antes de lo previsto, mientras otro frente de la dirección está atrasado en una meta institucional. Ante esta situación, usted',
 ['adelanta trabajo propio del mes siguiente, para mantener su buen ritmo y no interferir en tareas ajenas.',
  'aprovecha esos días para organizar sus archivos y actualizar la documentación de sus procesos.',
  'ofrece su apoyo a ese frente, acuerda con su jefe en qué puede aportar y documenta lo que realice.'],
 [1,0,2],
 ['Es productivo, pero prioriza sus metas individuales sobre las institucionales.','Actividad útil, pero ajena a la meta que está en riesgo.','Contribuye al desarrollo de los objetivos de la entidad más allá de su tarea.'])

C('CMP-RES-12','responsabilidad',
 'Al usar un procedimiento institucional, usted identifica un paso que duplica una validación ya hecha por el sistema. Ante esta situación, usted',
 ['omite el paso duplicado en su trabajo diario, ya que no agrega valor y demora la entrega.',
  'documenta la duplicidad con evidencia y propone formalmente al área responsable simplificar el procedimiento.',
  'cumple el paso tal como está y menciona el tema de manera informal cuando hay oportunidad.'],
 [0,2,1],
 ['Incumple el procedimiento vigente sin gestionar su mejora.','Busca la mejora de los procesos institucionales por el canal adecuado (nivel B).','Cumple, pero su aporte a la mejora es débil e informal.'])

C('CMP-RES-13','responsabilidad',
 'Un error suyo en un cálculo fue publicado en un informe interno y hasta ahora nadie lo ha notado. Ante esta situación, usted',
 ['lo informa de inmediato, corrige el informe, comunica el ajuste a los usuarios y agrega un control para evitar que se repita.',
  'corrige el cálculo en la siguiente edición del informe, sin mencionar el error de la versión anterior.',
  'espera a ver si alguien lo detecta, porque el efecto del error sobre las conclusiones es pequeño.'],
 [2,1,0],
 ['Asume la responsabilidad frente a los objetivos y mejora el proceso.','Corrige hacia adelante, pero deja en circulación información errada.','Antepone su imagen al compromiso con la entidad.'])

/* ---- Organización del trabajo (Nivel B) ---- */
C('CMP-ORG-08','organizacion',
 'Recibe un proyecto analítico que estaba a cargo de un colega trasladado, sin documentación y con entregas pendientes. Ante esta situación, usted',
 ['empieza de cero con su propio método, porque le resulta más rápido que entender el trabajo anterior.',
  'levanta el estado del proyecto, contacta al colega para aclarar pendientes, define un plan con fechas y lo valida con su jefe.',
  'atiende las entregas a medida que las soliciten y va resolviendo las dudas que aparezcan en el camino.'],
 [0,2,1],
 ['Desaprovecha lo construido y arriesga los plazos.','Organiza el trabajo con planeación, verificación y seguimiento (nivel B).','Trabaja de forma reactiva, sin plan ni control.'])

C('CMP-ORG-09','organizacion',
 'Su equipo debe entregar cada mes un reporte que suele salir con errores de digitación detectados por los usuarios. Ante esta situación, usted',
 ['revisa personalmente cada reporte la noche anterior a la entrega, para corregir lo que encuentre.',
  'pide a los integrantes del equipo que tengan más cuidado y recuerda la importancia de la calidad.',
  'diseña una lista de verificación y validaciones automáticas, asigna la revisión cruzada y mide los errores mes a mes.'],
 [1,0,2],
 ['Mejora el resultado inmediato, pero depende de su esfuerzo individual.','No establece herramientas de control ni seguimiento.','Implementa herramientas de control y seguimiento para el equipo (nivel B).'])

C('CMP-ORG-10','organizacion',
 'En medio de una semana planeada, su jefe le asigna una tarea urgente que le tomará dos días. Ante esta situación, usted',
 ['revisa su plan, reprograma lo que puede esperar, informa a los afectados las nuevas fechas y atiende la urgencia.',
  'atiende la tarea urgente y retoma lo demás cuando termine, sin avisar los cambios en las fechas.',
  'intenta hacer todo al mismo tiempo, alargando su jornada, para no incumplir ningún compromiso.'],
 [2,1,0],
 ['Organiza con oportunidad y hace seguimiento a sus compromisos.','Atiende la urgencia, pero sin gestionar el efecto en los demás compromisos.','No prioriza y pone en riesgo la calidad de todo.'])

C('CMP-ORG-11','organizacion',
 'Usted coordina una mesa de trabajo semanal cuyas reuniones se extienden y terminan sin acuerdos claros. Ante esta situación, usted',
 ['reduce la frecuencia de las reuniones a una mensual, para que el grupo pierda menos tiempo.',
  'envía antes la agenda con objetivos y tiempos, registra compromisos con responsable y fecha, y abre cada sesión revisándolos.',
  'pide a los asistentes que sean más breves y deja que cada uno tome sus propias notas.'],
 [0,2,1],
 ['Evita el síntoma sin organizar el trabajo.','Trabaja con organización, seguimiento y verificación de las labores del grupo.','Mejora poco y no asegura seguimiento.'])

C('CMP-ORG-12','organizacion',
 'Debe entregar un tablero en un mes y depende de tres insumos de otras áreas, uno de los cuales es incierto. Ante esta situación, usted',
 ['espera a tener los tres insumos completos para iniciar, y así evitar reprocesos en el desarrollo.',
  'avanza con los dos insumos seguros y confía en que el tercero llegará antes de la fecha de entrega.',
  'planea por etapas, fija fechas de corte para cada insumo, prevé una alternativa para el incierto y revisa el avance cada semana.'],
 [0,1,2],
 ['Pone en riesgo la oportunidad de la entrega.','Avanza, pero sin gestionar el riesgo identificado.','Organiza con oportunidad, previsión y seguimiento.'])

C('CMP-ORG-13','organizacion',
 'Usted recibe a un profesional nuevo en el equipo, que debe asumir en dos semanas uno de sus procesos. Ante esta situación, usted',
 ['le entrega los manuales y le indica que le consulte cualquier duda cuando la tenga.',
  'prepara un plan de entrenamiento con prácticas supervisadas, puntos de control y una lista de verificación del proceso.',
  'continúa ejecutando usted el proceso mientras él observa, hasta que se sienta seguro.'],
 [1,2,0],
 ['Transfiere información, pero sin verificación del aprendizaje.','Organiza y verifica las labores de los demás con herramientas de control.','No organiza la transferencia ni cumple el plazo.'])

/* ---- Investigación (Nivel B) ---- */
C('CMP-INV-08','investigacion',
 'Le piden estimar cuántas entidades incumplen la publicación de información obligatoria, pero no existe un censo actualizado. Ante esta situación, usted',
 ['responde que no es posible dar una cifra mientras no se construya un censo completo de entidades.',
  'toma la cifra de un informe de hace varios años y la presenta como estimación vigente.',
  'diseña una muestra representativa, define el instrumento de verificación y reporta la estimación con su margen de error.'],
 [0,1,2],
 ['No busca alternativas metodológicas.','Usa información disponible, pero sin evaluar su vigencia.','Diseña y realiza un estudio con método (nivel B).'])

C('CMP-INV-09','investigacion',
 'Dos estudios reconocidos llegan a conclusiones opuestas sobre la efectividad de las alertas preventivas. Ante esta situación, usted',
 ['compara sus métodos, datos y supuestos, identifica por qué difieren y concluye qué es aplicable al caso de la entidad.',
  'adopta la conclusión del estudio más reciente, por considerarlo más actualizado.',
  'descarta ambos estudios y basa su análisis solo en la experiencia del equipo.'],
 [2,1,0],
 ['Analiza y evalúa la información con dominio técnico.','Aplica un criterio simple sin evaluar la calidad de la evidencia.','Renuncia a la evidencia disponible.'])

C('CMP-INV-10','investigacion',
 'Un grupo de investigación universitario ofrece compartir una metodología para medir riesgos de corrupción en contratación. Ante esta situación, usted',
 ['agradece el ofrecimiento, pero lo declina, porque adaptar métodos externos toma demasiado tiempo.',
  'recibe la metodología y la aplica tal cual a los datos de la entidad, para obtener resultados pronto.',
  'evalúa su pertinencia, propone un piloto conjunto con reglas de uso de datos y documenta los aprendizajes.'],
 [0,1,2],
 ['Desaprovecha la alianza y el conocimiento disponible.','Incorpora el método, pero sin evaluarlo ni adaptarlo.','Realiza alianzas con instituciones educativas e incorpora métodos de investigación (nivel B).'])

C('CMP-INV-11','investigacion',
 'Para un estudio usted necesita datos de otra entidad pública, que tarda en responder. Ante esta situación, usted',
 ['cambia el objetivo del estudio para ajustarlo a los datos que ya tiene disponibles.',
  'gestiona la solicitud formal, explora fuentes públicas alternativas y documenta las limitaciones que resulten.',
  'suspende el estudio hasta que la otra entidad entregue la información completa.'],
 [1,2,0],
 ['Avanza, pero sacrifica la pregunta que interesa a la dirección.','Busca información relevante y pertinente con método y por varias vías.','No busca alternativas.'])

C('CMP-INV-12','investigacion',
 'Al terminar un estudio, la dirección le pregunta qué debería cambiar la entidad a partir de los hallazgos. Ante esta situación, usted',
 ['traduce los hallazgos en recomendaciones priorizadas, con responsables sugeridos e indicadores para medir su efecto.',
  'responde que su labor llega hasta el análisis y que las decisiones corresponden a otras áreas.',
  'entrega el informe técnico completo y sugiere que cada área saque sus propias conclusiones.'],
 [2,0,1],
 ['Propone planes y programas de mejoramiento institucional (nivel B).','Limita la investigación y no aporta al mejoramiento.','Aporta información, sin convertirla en propuestas.'])

C('CMP-INV-13','investigacion',
 'Un modelo que usted desarrolló funciona bien, pero aparece una técnica nueva que podría mejorarlo. Ante esta situación, usted',
 ['mantiene el modelo actual, porque cumple su propósito y cambiarlo implicaría riesgos.',
  'reemplaza el modelo por la nueva técnica en cuanto la conoce, para estar a la vanguardia.',
  'estudia la técnica, la compara con el modelo actual sobre los mismos datos y recomienda con base en los resultados.'],
 [1,0,2],
 ['Decisión prudente, pero sin indagar ni evaluar.','Adopta sin evaluar con rigor.','Incorpora elementos nuevos en la búsqueda de métodos, evaluándolos con dominio técnico.'])

/* ---- Pensamiento conceptual (Nivel A) ---- */
C('CMP-PC-08','conceptual',
 'Un indicador muestra que las quejas resueltas aumentaron, pero el tiempo promedio de respuesta también subió, y la dirección no entiende la aparente contradicción. Ante esta situación, usted',
 ['presenta las dos series en un mismo gráfico y deja que cada directivo saque su interpretación.',
  'explica que ambos indicadores son correctos y que la diferencia se debe a factores estacionales.',
  'descompone los indicadores, muestra cómo el cierre de casos antiguos explica ambos efectos y define cómo leerlos en adelante.'],
 [1,0,2],
 ['Informa, pero no aclara la situación.','Ofrece una explicación sin sustento.','Explica un problema complejo y formula directrices (nivel A).'])

C('CMP-PC-09','conceptual',
 'Tres dependencias discuten si un nuevo sistema debe registrar «quejas», «peticiones» o «actuaciones», y cada una entiende algo distinto. Ante esta situación, usted',
 ['precisa qué elementos distinguen cada concepto, los relaciona con las normas y propone un glosario con reglas de clasificación.',
  'sugiere que cada dependencia registre según su propio criterio y unificar más adelante.',
  'propone adoptar la definición que usa la dependencia con más registros en el sistema.'],
 [2,0,1],
 ['Aclara el problema con rigurosidad conceptual y genera lineamientos (nivel A).','Aplaza el problema y lo agrava.','Resuelve en la práctica, pero sin sustento conceptual.'])

C('CMP-PC-10','conceptual',
 'Le piden opinar sobre un proyecto que mezcla objetivos de transparencia, protección de datos y analítica, que parecen chocar entre sí. Ante esta situación, usted',
 ['recomienda priorizar la analítica, que es la competencia de la dirección, y dejar lo demás a otras áreas.',
  'identifica en qué puntos concretos entran en tensión, explica los criterios para armonizarlos y formula pautas para el diseño.',
  'señala que existen riesgos jurídicos y sugiere solicitar un concepto antes de continuar.'],
 [0,2,1],
 ['Reduce el problema a uno solo de sus elementos.','Entiende el problema desde sus elementos y formula directrices (nivel A).','Advierte, pero no aclara ni orienta.'])

C('CMP-PC-11','conceptual',
 'Un directivo quiere usar un ranking de entidades por número de quejas para priorizar visitas. Ante esta situación, usted',
 ['elabora el ranking tal como lo pidió, porque refleja una necesidad concreta de la dirección.',
  'elabora el ranking y agrega una nota indicando que debe interpretarse con precaución.',
  'explica por qué el conteo bruto confunde tamaño con riesgo y propone criterios e indicadores normalizados para priorizar.'],
 [0,1,2],
 ['No aporta comprensión del problema.','Advierte sin explicar ni orientar.','Aclara un problema con rigor técnico y genera lineamientos claros.'])

C('CMP-PC-12','conceptual',
 'Después de un incidente con datos, se pide a la dirección explicar qué falló. Hay versiones distintas de cada área. Ante esta situación, usted',
 ['recoge las versiones en un documento y lo remite a la alta dirección para su valoración.',
  'reconstruye la secuencia, distingue causas de síntomas, muestra cómo se encadenaron y deriva pautas para prevenirlo.',
  'identifica al área donde ocurrió el último error y recomienda reforzar allí los controles.'],
 [1,2,0],
 ['Reúne información, pero no explica el problema.','Explica un problema de alta complejidad desde sus elementos y formula directrices (nivel A).','Simplifica en exceso y atiende solo un elemento.'])

C('CMP-PC-13','conceptual',
 'Debe redactar el lineamiento para el uso de inteligencia artificial generativa en la dirección, un tema nuevo para todos. Ante esta situación, usted',
 ['plantea los usos, riesgos y responsabilidades en categorías claras, con criterios de decisión y ejemplos para cada una.',
  'adapta el lineamiento de otra entidad cambiando los nombres y las dependencias.',
  'propone prohibir su uso hasta que exista una regulación nacional sobre la materia.'],
 [2,1,0],
 ['Genera lineamientos claros y precisos sobre una situación compleja (nivel A).','Entrega un producto, pero sin análisis propio de la situación.','Evita el problema en lugar de aclararlo.'])

/* ---- Orientación a resultados (Nivel A) ---- */
C('CMP-OR-08','resultados',
 'El modelo de alertas que su equipo entregó alcanza la precisión pactada, y usted estima que con otra fuente de datos podría detectar el doble de casos. Ante esta situación, usted',
 ['deja constancia de la idea en el informe final, por si alguien quiere retomarla.',
  'plantea una nueva meta de detección, cuantifica el beneficio y compromete un plan con recursos y fechas para lograrla.',
  'prueba la nueva fuente en sus ratos libres, sin incluirla en la planeación del equipo.'],
 [0,2,1],
 ['Se conforma con la meta alcanzada.','Fija metas que trascienden los propósitos actuales y compromete recursos (nivel A).','Busca mejorar, pero sin comprometer recursos ni tiempos.'])

C('CMP-OR-09','resultados',
 'A dos meses del cierre, un indicador clave de la dirección va en 60 % de la meta anual. Ante esta situación, usted',
 ['identifica las acciones de mayor impacto, reasigna esfuerzos, fija hitos semanales y hace seguimiento hasta cerrar la brecha.',
  'mantiene el plan original y reporta al final del año el porcentaje alcanzado con sus causas.',
  'redobla el esfuerzo en todas las actividades por igual, esperando que el indicador mejore.'],
 [2,0,1],
 ['Compromete recursos y tiempos para alcanzar la meta (nivel A).','No actúa para lograr el resultado.','Se esfuerza, pero sin foco ni estrategia.'])

C('CMP-OR-10','resultados',
 'Le proponen una meta ambiciosa: publicar un tablero en la mitad del tiempo habitual, para una decisión urgente de la alta dirección. Ante esta situación, usted',
 ['acepta y entrega en el plazo una versión incompleta, sin advertir qué quedó por fuera.',
  'explica que los tiempos técnicos no lo permiten y ofrece entregarlo en el plazo usual.',
  'acepta, define el alcance mínimo que sirve a la decisión, organiza al equipo por entregas y cumple con calidad verificada.'],
 [1,0,2],
 ['Cumple la fecha, pero compromete la utilidad del resultado.','Rechaza la meta desafiante.','Establece y alcanza resultados de metas desafiantes (nivel A).'])

C('CMP-OR-11','resultados',
 'Su equipo cumple todas sus metas de producción de informes, pero una encuesta muestra que pocas decisiones se apoyan en ellos. Ante esta situación, usted',
 ['considera que el uso de los informes es responsabilidad de quienes los reciben.',
  'propone medir el uso en decisiones como nueva meta, rediseña los informes con los usuarios y hace seguimiento al cambio.',
  'aumenta el número de informes producidos, para ampliar la información disponible.'],
 [0,2,1],
 ['Confunde producto con resultado.','Fija metas que trascienden los propósitos actuales, alineadas con la misión.','Más producto no asegura el resultado.'])

C('CMP-OR-12','resultados',
 'Un proyecto suyo depende de un desarrollo de otra área que no avanza, y la fecha comprometida con la alta dirección se acerca. Ante esta situación, usted',
 ['deja constancia escrita de que el retraso obedece a la otra área y espera su entrega.',
  'eleva el tema a su jefe y aguarda a que los directivos resuelvan la situación entre ellos.',
  'acuerda con esa área una entrega mínima, ofrece apoyo para lograrla, ajusta su plan y mantiene informada a la dirección.'],
 [0,1,2],
 ['Se protege, pero no logra el resultado.','Escala, pero no actúa para alcanzar la meta.','Compromete recursos y tiempos para lograr la meta pese a los obstáculos.'])

C('CMP-OR-13','resultados',
 'Al cerrar el año, su equipo superó la meta. Para la planeación siguiente, le piden proponer la nueva meta. Ante esta situación, usted',
 ['propone una meta superior, sustentada en el desempeño logrado y en mejoras concretas, con los recursos que requiere.',
  'propone repetir la meta del año anterior, para asegurar que el equipo vuelva a cumplirla.',
  'propone una meta ligeramente inferior a lo logrado, para dejar un margen frente a imprevistos.'],
 [2,1,0],
 ['Establece metas desafiantes que trascienden los propósitos actuales (nivel A).','Se mantiene, sin buscar superar los resultados.','Reduce la exigencia para asegurar el cumplimiento.'])

/* ---- Cumplimiento de parámetros de trabajo (Nivel B) ---- */
C('CMP-PAR-08','parametros',
 'Usted necesita con urgencia una herramienta de software que no está en el catálogo autorizado por la entidad. Ante esta situación, usted',
 ['la instala en su equipo, porque es gratuita y la necesita solo para esta tarea.',
  'tramita la solicitud por el canal de tecnología, sustenta la necesidad y entre tanto resuelve con las herramientas autorizadas.',
  'pide a un compañero con permisos de administrador que la instale sin registrar la solicitud.'],
 [0,2,1],
 ['Incumple los lineamientos de seguridad y uso de tecnología.','Aplica la normatividad interna y actúa dentro del proceso (nivel B).','Busca apoyo, pero por fuera del procedimiento.'])

C('CMP-PAR-09','parametros',
 'Como apoyo a la supervisión de un contrato, usted nota que el contratista entregó un producto fuera del plazo pactado, y el supervisor le pide no dejarlo por escrito. Ante esta situación, usted',
 ['registra el hecho en el informe conforme al procedimiento y le explica al supervisor las obligaciones que ambos tienen.',
  'omite el dato en el informe, ya que la decisión es responsabilidad del supervisor del contrato.',
  'deja el dato fuera del informe, pero guarda un correo personal como respaldo de lo ocurrido.'],
 [2,0,1],
 ['Aplica la normatividad externa e interna sobre supervisión contractual.','Incumple su deber y expone a la entidad.','Se protege, pero no cumple el procedimiento.'])

C('CMP-PAR-10','parametros',
 'Un periodista lo contacta directamente para pedirle cifras preliminares de un estudio que aún no ha sido publicado. Ante esta situación, usted',
 ['le comparte las cifras, aclarando que son preliminares y que no debe citar la fuente.',
  'no responde el mensaje, para evitar cualquier compromiso con el medio de comunicación.',
  'le indica el canal oficial para solicitar información y remite el caso a la oficina competente según el procedimiento.'],
 [0,1,2],
 ['Vulnera los lineamientos de comunicaciones y de manejo de información.','Evita el riesgo, pero no aplica el procedimiento ni orienta al solicitante.','Sigue las reglas establecidas para el proceso (nivel B).'])

C('CMP-PAR-11','parametros',
 'Su equipo debe iniciar un proyecto y aún no tiene objetivos escritos. Usted lidera el frente técnico. Ante esta situación, usted',
 ['deja que cada integrante avance según su criterio y ajusta sobre la marcha.',
  'define los objetivos del frente alineados con el procedimiento institucional de proyectos y los acuerda con el equipo.',
  'fija los objetivos que le parecen técnicamente mejores, sin revisar el procedimiento institucional.'],
 [0,2,1],
 ['No orienta al equipo dentro del proceso.','Define objetivos para su equipo alineados con procedimientos definidos (nivel B).','Define objetivos, pero sin alinearlos con los parámetros establecidos.'])

C('CMP-PAR-12','parametros',
 'Al usar una base de datos compartida por otra entidad, usted advierte que el convenio solo autoriza su uso para un fin distinto del que le han pedido. Ante esta situación, usted',
 ['la usa de todos modos, porque la información ya está en poder de la entidad y el fin es legítimo.',
  'la usa, pero elimina los campos que identifican personas, para reducir cualquier riesgo.',
  'informa la restricción, se abstiene de usarla para ese fin y propone gestionar la ampliación del convenio.'],
 [0,1,2],
 ['Desconoce la normatividad y el principio de finalidad.','Mitiga, pero sigue por fuera de lo autorizado.','Aplica la normatividad externa e interna con criterio y dentro del proceso.'])

C('CMP-PAR-13','parametros',
 'La entidad exige registrar cada actuación en el sistema de información el mismo día. En semanas de alta carga, su equipo suele hacerlo al final del mes. Ante esta situación, usted',
 ['registra sus actuaciones a diario, acuerda con el equipo una rutina para cumplir la regla y revisa su cumplimiento.',
  'registra las suyas a diario y deja que cada compañero decida cómo manejar las propias.',
  'se suma a la práctica del equipo, pues lo importante es que al cierre todo quede registrado.'],
 [2,1,0],
 ['Sigue las reglas y alinea a su equipo con los procedimientos (nivel B).','Cumple individualmente, sin orientar al equipo.','Se aparta del lineamiento establecido.'])
