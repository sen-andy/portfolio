const fadeIn = document.getElementsByClassName("fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in')
        }
        else {
            entry.target.classList.remove('scroll-fade-in')
        }
    })
},
{ threshold: 0.5 });

for (let i = 0; i < fadeIn.length; i++) {
    const elements = fadeIn[i];
    observer.observe(elements);
}

console.log(fadeIn);