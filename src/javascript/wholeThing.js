// index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <link rel="shortcut icon" href="#">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Odin Todo List</title>
// </head>
// <body>
//     <div id="header-ctrl-cont">
//         <header>
//             <div id="header-content"></div>
//         </header>        
//     </div>
//     <div class="section-bot-pad"></div>
//     <div id="folder-content"></div>
//     <div id="task-content"></div>
// </body>
// </html>


// index.js

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
  handleDarkLiteBtn,
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
  checkFolderAddClass,
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

// function updateDOM() {
//     const newElement = document.createElement("div");
//     newElement.textContent = "!";
//     document.getElementById("header-content").appendChild(newElement);
// }

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
  window.addEventListener("scroll", debounce(toggleSticky, 100));

  createNav();
  createStatusBar();
  createNewTaskForm();
  createEditTaskForm();
  clearEditTaskForm();
  createNewFolderForm();
  createEditFolderForm();
  clearEditFolderForm();
  checkAndOrganizeByDate(workingTasks);
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

  // Issue with no sound from only one btn, the taskCompletedBtn, error check:
  const btnSound = document.querySelectorAll(".btn-sound");
  btnSound.forEach((button) => {
    button.addEventListener("click", (event) => {
      //   console.log("Button clicked:", event.target); // Ensure the event is triggered
      playClickSound(event);
      // handleButtonClick(event);
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

  const newTaskPriorityToggle = document.querySelector(
    "#new-task-priority-toggle"
  );
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

  const taskEditBtns = document.querySelectorAll(".task-edit-btn");
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


// taskContent.js

import {
  dmTaskOverdueNoticeImg,
  dmPriorityImg,
  dmCompletedImg,
  dmEditImg,
  dmTrashImg,
  lmTaskOverdueNoticeImg,
  lmPriorityImg,
  lmCompletedImg,
  lmEditImg,
  lmTrashImg,
} from "./imageExporter.js";

import { reformatDate } from "./checkStatus.js";

import {
  updatePriorityStatus,
  updateCompleteStatus,
  removeTask,
  workingTheme,
} from "./storageAndData.js";

export function defaultTaskBtnImgs() {
  if (workingTheme[0].mode === "dark") {
    return {
      overdueNotice: dmTaskOverdueNoticeImg,
      priority: dmPriorityImg,
      completed: dmCompletedImg,
      edit: dmEditImg,
      trash: dmTrashImg,
    };
  } else if (workingTheme[0].mode === "lite") {
    return {
      overdueNotice: lmTaskOverdueNoticeImg,
      priority: lmPriorityImg,
      completed: lmCompletedImg,
      edit: lmEditImg,
      trash: lmTrashImg,
    };
  }
}

export function createTasks(tasks) {
  const taskContent = document.querySelector("#task-content");
  const imgUrls = defaultTaskBtnImgs();

  tasks.forEach((taskItem) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.dataset.id = `${taskItem.taskId}`;

    const mainCol = document.createElement("div");
    mainCol.classList.add("lvl-col");

    const taskName = document.createElement("p");
    taskName.classList.add("task-name");
    taskName.dataset.name = `${taskItem.taskName}`;
    taskName.textContent = `${taskItem.taskName}`;

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task-due-date");
    taskDueDate.dataset.date = `${taskItem.dueByDate.replace(/-/g, "/")}`;
    taskDueDate.textContent = `Due: ${reformatDate(
      taskItem.dueByDate.replace(/-/g, "/")
    )}`;

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const taskOverdueNoticeImg = document.createElement("img");
    taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
    taskOverdueNoticeImg.src = imgUrls.overdueNotice;
    taskOverdueNoticeImg.alt = "Overdue warning icon";

    const taskOverdueNoticeP = document.createElement("p");
    taskOverdueNoticeP.classList.add("task-overdue-notice-p");
    taskOverdueNoticeP.textContent = "";

    const taskFolder = document.createElement("div");
    taskFolder.classList.add("task-folder");
    taskFolder.dataset.folder = `${taskItem.folderLocation}`;
    taskFolder.textContent = `Folder: ${taskItem.folderLocation}`;

    const br1 = document.createElement("br");
    br1.classList.add("task-description-removeBR1");

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.dataset.description = `${taskItem.descriptionText}`;
    taskDescription.textContent = `${taskItem.descriptionText}`;

    const br2 = document.createElement("br");
    br2.classList.add("task-description-removeBR2");

    const taskBtnCont = document.createElement("div");
    taskBtnCont.classList.add("lvl-row", "task-btn-cont");

    const taskBtnCol1 = document.createElement("div");
    taskBtnCol1.classList.add("lvl-col");

    const taskPriorityBtn = document.createElement("button");
    taskPriorityBtn.classList.add("task-priority-btn", "btn-sound");
    taskPriorityBtn.value = "low";

    const taskPriorityBtnImg = document.createElement("img");
    taskPriorityBtnImg.classList.add("task-priority-btn-img");
    taskPriorityBtnImg.src = imgUrls.priority;
    taskPriorityBtnImg.alt = "Priority flag icon";

    const taskBtnCol2 = document.createElement("div");
    taskBtnCol2.classList.add("lvl-col");

    const taskCompletedBtn = document.createElement("button");
    taskCompletedBtn.classList.add("task-completed-btn", "btn-sound");
    taskCompletedBtn.value = "incomplete";

    const taskCompletedBtnImg = document.createElement("img");
    taskCompletedBtnImg.classList.add("task-completed-btn-img");
    taskCompletedBtnImg.src = imgUrls.completed;
    taskCompletedBtnImg.alt = "Completed check mark icon";

    const taskBtnCol3 = document.createElement("div");
    taskBtnCol3.classList.add("lvl-col");

    const taskEditBtn = document.createElement("button");
    taskEditBtn.classList.add("task-edit-btn", "btn-sound");
    // taskEditBtn.value = "off";
    taskEditBtn.dataset.id = `${taskItem.taskId}`;

    const taskEditBtnImg = document.createElement("img");
    taskEditBtnImg.classList.add("task-edit-btn-img");
    taskEditBtnImg.src = imgUrls.edit;
    taskEditBtnImg.alt = "Edit task icon";

    const taskBtnCol4 = document.createElement("div");
    taskBtnCol4.classList.add("lvl-col");

    const taskTrashBtn = document.createElement("button", "btn-sound");
    taskTrashBtn.classList.add("task-trash-btn");

    const taskTrashBtnImg = document.createElement("img");
    taskTrashBtnImg.classList.add("task-trash-btn-img");
    taskTrashBtnImg.src = imgUrls.trash;
    taskTrashBtnImg.alt = "Trash can icon";

    const sectionBotPad = document.createElement("div");
    sectionBotPad.classList.add("section-bot-pad");

    taskContent.append(task, sectionBotPad);
    // task.append(mainCol, br2, taskBtnCont);
    task.append(mainCol, taskBtnCont);
    mainCol.append(
      taskName,
      taskDueDate,
      lvlRow1,
      taskFolder,
      br1,
      taskDescription,
      br2
    );
    lvlRow1.append(taskOverdueNoticeImg, taskOverdueNoticeP);
    taskBtnCont.append(taskBtnCol1, taskBtnCol2, taskBtnCol3, taskBtnCol4);
    taskBtnCol1.append(taskPriorityBtn);
    taskPriorityBtn.append(taskPriorityBtnImg);
    taskBtnCol2.append(taskCompletedBtn);
    taskCompletedBtn.append(taskCompletedBtnImg);
    taskBtnCol3.append(taskEditBtn);
    taskEditBtn.append(taskEditBtnImg);
    taskBtnCol4.append(taskTrashBtn);
    taskTrashBtn.append(taskTrashBtnImg);
  });
}

// RE-EXAMINE THIS CLOSELY!!!! This was a bit beyond me to finish 100% correctly...
export function createTaskColor(folders) {
  const taskFolderElements = document.querySelectorAll(".task-folder");

  taskFolderElements.forEach((taskFolderElement) => {
    const folderName = taskFolderElement.dataset.folder;
    const matchingFolder = folders.find(
      (folder) => folder.folderName === folderName
    );

    if (matchingFolder) {
      const task = taskFolderElement.closest(".task"); // Finds the parent .task element
      task.style.borderColor = `var(${matchingFolder.folderColor})`;
      task.style.color = `var(${matchingFolder.folderColor})`;

      const taskBtns = task.querySelectorAll("button");
      taskBtns.forEach((button) => {
        button.style.borderColor = `var(${matchingFolder.folderColor})`;
      });
    } else {
      console.warn(`No matching folder found for ${folderName}.`);
    }
  });
}

export function priorityBtnClicked(index) {
  const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
  const taskTiles = document.querySelectorAll(".task");
  const taskNames = document.querySelectorAll(".task-name");
  const taskPriorityBtn = taskPriorityBtns[index];
  const taskTile = taskTiles[index];
  const taskName = taskNames[index];

  if (taskPriorityBtn) {
    if (taskPriorityBtn.value === "low") {
      taskPriorityBtn.value = "high";
      taskPriorityBtn.style.backgroundColor = "var(--activated)";
      // taskName.style.borderColor = "var(--alert)";
      taskName.style.color = "var(--alert)";
      taskName.style.textDecoration = "underline";

      updatePriorityStatus(taskTile.dataset.id);

      // Append "!!!" to the task title if not already present

      if (!taskName.textContent.includes("!!!")) {
        taskName.textContent += " !!!";
      }
    } else if (taskPriorityBtn.value === "high") {
      taskPriorityBtn.value = "low";
      taskPriorityBtn.style.backgroundColor = "var(--bkgd)"; // Reset to default
      // taskName.style.borderColor = "var(--bkgd)"; // Reset to default
      taskName.style.color = "inherit";
      taskName.style.textDecoration = "none";

      updatePriorityStatus(taskTile.dataset.id);

      const titleText = taskName.textContent;
      if (titleText.includes("!!!")) {
        taskName.textContent = titleText.replace(" !!!", ""); // Remove the last occurrence of "!!!"
      }
    }
  } else {
    console.warn("taskPriorityBtn is null or not found in the DOM.");
  }
}

export function completedBtnClicked(index) {
  const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
  const taskTiles = document.querySelectorAll(".task");
  // const taskNames = document.querySelectorAll(".task-name");
  const taskCompletedBtn = taskCompletedBtns[index];
  const taskTile = taskTiles[index];
  // const taskName = taskNames[index];

  if (taskCompletedBtn) {
    if (taskCompletedBtn.value === "incomplete") {
      taskCompletedBtn.value = "completed";
      taskCompletedBtn.style.backgroundColor = "var(--activated)";
      taskTile.style.textDecoration = "line-through";
      taskTile.style.textDecorationThickness = "3px";
      taskTile.style.backgroundColor = "var(--activated)";
      // taskName.style.backgroundColor = "var(--activated)";
      // taskName.style.borderColor = "var(--activated)";
      updateCompleteStatus(taskTile.dataset.id);
      // console.log(`taskTiles ID = ${taskTile.dataset.id}`);
    } else if (taskCompletedBtn.value === "completed") {
      taskCompletedBtn.value = "incomplete";
      taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
      taskTile.style.textDecoration = "none";
      taskTile.style.backgroundColor = "var(--bkgd)";
      // taskName.style.backgroundColor = "var(--bkgd)";
      // taskName.style.borderColor = "inherit";
      updateCompleteStatus(taskTile.dataset.id);
    }
  } else {
    console.warn("taskCompletedBtn is null or not found in the DOM.");
  }
}

export function taskTrashBtnClicked(index) {
  const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
  const taskTiles = document.querySelectorAll(".task");
  const taskTrashBtn = taskTrashBtns[index];
  const taskTile = taskTiles[index];

  if (taskTrashBtn) {
    removeTask(taskTile.dataset.id);
  } else {
    console.warn("taskTrashBtn is null or not found in the DOM.");
  }
}


//folderContent.js

import {
  dmTaskImg,
  dmFolderImg,
  dmEditImg,
  dmTrashImg,
  lmTaskImg,
  lmFolderImg,
  lmEditImg,
  lmTrashImg,
} from "./imageExporter.js";

import { checkIfOverdue, reformatDate } from "./checkStatus.js";

import { workingTasks, workingTheme, removeFolder } from "./storageAndData.js";

function defaultFolderBtnImgs() {
  if (workingTheme[0].mode === "dark") {
    return {
      task: lmTaskImg,
      folder: lmFolderImg,
      edit: lmEditImg,
      trash: dmTrashImg,
    };
  } else if (workingTheme[0].mode === "lite") {
    return {
      task: dmTaskImg,
      folder: dmFolderImg,
      edit: dmEditImg,
      trash: lmTrashImg,
    };
  }
}

checkIfOverdue(workingTasks);

export function createFolders(folders) {
  const folderContent = document.querySelector("#folder-content");
  folderContent.classList.add("none");

  const imgUrls = defaultFolderBtnImgs();

  folders.forEach((folderItem) => {
    const folder = document.createElement("div");
    folder.classList.add("folder", "lvl-col-folder-view");
    folder.dataset.id = `${folderItem.folderId}`;

    const folderBar = document.createElement("div");
    folderBar.classList.add("folder-bar");
    folderBar.style.backgroundColor = `var(${folderItem.folderColor})`;

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row-start");

    const folderFolderImg = document.createElement("img");
    folderFolderImg.classList.add("folder-folder-img");
    folderFolderImg.src = imgUrls.folder;
    folderFolderImg.alt = "Folder icon";

    const folderName = document.createElement("p");
    folderName.classList.add("folder-name");
    folderName.textContent = `${folderItem.folderName}`;

    const sanitizedFolderName = folderItem.folderName.replace(/\s+/g, "-");

    const folderTaskNum = document.createElement("p");
    folderTaskNum.classList.add("folder-task-num", sanitizedFolderName);
    folderTaskNum.textContent = ` (0)`;

    const lvlRow2 = document.createElement("div");
    lvlRow2.classList.add("lvl-row-end");

    const folderEditBtn = document.createElement("button");
    folderEditBtn.classList.add("folder-edit-btn", "btn-sound");
    folderEditBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

    const folderEditBtnImg = document.createElement("img");
    folderEditBtnImg.classList.add("folder-edit-btn-img");
    folderEditBtnImg.src = imgUrls.edit;
    folderEditBtnImg.alt = "Edit icon";

    const folderTrashBtn = document.createElement("button");
    folderTrashBtn.classList.add("folder-trash-btn", "btn-sound");
    folderTrashBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

    const folderTrashBtnImg = document.createElement("img");
    folderTrashBtnImg.classList.add("folder-trash-btn-img");
    folderTrashBtnImg.src = imgUrls.trash;
    folderTrashBtnImg.alt = "Trash can icon";

    folderContent.append(folder);
    folder.append(folderBar);
    folderBar.append(lvlRow1, lvlRow2);
    lvlRow1.append(folderFolderImg, folderName, folderTaskNum);
    lvlRow2.append(folderEditBtn, folderTrashBtn);
    folderEditBtn.append(folderEditBtnImg);
    folderTrashBtn.append(folderTrashBtnImg);

    const matchingTasks = workingTasks.filter(
      (task) => task.folderLocation === folderItem.folderName
    );

    matchingTasks.forEach((task) => {
      const folderTaskField = document.createElement("div");
      folderTaskField.classList.add("folder-task-field", sanitizedFolderName);
      folderTaskField.dataset.color = `${folderItem.folderColor}`;
      folderTaskField.style.color = `var(${folderTaskField.dataset.color})`;
      folderTaskField.style.borderColor = `var(${folderTaskField.dataset.color})`;

      const sanitizedTaskFolderP = folderItem.folderName.replace(/\s+/g, "-");

      const taskFolderPName = document.createElement("p");
      taskFolderPName.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPName.textContent = `${task.taskName.toUpperCase()}`;

      const taskFolderPDate = document.createElement("p");
      taskFolderPDate.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPDate.textContent = `Due by ${reformatDate(
        task.dueByDate.replace(/-/g, "/")
      )}; ${task.overdueFlag}`;

      const taskFolderPCOP = document.createElement("p");
      taskFolderPCOP.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPCOP.textContent = `Status: ${task.completedFlag}, ${task.priorityFlag} priority`;

      folder.append(folderTaskField);
      folderTaskField.append(taskFolderPName, taskFolderPDate, taskFolderPCOP);
    });
  });
}

export function countTasksByFolder() {
  const folderTiles = document.querySelectorAll(".folder");

  folderTiles.forEach((folderTile) => {
    const taskFolderPs = folderTile.querySelectorAll(".task-folder-p");
    const taskCount = taskFolderPs.length / 3;
    const folderTaskNum = folderTile.querySelector(".folder-task-num");

    if (taskCount) {
      folderTaskNum.textContent = `(${taskCount})`;
    }
  });
}

export function folderTrashBtnClicked(index) {
  const folderTrashBtns = document.querySelectorAll(".folder-trash-btn");
  const folderTrashBtn = folderTrashBtns[index];
  const folderTiles = document.querySelectorAll(".folder");
  const folderTile = folderTiles[index];

  if (folderTrashBtn) {
    removeFolder(folderTile.dataset.id);
  } else {
    console.warn("folderTrashBtn is null or not found in the DOM.");
  }
}

// newTaskForm.js

import {
  dmNewTaskImg,
  dmNewTaskPriorityFlagImg,
  dmNewTaskPriorityFlagImgBG,
  lmNewTaskPriorityFlagImg,
  lmNewTaskPriorityFlagImgBG,
} from "./imageExporter.js";

import { Task } from "./classes.js";

import { updateUI } from "./updateUI.js";

import { workingTheme, addTask, workingTasks } from "./storageAndData.js";

function defaultNewFormFlagImgs() {
  if (workingTheme[0].mode === "dark") {
    return {
      priorityFlag: dmNewTaskPriorityFlagImgBG,
    };
  } else if (workingTheme[0].mode === "lite") {
    return {
      priorityFlag: lmNewTaskPriorityFlagImgBG,
    };
  }
}

export function createNewTaskForm() {
  const header = document.querySelector("header");
  const headerContent = document.querySelector("#header-content");

  const imgUrls = defaultNewFormFlagImgs();

  const newTaskForm = document.createElement("form");
  newTaskForm.id = "new-task-form";
  newTaskForm.action = "";

  const lvlRow1 = document.createElement("div");
  lvlRow1.classList.add("lvl-row");

  const newTaskImg = document.createElement("img");
  newTaskImg.id = "new-task-img";
  newTaskImg.src = dmNewTaskImg;
  newTaskImg.alt = "New task icon";

  const newTaskFormTitle = document.createElement("p");
  newTaskFormTitle.classList.add("font-fancy");
  newTaskFormTitle.textContent = "New Task";

  const lvlCol1 = document.createElement("div");
  lvlCol1.classList.add("lvl-col");

  const newTaskNameLabel = document.createElement("label");
  newTaskNameLabel.classList.add("form-field-title");
  newTaskNameLabel.setAttribute("for", "new-task-name");
  newTaskNameLabel.textContent = "Task Name";

  const newTaskNameInput = document.createElement("input");
  newTaskNameInput.type = "text";
  newTaskNameInput.id = "new-task-name";
  newTaskNameInput.name = "new-task-name";
  newTaskNameInput.placeholder = "Enter new task name...";
  newTaskNameInput.autocomplete = "off";
  newTaskNameInput.required = "true";

  const lvlCol2 = document.createElement("div");
  lvlCol2.classList.add("lvl-col");

  const newTaskFolderLabel = document.createElement("label");
  newTaskFolderLabel.classList.add("form-field-title");
  newTaskFolderLabel.setAttribute("for", "new-task-folder");
  newTaskFolderLabel.textContent = "Task Folder";

  const newTaskFolderSelect = document.createElement("select");
  newTaskFolderSelect.id = "new-task-folder";
  newTaskFolderSelect.name = "new-task-folder";
  newTaskFolderSelect.value = "";
  newTaskFolderSelect.required = "true";

  // Toggle switch start

  const lvlRowWidth1 = document.createElement("div");
  lvlRowWidth1.classList.add("lvl-row-width");

  const lvlCol3 = document.createElement("div");
  lvlCol3.classList.add("lvl-col");

  const taskToggleP = document.createElement("p");
  taskToggleP.classList.add("form-field-title");
  taskToggleP.textContent = "Priority";

  const taskToggleLabel = document.createElement("label");
  taskToggleLabel.classList.add("switch");
  taskToggleLabel.setAttribute("for", "new-task-priority-toggle");

  const taskToggleInput = document.createElement("input");
  taskToggleInput.type = "checkbox";
  taskToggleInput.id = "new-task-priority-toggle";
  taskToggleInput.name = "new-task-priority-toggle";
  taskToggleInput.checked = false;
  taskToggleInput.dataset.value = "low";

  const span1 = document.createElement("span");
  span1.classList.add("slider", "round");

  const newTaskPriorityFlagImg = document.createElement("img");
  newTaskPriorityFlagImg.id = "new-task-priority-flag-img";
  newTaskPriorityFlagImg.src = imgUrls.priorityFlag;
  newTaskPriorityFlagImg.alt = "Priority flag icon";

  const lvlCol4 = document.createElement("div");
  lvlCol4.classList.add("lvl-col");

  const newTaskDueDateLabel = document.createElement("label");
  newTaskDueDateLabel.classList.add("form-field-title");
  newTaskDueDateLabel.setAttribute("for", "new-task-due-date");
  newTaskDueDateLabel.textContent = "Due Date";

  const newTaskDueDateInput = document.createElement("input");
  newTaskDueDateInput.type = "date";
  newTaskDueDateInput.id = "new-task-due-date";
  newTaskDueDateInput.name = "new-task-due-date";
  newTaskDueDateInput.required = "true";

  // Toggle switch end

  const lvlCol5 = document.createElement("div");
  lvlCol5.classList.add("lvl-col");

  const newTaskDescriptionLabel = document.createElement("label");
  newTaskDescriptionLabel.classList.add("form-field-title");
  newTaskDescriptionLabel.setAttribute("for", "new-task-description");
  newTaskDescriptionLabel.textContent = "Brief Description (optional)";

  const textArea = document.createElement("textarea");
  textArea.id = "new-task-description";
  textArea.name = "new-task-description";
  textArea.rows = "";
  textArea.cols = "";
  textArea.placeholder = "Enter additional details here...";

  const lvlRowWidth2 = document.createElement("div");
  lvlRowWidth2.classList.add("lvl-row-width");

  const newTaskCancelBtn = document.createElement("button");
  newTaskCancelBtn.type = "button";
  newTaskCancelBtn.classList.add("cancel", "btn-sound");
  newTaskCancelBtn.id = "new-task-cancel-btn";
  newTaskCancelBtn.textContent = "Cancel";

  const newTaskSubmitBtn = document.createElement("button");
  newTaskSubmitBtn.type = "submit";
  newTaskSubmitBtn.classList.add("submit", "btn-sound");
  newTaskSubmitBtn.id = "new-task-submit-btn";
  newTaskSubmitBtn.textContent = "Submit";

  header.appendChild(headerContent);
  headerContent.appendChild(newTaskForm);
  newTaskForm.append(
    lvlRow1,
    lvlCol1,
    lvlCol2,
    lvlRowWidth1,
    lvlCol5,
    lvlRowWidth2
  );
  lvlRow1.append(newTaskImg, newTaskFormTitle);
  lvlCol1.append(newTaskNameLabel, newTaskNameInput);
  lvlCol2.append(newTaskFolderLabel, newTaskFolderSelect);
  // newTaskFolderSelect.append(newTaskFolderOption);
  lvlRowWidth1.append(lvlCol3, newTaskPriorityFlagImg, lvlCol4);
  lvlCol3.append(taskToggleP, taskToggleLabel);
  lvlCol4.append(newTaskDueDateLabel, newTaskDueDateInput);
  lvlCol5.append(newTaskDescriptionLabel, textArea);
  taskToggleLabel.append(taskToggleInput, span1);
  lvlRowWidth2.append(newTaskCancelBtn, newTaskSubmitBtn);
}

export function populateNewTaskFormFolderOptions(folders) {
  const newTaskFolderSelect = document.querySelector("#new-task-folder");

  folders.forEach((folderItem) => {
    const folderOption = document.createElement("option");
    folderOption.classList.add(".new-task-folder-option");
    folderOption.value = `${folderItem.folderName}`;
    folderOption.textContent = `${folderItem.folderName}`;

    newTaskFolderSelect.appendChild(folderOption);
  });
}

export function newTaskPriorityChecked() {
  const darkLiteBtn = document.querySelector("#dark-lite-btn");
  const newTaskPriorityToggle = document.querySelector(
    "#new-task-priority-toggle"
  );
  const newTaskPriorityFlagImg = document.querySelector(
    "#new-task-priority-flag-img"
  );
  if (newTaskPriorityToggle) {
    if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
      newTaskPriorityToggle.dataset.value = "high";
      newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
    } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
      newTaskPriorityToggle.dataset.value = "low";
      newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImgBG;
    } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
      newTaskPriorityToggle.dataset.value = "high";
      newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
    } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
      newTaskPriorityToggle.dataset.value = "low";
      newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImgBG;
    }
  } else {
    console.warn("newTaskPriorityToggle is null or not found in the DOM.");
  }
}

