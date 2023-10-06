const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementsByTagName("nav")[0];
let isNavOpen = false;

menuBtn.addEventListener("click", () => {
    nav.style.visibility = isNavOpen ? "hidden" : "visible";
    isNavOpen = !isNavOpen;

    const menuIcon = menuBtn.getElementsByTagName("i")[0];
    menuIcon.classList.remove(isNavOpen ? "fa-sliders" : "fa-xmark");
    menuIcon.classList.add(isNavOpen ? "fa-xmark" : "fa-sliders");
});