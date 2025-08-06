const products = [
  {
    name: "Chest flower ",
    price: "800 ETB",
    image: "images/accessory1.jpg",
    description: "Available in multiple colors.",
    isNew: true
  },
  {
    name: "Chest flower",
    price: "800 ETB",
    image: "images/accessory2.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest flower",
    price: "800 ETB",
    image: "images/accessory3.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest flower",
    price: "800 ETB",
    image: "images/accessory4.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Chest flower",
    price: "800 ETB",
    image: "images/accessory5.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "800 ETB",
    image: "images/accessory6.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "800 ETB",
    image: "images/accessory7.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Metal Chest flower",
    price: "1000 ETB",
    image: "images/accessory8.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory9.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory10.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory11.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory12.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory13.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Chest poket chaine",
    price: "900 ETB",
    image: "images/accessory14.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Tie",
    price: "1500 ETB",
    image: "images/accessory15.jpg",
    description: "Available in multiple colors."
  },
  {
    name: "Tie",
    price: "1500 ETB",
    image: "images/accessory16.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Tie",
    price: "1500 ETB",
    image: "images/accessory17.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Tie",
    price: "1500 ETB",
    image: "images/accessory18.jpg",
    description: "Available in multiple colors."
  },
   {
    name: "Tie",
    price: "1500 ETB",
    image: "images/accessory19.jpg",
    description: "Available in multiple colors."
  }
];

function orderItem(item) {
  const message = `🧥 *${item.name}*\n💵 Price: ${item.price}\n📃 ${item.description}`;
  const url = `https://t.me/TKgashaw1/url?https://github.com/TKgashaw/Smart-Shop1/images
/accessory/url=${encodeURIComponent(item.image)}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function displayProducts(list) {
  const container = document.getElementById("accessory-items");
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
document.getElementById("search-accessory").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);

});