export function clearNewTaskForm() {
  const newTaskForm = document.querySelector("#new-task-form");
  const newTaskCancelBtn = document.querySelector("#new-task-cancel-btn");
  // const newTaskPriorityFlagImg = document.querySelector("#new-task-priority-flag-img");
  if (newTaskCancelBtn && newTaskForm) {
    newTaskCancelBtn.addEventListener("click", function () {
      updateUI();
    });
  } else {
    console.warn(
      "newTaskCancelBtn or newTaskForm is null or not found in the DOM."
    );
  }
}

function getTaskFormData() {
  return {
    taskName: document.querySelector("#new-task-name").value,
    folderLocation: document.querySelector("#new-task-folder").value,
    priorityFlag: document.querySelector("#new-task-priority-toggle").dataset
      .value,
    dueByDate: document.querySelector("#new-task-due-date").value,
    descriptionText: document.querySelector("#new-task-description").value,
    taskId: `t${workingTasks.length + 1}`,
    completedFlag: "incomplete",
  };
}

function createNewTask(formData) {
  return new Task(
    formData.taskId,
    formData.taskName,
    formData.dueByDate,
    formData.overdueFlag,
    formData.priorityFlag,
    formData.completedFlag,
    formData.folderLocation,
    formData.descriptionText
  );
}

