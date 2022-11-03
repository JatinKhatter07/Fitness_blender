var calender = document.getElementById("dynamicCal");
var d = new Date();
function showCal() {
	calender.style.display = "block";
	renderCal();

	document.getElementById("revBtn").addEventListener("click", previousM);
	document.getElementById("forBtn").addEventListener("click", nextM);
}

function previousM() {
	d.setMonth(d.getMonth() - 1);
	renderCal();
}

function nextM() {
	d.setMonth(d.getMonth() + 1);
	renderCal();
}
function closeBtn () {
    calender.style.display = "none"
    document.querySelector('.dynamicCal1').style.display = "none"
    // console.log("clicked")
}
const btn = document.querySelectorAll(".fa-calendar");
const description = document.querySelectorAll("h4");
for (i = 0; i < btn.length; i++) {
	const des = description[i].textContent;
	btn[i].addEventListener("click", showCal);
}
const crossBtn = document.getElementById("cross-btn");
crossBtn.addEventListener("click", closeBtn);

function renderCal() {
	const cal = document.getElementById("cal");
	const days = document.getElementById("days");

	let output = "";

	const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
	// console.log(lastDay)
	var y = d.getFullYear();
	var month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	var n = month[d.getMonth()];
	document.getElementById("month").innerHTML = n + " " + y;

	const prev = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
	const firstDayIndex = d.getDay();

	const lastDayC = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDay();
	const nextDays = 7 - lastDayC - 1;
	// console.log(n, y, prev, firstDayIndex, nextDays)

	for (j = firstDayIndex - 1; j >= 0; j--) {
		output += `<button id="addEvent" onclick="addEvent(${
			prev - j
		})" class="prev-day">${prev - j}</button>`;
	}
	for (let i = 1; i <= lastDay; i++) {
		if (i === new Date().getDate() && d.getMonth() === new Date().getMonth()) {
			output += `<button id="addEvent" onclick="addEvent(${i})" class="today-day">${i}</button>`;
		} else {
			output += `<button id="addEvent" onclick="addEvent(${i})" class="day">${i}</button>`;
		}
	}
	for (k = 1; k <= nextDays; k++) {
		output += `<button id="addEvent" onclick="addEven(${k})" class="prev-day">${k}</button>`;
		cal.innerHTML = output;
	}
	// days.innerHTML = dayName
}

function addEvent (dayValue) {
    const description = document.querySelector('h4')
    document.querySelector('.dynamicCal1').style.display = "block"
    // console.log(description.textContent)
    let data = JSON.parse(localStorage.getItem('calender')) || [];
    const temp = {
        des: description.textContent,
        montH: d.getMonth(), 
        date: dayValue,
    }
    data.push(temp);
    localStorage.setItem('calender', JSON.stringify(data))
    
}
