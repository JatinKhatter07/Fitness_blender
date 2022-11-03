let bagContainer = document.querySelector(".bag-cont");
let emptyMessage = document.querySelector(".empty-shopping-bag");
let checkoutButton = document.querySelector(".proceed-to-checkout");
function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems) {
		let productList = document.querySelector(".reviewOrder");
		console.log(cartItems);
		productList.innerHTML = `
        <div class="reviewOrder-head">
        <h2>Review Order</h2>
        <a href="./shoppingBag.html"><h3>Edit Cart</h3></a>
    </div>
    <hr>
    <div class="reviewOrder-content">
                            <p>ITEM</p>
                            <p>PRICE</p>
                        </div>
                        <hr>
        `;
		let sum = 0;
		Object.values(cartItems).map((item) => {
			sum += item.price;
			productList.innerHTML += `
			<div class="reviewOrder-content">
                            <h3>${item.name}</h3>
                            <h3>$${item.price}</h3>
                        </div>
                        <hr>
        `;
		});
		sum = (sum * 100) / 100;
		productList.innerHTML += `
        <div class="reviewOrder-content">
            <h2>Order Total</h2>
            <h2>$${sum}</h2>
        </div>
            `;
		// if (sum == 0) {
		// 	bagContainer.style.display = "none";
		// 	emptyMessage.style.display = "block";
		// }
		console.log(sum);
		// document.querySelector(".tot-amount").textContent = "$" + String(sum);
	}
}

function onLoadCartItems() {
	let productNumbers = localStorage.getItem("itemNumbers");
	if (productNumbers > 0) {
		document.querySelector(".header-menu span").textContent = productNumbers;
	} else {
		document.querySelector(".header-menu span").textContent = "";
	}
}

function checkout() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let newCartItems = {};
	let alreadyBought = localStorage.getItem("boughtProducts");
	alreadyBought = JSON.parse(alreadyBought);
	if (alreadyBought != null) {
		newCartItems = {
			...cartItems,
			...alreadyBought,
		};
	} else {
		// product.quant = 1;
		newCartItems = {
			...cartItems,
		};
	}
	localStorage.setItem("boughtProducts", JSON.stringify(newCartItems));
	let objKeys = Object.keys(cartItems);

	objKeys.forEach((key) => {
		delete cartItems[key];
		let productNumbers = localStorage.getItem("itemNumbers");
		productNumbers = Number(productNumbers);
		localStorage.setItem("itemNumbers", productNumbers - 1);
	});
	localStorage.removeItem("productsInCart");
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	displayCart();
	onLoadCartItems();
}

checkoutButton.addEventListener("click", checkout);
displayCart();
onLoadCartItems();

// activateRemoveBtns();