export function submitNewTask() {
  const newTaskSubmitBtn = document.querySelector("#new-task-submit-btn");
  const newTaskForm = document.querySelector("#new-task-form");

  if (newTaskSubmitBtn && newTaskForm) {
    newTaskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Extract data from form...
      const formData = getTaskFormData();

      // Create new task
      const newTask = createNewTask(formData);

      // Add task
      addTask(newTask);
      updateUI();
    });
  } else {
    console.warn(
      "newTaskSubmitBtn or newTaskForm is null or not found in the DOM."
    );
  }
}

// newFolderForm.js

import { dmNewFolderImg } from "./imageExporter.js";
import { Folder } from "./classes.js";
import { updateUI } from "./updateUI.js";
import { addFolder, workingFolders } from "./storageAndData.js";

const btnConfigs1 = [
  { id: "fc01", text: "1" },
  { id: "fc02", text: "2" },
  { id: "fc03", text: "3" },
  { id: "fc04", text: "4" },
  { id: "fc05", text: "5" },
];

const btnConfigs2 = [
  { id: "fc06", text: "6" },
  { id: "fc07", text: "7" },
  { id: "fc08", text: "8" },
  { id: "fc09", text: "9" },
  { id: "fc10", text: "10" },
];

function createButtons(configs) {
  return configs.map((config) => {
    const colorPickerBtn = document.createElement("button");
    colorPickerBtn.id = config.id;
    colorPickerBtn.type = "button";
    colorPickerBtn.classList.add("color-picker-btn", "btn-sound");
    colorPickerBtn.textContent = config.text;
    return colorPickerBtn;
  });
}

