import { workingTheme, saveTheme } from "./storageAndData";

import { toggleDarkLiteMode } from "./toggleDarkLiteMode.js";

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

// export function handleDarkLiteBtn() {
//     // const body = document.querySelector("body")
//     const darkLiteBtn = document.querySelector("#dark-lite-btn");

//     if (darkLiteBtn) {  
//     // let workingTheme = loadTheme();
//         if (darkLiteBtn.value === "dark") {
//         darkLiteBtn.value = "lite";  
//         // body.classList.add("lite-mode");
//         } else if (darkLiteBtn.value === "lite") {
//           darkLiteBtn.value = "dark";
//         //   body.classList.remove("lite-mode");
//         }
//     } else {
//       console.warn("darkLiteBtn is null or not found in the DOM.");
//     }
//     console.log(darkLiteBtn.value);
// };

// export function handleDarkLiteBtn() {
//     // const body = document.querySelector("body")
//       const darkLiteBtn = document.querySelector("#dark-lite-btn");
//     const currentMode = workingTheme[0].mode;

//     if (darkLiteBtn) {
//       // Toggle the mode
//       if (currentMode === "dark") {
//         workingTheme[0].mode = "lite";
//         // darkLiteBtn.value = "lite";
//         darkLiteBtn.value = `${workingTheme[0].mode}`
//         window.location.reload();
//       } else if (currentMode === "lite") {
//         workingTheme[0].mode = "dark";
//         // darkLiteBtn.value = "dark";
//         darkLiteBtn.value = `${workingTheme[0].mode}`;
//         window.location.reload();
//       }

//       // Save the new theme to localStorage
//       saveTheme();

//       // Update the UI based on the new theme
//     //   updateUIForTheme(workingTheme[0].mode);

//       console.log(`Theme switched to: ${darkLiteBtn.value}`);
//     } else {
//       console.warn("darkLiteBtn is null or not found in the DOM.");
//     }
// }

export function handleDarkLiteBtn() {
    const darkLiteBtn = document.querySelector("#dark-lite-btn");
    const currentMode = workingTheme[0].mode;
    if (darkLiteBtn) {
        if (currentMode === "dark") {
            workingTheme[0].mode = "lite";
            darkLiteBtn.value = "lite";
        } else if (currentMode === "lite") {
            workingTheme[0].mode = "dark";
            darkLiteBtn.value = "dark";
        }

        saveTheme();
        toggleDarkLiteMode(workingTheme);

        console.log(`Theme switched to: ${darkLiteBtn.value}`);

    } else {
    console.warn("darkLiteBtn is null or not found in the DOM.");
    }
}
