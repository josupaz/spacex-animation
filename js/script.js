gsap.registerPlugin(ScrollTrigger);

/*
Var -----------------------------------------------------------------------------------------
*/
const ship = document.querySelector('.ship');
const doorShip = document.querySelector('.door-ship');
const sun = document.querySelector('.sun');
const ground = document.querySelector('.ground');
const dust = document.querySelector('.dust');

const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');
const star6 = document.querySelector('.star6');
const star7 = document.querySelector('.star7');
const star8 = document.querySelector('.star8');
const star9 = document.querySelector('.star9');
const star10 = document.querySelector('.star10');
const star11 = document.querySelector('.star11');
const star12 = document.querySelector('.star12');
const star13 = document.querySelector('.star13');
const star14 = document.querySelector('.star14');

/*
Animation -----------------------------------------------------------------------------------------
*/

const time_line = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedor_animacion',
        markers: false,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
        pin: true,
    },
});


time_line.to(star1, { opacity: 1, duration: 1 });
time_line.to(star2, { opacity: 0.4, duration: 5 });
time_line.to(ship, { scale: 0.6, y: '30vh', duration: 40 });
time_line.to(star3, { opacity: 0.8, duration: 10 });
time_line.to(star4, { opacity: 1, duration: 15 });
time_line.to(ship, { rotate: -45, duration: 40 });

time_line.to(star5, { opacity: 1, duration: 5 });
time_line.to(star6, { opacity: 0.2, duration: 15 });
time_line.to(star7, { opacity: 0.1, duration: 10 });

time_line.to(ship, { x: '35.1vh', duration: 50 });

time_line.to(star8, { opacity: 0.6, duration: 5 });
time_line.to(star9, { opacity: 0.8, duration: 15 });
time_line.to(star10, { opacity: 0.6, duration: 10 });

time_line.to(ship, { rotate: -180, duration: 70 });

time_line.to(star11, { opacity: 0.2, duration: 5 });
time_line.to(star12, { opacity: 0.6, duration: 15 });
time_line.to(star13, { opacity: 0.7, duration: 10 });

time_line.to(ship, { y: '35.3vh', duration: 5 });


time_line.to(sun, { opacity: 1, y: '-90vh', scale: 1.2, duration: 5 });
time_line.to(star14, { opacity: 0.3, duration: 10 });

time_line.to(ground, { opacity: 1, y: '-43vh', duration: 70 });
time_line.to(dust, { opacity: 0.5, duration: 9 });
time_line.to(doorShip, { opacity: 1, duration: 5 });
time_line.to(ground, { opacity: 1, y: '-43vh', duration: 30 });








/*
END ANIMATION -----------------------------------------------------------------------------------------
*/


/*
Button Play/Top -----------------------------------------------------------------------------------------
*/

$(document).ready(function() {
    $('#play').click(function() {
        $("html, body").animate({ scrollTop: 6850 }, 15000);

        return false;
    });
});

$(document).ready(function() {
    $('#top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 2000);

        return false;
    });
});