const buttonSet1 = createButtons(btnConfigs1);
const buttonSet2 = createButtons(btnConfigs2);

export function createNewFolderForm() {
  const header = document.querySelector("header");
  const headerContent = document.querySelector("#header-content");

  const newFolderForm = document.createElement("form");
  newFolderForm.id = "new-folder-form";
  newFolderForm.action = "";
  headerContent.appendChild(newFolderForm);

  const lvlRow1 = document.createElement("div");
  lvlRow1.classList.add("lvl-row");

  const newFolderImg = document.createElement("img");
  newFolderImg.id = "new-folder-img";
  newFolderImg.src = dmNewFolderImg;
  newFolderImg.alt = "New folder icon";

  const newFolderFormTitle = document.createElement("p");
  newFolderFormTitle.classList.add("font-fancy");
  newFolderFormTitle.textContent = "New Folder";

  const lvlCol1 = document.createElement("div");
  lvlCol1.classList.add("lvl-col");

  const newFolderNameLabel = document.createElement("label");
  newFolderNameLabel.classList.add("form-field-title");
  newFolderNameLabel.setAttribute("for", "new-folder-name");
  newFolderNameLabel.textContent = "Folder Name";

  const newFolderNameInput = document.createElement("input");
  newFolderNameInput.type = "text";
  newFolderNameInput.id = "new-folder-name";
  newFolderNameInput.name = "new-folder-name";
  newFolderNameInput.placeholder = "Enter new folder name...";
  newFolderNameInput.autocomplete = "off";
  newFolderNameInput.required = "true";

  const lvlCol2 = document.createElement("div");
  lvlCol2.classList.add("lvl-col");

  const lvlRow2 = document.createElement("div");
  lvlRow2.classList.add("lvl-row");

  const newFolderColorP = document.createElement("p");
  newFolderColorP.classList.add("form-field-title");
  newFolderColorP.textContent = `Folder Color`;

  const newFolderColorPicked = document.createElement("span");
  newFolderColorPicked.id = "new-folder-color-picked";
  newFolderColorPicked.textContent = "Click on a color...";
  newFolderColorPicked.dataset.value = "";

  const newFolderColorBtns1 = document.createElement("div");
  newFolderColorBtns1.classList.add("lvl-row-width", "color-picker-btn-cont1");

  const newFolderColorBtns2 = document.createElement("div");
  newFolderColorBtns2.classList.add("lvl-row-width", "color-picker-btn-cont2");

  const lvlRowWidth1 = document.createElement("div");
  lvlRowWidth1.classList.add("lvl-row-width");

  const newFolderCancelBtn = document.createElement("button");
  newFolderCancelBtn.type = "button";
  newFolderCancelBtn.classList.add("cancel", "btn-sound");
  newFolderCancelBtn.id = "new-folder-cancel-btn";
  newFolderCancelBtn.textContent = "Cancel";

  const newFolderSubmitBtn = document.createElement("button");
  newFolderSubmitBtn.type = "submit";
  newFolderSubmitBtn.classList.add("submit", "btn-sound");
  newFolderSubmitBtn.id = "new-folder-submit-btn";
  newFolderSubmitBtn.textContent = "Submit";

  header.appendChild(headerContent);
  headerContent.appendChild(newFolderForm);
  newFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
  lvlRow1.append(newFolderImg, newFolderFormTitle);
  lvlCol1.append(newFolderNameLabel, newFolderNameInput);
  lvlCol2.append(lvlRow2, newFolderColorBtns1, newFolderColorBtns2);
  lvlRow2.append(newFolderColorP, newFolderColorPicked);

  buttonSet1.forEach((button) => newFolderColorBtns1.append(button));
  buttonSet2.forEach((button) => newFolderColorBtns2.append(button));

  lvlRowWidth1.append(newFolderCancelBtn, newFolderSubmitBtn);

  colorBtnClicked();
}

