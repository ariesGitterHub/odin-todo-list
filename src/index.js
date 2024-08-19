import "./styles/styles.css";
// import { Task, Folder } from "./javascript/classes.js";
import {
  workingFolders,
  workingTasks,
  workingTheme,
  loadTheme,
  saveTheme
  // updateTheme,
} from "./javascript/storageAndData.js";


import { createTitle, 
  // toggleSticky 
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
  // changeDarkLiteImgs,
  checkPriorityStatus,
  checkCompletedStatus,
  checkIfOverdue,
  checkDescriptionStatus,
  checkIfNoTasks,
  // checkDarkLiteStatus,
} from "./javascript/checkStatus.js";

import {
  createTasks,
  createTaskColor,
  priorityBtnClicked,
  completedBtnClicked,
  trashBtnClicked,
} from "./javascript/taskContent.js";

import { toggleDarkLiteMode } from "./javascript/toggleDarkLiteMode.js";

document.addEventListener("DOMContentLoaded", () => {
   toggleDarkLiteMode(workingTheme);
  createTitle();

// function debounce(func, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(func, delay);
//   };
// }

// Add event listener for scroll event with debouncing
// window.addEventListener("scroll", debounce(toggleSticky, 10));


  createNav();
  createStatusBar();
  createNewTaskForm();
  createNewFolderForm();
  

  const statusBtn = document.querySelector("#status-btn");
  statusBtn.addEventListener("click", handleStatusBtn);

  const newTaskBtn = document.querySelector("#new-task-btn");
  newTaskBtn.addEventListener("click", handleNewTaskBtn);

  const newFolderBtn = document.querySelector("#new-folder-btn");
  newFolderBtn.addEventListener("click", handleNewFolderBtn);
  
saveTheme();
loadTheme();
// checkDarkLiteStatus(workingTheme);
// toggleDarkLiteMode();

  
  const darkLiteBtn = document.querySelector("#dark-lite-btn");
  darkLiteBtn.addEventListener("click", handleDarkLiteBtn);
  darkLiteBtn.addEventListener("click", toggleDarkLiteMode(workingTheme));


  const newTaskPriorityToggle = document.querySelector(
    "#new-task-priority-toggle"
  );
  darkLiteBtn.addEventListener("click", newTaskPriorityChecked);
  newTaskPriorityToggle.addEventListener("change", newTaskPriorityChecked);

  // defaultData();

  createTasks(workingTasks);
  // createTaskColor(initialFolders);
  createTaskColor(workingFolders);
  checkPriorityStatus(workingTasks);
  checkCompletedStatus(workingTasks);
  checkDescriptionStatus(workingTasks);

  const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
  taskPriorityBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      priorityBtnClicked(index);
      console.log([index]);
    });
  });
  const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
  taskCompletedBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      completedBtnClicked(index);
      console.log([index]);
    });
  });

  const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
  taskTrashBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      trashBtnClicked(index);
      console.log([index]);
    });
  });

checkIfOverdue(workingTasks);
clearNewTaskForm();
clearNewFolderForm();
submitNewTask();
submitNewFolder();
populateNewTaskFormFolderOptions(workingFolders);
checkIfNoTasks();
});
