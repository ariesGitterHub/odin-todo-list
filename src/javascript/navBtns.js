import {
  statusBtn,
  statusBanner,
  addTaskBtn,
  newTaskForm,
  addFolderBtn,
  newFolderForm,
} from "./config.js";

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

