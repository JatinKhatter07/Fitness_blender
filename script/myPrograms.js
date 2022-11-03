function displayFavourites() {
	let myProducts = localStorage.getItem("boughtProducts");
	myProducts = JSON.parse(myProducts);
	if (myProducts) {
		let myProductContainer = document.querySelector(".main");
		console.log(myProductContainer);
		myProductContainer.innerHTML = "";
		Object.values(myProducts).map((data) => {
			myProductContainer.innerHTML += `
            <div class="card">
				<div class="card__img">
					<img
						src="${data.img}"
						alt=""
					/>
				</div>
				<div class="card__content">
					<p>CORE - ${data.time} MIN</p>
					<h4>${data.name}</h4>
				</div>
			</div>
        `;
		});
	}
}

displayFavourites();
