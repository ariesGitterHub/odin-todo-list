import "./styles/styles.css";

import soundClick from "./assets/sound-click.mp3";

import {
    workingTheme,
    workingFolders,
    workingTasks,
    loadFolders,    
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


  const btnAudio = new Audio(soundClick);
  btnAudio.preload = "auto";

  function playClickSound() {
    btnAudio.currentTime = 0; // Reset the audio to the beginning
    btnAudio.play();
  }

  const buttons = [
    "#status-btn",
    "#new-task-btn",
    "#new-folder-btn",
    "#dark-lite-btn",
    "#new-task-priority-toggle",
    "#task-num-btn",
    "#priority-num-btn",
    "#overdue-num-btn",
    "#completed-num-btn",
    "#folder-num-btn",
  ];

  buttons.forEach((selector) => {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener("click", (event) => {
        playClickSound();
        handleButtonClick(event); // Generic handler for button clicks
      });
    }
  });


  // Add event listener for scroll event with debouncing
  window.addEventListener("scroll", debounce(toggleSticky, 10));

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

//   const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
//   taskPriorityBtns.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       priorityBtnClicked(index);
//       // updateDOM();
//       // window.location.reload();
//     });
//   });

  // const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
  // taskCompletedBtns.forEach((button, index) => {
  //     button.addEventListener("click", () => {
  //     completedBtnClicked(index);
  //     // updateDOM();
  //     window.location.reload();
  //     });
  // });

  // const taskEditBtns = document.querySelectorAll(
  //     ".task-edit-btn"
  // );
  // taskEditBtns.forEach((button, index) => {
  //     button.addEventListener("click", () => {
  //     taskEditBtnClicked(index);
  //     console.log(button.dataset.id);
  //     // window.location.reload();
  //     });
  // });

  // const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
  // taskTrashBtns.forEach((button, index) => {
  //     button.addEventListener("click", () => {
  //     taskTrashBtnClicked(index);
  //     });
  // });

  // const folderEditBtns = document.querySelectorAll(".folder-edit-btn");
  // folderEditBtns.forEach((button, index) => {
  //   button.addEventListener("click", () => {
  //     folderEditBtnClicked(index);
  //     console.log(button.dataset.id);
  //     // window.location.reload();
  //   });
  // });

  // const folderTrashBtns = document.querySelectorAll(".folder-trash-btn");
  // folderTrashBtns.forEach((button, index) => {
  //     button.addEventListener("click", () => {
  //     folderTrashBtnClicked(index);
  //     // updateDOM();
  //     window.location.reload();
  //     });
  // });

  // Add specific handlers for certain buttons
  document.querySelector("#dark-lite-btn")?.addEventListener("click", () => {
    toggleDarkLiteMode(workingTheme);
  });

  document
    .querySelector("#new-task-priority-toggle")
    ?.addEventListener("change", () => {
      newTaskPriorityChecked();
    });

  const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
  taskPriorityBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      priorityBtnClicked(index);
    });
  });

  const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
  taskCompletedBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      completedBtnClicked(index);
      // Consider removing reload unless necessary
      // window.location.reload();
    });
  });

  const taskEditBtns = document.querySelectorAll(".task-edit-btn");
  taskEditBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      taskEditBtnClicked(index);
      console.log(button.dataset.id);
      // window.location.reload();
    });
  });

  const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
  taskTrashBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      taskTrashBtnClicked(index);
    });
  });

  const folderEditBtns = document.querySelectorAll(".folder-edit-btn");
  folderEditBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      folderEditBtnClicked(index);
      console.log(button.dataset.id);
      // window.location.reload();
    });
  });

  const folderTrashBtns = document.querySelectorAll(".folder-trash-btn");
  folderTrashBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      playClickSound();
      folderTrashBtnClicked(index);
      // Consider removing reload unless necessary
      // updateDOM();
      // window.location.reload();
    });
  });

  // Generic handler function for button clicks
  function handleButtonClick(event) {
    // Common logic for all buttons, if any
    // You can add or modify here based on specific needs
  }
});