function displayFavourites() {
	let likedVideos = localStorage.getItem("wishList");
	likedVideos = JSON.parse(likedVideos);
	if (likedVideos) {
		let favouriteVideos = document.querySelector(".main");
		console.log(favouriteVideos);
		favouriteVideos.innerHTML = "";
		Object.values(likedVideos).map((item) => {
			favouriteVideos.innerHTML += `
            <div class="card">
                <div class="card__img">
                    <img
                    src="${item.img}"
                    alt="">
                </div>
                <div class="card__content">
                    <p>CORE - 35 MIN</p>
                    <h4>${item.name}</h4>
                    <ul class="content__hidden">
                        <li>
                            <span class="term">Calorie Burn:</span>
                            <span class="def">98 to 170</span>
                        </li>
                        <li>
                            <span class="term">Difficulty:</span>
                            <span class="def">3</span>
                        </li>
                        <li>
                            <span class="term">Equipment:</span>
                            <span class="def">No Equipment</span>
                        </li>
                    </ul>
                </div>
                <div class="card__bottom">
                    <button class="bottom__left" onClick="removeFavourite(this.name)" name="${item.tag}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <div class="bottom__right">
                        <i class="far fa-calendar"></i>
                    </div>
                </div>
            </div>
        `;
		});
	}
}

function removeFavourite(item) {
	let likedVideos = localStorage.getItem("wishList");
	likedVideos = JSON.parse(likedVideos);
	delete likedVideos[item];
	localStorage.removeItem("wishList");
	localStorage.setItem("wishList", JSON.stringify(likedVideos));
	displayFavourites();
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

displayFavourites();
// activateRemoveBtns();
