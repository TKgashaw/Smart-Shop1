const products = [
  {
    name: "Black suit Shoe",
    price: "7,000 ETB",
    image: "images/shoe1.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Brown suit Shoe",
    price: "7,000 ETB",
    image: "images/shoe2.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Fasion mesh Black suit Shoe",
    price: "6,500 ETB",
    image: "images/shoe3.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Black V suit shoe",
    price: "6,000 ETB",
    image: "images/shoe4.jpg",
    description: "39-43 size available, Free delivery."
  },
   {
    name: "Fasion solid Brown suit Shoe",
    price: "6,000 ETB",
    image: "images/shoe5.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Fasion solid Black suit Shoe",
    price: "6,000 ETB",
    image: "images/shoe6.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Brown V suit Shoe",
    price: "6,000 ETB",
    image: "images/shoe7.jpg",
    description: "39-43 size available, Free delivery."
  },
   {
    name: "Brown casual Shoe",
    price: "8,000 ETB",
    image: "images/shoe8.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Black casual Shoe",
    price: "8,000 ETB",
    image: "images/shoe9.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Brown Zipper suit Shoe",
    price: "7,000 ETB",
    image: "images/shoe10.jpg",
    description: "39-43 size available, Free delivery."
  },
   {
    name: "Black casual Shoe",
    price: "7,500 ETB",
    image: "images/shoe11.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Brown casual Shoe",
    price: "7,500 ETB",
    image: "images/shoe12.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Black boots casual Shoe",
    price: "6,000 ETB",
    image: "images/shoe13.jpg",
    description: "39-43 size available, Free delivery."
  },
 {
    name: "Brown boots casual Shoe",
    price: "6,000 ETB",
    image: "images/shoe14.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Brown Zipper suit Shoe",
    price: "6900 ETB",
    image: "images/shoe15.jpg",
    description: "39-43 size available, Free delivery."
  },
  {
    name: "Black casual Shoe",
    price: "8,000 ETB",
    image: "images/shoe16.jpg",
    description: "39-43 size available, Free delivery."
  },
   {
    name: "Brown casual Shoe",
    price: "8,000 ETB",
    image: "images/shoe17.jpg",
    description: "39-43 size available, Free delivery."
  },

];

function orderItem(item) {
  const message = `👞 *${item.name}*\n💵 Price: ${item.price}\n📃 ${item.description}`;
  const url = `https://t.me/TKgashaw1?url=${encodeURIComponent(item.image)}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function displayProducts(list) {
  const container = document.getElementById("shoe-items");
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
document.getElementById("search-shoe").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});
