

AOS.init({
      offset: 200,
      duration: 600,
      disable: window.innerWidth < 960,
    });

document.body.onload = () => {
	setTimeout(function(){
		let preloader = document.querySelector('.preloader');
		let intro     = document.querySelector('.intro__greeting');
		let service   = document.querySelector('.intro__text');

		if( !preloader.classList.contains('done') ){
			preloader.classList.add('done');
			intro.classList.add('anim');
			service.classList.add('anim');
		}
	}, 1000);
}


const SERVICE = document.querySelectorAll('.intro__text p'),
	  TITLE = document.querySelector('.intro__title');

for ( i=0; i<SERVICE.length; i++ ) {
	SERVICE[i].onmouseover = () => {

		TITLE.style.opacity = 0;

		}
	SERVICE[i].onmouseout = () => {
		TITLE.style.opacity = 1;
	}

}



window.onscroll = function () {
	const yOffset = document.body.scrollTop || document.documentElement.scrollTop,
	 	  grape   = document.querySelector('.menu__btn');

	  if( yOffset > 500 ) {
	  	grape.classList.add('show');
	  }

	  else {
	  	grape.classList.remove('show');
	  }
	  	
	}


const mainTitle = document.querySelector('.intro__title'),
	  headerBg  = document.querySelector('.intro__background');

mainTitle.onmouseover = () => {
	headerBg.style.opacity = '.2'
}

mainTitle.onmouseout = () => {
	headerBg.style.opacity = '.5'
}

const HOVER = document.querySelectorAll('.superhover');

for ( i=0; i < HOVER.length; i++ ) {
	HOVER[i].onmousemove = (e) => {
	const x = e.pageX - e.target.offsetLeft;
	const y = e.pageY - e.target.offsetTop;

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}
}



const MENU = document.querySelector('.nav');
const CLOSE_BTN = document.querySelectorAll('.nav__closebtn');

function fade(el) {
  let op = 1;
  let timer = setInterval(function () {
    if (op < -1){
      clearInterval(timer);
      el.style.display = 'none';
    }
    el.style.opacity = op;
    op -= 0.1;
  }, 50);
}

/*	fadeIn --> used CSS animation*/

document.querySelector('.menu__btn').onclick = () => {

	MENU.style.display = 'flex';
	MENU.style.opacity = 1;
}


for (i=0; i < CLOSE_BTN.length ; i++) {

	CLOSE_BTN[i].onclick = () => {

		fade(MENU);

		}	
	}

  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

const elements 		 =	[
							document.querySelector( '.works-title' ),
							document.querySelector( '.another-works-title' ),
							document.querySelector( '.about-title' ),
							document.querySelector( '.contacts-title' )
				 		],
	  sections 	 	 =  [
	  						document.querySelector( '.works' ),
	  						document.querySelector( '.another-works' ),
	  						document.querySelector( '.about' ),
	  						document.querySelector( '.contacts' ),
	  				   		document.querySelector( '.footer' )
	   			 	   	],

	  elementsOffset = 	[
	  						elements[0].offsetTop,
	  						elements[1].offsetTop,
	  						elements[2].offsetTop,
	  						elements[3].offsetTop
	  				   	],
	  sectionsOffset =  [
	  						sections[0].offsetTop,
	  						sections[1].offsetTop,
	  						sections[2].offsetTop,
	  						sections[3].offsetTop,
	  						sections[4].offsetTop
	  					];

function sticking (element, startStick, endStick, header) {
	if (window.pageYOffset >= startStick - 50  && window.pageYOffset <= endStick - 50) {
		element.classList.add( 'fixed' );
		element.classList.remove( 'hide' );
	}

	if (window.pageYOffset >= endStick - 50  || window.pageYOffset < startStick - 50) {
		element.classList.remove( 'fixed' );
		element.classList.add( 'hide' );
		
	}

	if (window.pageYOffset <= header){
		element.classList.remove( 'hide' );
	}

	

}

window.addEventListener('scroll', function(){
	sticking( elements[0], elementsOffset[0], sectionsOffset[1], sectionsOffset[0]);
	sticking( elements[1], elementsOffset[1], sectionsOffset[2]);
	sticking( elements[2], elementsOffset[2], sectionsOffset[3]);
	sticking( elements[3], elementsOffset[3], sectionsOffset[4]);
});