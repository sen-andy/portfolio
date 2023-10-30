// !!DIR
import createProjectElements, { loadNextProject } from "/portfolio/scripts/project.js";
import setDark from "/portfolio/scripts/darkmode.js";

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");
const menuIcon = menuBtn.querySelector("i");
let isNavOpen = false;

menuBtn.addEventListener("click", () => {
    isNavOpen = !isNavOpen;

    nav.classList.toggle("scroll-fade-in", isNavOpen);

    menuIcon.classList.remove(isNavOpen ? "fa-bars" : "fa-xmark");
    menuIcon.classList.add(isNavOpen ? "fa-xmark" : "fa-bars");

    document.body.style.overflow = isNavOpen ? "hidden" : "scroll";
});



const tabletQuery = window.matchMedia("(max-width: 980px)");

tabletQuery.addEventListener("change", (e) => {
    if (e.matches) {
        isNavOpen = false;
        document.body.style.removeProperty("overflow");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");
    } else {
        nav.classList.remove("scroll-fade-in");
    }
})




let navLinks = document.querySelectorAll('#nav-links a');
let top = navLinks[0];
let aboutMe = navLinks[1];
let projects = navLinks[2];
let aboutMeTop = document.getElementById('about-me').getBoundingClientRect().top;
let projectsTop = document.getElementById('projects').getBoundingClientRect().top;

top.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

aboutMe.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: aboutMeTop, left: 0, behavior: 'smooth' });
});

projects.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: projectsTop, left: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 200) {
        const stopLoad = loadNextProject();
        setDark();
        if (stopLoad) {
            console.log('removed');
            window.removeEventListener('scroll', this);
        }
    }
});

start();
async function start() {
    await createProjectElements();
    setDark();
}