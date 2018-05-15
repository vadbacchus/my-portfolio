

AOS.init({
      offset: 200,
      duration: 1000,
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




const serviceList = document.querySelector('.intro__service'),
	  headerBg  = document.querySelector('.bg-img'),
	  superBtn  = document.querySelector('.intro__btn');

serviceList.onmouseover = () => {
	headerBg.style.filter = 'grayscale(100%)';
/*	headerBg.style.transform =  'translateY(0)';*/


}


serviceList.onmouseout = () => {
	headerBg.style.filter = 'none';
/*	headerBg.style.transform =  'translateY(150px)';*/

}

superBtn.onmouseover = () => {
	headerBg.style.filter = 'grayscale(100%)';
	TITLE.style.opacity = 0;
}

superBtn.onmouseout = () => {
	headerBg.style.filter = 'none';
	TITLE.style.opacity = 1;
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
	  						
	  					];



function sticking (element, startStick, endStick) {

	if (window.pageYOffset >= startStick - 50  && window.pageYOffset <= endStick - 50 ) {
		element.classList.add( 'fixed' );
		
	}

	if (window.pageYOffset >= endStick - 20  || window.pageYOffset <= startStick - 50 ) {
		element.classList.remove( 'fixed' );
	}
}

window.addEventListener('scroll', function(){
	sticking( elements[0], elementsOffset[0], sectionsOffset[0]);
	sticking( elements[1], elementsOffset[1], sectionsOffset[1]);
	sticking( elements[2], elementsOffset[2], sectionsOffset[2]);
	sticking( elements[3], elementsOffset[3], sectionsOffset[3]);
});

