var themeStyle = document.getElementById('themeStyle');
var toggle = document.getElementById('toggle');
var topWhite = document.getElementById('topwhite');
var bottomWhite = document.getElementById('bottomwhite');
var topGrey = document.getElementById('topgrey');
var bottomGrey = document.getElementById('bottomgrey');
var topGrey2 = document.getElementById('topgrey2');
var bottomGrey2 = document.getElementById('bottomgrey2');


// Dark mode
function darkmode() {
    themeStyle.setAttribute('href', '../assets/css/dark.css'); 
    toggle.className='fa-solid fa-toggle-off toggleon';
    topWhite.src='../assets/images/shape-top-black-80.png';
    bottomWhite.src='../assets/images/shape-bottom-black-80.png';
    topGrey.src='../assets/images/shape-top-dark-grey-80.png';
    bottomGrey.src='../assets/images/shape-bottom-dark-grey-80.png';
    topGrey2.src='../assets/images/shape-top-dark-grey-80.png';
    bottomGrey2.src='../assets/images/shape-bottom-dark-grey-80.png';
}

// Light Mode
function lightmode() {
    themeStyle.setAttribute('href', '../assets/css/light.css'); 
    toggle.className='fa-solid fa-toggle-on toggleon';
    topWhite.src='../assets/images/shape-top-white-80.png'
    bottomWhite.src='../assets/images/shape-bottom-white-80.png'
    topGrey.src='../assets/images/shape-top-grey-80.png'
    bottomGrey.src='../assets/images/shape-bottom-grey-80.png'
    topGrey2.src='../assets/images/shape-top-grey-80.png'
    document.getElementById('bottomgrey2').src='../assets/images/shape-bottom-grey-80.png'
}

const toggleMode = () => {
    if (themeStyle.getAttribute('href') === '../assets/css/dark.css') {
        lightmode();
    } else {
        darkmode();
    }
}

var themeStyle = document.getElementById('themeStyle');
var toggle = document.getElementById('toggle');
var topWhite = document.getElementById('topwhite');
var bottomWhite = document.getElementById('bottomwhite');
var topGrey = document.getElementById('topgrey');
var bottomGrey = document.getElementById('bottomgrey');
var topGrey2 = document.getElementById('topgrey2');
var bottomGrey2 = document.getElementById('bottomgrey2');


// Dark mode
function darkmode() {
    themeStyle.setAttribute('href', '../assets/css/dark.css'); 
    toggle.className='fa-solid fa-toggle-off toggleon';
    topWhite.src='../assets/images/shape-top-black-80.png';
    bottomWhite.src='../assets/images/shape-bottom-black-80.png';
    topGrey.src='../assets/images/shape-top-dark-grey-80.png';
    bottomGrey.src='../assets/images/shape-bottom-dark-grey-80.png';
    topGrey2.src='../assets/images/shape-top-dark-grey-80.png';
    bottomGrey2.src='../assets/images/shape-bottom-dark-grey-80.png';
}

// Light Mode
function lightmode() {
    themeStyle.setAttribute('href', '../assets/css/light.css'); 
    toggle.className='fa-solid fa-toggle-on toggleon';
    topWhite.src='../assets/images/shape-top-white-80.png'
    bottomWhite.src='../assets/images/shape-bottom-white-80.png'
    topGrey.src='../assets/images/shape-top-grey-80.png'
    bottomGrey.src='../assets/images/shape-bottom-grey-80.png'
    topGrey2.src='../assets/images/shape-top-grey-80.png'
    document.getElementById('bottomgrey2').src='../assets/images/shape-bottom-grey-80.png'
}

const toggleMode = () => {
    if (themeStyle.getAttribute('href') === '../assets/css/dark.css') {
        lightmode();
    } else {
        darkmode();
    }
}

