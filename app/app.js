const toggleBtn = document.querySelector('.main-nav__mobile-menu-toggle');
const toggleBtnImg = document.querySelector('.main-nav__toggle-image');
const mobileMenu = document.querySelector('.main-nav__items');
const shadow = document.querySelector('.shadow');
const feedback = document.querySelectorAll('.feedback__content');
const dot = document.querySelectorAll('.feedback__slider-dot');
const email = document.querySelector('.page-footer__form-input');
const formBtn = document.querySelector('.get-started-button--footer');
const error = document.querySelector('.page-footer__form-error');

const correctEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;

const checkEmail = () => {
	if (email.value.match(correctEmail)) {
		error.innerHTML = 'Email sended!';

		error.classList.remove('page-footer__form-error--error');
		email.classList.remove('page-footer__form-input--error');
	} else {
		error.innerHTML = 'Please insert a valid email!';
		error.classList.add('page-footer__form-error--error');
		email.classList.add('page-footer__form-input--error');
		// error.style.color = 'red'
	}
};

formBtn.addEventListener('click', checkEmail);

const toggleMenu = () => {
	if (mobileMenu.classList.contains('main-nav__items--active')) {
		toggleBtnImg.setAttribute('src', 'images/icon-hamburger.svg');
		document.body.style.overflow = 'visible';
		document.documentElement.style.overflow = 'visible';
	} else {
		toggleBtnImg.setAttribute('src', 'images/icon-close.svg');
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	}
	mobileMenu.classList.toggle('main-nav__items--active');
	shadow.classList.toggle('shadow--active');
};

console.log(window.innerWidth);

let i = 0;

setInterval(() => {
	setInterval(() => {
		feedback[i].classList.add('test');
		dot[i].classList.add('active');
		setTimeout(() => {
			feedback[i].classList.remove('test');
			dot[i].classList.remove('active');
		}, 5000);
	}, 6000);

	i++;

	if (i == feedback.length) {
		i = 0;
	}
}, 6000);

toggleBtn.addEventListener('click', toggleMenu);
