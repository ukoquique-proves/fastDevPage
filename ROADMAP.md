# ROADMAP

## Hecho

- [x] Resolver conflictos y unificar las mejoras de diseño y accesibilidad de la rama remota.
- [x] Integrar el script de Formspree AJAX y validar localmente el flujo de suscripción.
- [x] Reemplazar `TU_ID_AQUI` por el Formspree real (`mnjyeeod`).
- [x] Publicar `Code_Compacter.tar.gz` en GitHub Releases para entrega directa.
- [x] Añadir un botón de descarga visible en el mensaje de éxito del formulario.
- [x] Crear la página de agradecimiento `gracias.html` y configurar el campo oculto `_next` para fallback sin JavaScript.
- [x] Mejorar la accesibilidad del formulario con regiones en vivo y una descripción más clara del campo.
- [x] Añadir el favicon para GitHub Pages.

## Flujo del formulario

- [x] Mantener el formulario conectado a Formspree para captura básica de leads; la entrega del toolkit ya ocurre inline en la página.
- [x] No necesario: la descarga ya ocurre inline (JS) y vía gracias.html (fallback), así que no se requiere autoresponder de Formspree.
- [ ] Ejecutar una prueba real de envío desde el formulario publicado y verificar que los correos de lead llegan correctamente.
- [ ] Revisar todos los CTA del sitio y ajustar el texto para que cada botón o enlace describa con precisión su destino.

## Accesibilidad y SEO

- [x] Añadir un skip link en la parte superior para usuarios de teclado.
- [x] Añadir metadata Open Graph, Twitter y canonical.
- [ ] Preparar una imagen social y revisar el favicon para garantizar una vista previa correcta en redes.
- [ ] Fortalecer el SEO de todas las páginas añadiendo canonical, imagen Open Graph/Twitter, JSON-LD, author, robots y theme-color donde sea pertinente.

## Contenido y credibilidad

- [x] Añadir una nota breve de metodología para los benchmarks de RAM y latencia.
- [ ] Revisar el copy principal y reescribir cualquier afirmación que suene absoluta para que quede alineada con resultados medidos.

## Arquitectura y mantenimiento

- [ ] Replantear la validación del sitio para usar un parser HTML en lugar de depender tanto de `grep` y comprobaciones textuales frágiles.
- [ ] Extender el checker para validar estructura, enlaces y atributos de forma más robusta ante cambios de formato del HTML.
- [ ] Dividir el stylesheet monolítico en módulos más pequeños como base.css, layout.css, buttons.css, forms.css, hero.css, cards.css, tradeoff.css y utilities.css.
- [ ] Reducir la duplicación de header y footer entre páginas mediante un sistema de plantillas, generador estático o paso de build.

## Lanzamiento y distribución

- [ ] Publicar el outreach inicial en Dev.to o Reddit para ampliar alcance y captar interés.
- [ ] Preparar una checklist breve de release para futuras actualizaciones en GitHub Pages.
