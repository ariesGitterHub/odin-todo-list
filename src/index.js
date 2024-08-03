import "./styles/styles.css";

// import "./javascript/handleImages.js";  // FYI: importing IIFEs works a bit differently, this syntax import shown here is all that is needed to automatically invoke the IIFE in handleImage.js

//No longer an IIFE, I moved handleDarkLiteBtn to handleImages
import { defaultImages, handleDarkLiteBtn } from "./javascript/handleImages.js";
defaultImages();
handleDarkLiteBtn();

import {
  handleStatusBtn,
  handleAddTaskBtn,
  handleAddFolderBtn,
  // handleDarkLiteBtn, // Moved to handleImages
} from "./javascript/navBtns.js";
handleStatusBtn();
handleAddTaskBtn();
handleAddFolderBtn();
// handleDarkLiteBtn();

// import miscControls from "./javascript/miscControls.js";

import { newTaskPriorityChecked } from "./javascript/newTaskForm.js";
newTaskPriorityChecked();

import {
  priorityBtnClicked, 
  completedBtnClicked,
  appData,
}
from "./javascript/taskContent.js";
priorityBtnClicked();
completedBtnClicked();
