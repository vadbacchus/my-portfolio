

AOS.init({
      offset: 300,
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

var parallax= document.querySelector(".parallax");
window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset,
    limit= parallax.offsetTop + parallax.offsetHeight;
    if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
    } 
    else {
        parallax.style.backgroundPositionY= "0";
    }
});



