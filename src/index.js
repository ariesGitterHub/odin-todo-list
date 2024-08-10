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
      "Chores",
      ""
    ),
    new Task(
      "t1",
      "Grocery Store",
    //   "overdue",
      "08/01/2024",
      "normal",
      "incomplete",
      "Chores",
      "*Buy: milk, bread, eggs."
    ),
    new Task(
      "t2",
      "Run 5k Course",
    //   "overdue",
      "08/05/2024",
      "normal",
      "completed",
      "Fitness",
      ""
    ),
    new Task(
      "t3",
      "Find Zen",
    //   "overdue",
      "08/15/1996",
      "high",
      "incomplete",
      "Default",
      ""
    ),
  ];

    const initialFolders = [
      new Folder("f0", "Default", "--fc07"),
      new Folder("f1", "Chores", "--fc05"),
      new Folder("f2", "Fitness", "--fc01"),
      new Folder("f3", "Repair", "--fc10"),
      new Folder("f4", "Test", "--fc09"),
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

const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
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

});



