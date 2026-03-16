const bars = [
    { name: "Bouképhalos", city: "Pella", region: "Macedonia", image: "images/bar_pella_main.png", lat: 40.7461, lng: 22.4084, comingSoon: false },
    { name: "Bouképhalos Athens", city: "Atenas", region: "Ática", image: "images/athens_bar.png", lat: 37.9838, lng: 23.7275, comingSoon: false },
    { name: "Tebas Riders", city: "Tebas", region: "Beocia", image: "images/bar_community.png", lat: 38.3203, lng: 23.3185, comingSoon: false },
    { name: "Corinto Outpost", city: "Corinto", region: "Corintia", image: "images/corinth_bar.png", lat: 37.9386, lng: 23.0642, comingSoon: false },
    { name: "Delfos Sacred", city: "Delfos", region: "Fócida", image: "images/delphi_bar.png", lat: 38.4829, lng: 22.5004, comingSoon: false },
    { name: "Micenas Legacy", city: "Micenas", region: "Argólida", image: "images/mycenae_bar.png", lat: 37.7310, lng: 23.7343, comingSoon: false },
    { name: "Olimpia Games", city: "Olimpia", region: "Élida", image: "images/olympia_bar.png", lat: 37.6382, lng: 21.6304, comingSoon: false },
    { name: "Ilión Outpost", city: "Ilión", region: "Tróade", image: "images/ilion_bar_v2.png", lat: 39.9626, lng: 26.2397, comingSoon: false },
    { name: "The Road Captain's Rest", city: "Esparta", region: "Lacedemonia", image: "images/bar_thessaloniki.png", lat: 37.0730, lng: 23.4270, comingSoon: false },
    { name: "Heraklion Crete", city: "Heraclión", region: "Creta", image: "images/heraklion_bar.png", lat: 35.3387, lng: 25.1442, comingSoon: true }
];

function renderBars() {
    const grid = document.getElementById('bars-grid');
    if (!grid) return;
    bars.forEach((bar) => {
        const card = document.createElement('div');
        card.className = bar.comingSoon ? 'bar-card bar-card-coming-soon' : 'bar-card';
        card.innerHTML = bar.comingSoon ? `
            <div class="bar-info" style="padding: 2rem; text-align: left;">
                <span class="coming-soon-badge">PRÓXIMA APERTURA</span>
                <h3 class="bar-name">${bar.name}</h3>
                <p class="bar-location">${bar.city}, ${bar.region}</p>
                <p class="bar-desc">Nueva apertura: Expansión a la isla de Creta.</p>
            </div>
        ` : `
            <img src="${bar.image}" alt="${bar.name}" class="bar-image" onerror="this.style.background='#555'">
            <div class="bar-info">
                <h3 class="bar-name">${bar.name}</h3>
                <p class="bar-location">${bar.city}, ${bar.region}</p>
                <p class="bar-desc">Ubicación estratégica en la red de Bouképhalos</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadLogo() {
    const logoHero = document.getElementById('logo-hero');
    if (logoHero) {
        logoHero.src = 'images/logo_hero.webp';
    }
}

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    if (typeof google === 'undefined' || !google.maps) {
        showSVGMap();
        return;
    }
    try {
        const mapCenter = { lat: 38.5, lng: 23.5 };
        const map = new google.maps.Map(mapContainer, {
            zoom: 7,
            center: mapCenter,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }
            ]
        });
        bars.forEach((bar) => {
            const marker = new google.maps.Marker({
                position: { lat: bar.lat, lng: bar.lng },
                map: map,
                title: bar.name
            });
            const infoWindow = new google.maps.InfoWindow({
                content: '<div style="color:#000;font-weight:bold;"><strong>' + bar.name + '</strong><br>' + bar.city + ', ' + bar.region + '</div>'
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        });
    } catch (error) {
        console.log('Google Maps error:', error);
        showSVGMap();
    }
}

function showSVGMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    mapContainer.innerHTML = '<svg viewBox="0 0 800 600" style="width:100%;height:100%;background:#1a1a1a;"><text x="400" y="30" text-anchor="middle" fill="#999" font-size="18">Ubicaciones de Bouképhalos MC en Grecia</text><circle cx="350" cy="200" r="8" fill="#fff"/><text x="360" y="205" fill="#ccc" font-size="12">Pella</text><circle cx="420" cy="280" r="8" fill="#fff"/><text x="430" y="285" fill="#ccc" font-size="12">Atenas</text><circle cx="380" cy="240" r="8" fill="#fff"/><text x="390" y="245" fill="#ccc" font-size="12">Tebas</text><circle cx="410" cy="260" r="8" fill="#fff"/><text x="420" y="265" fill="#ccc" font-size="12">Corinto</text><circle cx="360" cy="220" r="8" fill="#fff"/><text x="370" y="225" fill="#ccc" font-size="12">Delfos</text><circle cx="430" cy="290" r="8" fill="#fff"/><text x="440" y="295" fill="#ccc" font-size="12">Micenas</text><circle cx="300" cy="310" r="8" fill="#fff"/><text x="310" y="315" fill="#ccc" font-size="12">Olimpia</text><circle cx="500" cy="150" r="8" fill="#fff"/><text x="510" y="155" fill="#ccc" font-size="12">Ilion</text><circle cx="380" cy="330" r="8" fill="#fff"/><text x="390" y="335" fill="#ccc" font-size="12">Esparta</text><circle cx="450" cy="380" r="8" fill="#ff6b35"/><text x="460" y="385" fill="#ff6b35" font-size="12">Heraklion (Proxima)</text></svg>';
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    renderBars();
    loadLogo();
    initMap();
});
