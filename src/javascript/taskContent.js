import {
  // taskContent,
    darkLiteBtn,
    taskTitle,
    taskDueDate,
    taskFolder,
    taskOverdueNoticeImg,
    taskDescription,
    taskPriorityBtn,
    taskCompletedBtn,
} from "./config.js";

import dmTaskOverdueNoticeImg from "../assets/dm-overdue-adta.svg";
import dmOverdueBgImg from "../assets/dm-overdue-bg.svg";
import lmTaskOverdueNoticeImg from "../assets/lm-overdue-adta.svg";
import lmOverdueBgImg from "../assets/lm-overdue-bg.svg";

import { Task, Folder } from "./classes.js";

export function priorityBtnClicked() {
    if (taskPriorityBtn) {
      taskPriorityBtn.addEventListener("click", handleClick);
    } else {
      console.warn(
        "Warning: taskPriorityBtn or taskContent components missing."
      );
    }

    function handleClick() {
        if (taskPriorityBtn.value === "normal") {
        taskPriorityBtn.value = "high";

        taskPriorityBtn.style.borderColor = "var(--alert)";
        taskTitle.style.color = "var(--alert)";
        } else if (taskPriorityBtn.value === "high") {
        taskPriorityBtn.value = "normal";
        taskPriorityBtn.style.borderColor = "var(--fc07)";
        taskTitle.style.color = "var(--fc07)";
        }
    }
};

export function completedBtnClicked() {
    if (taskCompletedBtn) {
      taskCompletedBtn.addEventListener("click", handleClick);
    } else {
      console.warn(
        "Warning: taskCompletedBtn or taskContent components missing."
      );
    }

    function handleClick() {
        if (taskCompletedBtn.value === "incomplete" && darkLiteBtn.value === "dark") {
        taskCompletedBtn.value = "completed";
        taskCompletedBtn.style.backgroundColor = "var(--activated)";
        taskTitle.style.textDecoration = "line-through";
        taskDueDate.style.textDecoration = "line-through";
        taskFolder.style.textDecoration = "line-through";
        taskDescription.style.textDecoration = "line-through";
        taskOverdueNoticeImg.src = dmOverdueBgImg;
        } else if (
        taskCompletedBtn.value === "completed" &&
        darkLiteBtn.value === "dark"
        ) {
        taskCompletedBtn.value = "incomplete";
        taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
        taskTitle.style.textDecoration = "none";
        taskDueDate.style.textDecoration = "none";
        taskFolder.style.textDecoration = "none";
        taskDescription.style.textDecoration = "none";
        taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
        } else if (
        taskCompletedBtn.value === "incomplete" &&
        darkLiteBtn.value === "lite"
        ) {
        taskCompletedBtn.value = "completed";
        taskCompletedBtn.style.backgroundColor = "var(--activated)";
        taskTitle.style.textDecoration = "line-through";
        taskDueDate.style.textDecoration = "line-through";
        taskFolder.style.textDecoration = "line-through";
        taskDescription.style.textDecoration = "line-through";
        taskOverdueNoticeImg.src = lmOverdueBgImg;
        } else if (
        taskCompletedBtn.value === "completed" &&
        darkLiteBtn.value === "lite"
        ) {
        taskCompletedBtn.value = "incomplete";
        taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
        taskTitle.style.textDecoration = "none";
        taskDueDate.style.textDecoration = "none";
        taskFolder.style.textDecoration = "none";
        taskDescription.style.textDecoration = "none";
        taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;
        }
    }
};

export function appData() {
const initialTasks = [
    new Task
    ("t0", "Take out the trash", "overdue", "2024 JUL 29", "high", "incomplete", "Chores", ""),
    new Task
    ("t1", "Grocery Store", "overdue", "2024 AUG 01", "normal", "incomplete", "Chores", "Buy: milk, bread, eggs."),
];
// initialTasks.forEach((task) => console.log(task.getTaskDetails()));
console.log(initialTasks);

const initialFolders = [
    new Folder("f0", "Default", "#ffffff"), 
    new Folder ("f1", "Chroes", "fffffff")
];

console.log(initialFolders);

};

// export function renderTasks() {

//     const task = document.createElement("div");
//     task.classList.add("task");
//     taskContent.appendChild(task);

//         const mainCol = document.createElement("div");
//         mainCol.classList.add("lvl-col");
//         task.appendChild(mainCol);

//             const taskTitle = document.createElement("p");
//             taskTitle.classList.add("task-title");
//             taskTitle.textContent = "Title";
//             mainCol.appendChild(taskTitle);

//             const br1 = document.createElement("br");
//             mainCol.appendChild(br1);

//             const lvlRow1 = document.createElement("div");
//             lvlRow1.classList.add("lvl-row");
//             mainCol.appendChild(lvlRow1);

