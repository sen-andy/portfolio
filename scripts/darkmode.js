
const texts = document.getElementsByClassName("d-text");
const backgrounds = document.getElementsByClassName("d-background");
const buttons = document.getElementsByClassName("d-button");
const toggleDark = document.getElementById("toggle-dark");
const darkLabel = document.getElementById("dark-label");

const setDark = () => {
    Array.from(texts).forEach(txt => {
        txt.classList.add(`d-text-${ toggleDark.checked ? "dark" : "light" }`);
        txt.classList.remove(`d-text-${ toggleDark.checked ? "light" : "dark" }`);
    });

    Array.from(backgrounds).forEach(bg => {
        bg.classList.add(`d-background-${ toggleDark.checked ? "dark" : "light" }`);
        bg.classList.remove(`d-background-${ toggleDark.checked ? "light" : "dark" }`);
    });

    Array.from(buttons).forEach(btn => {
        btn.classList.add(`d-button-${ toggleDark.checked ? "dark" : "light" }`);
        btn.classList.remove(`d-button-${ toggleDark.checked ? "light" : "dark" }`);
    });

    darkLabel.textContent = `${ toggleDark.checked ? "Light" : "Dark" } Mode`;
}

toggleDark.addEventListener("change", (e) => {
    setDark();
});



export default setDark;