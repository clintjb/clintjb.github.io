// Importing utility function for preloading images
import { preloadImages } from './utils.js';

// Variable to store the Lenis smooth scrolling object
let lenis;

// Selecting DOM elements

const contentElements = [...document.querySelectorAll('.content--sticky')];
const totalContentElements = contentElements.length;

// Initializes Lenis for smooth scrolling with specific properties
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.2, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

// Function to handle scroll-triggered animations
const scroll = () => {

    contentElements.forEach((el, position) => {
        
        const isLast = position === totalContentElements-1;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: '+=100%',
                scrub: true
            }
        })
        .to(el, {
            ease: 'none',
            startAt: {filter: 'brightness(100%) contrast(100%)'},
            filter: isLast ? 'none' : 'brightness(60%) contrast(135%)',
            yPercent: isLast ? 0 : -15
        }, 0)
        // Animate the content inner image
        .to(el.querySelector('.content__img'), {
            ease: 'power1.in',
            yPercent: -40,
            rotation: -20
        }, 0);

    });

};

// Initialization function
const init = () => {
    initSmoothScrolling(); // Initialize Lenis for smooth scrolling
    scroll(); // Apply scroll-triggered animations
};

preloadImages('.content__img').then(() => {
    // Once images are preloaded, remove the 'loading' indicator/class from the body
    document.body.classList.remove('loading');
    init();
});