//                 const taskDueDate = document.createElement("div");
//                 taskDueDate.classList.add("task-due-date");
//                 taskDueDate.textContent = "Due: ";
//                 lvlRow1.appendChild(taskDueDate);

//                     const span = document.createElement("span");
//                     span.classList.add("date-holder");
//                     span.textContent = "00/00/0000";
//                     taskDueDate.appendChild(span);

//                 const taskOverdueNoticeImg = document.createElement("img");
//                 taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
//                 // taskOverdueNoticeImg.src = "";
//                 // taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
//                 taskOverdueNoticeImg.alt = "Date is overdue icon"
//                 lvlRow1.appendChild(taskOverdueNoticeImg);

//             // const lvlRow2 = document.createElement("div");
//             // lvlRow2.classList.add("lvl-row");
//             // mainCol.appendChild(XXXXXXXXX);

//             const taskFolder = document.createElement("div");
//             taskFolder.classList.add("task-folder");
//             taskFolder.textContent = "XXXXXXXX";
//             mainCol.appendChild(taskFolder);

//             const br2 = document.createElement("br");
//             mainCol.appendChild(br2);

//             const taskDescription = document.createElement("div");
//             taskDescription.classList.add("task-description");
//             taskDescription.textContent = "Loremmmmmmmmm";
//             mainCol.appendChild(taskDescription);

//         const br3 = document.createElement("br");
//         task.appendChild(br3);

//         const taskBtnCont = document.createElement("div");
//         taskBtnCont.classList.add("lvl-row", "task-btn-cont");
//         task.appendChild(taskBtnCont);

//             const taskBtnCol1 = document.createElement("div");
//             taskBtnCol1.classList.add("lvl-col");
//             taskBtnCont.appendChild(taskBtnCol1);

//                 const taskPriorityBtn = document.createElement("button");
//                 taskPriorityBtn.classList.add("task-priority-btn");
//                 taskPriorityBtn.value = "normal";
//                 taskBtnCol1.appendChild(taskPriorityBtn);

//                     const taskPriorityImg = document.createElement("img");
//                     taskPriorityImg.classList.add("task-priority-img");
//                     // taskPriorityImg.src = "";
//                     // taskPriorityImg.src = dmPriorityImg;
//                     taskPriorityImg.alt = "Priority task icon";
//                     taskPriorityBtn.appendChild(taskPriorityImg);

//             const taskBtnCol2 = document.createElement("div");
//             taskBtnCol2.classList.add("lvl-col");
//             taskBtnCont.appendChild(taskBtnCol2);

//                 const taskCompletedBtn = document.createElement("button");
//                 taskCompletedBtn.classList.add("task-completed-btn");
//                 taskCompletedBtn.value = "incomplete";
//                 taskBtnCol2.appendChild(taskCompletedBtn);

//                     const taskCompletedImg = document.createElement("img");   
//                     taskCompletedImg.classList.add("task-completed-img");
//                     // taskCompletedImg.src = "";
//                     // taskCompletedImg.src = dmCompletedImg;
//                     taskCompletedImg.alt = "Completed task icon";
//                     taskCompletedBtn.appendChild(taskCompletedImg);

//             const taskBtnCol3 = document.createElement("div");
//             taskBtnCol3.classList.add("lvl-col");
//             taskBtnCont.appendChild(taskBtnCol3);

//                 const taskEditBtn = document.createElement("button");
//                 taskEditBtn.classList.add("task-edit-btn");
//                 taskEditBtn.value = "off";
//                 taskBtnCol3.appendChild(taskEditBtn);

//                     const taskEditImg = document.createElement("img");  
//                     taskEditImg.classList.add("task-edit-img");
//                     // taskEditImg.src = "";
//                     // taskEditImg.src = dmEditImg;
//                     taskEditImg.alt = "Edit task icon";
//                     taskEditBtn.appendChild(taskEditImg);

//             const taskBtnCol4 = document.createElement("div");
//             taskBtnCol4.classList.add("lvl-col");
//             taskBtnCont.appendChild(taskBtnCol4);

//                 const taskTrashBtn = document.createElement("button");
//                 taskTrashBtn.classList.add("task-trash-btn");
//                 taskBtnCol4.appendChild(taskTrashBtn);

//                     const taskTrashImg = document.createElement("img");  
//                     taskTrashImg.classList.add("task-trash-img");
//                     // taskTrashImg.src = "";
//                     // taskTrashImg.src = dmTrashImg;
//                     taskTrashImg.alt = "Trash task icon";
//                     taskTrashBtn.appendChild(taskTrashImg);
// };

//   taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;

//   taskPriorityImg.src = dmPriorityImg;
//   taskCompletedImg.src = dmCompletedImg;
//   taskEditImg.src = dmEditImg;
//   taskTrashImg.src = dmTrashImg;