function colorBtnClicked() {
  const colorPickerBtns = document.querySelectorAll(".color-picker-btn");
  const newFolderColorPicked = document.querySelector(
    "#new-folder-color-picked"
  );

  colorPickerBtns.forEach((button) => {
    button.addEventListener("click", () => {
      button.value = `--${button.id}`;
      newFolderColorPicked.dataset.value = `${button.value}`;
      newFolderColorPicked.style.backgroundColor = `var(${button.value})`;
      newFolderColorPicked.style.color = "var(--bkgd)";
      newFolderColorPicked.textContent = `"Number ${button.textContent}"`;
    });
  });
}

export function clearNewFolderForm() {
  const newFolderForm = document.querySelector("#new-folder-form");
  const newFolderCancelBtn = document.querySelector("#new-folder-cancel-btn");

  if (newFolderCancelBtn && newFolderForm) {
    newFolderCancelBtn.addEventListener("click", function () {
      updateUI();
    });
  } else {
    console.warn(
      "newFolderCancelBtn or newFolderForm is null or not found in the DOM."
    );
  }
}

function getFolderFormData() {
  return {
    folderName: document.querySelector("#new-folder-name").value,
    folderColor: document.querySelector("#new-folder-color-picked").dataset
      .value,
    folderId: `f${workingFolders.length + 1}`,
  };
}

function createNewFolder(formData) {
  return new Folder(
    formData.folderId,
    formData.folderName,
    formData.folderColor
  );
}

export function submitNewFolder() {
  const newFolderSubmitBtn = document.querySelector("#new-folder-submit-btn");
  const newFolderForm = document.querySelector("#new-folder-form");

  if (newFolderSubmitBtn && newFolderForm) {
    newFolderForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = getFolderFormData();

      const newFolder = createNewFolder(formData);

      addFolder(newFolder);
      updateUI();
    });
  } else {
    console.warn(
      "newFolderSubmitBtn or newFolderForm is null or not found in the DOM."
    );
  }
}


// editTaskForm.js

import { dmTaskImg } from "./imageExporter.js";

import { workingTasks, updateEditedTasks } from "./storageAndData.js";

export function taskEditBtnClicked(index) {
  const editTaskForm = document.querySelector("#edit-task-form");
  editTaskForm.classList.toggle("flex");

  populateEditTaskForm(index);
}

let targetId = "";

