const fadeIn = document.getElementsByClassName("fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('scroll-fade-in', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    })
},
{ threshold: [0, 1] });

for (let i = 0; i < fadeIn.length; i++) {
    const elements = fadeIn[i];
    observer.observe(elements);
}

const setFadeAnimation = (element) => {
    element.classList.add("fade-in");
    observer.observe(element)
}

export default setFadeAnimation;