// import { format, parseISO } from "date-fns";

// const date = parseISO("2024-08-11");
// console.log("Parsed Date:", date);

// const formattedDate = format(date, "MMMM dd, yyyy");
// console.log("Formatted Date:", formattedDate);

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
// import { changeDarkLiteImgs } from "./javascript/checkDarkLiteImgs.js";
import {
  changeDarkLiteImgs,
  checkPriorityStatus,
  checkCompletedStatus,
  checkIfOverdue,
} from "./javascript/checkStatus.js";
import { newTaskPriorityChecked } from "./javascript/miscBtns.js";
import {
  createTasks,
  createTaskColor,
  priorityBtnClicked,
  completedBtnClicked,
  
} from "./javascript/taskContent.js";
// import { defaultData } from "./javascript/defaultData.js";
import { Task, Folder } from "./javascript/classes.js";

const initialTasks = [
  new Task(
    "t0",
    "Take out the trash",
    //   "overdue",
    "07/29/2024",
    "high",
    "incomplete",
    "Chores Folder",
    ""
  ),
  new Task(
    "t1",
    "Grocery Store",
    //   "overdue",
    "08/10/2024",
    "normal",
    "incomplete",
    "Chores  Folder",
    "*Buy: milk, bread, eggs."
  ),
  new Task(
    "t2",
    "Run 5k Course",
    //   "overdue",
    "08/15/2024",
    "normal",
    "incomplete",
    "Fitness Folder",
    ""
  ),
  new Task(
    "t3",
    "Find zen in the elongated, perpetual now that is always fleeting",
    //   "overdue",
    "08/15/1996",
    "high",
    "incomplete",
    "Default Folder",
    ""
  ),
];

const initialFolders = [
  new Folder("f0", "Default Folder", "--fc07"),
  new Folder("f1", "Chores Folder", "--fc05"),
  new Folder("f2", "Fitness Folder", "--fc01"),
  new Folder("f3", "Repair Folder", "--fc10"),
  new Folder("f4", "Test Folder", "--fc09"),
];

//   function convertToFormattedDate() {
//     const arrayDate = in;

//     // Get year, month, day
//     const year = date.getFullYear();

//     const monthNames = [
//       "JAN",
//       "FEB",
//       "MAR",
//       "APR",
//       "MAY",
//       "JUN",
//       "JUL",
//       "AUG",
//       "SEP",
//       "OCT",
//       "NOV",
//       "DEC",
//     ];
//     const month = monthNames[date.getMonth()];

//     const day = date.getDate().toString().padStart(2, "0");

//     // Get day of the week
//     const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//     const dayOfWeek = dayNames[date.getDay()];

//     return `${year} ${month} ${day} (${dayOfWeek})`;
//   }

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

  createTasks(initialTasks);
  createTaskColor(initialFolders);
  checkPriorityStatus(initialTasks);
  checkCompletedStatus(initialTasks);

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

checkIfOverdue(initialTasks);


});
