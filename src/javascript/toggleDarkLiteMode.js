import {
    dmCrownImg,
    dmCoffeeImg,
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
    dmTaskOverdueNoticeImg,
    lmCrownImg,
    lmCoffeeImg,
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
    lmTaskOverdueNoticeImg
} from "./imageExporter.js";

export function toggleDarkLiteMode(theme) {
    const body = document.querySelector("body");
    const darkLiteBtn = document.querySelector("#dark-lite-btn");
    const titleImg = document.querySelector("#title-img");
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
    const editTaskImg = document.querySelector("#edit-task-img");
    const newFolderImg = document.querySelector("#new-folder-img");
    const editFolderImg = document.querySelector("#edit-folder-img");

    const folderTaskBtnImg = document.querySelectorAll(".folder-task-btn-img");
    const folderFolderImg = document.querySelectorAll(".folder-folder-img");
    const folderTaskImg = document.querySelectorAll(".folder-task-img");
    const folderEditBtnImg = document.querySelectorAll(".folder-edit-btn-img");
    const folderTrashBtnImg = document.querySelectorAll(".folder-trash-btn-img");

    const taskPriorityBtnImg = document.querySelectorAll(".task-priority-btn-img");
    const taskCompletedBtnImg = document.querySelectorAll(".task-completed-btn-img");
    const taskEditBtnImg = document.querySelectorAll(".task-edit-btn-img");
    const taskTrashBtnImg = document.querySelectorAll(".task-trash-btn-img");
    const taskOverdueNoticeImg = document.querySelectorAll(".task-overdue-notice-img");

    if (darkLiteBtn) {
        if (theme[0].mode === "dark") {
            titleImg.classList.toggle("flip");            
            body.classList.remove("lite-mode");
            titleImg.src = dmCrownImg;
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
            editTaskImg.src = dmTaskImg;
            newFolderImg.src = dmNewFolderImg;
            editFolderImg.src = dmFolderImg;

            folderTaskBtnImg.forEach(function (image) {
                image.src = lmTaskImg;
            });

            folderFolderImg.forEach(function (image) {
                image.src = lmFolderImg;
            });

            folderTaskImg.forEach(function (image) {
                image.src = dmTaskImg;
            });

            folderEditBtnImg.forEach(function (image) {
            image.src = lmEditImg;
            });

            folderTrashBtnImg.forEach(function (image) {
                image.src = lmTrashImg;
            });

            taskPriorityBtnImg.forEach(function (image) {
                image.src = dmPriorityImg;
            });
            taskCompletedBtnImg.forEach(function (image) {
                image.src = dmCompletedImg;
            });
            taskEditBtnImg.forEach(function (image) {
                image.src = dmEditImg;
            });
            taskTrashBtnImg.forEach(function (image) {
                image.src = dmTrashImg;
            });
            taskOverdueNoticeImg.forEach(function (image) {
                image.src = dmTaskOverdueNoticeImg;
            });
        } else if (theme[0].mode === "lite") {
            titleImg.classList.toggle("flip"); 
            body.classList.add("lite-mode");
            titleImg.src = lmCoffeeImg;
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
            editTaskImg.src = lmTaskImg;
            newFolderImg.src = lmNewFolderImg;
            editFolderImg.src = lmFolderImg;

            folderTaskBtnImg.forEach(function (image) {
                image.src = dmTaskImg;
            });
            folderFolderImg.forEach(function (image) {
                image.src = dmFolderImg;
            });
            folderTaskImg.forEach(function (image) {
                image.src = lmTaskImg;
            });
            folderEditBtnImg.forEach(function (image) {
            image.src = dmEditImg;
            });
            folderTrashBtnImg.forEach(function (image) {
                image.src = dmTrashImg;
            });

            taskPriorityBtnImg.forEach(function (image) {
                image.src = lmPriorityImg;
            });
            taskCompletedBtnImg.forEach(function (image) {
                image.src = lmCompletedImg;
            });
            taskEditBtnImg.forEach(function (image) {
                image.src = lmEditImg;
            });
            taskTrashBtnImg.forEach(function (image) {
                image.src = lmTrashImg;
            });
            taskOverdueNoticeImg.forEach(function (image) {
                image.src = lmTaskOverdueNoticeImg;
            });
        }
    } else {
    console.warn("darkLiteBtn is null or not found in the DOM.");
    }
}