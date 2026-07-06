# PuppyTeach | Desarrollo Senior Ultra-Eficiente

🌐 **Sitio en vivo:** [https://ukoquique-proves.github.io/fastDevPage/](https://ukoquique-proves.github.io/fastDevPage/)

Una landing page minimalista y rápida para la Fase 2 de Teledígitos / PuppyTeach. Está pensada para desarrolladores senior que prefieren precisión técnica, claridad y comportamiento real por encima de efectos llamativos.

## 🚀 Filosofía del Proyecto

Este sitio se sostiene en la mentalidad **"Antihumo"**:
- **Minimalismo técnico**: HTML/CSS estático, sin frameworks innecesarios y sin dependencias pesadas.
- **Carga rápida**: la página debe entrar en pantalla al mismo ritmo que un `cat` desde la terminal.
- **Transparencia real**: métricas visibles, benchmark honesto y un mensaje directo.

### Nuevo gancho (tono empático)

💡 Sí, puedes correr `dockerd` nativo en Puppy Linux con solo ~137 MB de RAM. Pero si estás usando una máquina con recursos limitados
para experimentar con agentes de IA locales, ¿realmente quieres pelearte con drivers de almacenamiento `vfs`, warnings de cgroups v2 y la
ausencia de `systemd`? PuppyTeach ofrece un entorno pre-optimizado que elimina esa fricción para que puedas picar código en RAM sin
configurar `daemon.json` ni pelearte con capas. (Ver sección de métricas y trade-off en `index.html`.)

## 🛠️ Qué contiene

Todo está en un único archivo: [index.html](index.html).

- **Hero Section**: propuesta de valor dirigida a ingenieros senior.
- **Benchmark real**: comparación de consumo de RAM entre Puppy Linux y Docker.
- **Catálogo de cursos**:
  1. Resurrección de hardware secundario para agentes de IA.
  2. Entornos inmutables con Save-Files nativos.
  3. Optimización de pipeline TrixieRetro.
- **Lead Magnet**: formulario para capturar email y entregar `Code Compacter`.

## 📧 Formulario integrado con Formspree

El formulario ya está configurado para funcionar con Formspree y AJAX, sin recarga de página.

- Endpoint: `https://formspree.io/f/mnjyeeod`
- Formulario en `index.html` con `id="puppyteach-capture-form"`
- Manejo de estados con `data-fs-success` y `data-fs-error`
- Inicialización usando una versión fija del CDN de `@formspree/ajax` con SRI y `crossorigin`

Esto significa que el usuario sigue en la misma página y el formulario puede mostrar éxito o error de forma inmediata.

> Nota: Formspree aún no está completamente configurado desde el panel. Debes completar la configuración de la cuenta/formulario en Formspree para que los emails lleguen correctamente y el autorrespondedor funcione si lo necesitas.

## 📦 Despliegue en GitHub Pages

Para publicar:

1. Coloca [index.html](index.html) en la raíz del repositorio.
2. En GitHub, ve a **Settings > Pages**.
3. Selecciona la rama `main` (o la que uses) y la carpeta `/ (root)`.
4. Guarda.
5. El sitio quedará disponible en `https://<tu-usuario>.github.io/<nombre-repo>/`.

## 🔧 Mantenimiento y ajustes

### Actualizar datos del benchmark
Edita la sección `.benchmark` en `index.html` con los nuevos valores obtenidos de `htop` o `free -m`.

### Ajustar el lead magnet
Puedes cambiar el copy y el estilo visual del bloque del formulario sin tocar la lógica, siempre que mantengas el `id` y la inicialización de Formspree.

### Nota técnica sobre la descarga del regalo
El botón de descarga del lead magnet apunta a una release de GitHub. Aunque el atributo `download` está presente, los navegadores modernos suelen ignorarlo al tratarse de un recurso alojado en un dominio externo (`github.com`) en vez de un recurso same-origin. El archivo sigue descargándose correctamente, pero no se fuerza un nombre personalizado desde el navegador; la release ya llega nombrada como `Code_Compacter.tar.gz`.

---
**Desarrollado por Teledígitos** | *Exactitud técnica con un toque humano.*
