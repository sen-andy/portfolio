const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementsByTagName("nav")[0];
let isNavOpen = false;

menuBtn.addEventListener("click", () => {
    console.log(nav);
    nav.style.visibility = isNavOpen ? "hidden" : "visible";
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        let menuIcon = menuBtn.getElementsByTagName("i")[0];
        console.log(menuIcon);
        menuIcon.classList.remove("fa-sliders");
        menuIcon.classList.add("fa-xmark");
    }
});