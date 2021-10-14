const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');

if (document.documentElement.clientWidth > 10) {
	menu.classList.remove('active')
};

var elm = document.getElementById("navbar");
if (elm) elm.onclick = function (event) {
	menu.classList.toggle('active')
	navbar.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	nav.classList.remove('active');
	burger.classList.remove('active');
	search.classList.remove('active');
	searching.classList.remove('active');

	event.stopPropagation()
};

document.body.addEventListener("click", () => {
	menu.classList.remove('active')
	navbar.classList.remove('active')
})

menu.addEventListener("click", (e) => {
	e.stopPropagation()
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

var elm = document.getElementById("burger");
if (elm) elm.onclick = function (event) {
	burger.classList.toggle('active')
	nav.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	menu.classList.remove('active');
	navbar.classList.remove('active');
	search.classList.remove('active');
	searching.classList.remove('active');

	event.stopPropagation()
};

document.body.addEventListener("click", (e) => {
	burger.classList.remove('active')
	nav.classList.remove('active')

	e.stopPropagation()
});

nav.addEventListener("click", (e) => {
	e.stopPropagation()
});
const search = document.getElementById('search');
const searching = document.getElementById('searching');

var elm = document.getElementById("search");
if (elm) elm.onclick = function (event) {
	search.classList.toggle('active')
	searching.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	nav.classList.remove('active');
	burger.classList.remove('active');
	menu.classList.remove('active');
	navbar.classList.remove('active');

	event.stopPropagation()
};

document.body.addEventListener("click", () => {
	search.classList.remove('active')
	searching.classList.remove('active')
})

searching.addEventListener("click", (e) => {
	e.stopPropagation()
});