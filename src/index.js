import "./styles/styles.css";

import "./javascript/handleImages.js";  // FYI: importing IIFEs works a bit differently, this syntax import shown here is all that is needed to automatically invoke the IIFE in handleImage.js

// import "./javascript/handleStatusBtn.js";
// import "./javascript/handleAddTaskBtn.js";

import {
  handleStatusBtn,
  handleAddTaskBtn,
  handleAddFolderBtn,
  handleDarkLightBtn
} from "./javascript/navBtns.js";

// import { createNewTask } from "./javascript/createNewTask.js";
import miscControls from "./javascript/miscControls.js";

import { Task, Folder } from "./javascript/classes.js";


handleStatusBtn();
handleAddTaskBtn();
handleAddFolderBtn();
handleDarkLightBtn();



// Call the function initially and set up event listener
document.addEventListener('DOMContentLoaded', () => {
  miscControls.newTaskPriorityChecked(); // Call the function initially to set the correct state

  // Add event listener to the checkbox
  document
    .querySelector("#priority-checkbox")
    .addEventListener("change", miscControls.newTaskPriorityChecked);
});

document.addEventListener("DOMContentLoaded", () => {

  // Add event listener to the checkbox
  document
    .querySelector(".task-priority-btn")
    .addEventListener("click", miscControls.priorityBtnClicked);
});

document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to the checkbox
  document
    .querySelector(".task-completed-btn")
    .addEventListener("click", miscControls.completedBtnClicked);
});

const initialTasks = [
new Task("t0", "Take out the trash", "overdue", "2024 JUL 29", "high", "incomplete", "Chores", "")
];

// initialTasks.forEach((task) => console.log(task.getTaskDetails()));

console.log(initialTasks);

const initialFolders = [
  new Folder(
    "f0",
    "Default",
    "#ffffff"
  ),
];
console.log(initialFolders);