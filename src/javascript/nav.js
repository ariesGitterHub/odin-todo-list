import { 
    // header, 
    dmStatusImg, 
    dmNewTaskImg, 
    dmNewFolderImg, 
    dmDarkLiteImg 
} from "./imageExporter.js";

export function createNav() {

    const statusImgSrc = dmStatusImg;
    const newTaskImgSrc = dmNewTaskImg;
    const newFolderImgSrc = dmNewFolderImg;
    const darkLiteImgSrc = dmDarkLiteImg;

    const header = document.querySelector("header");

    const nav = document.createElement("nav");

    const statusBtn = document.createElement("button");
    statusBtn.id = "status-btn";

    const statusBtnImg = document.createElement("img");
    statusBtnImg.id = "status-btn-img";
    statusBtnImg.src = statusImgSrc;
    statusBtnImg.alt = "";

    const newTaskBtn = document.createElement("button");
    newTaskBtn.id = "new-task-btn";

    const newTaskBtnImg = document.createElement("img");
    newTaskBtnImg.id = "new-task-btn-img";
    newTaskBtnImg.src = newTaskImgSrc;
    newTaskBtnImg.alt = "";

    const newFolderBtn = document.createElement("button");
    newFolderBtn.id = "new-folder-btn";

    const newFolderBtnImg = document.createElement("img");
    newFolderBtnImg.id = "new-folder-btn-img";
    newFolderBtnImg.src = newFolderImgSrc;
    newFolderBtnImg.alt = "";

    const darkLiteBtn = document.createElement("button");
    darkLiteBtn.id = "dark-lite-btn";

    const darkLiteBtnImg = document.createElement("img");
    darkLiteBtnImg.id = "dark-lite-btn-img";
    darkLiteBtn.value = "dark";
    darkLiteBtnImg.src = darkLiteImgSrc;
    darkLiteBtnImg.alt = "";

    header.appendChild(nav);
    nav.append(statusBtn, newTaskBtn, newFolderBtn, darkLiteBtn);
    statusBtn.append(statusBtnImg);
    newTaskBtn.append(newTaskBtnImg);
    newFolderBtn.append(newFolderBtnImg);
    darkLiteBtn.append(darkLiteBtnImg);
}














