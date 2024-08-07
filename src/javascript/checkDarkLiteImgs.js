import {
    dmCrownImg,
    dmStatusImg,
    dmNewTaskImg,
    dmNewFolderImg,
    dmDarkLiteImg,

    dmTaskImg,
    dmPriorityImg,
    dmOverdueImg,
    dmCompletedImg,
    dmFolderImg,

    dmEditImg,
    dmTrashImg,

    lmCrownImg,
    lmStatusImg,
    lmNewTaskImg,
    lmNewFolderImg,
    lmDarkLiteImg,

    lmTaskImg,
    lmPriorityImg,
    lmOverdueImg,
    lmCompletedImg,
    lmFolderImg,

    lmEditImg,
    lmTrashImg,

} from "./imageExporter.js";

export function changeDarkLiteImgs() {
    const darkLiteBtn = document.querySelector("#dark-lite-btn");

    const crownImg = document.querySelector("#crown-img");
    const statusBtnImg = document.querySelector("#status-btn-img");
    const newTaskBtnImg = document.querySelector("#new-task-btn-img");
    const newFolderBtnImg = document.querySelector("#new-folder-btn-img");
    const darkLiteBtnImg = document.querySelector("#dark-lite-btn-img");

    const taskNumBtnImg = document.querySelector("#task-num-btn-img");
    const priorityNumBtnImg = document.querySelector("#priority-num-btn-img");
    const overdueNumBtnImg = document.querySelector("#overdue-num-btn-img");
    const completedNumBtnImg = document.querySelector("#completed-num-btn-img");
    const folderNumBtnImg = document.querySelector("#folder-num-btn-img");

    const newTaskImg = document.querySelector("#new-task-img");
    const newFolderImg = document.querySelector("#new-folder-img");

    const taskPriorityBtnImg = document.querySelector(".task-priority-btn-img");
    const taskCompletedBtnImg = document.querySelector(".task-completed-btn-img");
    const taskEditBtnImg = document.querySelector(".task-edit-btn-img");
    const taskTrashBtnImg = document.querySelector(".task-trash-btn-img");

    if (darkLiteBtn) {
        if (darkLiteBtn.value === "dark") {
            crownImg.src = dmCrownImg;
            statusBtnImg.src = dmStatusImg;
            newTaskBtnImg.src = dmNewTaskImg;
            newFolderBtnImg.src = dmNewFolderImg;
            darkLiteBtnImg.src = dmDarkLiteImg;

            taskNumBtnImg.src = dmTaskImg;
            priorityNumBtnImg.src = dmPriorityImg;
            overdueNumBtnImg.src = dmOverdueImg;
            completedNumBtnImg.src = dmCompletedImg;
            folderNumBtnImg.src = dmFolderImg;

            newTaskImg.src = dmNewTaskImg;
            newFolderImg.src = dmNewFolderImg;

            taskPriorityBtnImg.src = dmPriorityImg;
            taskCompletedBtnImg.src = dmCompletedImg;
            taskEditBtnImg.src = dmEditImg;
            taskTrashBtnImg.src = dmTrashImg;

        } else if (darkLiteBtn.value === "lite") {
            crownImg.src = lmCrownImg;
            statusBtnImg.src = lmStatusImg;
            newTaskBtnImg.src = lmNewTaskImg;
            newFolderBtnImg.src = lmNewFolderImg;
            darkLiteBtnImg.src = lmDarkLiteImg;

            taskNumBtnImg.src = lmTaskImg;
            priorityNumBtnImg.src = lmPriorityImg;
            overdueNumBtnImg.src = lmOverdueImg;
            completedNumBtnImg.src = lmCompletedImg;
            folderNumBtnImg.src = lmFolderImg;

            newTaskImg.src = lmNewTaskImg;
            newFolderImg.src = lmNewFolderImg;

            taskPriorityBtnImg.src = lmPriorityImg;
            taskCompletedBtnImg.src = lmCompletedImg;
            taskEditBtnImg.src = lmEditImg;
            taskTrashBtnImg.src = lmTrashImg;
        } 
    } else {
        console.warn("darkLiteBtn is null or not found in the DOM."); 
    }
}
