const projectURI = "/portfolio/data/projects.json";
class imageState {
    constructor(max) {
        this.currentSlide = 0;
        this.maxSlide = max - 1;
    }
}

let imageStates = [];

const works = document.getElementById("works");

export default async () => {
    const res = await fetch(projectURI);
    const data = await res.json();

    data.forEach((project, i) => {
        /* inital setup */
        imageStates.push(new imageState(project.images.length));
        let work = document.createElement("div");
        work.classList.add("work");
        let name = document.createElement("h1");
        name.textContent = project.name;
        name.classList.add("d-text");
        
        /* setup image carousel */
        let carousel = document.createElement("div");
        carousel.classList.add("image-carousel");
        let container = document.createElement("div");
        container.classList.add("slide-container");
        
        /* create and set images */
        project.images.forEach(imgRef => {
            let slide = document.createElement("div");
            slide.classList.add("slide");
            let img = document.createElement("img");
            img.src = imgRef;

            slide.appendChild(img);
            container.appendChild(slide);
        });

        /* next and prev buttons */
        let nextBtn = document.createElement("button");
        nextBtn.classList.add("d-button", "btn", "btn-next");
        let rightArrow = document.createElement("i");
        rightArrow.classList.add("d-text", "fa-solid", "fa-arrow-right");

        nextBtn.addEventListener("click", () => {
            // check if current slide is the last and reset current slide
            if (imageStates[i].currentSlide === imageStates[i].maxSlide) {
                imageStates[i].currentSlide = 0;
            } else {
                imageStates[i].currentSlide++;
            }
            //   move slide by -100%
            const slides = container.getElementsByClassName("slide");
            Array.from(slides).forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - imageStates[i].currentSlide)}%)`;
            });
        });
        
        let prevBtn = document.createElement("button");
        prevBtn.classList.add("d-button", "btn", "btn-prev");
        let leftArrow = document.createElement("i");
        leftArrow.classList.add("d-text", "fa-solid", "fa-arrow-left");

        prevBtn.addEventListener("click", () => {
            // check if current slide is the last and reset current slide
            if (imageStates[i].currentSlide === 0) {
                imageStates[i].currentSlide = imageStates[i].maxSlide;
            } else {
                imageStates[i].currentSlide--;
            }
            //   move slide by -100%
            const slides = container.getElementsByClassName("slide");
            Array.from(slides).forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - imageStates[i].currentSlide)}%)`;
            });
        });

        nextBtn.appendChild(rightArrow);
        prevBtn.appendChild(leftArrow);
        
        container.append(nextBtn, prevBtn);
        carousel.appendChild(container);

        /* about */
        const aboutTitle = document.createElement("h3");
        aboutTitle.classList.add("d-text");
        aboutTitle.textContent = "About";
        const aboutText = document.createElement("p");
        aboutText.classList.add("d-text");
        aboutText.textContent = project.about;

        /* technologies used */
        const techTitle = document.createElement("h3");
        techTitle.classList.add("d-text");
        techTitle.textContent = "Technologies Used";
        const techList = document.createElement("ul");
        project.technologies.forEach(tech => {
            const item = document.createElement("li");
            item.classList.add("d-text");
            item.textContent = tech;
            techList.appendChild(item);
        });

        /* links */
        const linkTitle = document.createElement("h3");
        linkTitle.classList.add("d-text");
        linkTitle.textContent = "Links";
        const linkList = document.createElement("ul");
        project.links.forEach(linkObj => {
            const item = document.createElement("li");
            item.classList.add("d-text");
            const link = document.createElement("a");
            link.classList.add("d-text");
            link.href = linkObj.address;
            link.textContent = linkObj.name;
            item.appendChild(link);
            linkList.appendChild(item);
        });

        works.append(
            name,
            carousel,
            aboutTitle,
            aboutText,
            techTitle,
            techList,
            linkTitle,
            linkList,
        );
    });
}