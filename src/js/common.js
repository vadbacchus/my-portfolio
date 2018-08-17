'use strict';

AOS.init({
	offset: 400,
	duration: 1000,
	disable: window.innerWidth < 960
});

// preloader

document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.querySelector('.preloader');
		var intro = document.querySelector('.intro__greeting');
		var service = document.querySelector('.intro__text');

		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			intro.classList.add('anim');
			service.classList.add('anim');
		}
	}, 1000);
};

// superhover effect

var HOVER = document.querySelectorAll('.superhover');

for (i = 0; i < HOVER.length; i++) {
	HOVER[i].onmousemove = function (e) {
		var x = e.pageX - e.target.offsetLeft;
		var y = e.pageY - e.target.offsetTop;

		e.target.style.setProperty('--x', x + 'px');
		e.target.style.setProperty('--y', y + 'px');
	};
}

// show/hide bg text


var SERVICE = document.querySelectorAll('.intro__p'),
    MAIN_TITLE = document.querySelector('.intro__title');
bgText1 = document.querySelector('.bgTextBox__text--taste'), bgText2 = document.querySelector('.bgTextBox__text--interface'), bgText3 = document.querySelector('.bgTextBox__text--corporative'), bgText4 = document.querySelector('.bgTextBox__text--wordpress'), bgText5 = document.querySelector('.bgTextBox__text--landing');

for (i = 0; i < SERVICE.length; i++) {

	SERVICE[i].onmouseover = function () {

		MAIN_TITLE.classList.add('invisible');

		switch (this) {
			case SERVICE[0]:
				bgText2.classList.add('show');
				break;
			case SERVICE[1]:
				bgText3.classList.add('show');
				break;
			case SERVICE[2]:
				bgText4.classList.add('show');
				break;
			case SERVICE[3]:
				bgText5.classList.add('show');
				break;
		}
	};

	SERVICE[i].onmouseout = function () {
		MAIN_TITLE.classList.remove('invisible');

		switch (this) {
			case SERVICE[0]:
				bgText2.classList.remove('show');
				break;
			case SERVICE[1]:
				bgText3.classList.remove('show');
				break;
			case SERVICE[2]:
				bgText4.classList.remove('show');
				break;
			case SERVICE[3]:
				bgText5.classList.remove('show');
				break;
		}
	};
};

// animate scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});

// adding grayscale to header bg img while hover on serviceList
var serviceList = document.querySelector('.intro__service'),
    headerBg = document.querySelector('.header-bg');

serviceList.onmouseover = function () {
	headerBg.style.filter = 'grayscale(100%)';
};

serviceList.onmouseout = function () {
	headerBg.style.filter = 'none';
};

// adding grayscale to header bg img, showing bg text, hiding mainTitle while hover on superBtn
// showing header-feedback form onclick superBtn

var superBtnDesktop = document.querySelector('.intro__btn'),
    superBtnMobile = document.querySelector('.intro__btn--lg'),
    headerFeedback = document.querySelector('.header-feedback');

superBtnDesktop.onmouseover = function () {
	bgText1.classList.add('show');
	headerBg.style.filter = 'grayscale(100%)';
	MAIN_TITLE.classList.add('invisible');
};

superBtnDesktop.onmouseout = function () {
	bgText1.classList.remove('show');
	headerBg.style.filter = 'none';
	MAIN_TITLE.classList.remove('invisible');
};

superBtnDesktop.onclick = function () {
	headerFeedback.style.display = 'flex';
	headerFeedback.style.opacity = 1;
	document.body.style.overflowY = 'hidden';
};

superBtnMobile.onclick = function () {
	headerFeedback.style.display = 'flex';
	headerFeedback.style.opacity = 1;
	document.body.style.overflowY = 'hidden';
};

// showing menu onclick and script for closebtns

var MENU = document.querySelector('.nav'),
    CLOSE_BTN = document.querySelectorAll('.closebtn, .nav__closebtn'),
    MENU_BTN = document.querySelector('.menu__btn');

MENU_BTN.onclick = function () {
	MENU.style.display = 'flex';
	MENU.style.opacity = 1;
	document.body.style.overflowY = 'hidden';
};

for (i = 0; i < CLOSE_BTN.length; i++) {

	CLOSE_BTN[i].onclick = function () {

		fade(MENU);
		fade(headerFeedback);
		document.body.style.overflowY = 'auto';
	};
}

function fade(el) {
	var op = 1;
	var timer = setInterval(function () {
		if (op < -1) {
			clearInterval(timer);
			el.style.display = 'none';
		}
		el.style.opacity = op;
		op -= 0.1;
	}, 50);
}

// script for sticked side-title

var elements = [document.querySelector('.works-title'), document.querySelector('.another-works-title'), document.querySelector('.about-title'), document.querySelector('.contacts-title')],
    sections = [document.querySelector('.another-works'), document.querySelector('.about'), document.querySelector('.contacts'), document.querySelector('.footer')],
    elementsOffset = [elements[0].offsetTop, elements[1].offsetTop, elements[2].offsetTop, elements[3].offsetTop],
    sectionsOffset = [sections[0].offsetTop, sections[1].offsetTop, sections[2].offsetTop, sections[3].offsetTop];

window.addEventListener('scroll', function () {
	sticking(elements[0], elementsOffset[0], sectionsOffset[0]);
	sticking(elements[1], elementsOffset[1], sectionsOffset[1]);
	sticking(elements[2], elementsOffset[2], sectionsOffset[2]);
	sticking(elements[3], elementsOffset[3], sectionsOffset[3]);
});

function sticking(element, startStick, endStick) {

	if (window.pageYOffset >= startStick - 50 && window.pageYOffset <= endStick - 50) {
		element.classList.add('fixed');
	}

	if (window.pageYOffset >= endStick - 20 || window.pageYOffset <= startStick - 50) {
		element.classList.remove('fixed');
	}
}

// script for big label on feedback forms

var inputName = document.querySelectorAll('.inputs');
var labelName = document.querySelectorAll('.labels');

for (i = 0; i < inputName.length; i++) {
	inputName[i].onfocus = function () {

		this.previousElementSibling.classList.add('hide');
	};

	inputName[i].onblur = function () {
		if (this.value == '') {
			this.previousElementSibling.classList.remove('hide');
		}
	};

	inputName[i].onmouseover = function () {
		this.previousElementSibling.classList.add('opacity');
	};

	inputName[i].onmouseout = function () {
		this.previousElementSibling.classList.remove('opacity');
	};
}