// LOADER
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  }, 1800);
});

// SCROLL TO TOP
window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// DARK MODE
function toggleDark() {
  const html = document.documentElement;
  const btn = document.getElementById('darkBtn');
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '🌙 Dark Mode';
  } else {
    html.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️ Light Mode';
  }
}

// SHOW HOSPITALS
function showHospitals(list) {
  const container = document.getElementById("hospitalCards");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px; color:var(--text-muted);">
        <div style="font-size:3rem;">🔍</div>
        <p style="margin-top:10px; font-size:1rem;">Koi hospital nahi mila</p>
      </div>`;
    return;
  }

  list.forEach((h, index) => {
    const doctorItems = h.doctors
      .map(d => `
        <div class="doctor-item">
          👨‍⚕️ <span><strong>${d.name}</strong> — ${d.specialty}</span>
        </div>`)
      .join("");

    const badgeClass = h.type === 'Government' ? 'badge-govt' : 'badge-pvt';

    const phoneBtn = (h.phone !== 'Not Available' && h.phone !== 'Local Directory')
      ? `<a class="btn-call" href="tel:${h.phone}">📞 Call Now</a>`
      : `<span class="btn-call" style="opacity:0.5; cursor:default; background:gray;">📞 N/A</span>`;

    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(h.name + ' ' + h.address)}`;

    container.innerHTML += `
      <div class="card" style="animation-delay: ${index * 0.05}s">
        <div class="card-img-wrapper">
          <img src="${h.image}" alt="${h.name}" class="card-img" />
        </div>
        <div class="card-body">
          <h3>${h.name}</h3>
          <p>📍 ${h.address}</p>
          <p>📞 ${h.phone}</p>
          <p>🛏️ Beds: <strong>${h.beds}</strong> &nbsp;|&nbsp; 👥 Staff: <strong>${h.staff}</strong></p>
          <span class="badge ${badgeClass}">${h.type}</span>
          <div class="action-buttons">
            ${phoneBtn}
            <a class="btn-map" href="${mapsUrl}" target="_blank">📍 Directions</a>
          </div>
          <div class="doctors-list">
            <p class="doctors-title">👨‍⚕️ Doctors:</p>
            ${doctorItems}
          </div>
        </div>
      </div>
    `;
  });
}

// FILTER
function filterHospitals(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  let filtered = [];
  if (type === 'all') {
    filtered = hospitals;
  } else if (type === 'government') {
    filtered = hospitals.filter(h => h.type === 'Government');
  } else if (type === 'private') {
    filtered = hospitals.filter(h => h.type === 'Private');
  } else if (type === 'eye') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d =>
        d.specialty.toLowerCase().includes('eye') ||
        d.specialty.toLowerCase().includes('ophthal')
      )
    );
  } else if (type === 'ortho') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d =>
        d.specialty.toLowerCase().includes('ortho') ||
        d.specialty.toLowerCase().includes('bone')
      )
    );
  } else if (type === 'cardiac') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d =>
        d.specialty.toLowerCase().includes('cardio') ||
        d.specialty.toLowerCase().includes('cardiac')
      )
    );
  }
  showHospitals(filtered);
}

// MAP — Mandsaur ka actual map
function initMap() {
  const map = L.map("map").setView([24.0765, 75.0680], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);

  const hospitalIcon = L.divIcon({
    html: `<div style="
      background: #1a73e8;
      color: white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      border: 2px solid white;
    "><span style="transform: rotate(45deg);">🏥</span></div>`,
    className: '',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
  });

  hospitals.forEach(h => {
    L.marker([h.lat, h.lng], { icon: hospitalIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: Poppins, sans-serif; min-width: 200px;">
          <h3 style="color:#1a73e8; font-size:0.95rem; margin-bottom:8px;">${h.name}</h3>
          <p style="font-size:0.82rem; margin-bottom:4px;">📍 ${h.address}</p>
          <p style="font-size:0.82rem; margin-bottom:4px;">📞 ${h.phone}</p>
          <p style="font-size:0.82rem; margin-bottom:8px;">🛏️ Beds: ${h.beds} | 👥 Staff: ${h.staff}</p>
          <span style="background:#e3f2fd; color:#1565c0; padding:3px 10px; border-radius:10px; font-size:0.75rem;">${h.type}</span>
        </div>
      `, { maxWidth: 250 });
  });
}

// SEARCH
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = hospitals.filter(h =>
    h.name.toLowerCase().includes(query) ||
    h.doctors.some(d =>
      d.name.toLowerCase().includes(query) ||
      d.specialty.toLowerCase().includes(query)
    )
  );
  showHospitals(filtered);
});

// INIT
showHospitals(hospitals);
initMap();
