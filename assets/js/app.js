const cielo = document.querySelector('#cielo');
const casa = document.querySelector('#casa');
const hierva = document.querySelector('#hierva');
const home = document.querySelector('#text');

window.addEventListener('scroll', () => {
	let value = window.scrollY;
    cielo.style.top = value + 'px';
    home.style.top = value + 'px';
    // hierva.style.bottom = value + 'px';
});
