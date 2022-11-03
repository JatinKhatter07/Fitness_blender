const getData = async () => {
	try {
		const response = await fetch("https://mock-server-fitness-blender.herokuapp.com/programs", {
			method: "GET",
		});
		const data = await response.json();
		let output = `
		<div class="exclusive__card yellow">
			<div class="exclusive__card__content">
				<h1><span class="fb-transperant">FB</span>Store</h1>
				<h2>EGIFT CARDS</h2>
				<hr />
				<p>New eGift cards availabile!</p>
			</div>
		</div>

		<div class="exclusive__card red">
			<div class="exclusive__card__content">
				<h1><span class="fb-transperant">FB</span>Store</h1>
				<h2>CHALLENGES</h2>
				<hr />
				<p>Short flexible programs for FB Plus members!</p>
			</div>
		</div>`;
		for (var i in data) {
			const product = data[i];
			output =
				output +
				`
				<div class="card">
				<div class="card__img">
					<img
						src="${data[i].img}"
						alt=""
					/>
				</div>
				<div class="card__content">
					<p>CORE - ${data[i].time} MIN</p>
					<h4>${data[i].name}</h4>
				</div>
				<div class="card__bottom">
					<div class="bottom__left">
						<h4>$${data[i].price}</h4>
					</div>
					<div class="bottom__right">
						<button class="add-to-bag" onClick="itemNumbers(${data[i].tag})"> 
							<i class="fas fa-shopping-bag"></i>ADD TO BAG
						</button>
					</div>
				</div>
			</div>
		    `;
		}
		document.querySelector(".main").innerHTML = output;
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

function onLoadCartItems() {
	let productNumbers = localStorage.getItem("itemNumbers");
	if (productNumbers > 0) {
		document.querySelector(".header-menu span").textContent = productNumbers;
	} else {
		document.querySelector(".header-menu span").textContent = "";
	}
}

const itemNumbers = async (tag) => {
	try {
		const response = await fetch(`https://mock-server-fitness-blender.herokuapp.com/programs?tag=${tag}`, {
			method: "GET",
		});
		const product = await response.json();
		console.log(product[0]);
		let productNumbers = localStorage.getItem("itemNumbers");
		productNumbers = Number(productNumbers);
		if (productNumbers) {
			localStorage.setItem("itemNumbers", productNumbers + 1);
			document.querySelector(".header-menu span").textContent =
				productNumbers + 1;
		} else {
			localStorage.setItem("itemNumbers", 1);
			document.querySelector(".header-menu span").textContent = 1;
		}

		setItem(product[0]);
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

function setItem(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if (cartItems != null) {
		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product,
			};
		}
	} else {
		// product.quant = 1;
		cartItems = {
			[product.tag]: product,
		};
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

const searchKeyword = async () => {
	const keyword = document.querySelector(".searchText").value;
	console.log(keyword);
	try {
		const response = await fetch(`https://mock-server-fitness-blender.herokuapp.com/programs`, {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
		let output = "";
		for (var i in data) {
			// const product = data[i];
			if (data[i].name.includes(keyword)) {
				output =
					output +
					`
				<div class="card">
				<div class="card__img">
					<img
						src="${data[i].img}"
						alt=""
					/>
				</div>
				<div class="card__content">
					<p>CORE - ${data[i].time} MIN</p>
					<h4>${data[i].name}</h4>
				</div>
				<div class="card__bottom">
					<div class="bottom__left">
						<h4>$${data[i].price}</h4>
					</div>
					<div class="bottom__right">
						<button class="add-to-bag" onClick="itemNumbers(${data[i].tag})"> 
							<i class="fas fa-shopping-bag"></i>ADD TO BAG
						</button>
					</div>
				</div>
			</div>
		    `;
			}
		}
		document.querySelector(".main").innerHTML = output;
		// let productNumbers = localStorage.getItem("itemNumbers");
		// productNumbers = Number(productNumbers);
		// if (productNumbers) {
		// 	localStorage.setItem("itemNumbers", productNumbers + 1);
		// 	document.querySelector(".header-menu span").textContent =
		// 		productNumbers + 1;
		// } else {
		// 	localStorage.setItem("itemNumbers", 1);
		// 	document.querySelector(".header-menu span").textContent = 1;
		// }

		// setItem(product[0]);
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

const sortData = async () => {
	const selectedValue = document.querySelector(".selectSort").value;
	console.log(selectedValue);
	try {
		const response = await fetch(`https://mock-server-fitness-blender.herokuapp.com/programs`, {
			method: "GET",
		});
		let data = await response.json();
		console.log(data);
		if (selectedValue == "title") {
			data = data.sort((a, b) => {
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}

				// names must be equal
				return 0;
			});
			console.log(data);
		} else if (selectedValue == "lp") {
			data = data.sort((a, b) => {
				return a.price - b.price;
			});
			console.log(data);
		} else if (selectedValue == "hp") {
			data = data.sort((a, b) => {
				return b.price - a.price;
			});
			console.log(data);
		} else if (selectedValue == "short") {
			data = data.sort((a, b) => {
				return a.time - b.time;
			});
			console.log(data);
		} else if (selectedValue == "long") {
			data = data.sort((a, b) => {
				return b.time - a.time;
			});
			console.log(data);
		}

		let output = "";
		for (var i in data) {
			// const product = data[i];
			output =
				output +
				`
				<div class="card">
				<div class="card__img">
					<img
						src="${data[i].img}"
						alt=""
					/>
				</div>
				<div class="card__content">
					<p>CORE - ${data[i].time} MIN</p>
					<h4>${data[i].name}</h4>
				</div>
				<div class="card__bottom">
					<div class="bottom__left">
						<h4>$${data[i].price}</h4>
					</div>
					<div class="bottom__right">
						<button class="add-to-bag" onClick="itemNumbers(${data[i].tag})">
							<i class="fas fa-shopping-bag"></i>ADD TO BAG
						</button>
					</div>
				</div>
			</div>
		    `;
		}
		document.querySelector(".main").innerHTML = output;
	} catch (err) {
		console.log("This is the catch block: " + err);
	}
};

document.querySelector(".selectSort").addEventListener("change", sortData);
document.getElementById("searchIcon").addEventListener("click", searchKeyword);
document.querySelector(".search").addEventListener("click", () => {
	document.querySelector(".search-input").style.visibility = "visible";
});

getData();
onLoadCartItems();
