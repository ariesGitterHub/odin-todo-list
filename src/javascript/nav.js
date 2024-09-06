import { 
    dmStatusImg, 
    dmNewTaskImg, 
    dmNewFolderImg, 
    dmDarkLiteImg 
} from "./imageExporter.js";

import { workingTheme } from "./storageAndData.js";

export function createNav() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const nav = document.createElement("nav");

    const statusBtn = document.createElement("button");
    statusBtn.id = "status-btn";
    statusBtn.classList.add("btn-sound");

    const statusBtnImg = document.createElement("img");
    statusBtnImg.id = "status-btn-img";
    statusBtnImg.src = dmStatusImg;
    statusBtnImg.alt = "Status select icon";

    const newTaskBtn = document.createElement("button");
    newTaskBtn.id = "new-task-btn";
    newTaskBtn.classList.add("btn-sound");

    const newTaskBtnImg = document.createElement("img");
    newTaskBtnImg.id = "new-task-btn-img";
    newTaskBtnImg.src = dmNewTaskImg;
    newTaskBtnImg.alt = "New task icon";

    const newFolderBtn = document.createElement("button");
    newFolderBtn.id = "new-folder-btn";
    newFolderBtn.classList.add("btn-sound");

    const newFolderBtnImg = document.createElement("img");
    newFolderBtnImg.id = "new-folder-btn-img";
    newFolderBtnImg.src = dmNewFolderImg;
    newFolderBtnImg.alt = "New folder icon";

    const darkLiteBtn = document.createElement("button");
    darkLiteBtn.id = "dark-lite-btn";
    darkLiteBtn.classList.add("btn-sound");

    const darkLiteBtnImg = document.createElement("img");
    darkLiteBtnImg.id = "dark-lite-btn-img";
    darkLiteBtn.value = `${workingTheme[0].mode}`;
    darkLiteBtnImg.src = dmDarkLiteImg;
    darkLiteBtnImg.alt = "Light bulb icon to change between dark and lite modes";

    // header.appendChild(nav);
    header.appendChild(headerContent);
    headerContent.appendChild(nav);
    nav.append(statusBtn, newTaskBtn, newFolderBtn, darkLiteBtn);
    statusBtn.append(statusBtnImg);
    newTaskBtn.append(newTaskBtnImg);
    newFolderBtn.append(newFolderBtnImg);
    darkLiteBtn.append(darkLiteBtnImg);
}