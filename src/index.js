import "./styles/styles.css";

import "./javascript/handleImages.js";  // FYI: importing IIFEs works a bit differently, this syntax import shown here is all that is needed to automatically invoke the IIFE in handleImage.js

// import "./javascript/handleStatusBtn.js";
// import "./javascript/handleAddTaskBtn.js";

import {
  handleStatusBtn,
  handleAddTaskBtn,
  handleAddFolderBtn
} from "./javascript/navBtns.js";

// import { createNewTask } from "./javascript/createNewTask.js";
import priorityChecked from "./javascript/priorityChecked.js"


handleStatusBtn();
handleAddTaskBtn();
handleAddFolderBtn();

// Call the function initially and set up event listener
document.addEventListener('DOMContentLoaded', () => {
  priorityChecked(); // Call the function initially to set the correct state

  // Add event listener to the checkbox
  document.querySelector("#priority-checkbox").addEventListener('change', priorityChecked);
});