const toggleSwitch = document.querySelector('input[type="checkbox"]');

const  toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode() {
    //nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[0].classList.add('fa-moon');
    toggleIcon.children[0].classList.remove('fa-sun');
    toggleIcon.children[0].style.color = "#ffff"


}


// Light Mode Styles
function lightMode() {

    //textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[0].classList.add('fa-sun');
    toggleIcon.children[0].classList.remove('fa-moon');
    toggleIcon.children[0].style.color = "#ffff"


}

// switch theme Dynamically
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}
// Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}

//Particles animations

particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
})