function populateEditTaskForm(index) {
  const taskTiles = document.querySelectorAll(".task");
  const taskTile = taskTiles[index];

  targetId = taskTile.dataset.id;

  const matchingTasks = workingTasks.filter((task) => task.taskId === targetId);

  if (matchingTasks.length === 0) {
    console.error("No matching task found");
    return;
  }

  // Assumes there is only one matching task
  const task = matchingTasks[0];

  // pulls values from the task
  const extractedTaskValues = {
    taskName: task.taskName,
    folderLocation: task.folderLocation,
    taskDueByDate: task.dueByDate,
    taskDescription: task.descriptionText,
  };

  // populates fields with pulled array values
  const editTaskName = document.querySelector("#edit-task-name");
  editTaskName.value = extractedTaskValues.taskName;

  const editTaskFolder = document.querySelector("#edit-task-folder");
  editTaskFolder.value = extractedTaskValues.folderLocation;

  const editTaskDueDate = document.querySelector("#edit-task-due-date");
  const currentDateFormat = extractedTaskValues.taskDueByDate;
  const newDateFormat = currentDateFormat.replace(/\//g, "-");
  editTaskDueDate.value = newDateFormat;

  const editTaskDescription = document.querySelector("#edit-task-description");
  editTaskDescription.value = extractedTaskValues.taskDescription;

  return targetId;
}

export function createEditTaskForm() {
  const header = document.querySelector("header");
  const headerContent = document.querySelector("#header-content");

  const editTaskForm = document.createElement("form");
  editTaskForm.id = "edit-task-form";
  editTaskForm.action = "";

  const lvlRow1 = document.createElement("div");
  lvlRow1.classList.add("lvl-row");

  const editTaskImg = document.createElement("img");
  editTaskImg.id = "edit-task-img";
  editTaskImg.src = dmTaskImg;
  editTaskImg.alt = "Task icon";

  const editTaskFormTitle = document.createElement("p");
  editTaskFormTitle.classList.add("font-fancy");
  editTaskFormTitle.textContent = "Edit Task";

  const lvlCol1 = document.createElement("div");
  lvlCol1.classList.add("lvl-col");

  const editTaskNameLabel = document.createElement("label");
  editTaskNameLabel.classList.add("form-field-title");
  editTaskNameLabel.setAttribute("for", "edit-task-name");
  editTaskNameLabel.textContent = "Edit Task Name";

  const editTaskNameInput = document.createElement("input");
  editTaskNameInput.type = "text";
  editTaskNameInput.id = "edit-task-name";
  editTaskNameInput.name = "edit-task-name";
  editTaskNameInput.placeholder = "";
  editTaskNameInput.autocomplete = "off";
  editTaskNameInput.required = "true";

  const lvlCol2 = document.createElement("div");
  lvlCol2.classList.add("lvl-col");

  const editTaskFolderLabel = document.createElement("label");
  editTaskFolderLabel.classList.add("form-field-title");
  editTaskFolderLabel.setAttribute("for", "new-task-folder");
  editTaskFolderLabel.textContent = "Edit Task Folder";

  const editTaskFolderSelect = document.createElement("select");
  editTaskFolderSelect.id = "edit-task-folder";
  editTaskFolderSelect.name = "edit-task-folder";
  editTaskFolderSelect.value = "";
  editTaskFolderSelect.required = "true";

  const lvlCol3 = document.createElement("div");
  lvlCol3.classList.add("lvl-col");

  const editTaskDueDateLabel = document.createElement("label");
  editTaskDueDateLabel.classList.add("form-field-title");
  editTaskDueDateLabel.setAttribute("for", "edit-task-due-date");
  editTaskDueDateLabel.textContent = "Edit Due Date";

  const editTaskDueDateInput = document.createElement("input");
  editTaskDueDateInput.type = "date";
  editTaskDueDateInput.id = "edit-task-due-date";
  editTaskDueDateInput.name = "edit-task-due-date";
  editTaskDueDateInput.required = "true";

  const lvlCol4 = document.createElement("div");
  lvlCol4.classList.add("lvl-col");

  const editTaskDescriptionLabel = document.createElement("label");
  editTaskDescriptionLabel.classList.add("form-field-title");
  editTaskDescriptionLabel.setAttribute("for", "edit-task-description");
  editTaskDescriptionLabel.textContent = "Edit Brief Description";

  const textArea = document.createElement("textarea");
  textArea.id = "edit-task-description";
  textArea.name = "edit-task-description";
  textArea.rows = "";
  textArea.cols = "";
  textArea.placeholder = "Enter additional details here...";

  const lvlRowWidth2 = document.createElement("div");
  lvlRowWidth2.classList.add("lvl-row-width");

  const editTaskCancelBtn = document.createElement("button");
  editTaskCancelBtn.type = "button";
  editTaskCancelBtn.classList.add("cancel", "btn-sound");
  editTaskCancelBtn.id = "edit-task-cancel-btn";
  editTaskCancelBtn.textContent = "Cancel";

  const editTaskSubmitBtn = document.createElement("button");
  editTaskSubmitBtn.type = "submit";
  editTaskSubmitBtn.classList.add("submit", "btn-sound");
  editTaskSubmitBtn.id = "edit-task-submit-btn";
  editTaskSubmitBtn.textContent = "Update";

  header.appendChild(headerContent);
  headerContent.appendChild(editTaskForm);
  editTaskForm.append(
    lvlRow1,
    lvlCol1,
    lvlCol2,
    lvlCol3,
    lvlCol4,
    lvlRowWidth2
  );
  lvlRow1.append(editTaskImg, editTaskFormTitle);
  lvlCol1.append(editTaskNameLabel, editTaskNameInput);
  lvlCol2.append(editTaskFolderLabel, editTaskFolderSelect);
  lvlCol3.append(editTaskDueDateLabel, editTaskDueDateInput);
  lvlCol4.append(editTaskDescriptionLabel, textArea);
  lvlRowWidth2.append(editTaskCancelBtn, editTaskSubmitBtn);
}

export function populateEditTaskFormFolderOptions(folders) {
  const editTaskFolderSelect = document.querySelector("#edit-task-folder");
  folders.forEach((folderItem) => {
    const folderOption = document.createElement("option");
    folderOption.classList.add(".edit-task-folder-option");
    folderOption.value = `${folderItem.folderName}`;
    folderOption.textContent = `${folderItem.folderName}`;

    editTaskFolderSelect.appendChild(folderOption);
  });
}

export function clearEditTaskForm() {
  const editTaskForm = document.querySelector("#edit-task-form");
  const editTaskCancelBtn = document.querySelector("#edit-task-cancel-btn");

  if (editTaskCancelBtn && editTaskForm) {
    editTaskCancelBtn.addEventListener("click", function () {
      editTaskForm.classList.toggle("flex");
    });
  } else {
    console.warn(
      "editTaskCancelBtn or editTaskForm is null or not found in the DOM."
    );
  }
}

export function submitEditedTask() {
  const editTaskSubmitBtn = document.querySelector("#edit-task-submit-btn");
  const editTaskForm = document.querySelector("#edit-task-form");

  if (editTaskSubmitBtn && editTaskForm) {
    editTaskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // const editTaskName = document.querySelector("#edit-task-name");
      // const editTaskFolder = document.querySelector("#edit-task-folder");
      // const editTaskDueDate = document.querySelector("#edit-task-due-date");
      // const editTaskDescription = document.querySelector("#edit-task-description");

      updateEditedTasks(targetId);
    });
  } else {
    console.warn(
      "newTaskSubmitBtn or newTaskForm is null or not found in the DOM."
    );
  }
}


