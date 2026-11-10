/* Banco COMPORTAMENTAL – ampliación (2 ítems adicionales por competencia) */

C('CMP-RES-06','responsabilidad',
 'Usted descubre que un tablero institucional que nadie revisa desde hace meses muestra datos desactualizados, aunque no está bajo su responsabilidad. Ante esta situación, usted',
 ['lo reporta al responsable, propone un mecanismo de actualización automática y ofrece su apoyo técnico.','no hace nada, porque el tablero no es de su dependencia.','actualiza los datos usted mismo sin informar a nadie.'],
 [2,0,1],
 ['Asume compromiso con los objetivos institucionales y propone una mejora sostenible.','Se desentiende de los objetivos de la entidad.','Resuelve el síntoma, pero sin coordinación ni mejora del proceso.'])

C('CMP-RES-07','responsabilidad',
 'La dirección anuncia un cambio de herramienta tecnológica que obligará a rehacer varios procesos en los que usted es experto. Ante esta situación, usted',
 ['espera a que le asignen las tareas de migración.','analiza el impacto, propone un plan de transición para sus procesos y comparte su conocimiento con el equipo.','manifiesta su desacuerdo y continúa con la herramienta anterior mientras pueda.'],
 [1,2,0],
 ['Cumple, pero sin iniciativa.','Contribuye a los objetivos y al mejoramiento continuo (nivel B).','No asume el compromiso institucional.'])

C('CMP-ORG-06','organizacion',
 'Usted lidera la elaboración de un informe con aportes de cinco dependencias, y dos de ellas suelen entregar tarde. Ante esta situación, usted',
 ['establece desde el inicio un cronograma con fechas intermedias, plantillas y recordatorios, y hace seguimiento semanal a los aportes.','espera a la fecha final y reporta a quienes no entregaron.','elabora usted mismo los aportes de esas dos dependencias.'],
 [2,0,1],
 ['Organiza con oportunidad, seguimiento y verificación de las labores de los demás.','Sin seguimiento preventivo.','Asume trabajo ajeno sin resolver el problema de organización.'])

C('CMP-ORG-07','organizacion',
 'Al finalizar un proyecto analítico, sus archivos, scripts y bases intermedias están dispersos en varias carpetas personales. Ante esta situación, usted',
 ['deja todo como está, porque el proyecto ya terminó.','organiza el repositorio del proyecto con estructura estándar, versiones, documentación y ubicación institucional.','borra los archivos intermedios para liberar espacio.'],
 [0,2,1],
 ['Afecta la continuidad y la trazabilidad.','Trabaja con organización y precisión, facilitando el seguimiento.','Ordena parcialmente, pero puede perder trazabilidad.'])

C('CMP-INV-06','investigacion',
 'Al revisar un estudio previo de la entidad, usted encuentra que la muestra utilizada no era representativa. Ante esta situación, usted',
 ['ignora el hallazgo, porque el estudio ya fue publicado.','documenta la limitación, estima su efecto en las conclusiones y propone un nuevo diseño muestral para la siguiente medición.','critica públicamente al autor del estudio.'],
 [0,2,0],
 ['No evalúa la información con rigor.','Analiza y evalúa la información con dominio técnico y propone mejoras.','No aporta a la investigación ni al mejoramiento.'])

C('CMP-INV-07','investigacion',
 'Se le pide un informe sobre el uso de inteligencia artificial en organismos de control de otros países, y solo cuenta con dos semanas. Ante esta situación, usted',
 ['define preguntas guía, selecciona fuentes confiables, consulta a expertos de una universidad aliada y presenta hallazgos con recomendaciones aplicables a la PGN.','traduce un artículo extranjero sobre el tema.','solicita más tiempo antes de empezar.'],
 [2,1,0],
 ['Diseña y realiza un estudio con método y alianzas (nivel B).','Aporta información, pero sin análisis propio.','Aplaza sin avanzar.'])

C('CMP-PC-06','conceptual',
 'La alta dirección pregunta por qué dos fuentes oficiales reportan cifras distintas sobre el mismo fenómeno. Ante esta situación, usted',
 ['elige la cifra más alta para ser conservador.','analiza las definiciones, coberturas, periodos y métodos de cada fuente, explica las diferencias y define un lineamiento para su uso.','reporta ambas cifras sin explicación.'],
 [0,2,1],
 ['No resuelve el problema conceptual.','Explica un problema complejo y formula directrices (nivel A).','Informa, pero no aclara la situación.'])

C('CMP-PC-07','conceptual',
 'Debe presentar ante un comité una propuesta técnica compleja a personas sin formación en datos. Ante esta situación, usted',
 ['usa el mismo documento técnico que preparó para su equipo.','sintetiza el problema, la solución y sus implicaciones con ejemplos y gráficos claros, y deja anexo el detalle técnico.','presenta solo las conclusiones, sin explicar el razonamiento.'],
 [0,2,1],
 ['No adapta la explicación a la audiencia.','Genera explicaciones claras y precisas de situaciones complejas.','Omite elementos necesarios para entender la propuesta.'])

C('CMP-OR-06','resultados',
 'Su equipo tiene la meta de reducir en 20 % el tiempo de respuesta a solicitudes de información, y a mitad de año va en 8 %. Ante esta situación, usted',
 ['espera al final del año para evaluar.','analiza las causas del rezago, propone acciones adicionales con responsables y hace seguimiento quincenal al indicador.','solicita reducir la meta al 10 %.'],
 [0,2,0],
 ['Pierde la oportunidad de corregir.','Realiza todas las acciones necesarias para lograr la meta.','Rebaja la exigencia.'])

C('CMP-OR-07','resultados',
 'Después de entregar un modelo analítico que cumple los requisitos, usted identifica una mejora que aumentaría significativamente su precisión. Ante esta situación, usted',
 ['considera terminado el trabajo.','presenta la mejora con una estimación de su impacto y un plan para implementarla.','implementa la mejora en producción sin informar.'],
 [0,2,1],
 ['No busca superar las metas.','Fija metas que trascienden los propósitos actuales con planeación.','Busca el resultado, pero sin cumplir los procedimientos.'])

C('CMP-PAR-06','parametros',
 'Para cumplir un plazo, un compañero propone publicar un conjunto de datos sin pasar por la revisión de anonimización establecida. Ante esta situación, usted',
 ['acepta, porque el plazo es prioritario.','aplica el procedimiento de revisión y, si el plazo está en riesgo, lo informa oportunamente al jefe con una propuesta de nueva fecha.','publica solo algunas columnas sin revisión.'],
 [0,2,1],
 ['Desconoce la normatividad.','Aplica los criterios del proceso organizacional.','Mitiga parcialmente, sin cumplir el procedimiento.'])

C('CMP-PAR-07','parametros',
 'Usted se integra a un equipo que no sigue la guía institucional de documentación de código. Ante esta situación, usted',
 ['adopta la práctica del equipo para no generar conflictos.','aplica la guía en su trabajo, la socializa con el equipo y propone una meta de adopción gradual.','informa a control interno sin hablar con el equipo.'],
 [0,2,1],
 ['Se aparta de los lineamientos.','Sigue los lineamientos y alinea al equipo con los procedimientos (nivel B).','Busca el cumplimiento, pero sin aplicar criterio de trabajo en equipo.'])
