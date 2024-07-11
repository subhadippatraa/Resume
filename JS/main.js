/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContents = document.querySelectorAll('.skills__content');
const skillsHeaders = document.querySelectorAll('.skills__header');

function toggleSkills() {
    const itemClass = this.parentNode.className;

    skillsContents.forEach(content => {
        content.className = 'skills__content skills__close';
    });

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeaders.forEach(header => {
    header.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(content => {
            content.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        tab.classList.add('qualification__active');
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
const swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', // Added dot before class name
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (window.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

const applyTheme = (theme, icon) => {
    document.body.classList.toggle(darkTheme, theme === 'dark');
    themeButton.classList.toggle(iconTheme, icon === 'uil-moon');
    localStorage.setItem('selected-theme', theme);
    localStorage.setItem('selected-icon', icon);
};

themeButton.addEventListener('click', () => {
    applyTheme(getCurrentTheme() === 'light' ? 'dark' : 'light', getCurrentIcon() === 'uil-sun' ? 'uil-moon' : 'uil-sun');
});

if (selectedTheme) {
    applyTheme(selectedTheme, selectedIcon);
}

/*==================== SCROLL REVEAL ANIMATION ====================*/




