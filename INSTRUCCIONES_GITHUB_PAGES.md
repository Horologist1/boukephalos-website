# 🚀 Cómo Desplegar en GitHub Pages

## Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Haz clic en el **+** en la esquina superior derecha
4. Selecciona **New repository**
5. Nombre del repositorio: `boukeephalos-club`
6. Descripción: "Sitio web oficial del Bouképhalos Motorcycle Club"
7. Selecciona **Public**
8. Haz clic en **Create repository**

## Paso 2: Subir los Archivos

### Opción A: Usando Git (Recomendado)

```bash
# Clonar el repositorio vacío
git clone https://github.com/TU_USUARIO/boukeephalos-club.git
cd boukeephalos-club

# Copiar todos los archivos de este proyecto aquí
# (index.html, README.md, carpeta images/, etc.)

# Agregar los archivos
git add .

# Hacer commit
git commit -m "Sitio web inicial de Bouképhalos MC"

# Subir a GitHub
git push origin main
```

### Opción B: Usando la Interfaz Web de GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **Add file** → **Upload files**
3. Arrastra y suelta los archivos o selecciónalos
4. Haz clic en **Commit changes**

## Paso 3: Activar GitHub Pages

1. Ve a **Settings** de tu repositorio
2. En el menú izquierdo, selecciona **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. En "Branch", selecciona **main** y **/root**
5. Haz clic en **Save**

## Paso 4: Esperar a que se Publique

- GitHub Pages tardará 1-2 minutos en procesar tu sitio
- Tu sitio estará disponible en: `https://TU_USUARIO.github.io/boukeephalos-club`

## ✅ Verificar que Funciona

1. Espera 2-3 minutos después de hacer push
2. Ve a `https://TU_USUARIO.github.io/boukeephalos-club`
3. Deberías ver el sitio completo con:
   - Logo de Bouképhalos
   - Galería de 10 bares
   - Mapa interactivo
   - Sección de contacto

## 🔧 Hacer Cambios Después

Si necesitas hacer cambios:

```bash
# Haz los cambios en los archivos locales

# Luego:
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Los cambios se publicarán automáticamente en 1-2 minutos.

## 📝 Personalización

### Cambiar el Logo
- Reemplaza `images/logo_hero.webp` con tu logo
- Asegúrate de que tenga el mismo nombre

### Agregar Nuevas Ubicaciones
- Edita `index.html`
- Busca el array `bars` en la sección `<script>`
- Agrega un nuevo objeto con la información del bar

### Cambiar Colores
- Edita la sección `<style>` en `index.html`
- Los colores principales están definidos como:
  - Fondo: `#000`
  - Texto: `#fff`
  - Acento: `#f97316`

## ❓ Preguntas Frecuentes

**P: ¿Por qué no se ve el mapa?**
R: El mapa necesita una API key de Google Maps válida. Reemplaza `AIzaSyDummyKeyForDemo` con tu propia API key en `index.html`.

**P: ¿Cómo agrego más bares?**
R: En `index.html`, busca `const bars = [` y agrega un nuevo objeto con: name, city, region, image, lat, lng.

**P: ¿Puedo usar un dominio personalizado?**
R: Sí. En GitHub Pages Settings, puedes agregar un dominio personalizado.

**P: ¿Cuánto tiempo tarda en publicarse?**
R: Generalmente 1-2 minutos después de hacer push.

## 🎯 Próximos Pasos

1. ✅ Descargar este repositorio
2. ✅ Crear repositorio en GitHub
3. ✅ Subir los archivos
4. ✅ Activar GitHub Pages
5. ✅ Compartir tu sitio: `https://TU_USUARIO.github.io/boukeephalos-club`

---

**¡Tu sitio de Bouképhalos MC estará en línea en minutos!** 🏍️
