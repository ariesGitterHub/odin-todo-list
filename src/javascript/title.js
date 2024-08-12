import {
  dmCrownImg,
} from "./imageExporter.js";

import { reformatDate } from "./checkStatus.js";

// Get the current date
const today = new Date();

export function createTitle() { 
    const header = document.querySelector("header");

    const appTitleCont = document.createElement("div");
    appTitleCont.classList.add("lvl-col")
    appTitleCont.id = "app-title-cont";

    const appTitle = document.createElement("h1");
    appTitle.classList.add("font-fancy");
    appTitle.textContent = "Task ";

    const crownImg = document.createElement("img");
    crownImg.id = "crown-img";
    crownImg.src = dmCrownImg;
    crownImg.alt = "Crown icon";

    // const appDateCont = document.querySelector("div");
    // appDateCont.id = "app-date-cont";

    const appDate = document.createElement("p");
    appDate.id = "app-date";
    appDate.textContent = `Today is ${reformatDate(today)}`;

    // header.appendChild(appTitleCont);
    header.appendChild(appTitleCont);
    appTitleCont.appendChild(appTitle);
    appTitleCont.appendChild(appDate);

    appTitle.append(crownImg, " King");
}

