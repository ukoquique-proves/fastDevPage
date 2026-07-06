# Guía: Entrega del toolkit Code Compacter

Esta guía documenta cómo funciona el flujo de descarga, cubriendo tanto el caso JS activo como el fallback sin JS.

## Cómo funciona actualmente

### Caso 1 — JS activo (flujo AJAX)

El formulario `id="puppyteach-capture-form"` en `toolkit.html` está wired al SDK de Formspree.
Al enviar con éxito, el bloque `data-fs-success` se hace visible mostrando un botón de descarga directa:

```
https://github.com/ukoquique-proves/fastDevPage/releases/download/v0.1.0/Code_Compacter.tar.gz
```

El visitante descarga el archivo sin salir de la página.

### Caso 2 — JS bloqueado o falla (fallback nativo)

El formulario incluye un campo `_next` que redirige a `gracias.html`, que contiene el mismo botón de descarga directa. El visitante llega a una página con el mismo estilo visual y puede descargar el archivo.

## Archivos relevantes

| Archivo | Rol |
|---|---|
| `toolkit.html` | Página del toolkit: copy, características, formulario de captura |
| `gracias.html` | Fallback no-JS: confirmación + botón de descarga |

## Actualizar la versión del release

Si publicas una nueva versión del archivo, actualiza la URL del asset en dos lugares:

1. El bloque `data-fs-success` en `toolkit.html`
2. El botón de descarga en `gracias.html`

La URL sigue el patrón:
```
https://github.com/ukoquique-proves/fastDevPage/releases/download/<tag>/Code_Compacter.tar.gz
```

## Configuración de Formspree

En el panel de Formspree para el form `mnjyeeod`, habilita el autorrespondedor con la misma URL de descarga en el cuerpo del email. Esto le da al visitante un enlace durable aunque cierre el tab antes de descargar.
