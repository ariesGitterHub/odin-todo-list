import "./styles/styles.css";

import { playClickSound } from "./javascript/sound.js";

import {
    workingTheme,
    workingFolders,
    workingTasks,
} from "./javascript/storageAndData.js";

import { createTitle, toggleSticky } from "./javascript/title.js";

import { createNav } from "./javascript/nav.js";

import { createStatusBar } from "./javascript/statusBar.js";

import { 
    handleStatusBtn,
    handleNewTaskBtn,
    handleNewFolderBtn,
    handleDarkLiteBtn
} from "./javascript/navBtns.js";

import {
    createNewTaskForm,
    populateNewTaskFormFolderOptions,
    newTaskPriorityChecked,
    clearNewTaskForm,
    submitNewTask,
} from "./javascript/newTaskForm.js";

import {
    taskEditBtnClicked,
    createEditTaskForm,
    populateEditTaskFormFolderOptions,
    clearEditTaskForm,
    submitEditedTask,
} from "./javascript/editTaskForm.js";

import {
    createNewFolderForm,
    clearNewFolderForm,
    submitNewFolder,
} from "./javascript/newFolderForm.js";

import {
    folderEditBtnClicked,
    createEditFolderForm,
    clearEditFolderForm,
    submitEditedFolder,
} from "./javascript/editFolderForm.js";

import {
    checkAndOrganizeByDate,
    checkAndOrganizeByName,
    checkPriorityStatus,
    checkCompletedStatus,
    checkIfOverdue,
    checkDescriptionStatus,
    checkIfNoTasks,
    checkFolderAddClass
} from "./javascript/checkStatus.js";

import {
    createFolders,
    countTasksByFolder,
    folderTrashBtnClicked,
} from "./javascript/folderContent.js";

import {
    createTasks,
    createTaskColor,
    priorityBtnClicked,
    completedBtnClicked,
    taskTrashBtnClicked,
} from "./javascript/taskContent.js";

import { toggleDarkLiteMode } from "./javascript/toggleDarkLiteMode.js";

import {
    countTaskTypes,
    countFolders,
    showAllTaskView,
    showPriorityView,
    showOverdueView,
    showCompletedView,
    showFolderView,
} from "./javascript/statusBarBtns.js";

import { updateUI } from "./javascript/updateUI.js";

document.addEventListener("DOMContentLoaded", () => {
    createTitle();

    function debounce(func, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
        };
    }

    window.addEventListener("scroll", debounce(toggleSticky, 100));
    
    createNav();
    createStatusBar();
    createNewTaskForm();
    createEditTaskForm();
    clearEditTaskForm();
    createNewFolderForm();
    createEditFolderForm();
    clearEditFolderForm();
    checkAndOrganizeByDate(workingTasks)
    checkAndOrganizeByName(workingFolders);
    createFolders(workingFolders);
    createTasks(workingTasks);
    createTaskColor(workingFolders);
    checkPriorityStatus(workingTasks);
    checkCompletedStatus(workingTasks);
    checkDescriptionStatus(workingTasks);
    checkIfOverdue(workingTasks);
    clearNewTaskForm();
    clearNewFolderForm();
    submitNewTask();
    submitEditedTask();
    submitNewFolder();
    submitEditedFolder();
    populateNewTaskFormFolderOptions(workingFolders);
    populateEditTaskFormFolderOptions(workingFolders);
    checkIfNoTasks();
    countTaskTypes(workingTasks);
    countFolders(workingFolders);
    countTasksByFolder();
    checkFolderAddClass();

    const btnSound = document.querySelectorAll(".btn-sound");
    btnSound.forEach((button) => {
        button.addEventListener("click", (event) => {
          playClickSound(event);
        });
    });

    const statusBtn = document.querySelector("#status-btn");
    statusBtn.addEventListener("click", handleStatusBtn);

    const newTaskBtn = document.querySelector("#new-task-btn");
    newTaskBtn.addEventListener("click", handleNewTaskBtn);

    const newFolderBtn = document.querySelector("#new-folder-btn");
    newFolderBtn.addEventListener("click", handleNewFolderBtn);

    const darkLiteBtn = document.querySelector("#dark-lite-btn");
    darkLiteBtn.addEventListener("click", handleDarkLiteBtn);
    darkLiteBtn.addEventListener("click", toggleDarkLiteMode(workingTheme));

    const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
    darkLiteBtn.addEventListener("click", newTaskPriorityChecked);
    newTaskPriorityToggle.addEventListener("change", newTaskPriorityChecked);

    const taskNumBtn = document.querySelector("#task-num-btn");
    taskNumBtn.addEventListener("click", showAllTaskView);

    const priorityNumBtn = document.querySelector("#priority-num-btn");
    priorityNumBtn.addEventListener("click", showPriorityView);

    const overdueNumBtn = document.querySelector("#overdue-num-btn");
    overdueNumBtn.addEventListener("click", showOverdueView);

    const completedNumBtn = document.querySelector("#completed-num-btn");
    completedNumBtn.addEventListener("click", showCompletedView);

    const folderNumBtn = document.querySelector("#folder-num-btn");
    folderNumBtn.addEventListener("click", showFolderView);

    const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
    taskPriorityBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        priorityBtnClicked(index);
        updateUI();
        });
    });

    const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
    taskCompletedBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        completedBtnClicked(index);
        updateUI();
        });
    });

    const taskEditBtns = document.querySelectorAll(
        ".task-edit-btn"
    );

    taskEditBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        taskEditBtnClicked(index);
        console.log(button.dataset.id);
        });
    });

    const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
    taskTrashBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        taskTrashBtnClicked(index);
        });
    });

    const folderEditBtns = document.querySelectorAll(".folder-edit-btn");
    folderEditBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        folderEditBtnClicked(index);
        console.log(button.dataset.id);
      });
    });

    const folderTrashBtns = document.querySelectorAll(".folder-trash-btn");
    folderTrashBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        folderTrashBtnClicked(index);
        });
    });
});