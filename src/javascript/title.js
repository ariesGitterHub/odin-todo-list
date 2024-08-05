import {
  header,
  dmCrownImg,
} from "./config.js";

const crownImgSrc = dmCrownImg;

export function createTitle() {
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

