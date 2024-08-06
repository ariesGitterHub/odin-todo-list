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

// export function handleDarkLiteBtn() {

//   if (darLiteBtn) {
//     darkLiteBtn.addEventListener("click", toggle);
//   } else {
//     console.warn("Warning: darkLiteBtn components missing.");
//   }

//   function toggle() {

//     if (darkLiteBtn.value === "dark") {
//       darkLiteBtn.value = "lite";

//       body.classList.add("lite-mode");

//       crownImg.src = lmCrownImg;

//       statusImg.src = lmStatusImg;
//       addTaskImg.src = lmAddTaskImg;
//       addFolderImg.src = lmAddFolderImg;
//       darkLiteImg.src = lmDarkLiteImg;

//       taskNumImg.src = lmTaskImg;
//       priorityNumImg.src = lmPriorityImg;
//       overdueNumImg.src = lmOverdueImg;
//       completedNumImg.src = lmCompletedImg;
//       folderNumImg.src = lmFolderImg;

//       newTaskImg.src = lmAddTaskImg;
//       newTaskPriorityFlagImg.src = "";

//       newFolderImg.src = lmAddFolderImg;

//       taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;

//       taskPriorityImg.src = lmPriorityImg;
//       taskCompletedImg.src = lmCompletedImg;
//       taskEditImg.src = lmEditImg;
//       taskTrashImg.src = lmTrashImg;

//     } else if (darkLiteBtn.value === "lite") {
//       darkLiteBtn.value = "dark";

//       body.classList.remove("lite-mode");

//       crownImg.src = dmCrownImg;

//       statusImg.src = dmStatusImg;
//       addTaskImg.src = dmAddTaskImg;
//       addFolderImg.src = dmAddFolderImg;
//       darkLiteImg.src = dmDarkLiteImg;

//       taskNumImg.src = dmTaskImg;
//       priorityNumImg.src = dmPriorityImg;
//       overdueNumImg.src = dmOverdueImg;
//       completedNumImg.src = dmCompletedImg;
//       folderNumImg.src = dmFolderImg;

//       newTaskImg.src = dmAddTaskImg;
//       newTaskPriorityFlagImg.src = "";

//       newFolderImg.src = dmAddFolderImg;

//       taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;

//       taskPriorityImg.src = dmPriorityImg;
//       taskCompletedImg.src = dmCompletedImg;
//       taskEditImg.src = dmEditImg;
//       taskTrashImg.src = dmTrashImg;
//     }
//   }
// };
