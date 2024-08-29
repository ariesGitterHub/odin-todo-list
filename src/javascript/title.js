import {
  dmCrownImg, dmCoffeeImg
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
    appTitle.classList.add(
      // "lvl-row",
       "font-fancy");
    appTitle.textContent = "Task";

    const titleImg = document.createElement("img");
    titleImg.id = "title-img";
    titleImg.classList.add("flipImg")
    titleImg.src = dmCrownImg;
    titleImg.alt = "Crown icon";

    const appMMM = document.createElement("p");
    appMMM.id = "MMM";
    appMMM.textContent = "A Mad Muffin Man Design Studio, ©2024";

    const appDate = document.createElement("p");
    appDate.id = "app-date";
    appDate.textContent = `Today is ${reformatDate(today)}`;

    // header.appendChild(appTitleCont);
    header.appendChild(appTitleCont);
    appTitleCont.appendChild(appTitle);
    appTitleCont.appendChild(appMMM);
    appTitleCont.appendChild(appDate);

    appTitle.append(titleImg, 
      // coffeeImg,
       "King");
}


export function toggleSticky() {
  const headerCtrlCont = document.querySelector("#header-ctrl-cont");
  const sticky = headerCtrlCont.offsetTop;
  const scrollPosition = window.scrollY;

  headerCtrlCont.classList.toggle("sticky", scrollPosition > sticky);
  }

