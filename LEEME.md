# Simulador Mérito 2026 – PGN Convocatoria 217

Simulador de las pruebas escritas del concurso de la Procuraduría General de la Nación 2026
(Profesional Universitario 3PU-18, Dirección de Apoyo Estratégico, Análisis de Datos e Información),
construido con el formato de preguntas de la Universidad de Antioquia.

## Cómo abrirlo
Doble clic en `index.html`. Funciona sin internet y sin instalar nada. El progreso se guarda en el navegador
(use «Mis datos y banco» para exportarlo o pasarlo a otro equipo).

## Estructura
- `js/config.js` – reglas del concurso, ejes temáticos, competencias (Diccionario PGN), fichas de estudio y análisis del estilo UdeA.
- `js/banco_general.js` – núcleo general (Estado, PGN, atención al usuario, gestión documental, sistemas de gestión, ofimática).
- `js/banco_especifico1.js` / `js/banco_especifico2.js` – núcleo específico (constitucional y administrativo, derecho informático, estadística, ciencia de datos, bases de datos, transparencia y datos abiertos, contratación).
- `js/banco_general2.js`, `js/banco_especifico3.js`, `js/banco_especifico4.js` – ampliación del banco.
- `js/banco_general3.js` – estructura de la PGN y régimen especial de carrera (Decretos Ley 262 de 2000 y 1851 de 2021, Res. 076 de 2026), redactado sobre el texto publicado en el portal del concurso.
- `js/banco_comportamental.js`, `js/banco_comportamental2.js`, `js/banco_comportamental3.js` – ítems de 3 opciones para las 6 competencias de la ficha.
- `js/ajuste_opciones.js`, `js/ajuste_comportamental.js` – distractores reescritos para que la opción correcta no se delate por ser la más larga (se cargan antes de los bancos; no cambian claves ni justificaciones).

Banco actual: 282 ítems de conocimientos (131 núcleo general, 151 específico) + 78 comportamentales.

## Mantenimiento
- El panel «Estado del concurso» y la calculadora de antecedentes leen `CONCURSO.estado` y `CONCURSO.antecedentes` en `js/config.js`. Actualícelos a mano cuando el portal publique avisos (corte actual: 9 de noviembre de 2026).
- La estructura del simulacro (90 + 40 ítems, 4 horas) es provisional: ajústela en `MODES` (`js/app.js`) cuando salga la Guía de Orientación de la prueba escrita.
- En antecedentes, los puntos por especialización y por título profesional adicional están por confirmar contra el art. 29 de la Res. 133 de 2026.
Al agregar un archivo de banco nuevo, inclúyalo en `index.html` antes de `js/app.js`.
- `js/app.js` – la aplicación.

## Agregar preguntas
Desde la app («Mis datos y banco» → Importar preguntas) con un JSON, o agregando líneas `Q(...)` en los archivos de banco.
