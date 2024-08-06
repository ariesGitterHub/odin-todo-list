import "./styles/styles.css";

import { createTitle } from "./javascript/title.js";
import { createNav } from "./javascript/nav.js";
import { createStatusBar } from "./javascript/statusBar.js";
import { handleStatusBtn, handleNewTaskBtn, handleNewFolderBtn } from "./javascript/navBtns.js";
import { createNewTaskForm } from "./javascript/newTaskForm.js";
import { createNewFolderForm } from "./javascript/newFolderForm.js";

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
});
