import {
  statusBtn,
  statusBanner,
  addTaskBtn,
  newTaskForm,
  addFolderBtn,
  newFolderForm,
  darkLightBtn,
  darkLightImg,
} from "./config.js";

import darkModeMoon from "../assets/moon-dk.svg";
import lightModeSun from "../assets/sun.svg";

export function handleStatusBtn() {
    if (statusBtn && statusBanner) {
        statusBtn.addEventListener("click", toggleStatusBanner);
    } else {
        console.warn("Warning: statusBtn or statusBanner components missing.");
    }

  function toggleStatusBanner() {
    if (newTaskForm.classList.contains("flex")) {
        newTaskForm.classList.toggle("flex"); //Toggles this off...
        statusBanner.classList.toggle("flex");
    } else if (newFolderForm.classList.contains("flex")) {
        newFolderForm.classList.toggle("flex"); //Toggles this off...
        statusBanner.classList.toggle("flex");
    } else {
        statusBanner.classList.toggle("flex");
    }
  }
};

export function handleAddTaskBtn() {
    if (addTaskBtn && newTaskForm) {
        addTaskBtn.addEventListener("click", toggleStatusBanner);
  } else {
        console.warn("Warning: addTaskBtn or newTaskForm components missing.");
  }

  function toggleStatusBanner() {
    if (newFolderForm.classList.contains("flex")) {
        newFolderForm.classList.toggle("flex"); //Toggles this off...
        newTaskForm.classList.toggle("flex");
    } else if (statusBanner.classList.contains("flex")) {
        statusBanner.classList.toggle("flex"); 
        newTaskForm.classList.toggle("flex");
    } else {
        newTaskForm.classList.toggle("flex");
    }
  }
};

export function handleAddFolderBtn() {
    if (addFolderBtn && newFolderForm) {
        addFolderBtn.addEventListener("click", toggleStatusBanner);
    } else {
        console.warn(
        "Warning: addFolderBtn or newFolderForm components missing."
      );
    }

  function toggleStatusBanner() {
    if (newTaskForm.classList.contains("flex")) {
        newTaskForm.classList.toggle("flex"); //Toggles this off...
        newFolderForm.classList.toggle("flex");
    } else if (statusBanner.classList.contains("flex")) {
        statusBanner.classList.toggle("flex"); //Toggles this off...
        newTaskForm.classList.toggle("flex");
    } else {
        newFolderForm.classList.toggle("flex");
    }
  }
};

export function handleDarkLightBtn() {

  if (darkLightBtn) {
    darkLightBtn.addEventListener("click", toggleModeColor);
  } else {
    console.warn("Warning: darkLightBtn components missing.");
  }

  function toggleModeColor() {
    const dl = document.querySelector("#mode-dk-img");
        if (darkLightBtn.value === "dark") {
            darkLightBtn.value = "light";
            darkLightBtn.style.backgroundColor = "var(--dark-contrast)";
            dl.src = lightModeSun;
 
        } else if (darkLightBtn.value === "light") {
            darkLightBtn.value = "dark";
            darkLightBtn.style.backgroundColor = "var(--dark-dklt)";
            dl.src = darkModeMoon;
        }
  }
};