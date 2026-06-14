let orders = JSON.parse(localStorage.getItem("orders")) || [];

// OBJECT
function Item(name, category) {
  this.id = Date.now();
  this.name = name;
  this.category = category;
}

// SAVE
function save() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

// DISPLAY (ARRAY + TEMPLATE LITERALS)
function displayOrders() {
  const list = document.getElementById("orderList");
  if (!list) return;

  list.innerHTML = "";

  orders.forEach(o => {
    list.innerHTML += `
      <li>
        ${o.name} (${o.category})
        <button onclick="removeItem(${o.id})">Delete</button>
      </li>
    `;
  });
}

// ADD ITEM (DOM + EVENT)
const orderForm = document.getElementById("orderForm");

orderForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("itemName").value;
  const category = document.getElementById("itemCategory").value;

  orders.push(new Item(name, category));

  save();
  displayOrders();
  orderForm.reset();
});

// DELETE ITEM
function removeItem(id) {
  orders = orders.filter(o => o.id !== id);
  save();
  displayOrders();
}

// DEALS PAGE (ARRAY + CONDITIONAL + TEMPLATE LITERALS)
const deals = [
  { name: "Organic Apples", price: 2.99 },
  { name: "Whole Wheat Bread", price: 3.49 },
  { name: "Fresh Milk", price: 4.25 }
];

function showDeals() {
  const dealList = document.getElementById("dealList");
  if (!dealList) return;

  let message = "";

  deals.forEach(item => {
    let status = item.price < 3 ? "🔥 Hot Deal" : "Regular Price";

    message += `
      <p>${item.name} - $${item.price} (${status})</p>
    `;
  });

  dealList.innerHTML = message;
}

// CONTACT FORM (DOM + CONDITIONAL)
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const message = document.getElementById("contactMessage");

  if (name.length < 2) {
    message.textContent = "Name too short.";
    return;
  }

  message.textContent = `Thanks ${name}, we will contact you soon.`;
});

// INIT
displayOrders();
showDeals();