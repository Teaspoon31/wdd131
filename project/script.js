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
function display() {
const list = document.getElementById("orderList");
if (!list) return;

list.innerHTML = "";

orders.forEach(o => {
list.innerHTML += `       <li>
        ${o.name} (${o.category})         <button onclick="removeItem(${o.id})">Remove</button>       </li>
    `;
});
}

// ADD ITEM
const form = document.getElementById("orderForm");

form?.addEventListener("submit", (e) => {
e.preventDefault();

const name = document.getElementById("item").value;
const category = document.getElementById("category").value;

orders.push(new Item(name, category));

save();
display();
form.reset();
});

// DELETE ITEM
function removeItem(id) {
orders = orders.filter(i => i.id !== id);
save();
display();
}

// CONTACT FORM (DOM + CONDITION)
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (e) => {
e.preventDefault();

const name = contactForm.querySelector("input").value;
const msg = document.getElementById("msg");

if (name.length < 2) {
msg.textContent = "Name too short.";
return;
}

msg.textContent = `Thanks ${name}, we received your message.`;
});

// INIT
display();
