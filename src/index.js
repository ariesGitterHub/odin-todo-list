import "./styles/styles.css";

import {
    workingTheme,
    workingFolders,
    workingTasks,    
} from "./javascript/storageAndData.js";

import { createTitle, 
    toggleSticky 
} from "./javascript/title.js";

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
    createNewFolderForm,
    clearNewFolderForm,
    submitNewFolder,
} from "./javascript/newFolderForm.js";

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
} from "./javascript/folderContent.js";

import {
    createTasks,
    createTaskColor,
    priorityBtnClicked,
    completedBtnClicked,
    trashBtnClicked,
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

document.addEventListener("DOMContentLoaded", () => {
    createTitle();

    function debounce(func, delay) {
      let timer;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
      };
    }

    // Add event listener for scroll event with debouncing
    window.addEventListener("scroll", debounce(toggleSticky, 10));

    createNav();
    createStatusBar();
    createNewTaskForm();
    createNewFolderForm();
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
    submitNewFolder();
    populateNewTaskFormFolderOptions(workingFolders);
    checkIfNoTasks();

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
        window.location.reload();
        });
    });

    const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
    taskCompletedBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        completedBtnClicked(index);
        window.location.reload();
        });
    });

    const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
    taskTrashBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
        trashBtnClicked(index);
        });
    });
    
    countTaskTypes(workingTasks);  
    countFolders(workingFolders); 
    countTasksByFolder();
    checkFolderAddClass();
});