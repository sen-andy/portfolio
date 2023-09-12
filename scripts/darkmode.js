const texts = document.querySelectorAll(".d-text");
const backgrounds = document.querySelectorAll(".d-background");
const buttons = document.querySelectorAll(".d-button");
const toggleDark = document.getElementById("toggle-dark");
const darkLabel = document.getElementById("dark-label");

const setDark = (isDark) => {
    texts.forEach(txt => {
        txt.classList.add(`d-text-${ isDark ? "dark" : "light" }`);
        txt.classList.remove(`d-text-${ isDark ? "light" : "dark" }`);
    });

    backgrounds.forEach(bg => {
        bg.classList.add(`d-background-${ isDark ? "dark" : "light" }`);
        bg.classList.remove(`d-background-${ isDark ? "light" : "dark" }`);
    });

    buttons.forEach(btn => {
        btn.classList.add(`d-button-${ isDark ? "dark" : "light" }`);
        btn.classList.remove(`d-button-${ isDark ? "light" : "dark" }`);
    });

    darkLabel.textContent = `${ isDark ? "Light" : "Dark" } Mode`;
}

toggleDark.addEventListener("change", (e) => {
    setDark(e.target.checked);
});

start();
function start() {
    setDark(toggleDark.checked);
}