import {
    header,
    headerContent,
    dmTaskImg,
    dmPriorityImg,
    dmOverdueImg,
    dmCompletedImg,
    dmFolderImg,
} from "./config.js";

const taskNumBtnImgSrc = dmTaskImg;
const priorityNumBtnImgSrc = dmPriorityImg;
const overdueNumBtnImgSrc = dmOverdueImg;
const completedNumBtnImgSrc = dmCompletedImg;
const folderNumBtnImgSrc = dmFolderImg;

export function createStatusBar() {
    const statusBar = document.createElement("div");
    statusBar.id = "status-bar";

    const statusBarBtns = document.createElement("div");
    statusBarBtns.id = "status-bar-btns";

    const taskNumBtn = document.createElement("button");
    taskNumBtn.id = "task-num-btn";

    const taskNumBtnImg = document.createElement("img");
    taskNumBtnImg.id = "task-num-btn-img";
    taskNumBtnImg.src = taskNumBtnImgSrc;
    taskNumBtnImg.alt = "";

    const taskNumBtnP = document.createElement("p");
    taskNumBtnP.id = "task-num-btn-p";
    taskNumBtnP.textContent = "X";

    const priorityNumBtn = document.createElement("button");
    priorityNumBtn.id = "priority-num-btn";

    const priorityNumBtnImg = document.createElement("img");
    priorityNumBtnImg.id = "priority-num-btn-img";
    priorityNumBtnImg.src = priorityNumBtnImgSrc;
    priorityNumBtnImg.alt = "";

    const priorityNumBtnP = document.createElement("p");
    priorityNumBtnP.id = "priority-num-btn-p";
    priorityNumBtnP.textContent = "X";

    const overdueNumBtn = document.createElement("button");
    overdueNumBtn.id = "overdue-num-btn"; 

    const overdueNumBtnImg = document.createElement("img");
    overdueNumBtnImg.id = "overdue-num-btn-img";
    overdueNumBtnImg.src = overdueNumBtnImgSrc;
    overdueNumBtnImg.alt = "";

    const overdueNumBtnP = document.createElement("p");
    overdueNumBtnP.id = "overdue-num-btn-p";
    overdueNumBtnP.textContent = "X";

    const completedNumBtn = document.createElement("button");
    completedNumBtn.id = "completed-num-btn";

    const completedNumBtnImg = document.createElement("img");
    completedNumBtnImg.id = "completed-num-btn-img";
    completedNumBtnImg.src = completedNumBtnImgSrc;
    completedNumBtnImg.alt = "";

    const completedNumBtnP = document.createElement("p");
    completedNumBtnP.id = "completed-num-btn-p";
    completedNumBtnP.textContent = "X";

    const folderNumBtn = document.createElement("button");
    folderNumBtn.id = "folder-num-btn";

    const folderNumBtnImg = document.createElement("img");
    folderNumBtnImg.id = "folder-num-btn-img";
    folderNumBtnImg.src = folderNumBtnImgSrc;
    folderNumBtnImg.alt = "";

    const folderNumBtnP = document.createElement("p");
    folderNumBtnP.id = "folder-num-btn-p";
    folderNumBtnP.textContent = "X";

    header.appendChild(headerContent)
    headerContent.appendChild(statusBar);
    statusBar.appendChild(statusBarBtns);
    statusBarBtns.append(taskNumBtn, priorityNumBtn, overdueNumBtn, completedNumBtn, folderNumBtn);
    taskNumBtn.append(taskNumBtnImg, taskNumBtnP);
    priorityNumBtn.append(priorityNumBtnImg, priorityNumBtnP);
    overdueNumBtn.append(overdueNumBtnImg, overdueNumBtnP);
    completedNumBtn.append(completedNumBtnImg, completedNumBtnP);
    folderNumBtn.append(folderNumBtnImg, folderNumBtnP);
    statusBarBtns.append(taskNumBtn, priorityNumBtn, overdueNumBtn, completedNumBtn, folderNumBtn)
}