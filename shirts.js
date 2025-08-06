const products = [
  {
    name: "White Classic Shirt",
    price: "4000 ETB",
    image: "images/shirt1.jpg",
    description: "Perfect for formal occasions and office wear, All size available, Free delivery"
  },
  {
    name: "Sky Blue Slim Fit",
    price: "4500 ETB",
    image: "images/shirt2.jpg",
    description: "Comfortable and breathable cotton shirt, All size available, Free delivery"
  },
  {
    name: "Striped Business Shirt",
    price: "2500 ETB",
    image: "images/shirt3.jpg",
    description: "Stylish stripes with a modern collar design, All size available, Free delivery"
  },
  {
    name: "Black Casual Shirt",
    price: "5000 ETB",
    image: "images/shirt4.jpg",
    description: "Perfect blend of style and comfort for casual wear, All size available, Free delivery"
  }
];

function orderItem(item) {
  const message = `👔 *${item.name}*\n💵 Price: ${item.price}\n📃 ${item.description}`;
  const url = `https://t.me/TKgashaw1/url?url=${encodeURIComponent(item.image)}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function displayProducts(list) {
  const container = document.getElementById("shirt-items");
  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p>${item.description}</p>
      ${item.isNew ? `<span class="new-badge">New</span>` : ""}
      <button onclick='orderItem(${JSON.stringify(item)})'>Order</button>
    `;
    container.appendChild(card);
  });
}

// Initial load
displayProducts(products);

// Search functionality
document.getElementById("search-shirt").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});
