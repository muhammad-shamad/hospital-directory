function showHospitals(list) {
  const container = document.getElementById("hospitalCards");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>Koi hospital nahi mila.</p>";
    return;
  }

  list.forEach(h => {
    const doctorItems = h.doctors
      .map(d => `<div class="doctor-item">👨‍⚕️ ${d.name} — ${d.specialty}</div>`)
      .join("");

    const badgeClass = h.type === 'Government' ? 'badge-govt' : 'badge-pvt';

    const phone = h.phone !== 'Not Available' && h.phone !== 'Local Directory'
      ? `<a class="btn-call" href="tel:${h.phone}">📞 Call Now</a>`
      : `<span class="btn-call" style="opacity:0.5; cursor:default;">📞 N/A</span>`;

    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(h.name + ' ' + h.address)}`;

    container.innerHTML += `
      <div class="card">
        <img src="${h.image}" alt="${h.name}" class="card-img" />
        <div class="card-body">
          <h3>${h.name}</h3>
          <p>📍 ${h.address}</p>
          <p>📞 ${h.phone}</p>
          <p>🛏️ Beds: ${h.beds} &nbsp;|&nbsp; 👥 Staff: ${h.staff}</p>
          <span class="badge ${badgeClass}">${h.type}</span>
          <div class="action-buttons">
            ${phone}
            <a class="btn-map" href="${mapsUrl}" target="_blank">📍 Maps</a>
          </div>
          <div class="doctors-list">
            <p>Doctors:</p>
            ${doctorItems}
          </div>
        </div>
      </div>
    `;
  });
}

function filterHospitals(type) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  let filtered = [];
  if (type === 'all') {
    filtered = hospitals;
  } else if (type === 'government') {
    filtered = hospitals.filter(h => h.type === 'Government');
  } else if (type === 'private') {
    filtered = hospitals.filter(h => h.type === 'Private');
  } else if (type === 'eye') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d => d.specialty.toLowerCase().includes('eye') ||
      d.specialty.toLowerCase().includes('ophthal'))
    );
  } else if (type === 'ortho') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d => d.specialty.toLowerCase().includes('ortho') ||
      d.specialty.toLowerCase().includes('bone'))
    );
  } else if (type === 'cardiac') {
    filtered = hospitals.filter(h =>
      h.doctors.some(d => d.specialty.toLowerCase().includes('cardio') ||
      d.specialty.toLowerCase().includes('cardiac'))
    );
  }
  showHospitals(filtered);
}

function initMap() {
  const map = L.map("map").setView([24.0755, 75.0675], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  hospitals.forEach(h => {
    L.marker([h.lat, h.lng])
      .addTo(map)
      .bindPopup(`<b>${h.name}</b><br>${h.address}<br>📞 ${h.phone}`);
  });
}

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

showHospitals(hospitals);
initMap();