// editFolderForm.js

import { dmFolderImg } from "./imageExporter.js";

import { workingFolders, updateEditedFolders } from "./storageAndData.js";

export function folderEditBtnClicked(index) {
  const editFolderForm = document.querySelector("#edit-folder-form");
  editFolderForm.classList.toggle("flex");
  populateEditFolderForm(index);
}

const btnConfigs1 = [
  { id: "fc01", text: "1" },
  { id: "fc02", text: "2" },
  { id: "fc03", text: "3" },
  { id: "fc04", text: "4" },
  { id: "fc05", text: "5" },
];

const btnConfigs2 = [
  { id: "fc06", text: "6" },
  { id: "fc07", text: "7" },
  { id: "fc08", text: "8" },
  { id: "fc09", text: "9" },
  { id: "fc10", text: "10" },
];

function createButtons(configs) {
  return configs.map((config) => {
    const colorPickerBtn = document.createElement("button");
    colorPickerBtn.id = config.id;
    colorPickerBtn.type = "button";
    colorPickerBtn.classList.add("color-picker-btn", "btn-sound");
    colorPickerBtn.textContent = config.text;
    return colorPickerBtn;
  });
}

const buttonSet1 = createButtons(btnConfigs1);
const buttonSet2 = createButtons(btnConfigs2);

let targetId = "";

function populateEditFolderForm(index) {
  const folderTiles = document.querySelectorAll(".folder");
  const folderTile = folderTiles[index];

  targetId = folderTile.dataset.id;

  const matchingFolders = workingFolders.filter(
    (folder) => folder.folderId === targetId
  );

  if (matchingFolders.length === 0) {
    console.error("No matching folder found");
    return;
  }

  // Assumes there is only one matching folder
  const folder = matchingFolders[0];

  // pulls values from the folder
  const extractedFolderValues = {
    folderName: folder.folderName,
    folderColor: folder.folderColor,
  };

  // populates fields with pulled array values
  const editFolderName = document.querySelector("#edit-folder-name");
  editFolderName.value = extractedFolderValues.folderName;

  const editFolderColorPicked = document.querySelector(
    "#edit-folder-color-picked"
  );
  editFolderColorPicked.dataset.value = extractedFolderValues.folderColor;
  editFolderColorPicked.style.backgroundColor = `var(${extractedFolderValues.folderColor})`;

  return targetId;
}

export function createEditFolderForm() {
  const header = document.querySelector("header");
  const headerContent = document.querySelector("#header-content");

  const editFolderForm = document.createElement("form");
  editFolderForm.id = "edit-folder-form";
  editFolderForm.action = "";
  headerContent.appendChild(editFolderForm);

  const lvlRow1 = document.createElement("div");
  lvlRow1.classList.add("lvl-row");

  const editFolderImg = document.createElement("img");
  editFolderImg.id = "edit-folder-img";
  editFolderImg.src = dmFolderImg;
  editFolderImg.alt = "Folder icon";

  const editFolderFormTitle = document.createElement("p");
  editFolderFormTitle.classList.add("font-fancy");
  editFolderFormTitle.textContent = "Edit Folder";

  const lvlCol1 = document.createElement("div");
  lvlCol1.classList.add("lvl-col");

  const editFolderNameLabel = document.createElement("label");
  editFolderNameLabel.classList.add("form-field-title");
  editFolderNameLabel.setAttribute("for", "edit-folder-name");
  editFolderNameLabel.textContent = "Edit Folder Name";

  const editFolderNameInput = document.createElement("input");
  editFolderNameInput.type = "text";
  editFolderNameInput.id = "edit-folder-name";
  editFolderNameInput.name = "edit-folder-name";
  editFolderNameInput.placeholder = "";
  editFolderNameInput.autocomplete = "off";
  editFolderNameInput.required = "true";

  const lvlCol2 = document.createElement("div");
  lvlCol2.classList.add("lvl-col");

  const lvlRow2 = document.createElement("div");
  lvlRow2.classList.add("lvl-row");

  const editFolderColorP = document.createElement("p");
  editFolderColorP.classList.add("form-field-title");
  editFolderColorP.textContent = `Edit Color`;

  const editFolderColorPicked = document.createElement("span");
  editFolderColorPicked.id = "edit-folder-color-picked";
  editFolderColorPicked.textContent = "Click on a color...";
  editFolderColorPicked.dataset.value = "";

  const editFolderColorBtns1 = document.createElement("div");
  editFolderColorBtns1.classList.add("lvl-row-width", "color-picker-btn-cont1");

  const editFolderColorBtns2 = document.createElement("div");
  editFolderColorBtns2.classList.add("lvl-row-width", "color-picker-btn-cont2");

  const lvlRowWidth1 = document.createElement("div");
  lvlRowWidth1.classList.add("lvl-row-width");

  const editFolderCancelBtn = document.createElement("button");
  editFolderCancelBtn.type = "button";
  editFolderCancelBtn.classList.add("cancel", "btn-sound");
  editFolderCancelBtn.id = "edit-folder-cancel-btn";
  editFolderCancelBtn.textContent = "Cancel";

  const editFolderSubmitBtn = document.createElement("button");
  editFolderSubmitBtn.type = "submit";
  editFolderSubmitBtn.classList.add("submit", "btn-sound");
  editFolderSubmitBtn.id = "edit-folder-submit-btn";
  editFolderSubmitBtn.textContent = "Update";

  header.appendChild(headerContent);
  headerContent.appendChild(editFolderForm);
  editFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
  lvlRow1.append(editFolderImg, editFolderFormTitle);
  lvlCol1.append(editFolderNameLabel, editFolderNameInput);
  lvlCol2.append(lvlRow2, editFolderColorBtns1, editFolderColorBtns2);
  lvlRow2.append(editFolderColorP, editFolderColorPicked);

  buttonSet1.forEach((button) => editFolderColorBtns1.append(button));
  buttonSet2.forEach((button) => editFolderColorBtns2.append(button));

  lvlRowWidth1.append(editFolderCancelBtn, editFolderSubmitBtn);

  colorBtnClicked();
}

function colorBtnClicked() {
  const colorPickerBtns = document.querySelectorAll(".color-picker-btn");
  const editFolderColorPicked = document.querySelector(
    "#edit-folder-color-picked"
  );
  colorPickerBtns.forEach((button) => {
    button.addEventListener("click", () => {
      button.value = `--${button.id}`;
      editFolderColorPicked.dataset.value = `${button.value}`;
      editFolderColorPicked.style.backgroundColor = `var(${button.value})`;
      editFolderColorPicked.style.color = "var(--bkgd)";
      editFolderColorPicked.textContent = `"Number ${button.textContent}"`;
    });
  });
}

export function clearEditFolderForm() {
  const editFolderForm = document.querySelector("#edit-folder-form");
  const editFolderCancelBtn = document.querySelector("#edit-folder-cancel-btn");

  if (editFolderCancelBtn && editFolderForm) {
    editFolderCancelBtn.addEventListener("click", function () {
      editFolderForm.classList.toggle("flex");
    });
  } else {
    console.warn(
      "editFolderCancelBtn or editFolderForm is null or not found in the DOM."
    );
  }
}

