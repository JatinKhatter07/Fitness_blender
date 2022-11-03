let bagContainer = document.querySelector(".bag-cont");
let emptyMessage = document.querySelector(".empty-shopping-bag");
let checkoutButton = document.querySelector(".proceed-to-checkout");
function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems) {
		let productList = document.querySelector(".bag-list");
		console.log(cartItems);
		productList.innerHTML = "";
		let sum = 0;
		Object.values(cartItems).map((item) => {
			sum += item.price;
			productList.innerHTML += `
			<div class="bag-iteemm">
				<div class="bag-item-name">
					<div class="bag-item-name-img">
						<img src=${item.img} alt="">
					</div>
					<div class="bag-item-name-text">
						<h3>${item.name}</h3>
					</div>
				</div>
				<button class="bag-item-remove" onClick="deleteItem(this.name)" name="${
					item.tag
				}"><i class="fas fa-times"></i></button>
				<div class="bag-item-price"><h3>$${String(item.price)}</h3></div>
			</div>
			<hr>
        `;
		});
		sum = (sum * 100) / 100;
		if (sum == 0) {
			bagContainer.style.display = "none";
			emptyMessage.style.display = "block";
		}
		console.log(sum);
		document.querySelector(".tot-amount").textContent = "$" + String(sum);
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

function deleteItem(item) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	console.log(cartItems);
	delete cartItems[item];
	localStorage.removeItem("productsInCart");
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	let productNumbers = localStorage.getItem("itemNumbers");
	productNumbers = Number(productNumbers);
	localStorage.setItem("itemNumbers", productNumbers - 1);
	displayCart();
	onLoadCartItems();
}

// function activateRemoveBtns() {
// 	let cartItems = localStorage.getItem("productsInCart");
// 	cartItems = JSON.parse(cartItems);
// 	if (cartItems) {
// 		const removeBtn = document.querySelectorAll(".fa-times");
// 		for (var i = 0; i < removeBtn.length; i++) {
// 			removeBtn[i].addEventListener("click", () => {
// 				deleteItem(removeBtn[i]);
// 			});
// 		}
// 	}
// }

// function checkout() {
// 	let cartItems = localStorage.getItem("productsInCart");
// 	cartItems = JSON.parse(cartItems);
// 	let newCartItems = {};
// 	let alreadyBought = localStorage.getItem("boughtProducts");
// 	alreadyBought = JSON.parse(alreadyBought);
// 	if (alreadyBought != null) {
// 		newCartItems = {
// 			...cartItems,
// 			...alreadyBought,
// 		};
// 	} else {
// 		// product.quant = 1;
// 		newCartItems = {
// 			...cartItems,
// 		};
// 	}
// 	localStorage.setItem("boughtProducts", JSON.stringify(newCartItems));
// 	let objKeys = Object.keys(cartItems);

// 	objKeys.forEach((key) => {
// 		delete cartItems[key];
// 		let productNumbers = localStorage.getItem("itemNumbers");
// 		productNumbers = Number(productNumbers);
// 		localStorage.setItem("itemNumbers", productNumbers - 1);
// 	});
// 	localStorage.removeItem("productsInCart");
// 	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// 	displayCart();
// 	onLoadCartItems();
// }

// checkoutButton.addEventListener("click", checkout);
displayCart();
onLoadCartItems();

// activateRemoveBtns();
