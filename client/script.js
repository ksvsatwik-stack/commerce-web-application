let total = 0;

function addToCart(name, price){

    const cart = document.getElementById("cart");

    const item = document.createElement("li");

    item.innerHTML = name + " - ₹" + price;

    cart.appendChild(item);

    total += price;

    document.getElementById("total").innerHTML = total;

}
