const temples = [
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: 2004,
    area: 17500,
    imageUrl: "images/temple1.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, USA",
    dedicated: 1893,
    area: 253000,
    imageUrl: "images/temple2.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 41000,
    imageUrl: "images/temple3.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44000,
    imageUrl: "images/temple4.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: 1980,
    area: 54000,
    imageUrl: "images/temple5.jpg"
  },
  {
    name: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: 2023,
    area: 25000,
    imageUrl: "images/temple6.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Hawaii, USA",
    dedicated: 1919,
    area: 42100,
    imageUrl: "images/temple7.jpg"
  },
  {
    name: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: 1983,
    area: 116642,
    imageUrl: "images/temple8.jpg"
  },
  {
    name: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: 1984,
    area: 26683,
    imageUrl: "images/temple9.jpg"
  },

  // +3 REQUIRED ADDITIONS
  {
    name: "London England Temple",
    location: "London, UK",
    dedicated: 1958,
    area: 42652,
    imageUrl: "images/temple10.jpg"
  },
  {
    name: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: 1985,
    area: 19184,
    imageUrl: "images/temple11.jpg"
  },
  {
    name: "Seoul Korea Temple",
    location: "Seoul, South Korea",
    dedicated: 1985,
    area: 28057,
    imageUrl: "images/temple12.jpg"
  }
];

const container = document.querySelector("#templeContainer");

// CREATE CARDS
function renderTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.name}</h3>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(img);
    card.appendChild(caption);
    container.appendChild(card);
  });
}

// FILTER FUNCTION
function filterTemples(type) {
  let filtered;

  if (type === "old") {
    filtered = temples.filter(t => t.dedicated < 1900);
  } else if (type === "new") {
    filtered = temples.filter(t => t.dedicated > 2000);
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 10000);
  } else {
    filtered = temples;
  }

  renderTemples(filtered);
}

// NAVIGATION EVENTS
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(e.target.dataset.filter);
  });
});

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// INITIAL LOAD
renderTemples(temples);