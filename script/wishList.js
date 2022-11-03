let items = document.querySelectorAll(".fa-heart");

let videos = [
	{
		name:
			"FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-o_749_15-minute-bodyweight-cardio-workout-for-fat-burn-and-energy-boost-feel-good-total-body-cardio.jpg",

		tag: "11",
	},
	{
		name: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-782-hiit-pilates-strength-workout-lower-body-workout-for-people-who-get-bored-easily-9eda.jpg",

		tag: "22",
	},
	{
		name: "FB 30 - Fat Loss Program For Busy People (Round 4)",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-780-daniels-upper-body-strength-workout-for-people-who-get-bored-easily-8f58.jpg",

		tag: "33",
	},
	{
		name: "FB Strong - 4 Week Build Muscle, Burn Fat and Feel Great",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-781-dynamic-no-repeat-strength-workout-for-the-upper-body-b0fe.jpg",

		tag: "44",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-o_736_fun-and-tough-kettlebell-routine-45-minute-kettlebell-workout.jpg",
		tag: "55",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-779-cardio-strength-pilates-workout-dynamic-lower-body-workout-for-people-who-get-bored-easily-89f7.jpg",
		tag: "66",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-775-brutal-hiit-and-jump-rope-combination-routine-jump-rope-and-hiit-cardio-workout-9f26.jpg",
		tag: "77",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-770-restorative-pilates-workout-for-a-strong-foundation-core-and-lower-body-b55d.jpg",
		tag: "88",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-778-lower-body-active-stretch-routine-pnf-stretch-routine-for-the-lower-body-9aae.jpg",
		tag: "99",
	},
	{
		name: "Add FB Meal Plan to your order and get 20% Off",
		img:
			"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-778-lower-body-active-stretch-routine-pnf-stretch-routine-for-the-lower-body-9aae.jpg",
		tag: "1010",
	},
];

for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", (x) => {
		setVideo(videos[i]);
	});
}

function toggleIcon(x) {
	console.log(x);
	x.classList.toggle("fas");
}

function setVideo(video) {
	let likedVideos = localStorage.getItem("wishList");
	likedVideos = JSON.parse(likedVideos);
	console.log(likedVideos);
	if (likedVideos != null) {
		if (likedVideos[video.tag] == undefined) {
			likedVideos = {
				...likedVideos,
				[video.tag]: video,
			};
		}
	} else {
		likedVideos = {
			[video.tag]: video,
		};
	}
	localStorage.setItem("wishList", JSON.stringify(likedVideos));
}
