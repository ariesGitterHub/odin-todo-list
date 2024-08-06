import {
  dmCrownImg,
} from "./imageExporter.js";

export function createTitle() {

    const crownImgSrc = dmCrownImg;   

    const header = document.querySelector("header");

    const appTitleCont = document.createElement("div");
    appTitleCont.id = "app-title-cont";
    const appTitle = document.createElement("h1");
    appTitle.classList.add("font-fancy");
    appTitle.textContent = "Task ";
    const crownImg = document.createElement("img");
    crownImg.id = "crown-img";
    crownImg.src = crownImgSrc;
    crownImg.alt = "Crown icon";

    header.appendChild(appTitleCont);
    appTitleCont.appendChild(appTitle);
    appTitle.append(crownImg, " King");
}

