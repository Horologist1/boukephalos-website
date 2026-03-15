# Bouképhalos Motorcycle Club - Sitio Web

Página web oficial del **Bouképhalos Motorcycle Club**, un club de moteros progresista que apoya a veteranos y comunidades en toda Grecia.

## 🏍️ Características

- **Galería de Bares**: 10 ubicaciones estratégicas en polis griegas antiguas
- **Mapa Interactivo**: Google Maps con marcadores de todas las ubicaciones
- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Tema Oscuro**: Diseño elegante con colores negros, blancos y dorados
- **Próxima Apertura**: Anuncio de la nueva ubicación en Creta (Heraklión)

## 📍 Ubicaciones

1. **Pella** - Macedonia (Sede principal)
2. **Atenas** - Ática
3. **Tebas** - Beocia
4. **Corinto** - Corintia
5. **Delfos** - Fócida
6. **Micenas** - Argólida
7. **Olimpia** - Élida
8. **Ilión** - Tróade
9. **Esparta** - Laconia
10. **Heraklión** - Creta (Próxima apertura)

## 🚀 Desplegar en GitHub Pages

### Opción 1: Fork y Deploy Automático

1. Haz fork de este repositorio
2. Ve a **Settings** → **Pages**
3. En "Source", selecciona **main** y **/ (root)**
4. Guarda los cambios
5. Tu sitio estará disponible en: `https://tu-usuario.github.io/boukeephalos-club`

### Opción 2: Clonar y Desplegar Manualmente

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/boukeephalos-club.git
cd boukeephalos-club

# Hacer cambios si es necesario
# Luego hacer commit y push

git add .
git commit -m "Actualización del sitio"
git push origin main
```

## 📁 Estructura del Proyecto

```
boukeephalos-club/
├── index.html          # Página principal
├── README.md           # Este archivo
├── images/             # Carpeta de imágenes
│   ├── logo_hero.webp
│   ├── bar_pella_main.png
│   ├── athens_bar.png
│   └── ... (más imágenes)
└── css/                # Estilos (opcional)
```

## 🛠️ Personalización

### Cambiar el Logo

Reemplaza `images/logo_hero.webp` con tu logo y asegúrate de que tenga el mismo nombre.

### Agregar Nuevas Ubicaciones

En `index.html`, busca el array `bars` y agrega un nuevo objeto:

```javascript
{
    name: "Nombre del Bar",
    city: "Ciudad",
    region: "Región",
    image: "nombre-imagen.png",
    lat: 37.9838,
    lng: 23.7275
}
```

### Cambiar Colores

Los colores están definidos en la sección `<style>` del HTML:
- Fondo oscuro: `#000`
- Texto principal: `#fff`
- Acento naranja: `#f97316`

## 📱 Navegación

- **INICIO**: Sección hero con presentación
- **BARES**: Galería de todas las ubicaciones
- **UBICACIONES**: Mapa interactivo de Google Maps
- **CONTACTO**: Información de contacto y enlace a XCion

## 🔗 Enlaces Externos

- **XCion**: https://www.xcion.es/alksj

## 📝 Licencia

Todos los derechos reservados © 2026 Bouképhalos Motorcycle Club

## 📞 Contacto

Para más información, visita cualquiera de nuestras 10 ubicaciones o síguenos en XCion.

---

**Ride with the Legend** 🏍️
