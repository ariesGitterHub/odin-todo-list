import { dmCrownImg } from "./imageExporter.js";
import { reformatDate } from "./checkStatus.js";

const today = new Date();

export function createTitle() { 
    const header = document.querySelector("header");

    const appTitleCont = document.createElement("div");
    appTitleCont.classList.add("lvl-col")
    appTitleCont.id = "app-title-cont";

    const appTitle = document.createElement("h1");
    appTitle.classList.add("font-fancy");
    appTitle.textContent = "Task";

    const titleImg = document.createElement("img");
    titleImg.id = "title-img";
    titleImg.classList.add("flipImg")
    titleImg.src = dmCrownImg;
    titleImg.alt = "Crown icon or coffee mug icon";

    const appMMM = document.createElement("p");
    appMMM.id = "MMM";
    appMMM.textContent = "A Mad Muffin Man Design Studio, ©2024";

    const appDate = document.createElement("p");
    appDate.id = "app-date";
    appDate.textContent = `Today is ${reformatDate(today)}`;

    header.appendChild(appTitleCont);
    appTitleCont.appendChild(appTitle);
    appTitleCont.appendChild(appMMM);
    appTitleCont.appendChild(appDate);

    appTitle.append(titleImg, "King");
}

// This code is adapted from a prior project
export function toggleSticky() {
    const headerContent = document.querySelector("#header-content");
    const sticky = headerContent.offsetTop;
    const scrollPosition = window.scrollY;
    
    headerContent.classList.toggle("sticky", scrollPosition > sticky);
}