import {
    dmTaskImg,
    dmPriorityImg,
    dmOverdueImg,
    dmCompletedImg,
    dmFolderImg,
} from "./imageExporter.js";

export function createStatusBar() {
    const header = document.querySelector("header");
    const headerContent= document.querySelector("#header-content")
    
    const statusBar = document.createElement("div");
    statusBar.id = "status-bar";

    const statusBarBtns = document.createElement("div");
    statusBarBtns.id = "status-bar-btns";

    const taskNumBtn = document.createElement("button");
    taskNumBtn.id = "task-num-btn";
    taskNumBtn.classList.add("btn-sound")

    const taskNumBtnImg = document.createElement("img");
    taskNumBtnImg.id = "task-num-btn-img";
    taskNumBtnImg.src = dmTaskImg;
    taskNumBtnImg.alt = "Task icon";

    const taskNumBtnP = document.createElement("p");
    taskNumBtnP.id = "task-num-btn-p";
    taskNumBtnP.textContent = "0";

    const priorityNumBtn = document.createElement("button");
    priorityNumBtn.id = "priority-num-btn";
    priorityNumBtn.classList.add("btn-sound");

    const priorityNumBtnImg = document.createElement("img");
    priorityNumBtnImg.id = "priority-num-btn-img";
    priorityNumBtnImg.src = dmPriorityImg;
    priorityNumBtnImg.alt = "Priority flag icon";

    const priorityNumBtnP = document.createElement("p");
    priorityNumBtnP.id = "priority-num-btn-p";
    priorityNumBtnP.textContent = "0";

    const overdueNumBtn = document.createElement("button");
    overdueNumBtn.id = "overdue-num-btn"; 
    overdueNumBtn.classList.add("btn-sound");

    const overdueNumBtnImg = document.createElement("img");
    overdueNumBtnImg.id = "overdue-num-btn-img";
    overdueNumBtnImg.src = dmOverdueImg;
    overdueNumBtnImg.alt = "Overdue warning icon";

    const overdueNumBtnP = document.createElement("p");
    overdueNumBtnP.id = "overdue-num-btn-p";
    overdueNumBtnP.textContent = "0";

    const completedNumBtn = document.createElement("button");
    completedNumBtn.id = "completed-num-btn";
    completedNumBtn.classList.add("btn-sound");

    const completedNumBtnImg = document.createElement("img");
    completedNumBtnImg.id = "completed-num-btn-img";
    completedNumBtnImg.src = dmCompletedImg;
    completedNumBtnImg.alt = "Completed check mark icon";

    const completedNumBtnP = document.createElement("p");
    completedNumBtnP.id = "completed-num-btn-p";
    completedNumBtnP.textContent = "0";

    const folderNumBtn = document.createElement("button");
    folderNumBtn.id = "folder-num-btn";
    folderNumBtn.classList.add("btn-sound");

    const folderNumBtnImg = document.createElement("img");
    folderNumBtnImg.id = "folder-num-btn-img";
    folderNumBtnImg.src = dmFolderImg;
    folderNumBtnImg.alt = "Folder icon";

    const folderNumBtnP = document.createElement("p");
    folderNumBtnP.id = "folder-num-btn-p";
    folderNumBtnP.textContent = "0";

    header.appendChild(headerContent)
    headerContent.appendChild(statusBar);
    statusBar.appendChild(statusBarBtns);
    statusBarBtns.append(
        taskNumBtn, 
        priorityNumBtn, 
        overdueNumBtn, 
        completedNumBtn, 
        folderNumBtn
    );
    taskNumBtn.append(taskNumBtnImg, taskNumBtnP);
    priorityNumBtn.append(priorityNumBtnImg, priorityNumBtnP);
    overdueNumBtn.append(overdueNumBtnImg, overdueNumBtnP);
    completedNumBtn.append(completedNumBtnImg, completedNumBtnP);
    folderNumBtn.append(folderNumBtnImg, folderNumBtnP);
    statusBarBtns.append(
        taskNumBtn, 
        priorityNumBtn, 
        overdueNumBtn, 
        completedNumBtn, 
        folderNumBtn
    )   
}