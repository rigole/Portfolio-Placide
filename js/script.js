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

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);

//Mouse
let mouseCursor = document.querySelector(".cursor");
let navigationMenu = document.querySelectorAll(".nav-menu a");

window.addEventListener('mousemove', cursorMove);

function cursorMove(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px"
}

navigationMenu.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    });
    link.addEventListener("mouseover", ()=> {
        mouseCursor.classList.add("link-grow");
    });
})