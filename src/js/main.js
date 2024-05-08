// Import our custom CSS
import '../scss/custom.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '4s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.9s');


window.addEventListener('load', () => {
    const currentDate = new Date();
    currentYear.innerText = currentDate.getFullYear();
});