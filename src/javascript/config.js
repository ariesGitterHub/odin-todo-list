// Add all classes and ids in order of use in index.html
// DELETE WHATEVER IS NOT USED...???

// imageImports.js

// For header.js
import dmCrownImg from "../assets/dm-crown.svg";
import dmStatusImg from "../assets/dm-status.svg";
import dmNewTaskImg from "../assets/dm-new-task.svg";
import dmNewFolderImg from "../assets/dm-new-folder.svg";
import dmDarkLiteImg from "../assets/dm-light-bulb.svg";

export { dmCrownImg, dmStatusImg, dmNewTaskImg, dmNewFolderImg, dmDarkLiteImg };

// For headerContent.js
import dmTaskImg from "../assets/dm-task.svg";
import dmPriorityImg from "../assets/dm-priority.svg";
import dmOverdueImg from "../assets/dm-overdue.svg";
import dmCompletedImg from "../assets/dm-completed.svg";
import dmFolderImg from "../assets/dm-folder.svg";

export { dmTaskImg, dmPriorityImg, dmOverdueImg, dmCompletedImg, dmFolderImg };

export const header = document.querySelector("header");
export const headerContent = document.querySelector("#header-content");



export const body = document.querySelector("body")

// header
export const crownImg = document.querySelector("#crown-img");
// export const headerContent = document.querySelector("#header-content");

// nav
export const statusBtn = document.querySelector("#status-btn");
export const statusImg = document.querySelector("#status-img");

export const addTaskBtn = document.querySelector("#add-task-btn");
export const addTaskImg = document.querySelector("#add-task-img");

export const addFolderBtn = document.querySelector("#add-folder-btn");
export const addFolderImg = document.querySelector("#add-folder-img");

export const darkLiteBtn = document.querySelector("#dark-lite-btn");
export const darkLiteImg = document.querySelector("#dark-lite-img");

// status bar
export const statusBar = document.querySelector("#status-bar");

export const taskNumBtn = document.querySelector("#task-num-btn");
export const taskNumImg = document.querySelector("#task-num-img");
export const taskNumP = document.querySelector("#task-num-p");

export const priorityNumBtn = document.querySelector("#priority-num-btn");
export const priorityNumImg = document.querySelector("#priority-num-img");
export const priorityNumP = document.querySelector("#priority-num-p");

export const overdueNumBtn = document.querySelector("#overdue-num-btn");
export const overdueNumImg = document.querySelector("#overdue-num-img");
export const overdueNumP = document.querySelector("#overdue-num-p");

export const completedNumBtn = document.querySelector("#completed-num-btn");
export const completedNumImg = document.querySelector("#completed-num-img");
export const completedNumP = document.querySelector("#completed-num-p");

export const folderNumBtn = document.querySelector("#folder-num-btn");
export const folderNumImg = document.querySelector("#folder-num-img");
export const folderNumP = document.querySelector("#folder-num-p");

// new task form
export const newTaskForm = document.querySelector("#new-task-form");

export const newTaskImg = document.querySelector("#new-task-img");
export const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
export const newTaskPriorityFlagImg = document.querySelector("#new-task-priority-flag-img");

// new folder form
export const newFolderForm = document.querySelector("#new-folder-form");

export const newFolderImg = document.querySelector("#new-folder-img");

// task content
export const taskContent = document.querySelector("#task-content");

export const taskTitle = document.querySelector(".task-title");
export const taskDueDate = document.querySelector(".task-due-date");
export const taskFolder = document.querySelector(".task-folder");
export const taskDescription = document.querySelector(".task-description")

export const taskOverdueNoticeImg = document.querySelector(".task-overdue-notice-img");

export const taskPriorityBtn = document.querySelector(".task-priority-btn");
export const taskPriorityImg = document.querySelector(".task-priority-img");

export const taskCompletedBtn = document.querySelector(".task-completed-btn");
export const taskCompletedImg = document.querySelector(".task-completed-img");

export const taskEditBtn = document.querySelector(".task-edit-btn");
export const taskEditImg = document.querySelector(".task-edit-img");

export const taskTrashBtn = document.querySelector(".task-trash-btn");
export const taskTrashImg = document.querySelector(".task-trash-img");