export function submitEditedFolder() {
  const editFolderSubmitBtn = document.querySelector("#edit-folder-submit-btn");
  const editFolderForm = document.querySelector("#edit-folder-form");

  if (editFolderSubmitBtn && editFolderForm) {
    editFolderForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // const editFolderName = document.querySelector("#edit-folder-name");
      // console.log(editFolderName.value);
      // const editFolderColorPicked = document.querySelector("#edit-folder-color-picked");
      // console.log(editFolderColorPicked.dataset.value);

      updateEditedFolders(targetId);
    });
  } else {
    console.warn(
      "editFolderSubmitBtn or editFolderForm is null or not found in the DOM."
    );
  }
}


// storageAndData.js

import { Theme, Folder, Task } from "./classes.js";

import { updateUI } from "./updateUI.js";

// THEME

const defaultTheme = [new Theme("dark")];

export function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return JSON.parse(savedTheme);
  } else {
    return [...defaultTheme]; // Clone the initial array
  }
}

export let workingTheme = loadTheme();
console.log(workingTheme);

export function saveTheme() {
  localStorage.setItem("theme", JSON.stringify(workingTheme));
}

// FOLDER

const defaultFolders = [
  new Folder("f0", "*Default", "--fc00"),
  new Folder("f1", "Chores", "--fc05"),
  new Folder("f2", "Fitness", "--fc01"),
  new Folder("f3", "Repair", "--fc10"),
  new Folder("f4", "Social", "--fc03"),
  new Folder("f5", "Travel", "--fc07"),
];

export function loadFolders() {
  const savedFolders = localStorage.getItem("folders");
  if (savedFolders) {
    return JSON.parse(savedFolders);
  } else {
    return [...defaultFolders]; // Clone the initial array
  }
}

export let workingFolders = loadFolders();
console.log(workingFolders);

export function saveFolders() {
  localStorage.setItem("folders", JSON.stringify(workingFolders));
}

export function addFolder(folder) {
  workingFolders.push(folder);
  saveFolders();
}

export function removeFolder(dataId) {
  workingFolders = workingFolders.filter(
    (folder) => folder.folderId !== dataId
  );
  saveFolders();

  updateUI();
}

export function updateEditedFolders(dataId) {
  let folders = loadFolders();
  folders = folders.map((folder) => {
    if (folder.folderId === dataId) {
      const editFolderName = document.querySelector("#edit-folder-name");
      const editFolderColorPicked = document.querySelector(
        "#edit-folder-color-picked"
      );

      folder.folderName = editFolderName.value;
      folder.folderColor = editFolderColorPicked.dataset.value;
    }
    return folder;
  });

  workingFolders = folders;
  saveFolders();

  updateUI();
}

// TASK

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTomorrowDate() {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDayAfterTomorrowDate() {
  const today = new Date();
  today.setDate(today.getDate() + 2);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getRandomFutureDate(daysAhead = 5000) {
  // Reminder that 5000 is a default parameter and that I can pass in anything below. E.g., const randomFutureDate = getRandomFutureDate(30);
  const today = new Date();
  const randomDays = Math.floor(Math.random() * daysAhead) + 1;
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + randomDays);

  const year = futureDate.getFullYear();
  const month = (futureDate.getMonth() + 1).toString().padStart(2, "0");
  const day = futureDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const today = getTodayDate();
const tomorrow = getTomorrowDate();
const dayAfterTomorrow = getDayAfterTomorrowDate();
const randomFutureDate = getRandomFutureDate();

// console.log("Today's date: ", today);
// console.log("Random date: ", randomFutureDate);

const defaultTasks = [
  new Task(
    "t0",
    "Take out the trash",
    today,
    "",
    "high",
    "incomplete",
    "Chores",
    "Don't forget to empty the upstairs trash cans!"
  ),
  new Task(
    "t1",
    "Grocery Store",
    tomorrow,
    "",
    "high",
    "incomplete",
    "Chores",
    "Buy: apples, oranges, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, and frozen blueberries."
  ),
  new Task(
    "t2",
    "Run my usual 5k course",
    dayAfterTomorrow,
    "",
    "low",
    "incomplete",
    "Fitness",
    "Try to go in the evening, like around sunset, to avoid too many cars and people."
  ),
  new Task(
    "t3",
    "Art's Fest Weekend",
    "2024-07-12",
    "",
    "low",
    "completed",
    "Social",
    ""
  ),
  new Task(
    "t4",
    "Fix the barb wire fence at the compound",
    "2086-04-20",
    "",
    "high",
    "incomplete",
    "Repair",
    "Watch out for the radioactive zombies."
  ),
  new Task(
    "t5",
    "Visit Guedelon Castle",
    randomFutureDate,
    "",
    "low",
    "incomplete",
    "Travel",
    "Make sure to renew my passport in advance."
  ),
];

export function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    return JSON.parse(savedTasks);
  } else {
    return [...defaultTasks];
  }
}

export let workingTasks = loadTasks();
console.log(workingTasks);

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(workingTasks));
}

export function addTask(task) {
  workingTasks.push(task);
  saveTasks();
}

export function removeTask(dataId) {
  workingTasks = workingTasks.filter((task) => task.taskId !== dataId);
  saveTasks();

  updateUI();
}

export function updatePriorityStatus(dataId) {
  let tasks = loadTasks(); // THIS WAS THE ISSUE: YOU HAVE TO...Load the current tasks from localStorage..FIRST

  tasks = tasks.map((task) => {
    if (task.taskId === dataId) {
      task.priorityFlag = task.priorityFlag === "low" ? "high" : "low";
    }
    return task;
  });

  workingTasks = tasks;
  saveTasks();
}

// Add this function to update a task's status
export function updateCompleteStatus(dataId) {
  let tasks = loadTasks(); // THIS WAS THE ISSUE: YOU HAVE TO...Load the current tasks from localStorage..FIRST

  tasks = tasks.map((task) => {
    if (task.taskId === dataId) {
      task.completedFlag =
        task.completedFlag === "incomplete" ? "completed" : "incomplete";
    }
    return task;
  });

  workingTasks = tasks;
  saveTasks();
}

export function updateEditedTasks(dataId) {
  let tasks = loadTasks();

  tasks = tasks.map((task) => {
    if (task.taskId === dataId) {
      const editTaskName = document.querySelector("#edit-task-name");
      const editTaskFolder = document.querySelector("#edit-task-folder");
      const editTaskDueDate = document.querySelector("#edit-task-due-date");
      const editTaskDescription = document.querySelector(
        "#edit-task-description"
      );

      task.taskName = editTaskName.value;
      task.folderLocation = editTaskFolder.value;
      task.dueByDate = editTaskDueDate.value;
      task.descriptionText = editTaskDescription.value;
    }
    return task;
  });

  workingTasks = tasks;
  saveTasks();

  updateUI();
}


// updateUI.js

export function updateUI() {
  window.location.reload();
}