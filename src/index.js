import "./styles/styles.css";
// import { Task, Folder } from "./javascript/classes.js";
import { workingFolders, workingTasks } from "./javascript/storageAndData.js"


import { createTitle } from "./javascript/title.js";

import { createNav } from "./javascript/nav.js";

import { createStatusBar } from "./javascript/statusBar.js";

import { handleStatusBtn, handleNewTaskBtn, handleNewFolderBtn, handleDarkLiteBtn } from "./javascript/navBtns.js";

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

import { changeDarkLiteImgs, checkPriorityStatus, checkCompletedStatus, checkIfOverdue, checkDescriptionStatus } from "./javascript/checkStatus.js";

// import {  } from "./javascript/miscBtns.js";

import {
  createTasks,
  createTaskColor,
  priorityBtnClicked,
  completedBtnClicked,
  trashBtnClicked,
} from "./javascript/taskContent.js";

// const defaultTasks = [
//   new Task(
//     "t0",
//     "Take out the trash",
//     "08/12/2024",
//     "high",
//     "incomplete",
//     "Folder: Chores",
//     "Don't forget to empty the upstairs trash cans!"
//   ),
//   new Task(
//     "t1",
//     "Grocery Store",
//     "08/14/2024",
//     "normal",
//     "incomplete",
//     "Folder: Chores",
//     "Buy: apples, potatoes, carrots, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, frozen blueberries."
//   ),
//   new Task(
//     "t2",
//     "Run my usual 5k course",
//     "08/12/2024",
//     "normal",
//     "completed",
//     "Folder: Fitness",
//     "Try to go later in the evening, around sunset."
//   ),
//   new Task(
//     "t3",
//     "Write that novel about that thing.",
//     //   "overdue",
//     "11/05/2012",
//     "normal",
//     "incomplete",
//     "Folder: Default",
//     ""
//   ),
//   new Task(
//     "t4",
//     "Fix the sharks with the frickin' laser beams on their heads.",
//     "04/01/2054",
//     "high",
//     "incomplete",
//     "Folder: Repair",
//     "Mind the radioactive squid, too."
//   ),
// ];

// const workingTasks = [];

// const defaultFolders = [
//   new Folder("f0", "Folder: Default", "--fc07"),
//   new Folder("f1", "Folder: Chores", "--fc06"),
//   new Folder("f2", "Folder: Fitness", "--fc01"),
//   new Folder("f3", "Folder: Repair", "--fc06"),
// ];

// const workingFolders = [];

document.addEventListener("DOMContentLoaded", () => {
  createTitle();
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

  const darkLiteBtn = document.querySelector("#dark-lite-btn");
  darkLiteBtn.addEventListener("click", handleDarkLiteBtn);
  darkLiteBtn.addEventListener("click", changeDarkLiteImgs);

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
});
