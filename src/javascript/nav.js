import { 
    dmStatusImg, 
    dmNewTaskImg, 
    dmNewFolderImg, 
    dmDarkLiteImg 
} from "./imageExporter.js";

import { workingTheme } from "./storageAndData.js";

export function createNav() {
    const header = document.querySelector("header");

    const nav = document.createElement("nav");

    const statusBtn = document.createElement("button");
    statusBtn.id = "status-btn";

    const statusBtnImg = document.createElement("img");
    statusBtnImg.id = "status-btn-img";
    statusBtnImg.src = dmStatusImg;
    statusBtnImg.alt = "";

    const newTaskBtn = document.createElement("button");
    newTaskBtn.id = "new-task-btn";

    const newTaskBtnImg = document.createElement("img");
    newTaskBtnImg.id = "new-task-btn-img";
    newTaskBtnImg.src = dmNewTaskImg;
    newTaskBtnImg.alt = "";

    const newFolderBtn = document.createElement("button");
    newFolderBtn.id = "new-folder-btn";

    const newFolderBtnImg = document.createElement("img");
    newFolderBtnImg.id = "new-folder-btn-img";
    newFolderBtnImg.src = dmNewFolderImg;
    newFolderBtnImg.alt = "";

    const darkLiteBtn = document.createElement("button");
    darkLiteBtn.id = "dark-lite-btn";

    const darkLiteBtnImg = document.createElement("img");
    darkLiteBtnImg.id = "dark-lite-btn-img";
    darkLiteBtn.value = `${workingTheme[0].mode}`;
    darkLiteBtnImg.src = dmDarkLiteImg;
    darkLiteBtnImg.alt = "";

    header.appendChild(nav);
    nav.append(statusBtn, newTaskBtn, newFolderBtn, darkLiteBtn);
    statusBtn.append(statusBtnImg);
    newTaskBtn.append(newTaskBtnImg);
    newFolderBtn.append(newFolderBtnImg);
    darkLiteBtn.append(darkLiteBtnImg);
}