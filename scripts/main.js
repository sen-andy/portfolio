// !!DIR
import createProjectElements from "/portfolio/scripts/project.js";
import setDark from "/portfolio/scripts/darkmode.js";

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementsByTagName("nav")[0];
let isNavOpen = false;

menuBtn.addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    nav.style.visibility = isNavOpen ? "visible" : "hidden";
    nav.classList.toggle("scroll-fade-in", isNavOpen);

    const menuIcon = menuBtn.getElementsByTagName("i")[0];
    menuIcon.classList.remove(isNavOpen ? "fa-bars" : "fa-xmark");
    menuIcon.classList.add(isNavOpen ? "fa-xmark" : "fa-bars");

    document.body.style.overflowY = isNavOpen ? "hidden" : "scroll";
});

start();
async function start() {
    await createProjectElements();
    setDark();
}