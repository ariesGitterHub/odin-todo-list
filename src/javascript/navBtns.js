// const statusBtn = document.querySelector("#status-btn");
// const statusBar = document.querySelector("#status-bar");
// const newTaskBtn = document.querySelector("#new-task-btn");
// const newTaskForm = document.querySelector("#new-task-form");
// const newFolderBtn = document.querySelector("#new-folder-btn");
// const newFolderForm = document.querySelector("#new-folder-form");

export function handleStatusBtn() {
    const statusBar = document.querySelector("#status-bar");
    const newTaskForm = document.querySelector("#new-task-form");
    const newFolderForm = document.querySelector("#new-folder-form");

    if (statusBar) {
        if (newTaskForm && newTaskForm.classList.contains("flex")) {
        newTaskForm.classList.toggle("flex");
        statusBar.classList.toggle("flex");
        } else if (newFolderForm && newFolderForm.classList.contains("flex")) {
        newFolderForm.classList.toggle("flex");
        statusBar.classList.toggle("flex");
        } else {
        statusBar.classList.toggle("flex");
        }
    } else {
        console.warn("statusBar is null or not found in the DOM.");
    }
}

export function handleNewTaskBtn() {
    const statusBar = document.querySelector("#status-bar");
    const newTaskForm = document.querySelector("#new-task-form");
    const newFolderForm = document.querySelector("#new-folder-form");

    if (newTaskForm) {
        if (statusBar && statusBar.classList.contains("flex")) {
        statusBar.classList.toggle("flex");
        newTaskForm.classList.toggle("flex");
        } else if (
        newFolderForm &&
        newFolderForm.classList.contains("flex")
        ) {
        newFolderForm.classList.toggle("flex");
        newTaskForm.classList.toggle("flex");
        } else {
        newTaskForm.classList.toggle("flex");
        }
    } else {
        console.warn("newTaskForm is null or not found in the DOM.");
    }
}

export function handleNewFolderBtn() {
    const statusBar = document.querySelector("#status-bar");
    const newTaskForm = document.querySelector("#new-task-form");
    const newFolderForm = document.querySelector("#new-folder-form");

    if (newFolderForm) {
        if (statusBar && statusBar.classList.contains("flex")) {
            statusBar.classList.toggle("flex");
            newFolderForm.classList.toggle("flex");
        } else if (newTaskForm && newTaskForm.classList.contains("flex")) {
            newTaskForm.classList.toggle("flex");
            newFolderForm.classList.toggle("flex");
        } else {
            newFolderForm.classList.toggle("flex");
        }
    } else {
      console.warn("newFolderForm is null or not found in the DOM.");
    }
}

export function handleDarkLiteBtn() {
    const body = document.querySelector("body")
    const darkLiteBtn = document.querySelector("#dark-lite-btn");

    if (darkLiteBtn) {
        if (darkLiteBtn.value === "dark") {
        darkLiteBtn.value = "lite";
        body.classList.add("lite-mode");
        } else if (darkLiteBtn.value === "lite") {
        darkLiteBtn.value = "dark";
        body.classList.remove("lite-mode");
        }
    } else {
      console.warn("darkLiteBtn is null or not found in the DOM.");
    }

    console.log(darkLiteBtn.value);
};
