import "./styles/styles.css";

import { createTitle } from "./javascript/title.js";
import { createNav } from "./javascript/nav.js";
import { createStatusBar } from "./javascript/statusBar.js";
import {
  handleStatusBtn,
  handleNewTaskBtn,
  handleNewFolderBtn,
  handleDarkLiteBtn,
} from "./javascript/navBtns.js";
import { createNewTaskForm } from "./javascript/newTaskForm.js";
import { createNewFolderForm } from "./javascript/newFolderForm.js";
import { changeDarkLiteImgs } from "./javascript/checkDarkLiteImgs.js";
import { newTaskPriorityChecked } from "./javascript/miscBtns.js";
import { createTasks } from "./javascript/taskContent.js";
// import { defaultData } from "./javascript/defaultData.js";
import { Task, Folder } from "./javascript/classes.js";

  const initialTasks = [
    new Task(
      "t0",
      "Take out the trash",
      "overdue",
      "2024 JUL 29",
      "high",
      "incomplete",
      "Chores",
      ""
    ),
    new Task(
      "t1",
      "Grocery Store",
      "overdue",
      "2024 AUG 01",
      "normal",
      "incomplete",
      "Chores",
      "Buy: milk, bread, eggs."
    ),
    new Task(
      "t2",
      "Do Laundry",
      "overdue",
      "2024 AUG 05",
      "normal",
      "incomplete",
      "Chores",
      ""
    ),
  ];


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

const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
darkLiteBtn.addEventListener("click", newTaskPriorityChecked);
newTaskPriorityToggle.addEventListener("change", newTaskPriorityChecked);

// defaultData();

  createTasks(initialTasks);
});
