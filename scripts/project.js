// !!DIR
import setFadeAnimation from "/scripts/anim.js";
const projectURI = "/data/projects.json";

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
        let name = document.createElement("h2");
        name.textContent = project.name;
        name.classList.add("d-text");
        
        /* setup image carousel */
        let carousel = document.createElement("div");
        carousel.classList.add("image-carousel");
        let container = document.createElement("div");
        container.classList.add("slide-container");

        let imgs = [];
        
        /* create and set images */
        project.images.forEach((imgRef, index) => {
            let slide = document.createElement("div");
            slide.classList.add("slide");

            let img = document.createElement("img");
            img.src = imgRef;

            let folderName = imgRef.split("/")[3];
            let fileName = imgRef.split("/")[4];
            img.alt = `${folderName} ${fileName}`;
            
            imgs.push(img);
            
            slide.style.transform = `translateX(${100 * index}%)`;
            slide.appendChild(img);
            container.appendChild(slide);
        });

        container.addEventListener("click", (e) => {
            e.stopPropagation();
            const isFullscreen = container.classList.contains("fullscreen");
            if (isFullscreen) {
                document.body.style.overflow = "auto";
                container.classList.remove("fullscreen");
            } else {
                container.classList.add("fullscreen");
                document.body.style.overflow = "hidden";
            }
            imgs.forEach(img => isFullscreen ? img.removeAttribute("style") : img.style.maxWidth = "100%");
        })

        /* next and prev buttons */
        let nextBtn = document.createElement("button");
        nextBtn.ariaLabel = "next image"
        nextBtn.classList.add("btn", "btn-next");

        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
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
        prevBtn.ariaLabel = "previous image"
        prevBtn.classList.add("btn", "btn-prev");

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
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
        
        container.append(nextBtn, prevBtn);
        carousel.appendChild(container);

        /* about */
        const aboutTitle = document.createElement("h3");
        aboutTitle.classList.add("d-text");
        aboutTitle.textContent = "About";
        const aboutText = document.createElement("p");
        aboutText.classList.add("d-text");
        aboutText.textContent = project.about;
        setFadeAnimation(aboutText);

        /* technologies used */
        // const techTitle = document.createElement("h3");
        // techTitle.classList.add("d-text");
        // techTitle.textContent = "Technologies Used";
        // const techList = document.createElement("ul");
        // project.technologies.forEach((tech, index) => {
        //     const item = document.createElement("li");
        //     item.classList.add("d-text");
        //     item.style.transitionDelay = `${100 * index}ms`;
        //     item.textContent = tech;
        //     setFadeAnimation(item);
        //     techList.appendChild(item);
        // });

        /* links */
        const linkTitle = document.createElement("h3");
        linkTitle.classList.add("d-text");
        linkTitle.textContent = "Links";
        const linkList = document.createElement("ul");
        project.links.forEach((linkObj, index) => {
            const item = document.createElement("li");
            item.classList.add("d-text");
            item.style.transitionDelay = `${100 * index}ms`;
            const link = document.createElement("a");
            link.classList.add("d-text");
            link.href = linkObj.address;
            link.target = "_blank";
            link.textContent = linkObj.name;
            setFadeAnimation(item);
            item.appendChild(link);
            linkList.appendChild(item);
        });

        work.append(
            name,
            carousel,
            aboutTitle,
            aboutText,
            // techTitle,
            // techList,
            linkTitle,
            linkList,
        );

        works.appendChild(work);
    });
}