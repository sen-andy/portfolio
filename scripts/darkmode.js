import createProjectElements from "/portfolio/scripts/project.js";

const texts = document.getElementsByClassName("d-text");
const backgrounds = document.getElementsByClassName("d-background");
const buttons = document.getElementsByClassName("d-button");
const toggleDark = document.getElementById("toggle-dark");
const darkLabel = document.getElementById("dark-label");

const setDark = (isDark) => {
    Array.from(texts).forEach(txt => {
        txt.classList.add(`d-text-${ isDark ? "dark" : "light" }`);
        txt.classList.remove(`d-text-${ isDark ? "light" : "dark" }`);
    });

    Array.from(backgrounds).forEach(bg => {
        bg.classList.add(`d-background-${ isDark ? "dark" : "light" }`);
        bg.classList.remove(`d-background-${ isDark ? "light" : "dark" }`);
    });

    Array.from(buttons).forEach(btn => {
        btn.classList.add(`d-button-${ isDark ? "dark" : "light" }`);
        btn.classList.remove(`d-button-${ isDark ? "light" : "dark" }`);
    });

    darkLabel.textContent = `${ isDark ? "Light" : "Dark" } Mode`;
}

toggleDark.addEventListener("change", (e) => {
    setDark(e.target.checked);
});

start();
async function start() {
    await createProjectElements();
    setDark(toggleDark.checked);
}