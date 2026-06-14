// Populate Product Name select from products array
(function populateProducts() {
  const select = document.getElementById("productName");
  if (!select || typeof products === "undefined") return;

  products.forEach(function (product) {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
})();