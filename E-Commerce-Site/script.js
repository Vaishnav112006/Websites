let cart = [];
let products = [];


document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    });
});


function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(product.id));

        productDiv.appendChild(button);
        productList.appendChild(productDiv);
    });
}

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});


function addToCart(productId){
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cart));
        alert(`${product.name} added to the cart!`);
    } else {
        alert("Product not found!");
    }
}

