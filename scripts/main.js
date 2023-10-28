// !!DIR
import createProjectElements from "/portfolio/scripts/project.js";
import setDark from "/portfolio/scripts/darkmode.js";

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementsByTagName("nav")[0];
const menuIcon = menuBtn.getElementsByTagName("i")[0];
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

start();
async function start() {
    await createProjectElements();
    setDark();
}