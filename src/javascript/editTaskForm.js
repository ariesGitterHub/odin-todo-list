import {
  dmTaskImg
} from "./imageExporter.js";

import { Task } from "./classes.js";

import { workingTheme, updateTask, workingTasks } from "./storageAndData.js";

// export function editBtnClicked(index) {
//     const taskTiles = document.querySelectorAll(".task");
//     const taskTile = taskTiles[index];
//     console.log(taskTile);
    
//     const editTaskForm = document.querySelector("#edit-task-form");
//     console.log(`Edit clicked!`);
//     editTaskForm.classList.toggle("flex");

//     const editTaskName = document.querySelector("#edit-task-name");
//     const taskTileNames = document.querySelectorAll(".task-name");
//     const taskTileName = taskTileNames[index];
//     console.log(taskTileName.innerHTML);
//     editTaskName.value = taskTileName.innerHTML;
//     console.log(editTaskName.value);
    
// }

export function editBtnClicked(index) {
  const editTaskForm = document.querySelector("#edit-task-form");
  editTaskForm.classList.toggle("flex");
  populateEditTaskForm(index);
}

function populateEditTaskForm(index) {
  const taskTiles = document.querySelectorAll(".task");
  const taskTile = taskTiles[index];
  console.log(taskTile);
  const editTaskForm = document.querySelector("#edit-task-form");
  //   console.log(`Edit clicked!`);
  //   editTaskForm.classList.toggle("flex");

  const editTaskName = document.querySelector("#edit-task-name");
  const taskTileNames = document.querySelectorAll(".task-name");
  const taskTileName = taskTileNames[index];
  //   console.log(taskTileName.innerHTML);
  editTaskName.value = taskTileName.dataset.name;
  //   console.log(editTaskName.value);

  const editTaskFolder = document.querySelector("#edit-task-folder");
  const taskTileFolders = document.querySelectorAll(".task-folder");
  const taskTileFolder = taskTileFolders[index];

  editTaskFolder.value = taskTileFolder.dataset.folder;


  const editTaskDueDate = document.querySelector("#edit-task-due-date");
  const taskTileDueDates = document.querySelectorAll(".task-due-date");
  const taskTileDueDate = taskTileDueDates[index];
  const currentDatasetFormat = taskTileDueDate.dataset.date;
  const newDatasetFormat =  currentDatasetFormat.replace(/\//g, '-');
  editTaskDueDate.value = newDatasetFormat;


    const editTaskDescription = document.querySelector("#edit-task-description");
    const taskTileDescriptions = document.querySelectorAll(".task-description");
    const taskTileDescription = taskTileDescriptions[index];
    editTaskDescription.value = taskTileDescription.dataset.description;
}

export function createEditTaskForm() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const editTaskForm = document.createElement("form");
    editTaskForm.id = "edit-task-form";
    editTaskForm.action = "";

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const editTaskImg = document.createElement("img");
    editTaskImg.id = "edit-task-img";
    editTaskImg.src = dmTaskImg;
    editTaskImg.alt = "";

    const editTaskFormTitle = document.createElement("p");
    editTaskFormTitle.classList.add("font-fancy");
    editTaskFormTitle.textContent = "Edit Task";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const editTaskNameLabel = document.createElement("label");
    editTaskNameLabel.classList.add("form-field-title");
    editTaskNameLabel.setAttribute("for", "edit-task-name");
    editTaskNameLabel.textContent = "Edit Task Name";

    const editTaskNameInput = document.createElement("input");
    editTaskNameInput.type = "text";
    editTaskNameInput.id = "edit-task-name";
    editTaskNameInput.name = "edit-task-name";
    editTaskNameInput.placeholder = "Enter edit task name...";
    editTaskNameInput.autocomplete = "off";
    editTaskNameInput.required = "true";

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const editTaskFolderLabel = document.createElement("label");
    editTaskFolderLabel.classList.add("form-field-title");
    editTaskFolderLabel.setAttribute("for", "new-task-folder");
    editTaskFolderLabel.textContent = "Edit Task Folder";

    const editTaskFolderSelect = document.createElement("select");
    editTaskFolderSelect.id = "edit-task-folder";
    editTaskFolderSelect.name = "edit-task-folder";
    editTaskFolderSelect.value = "";
    editTaskFolderSelect.required = "true";
  
    // const lvlRowWidth1 = document.createElement("div");
    // lvlRowWidth1.classList.add("lvl-row-width");

    const lvlCol3 = document.createElement("div");
    lvlCol3.classList.add("lvl-col");

    const editTaskDueDateLabel = document.createElement("label");
    editTaskDueDateLabel.classList.add("form-field-title");
    editTaskDueDateLabel.setAttribute("for", "edit-task-due-date");
    editTaskDueDateLabel.textContent = "Edit Due Date";

    const editTaskDueDateInput = document.createElement("input");
    editTaskDueDateInput.type = "date";
    editTaskDueDateInput.id = "edit-task-due-date";
    editTaskDueDateInput.name = "edit-task-due-date";
    editTaskDueDateInput.required = "true";

    const lvlCol4 = document.createElement("div");
    lvlCol4.classList.add("lvl-col");

    const editTaskDescriptionLabel = document.createElement("label");
    editTaskDescriptionLabel.classList.add("form-field-title");
    editTaskDescriptionLabel.setAttribute("for", "edit-task-description");
    editTaskDescriptionLabel.textContent = "Edit Brief Description";

    const textArea = document.createElement("textarea");
    textArea.id = "edit-task-description";
    textArea.name = "edit-task-description";
    textArea.rows = "";
    textArea.cols = "";
    textArea.placeholder = "Enter additional details here...";

    const lvlRowWidth2 = document.createElement("div");
    lvlRowWidth2.classList.add("lvl-row-width");

    const editTaskCancelBtn = document.createElement("button");
    editTaskCancelBtn.type = "button";
    editTaskCancelBtn.classList.add("cancel");
    editTaskCancelBtn.id = "edit-task-cancel-btn";
    editTaskCancelBtn.textContent = "Cancel";

    const editTaskSubmitBtn = document.createElement("button");
    editTaskSubmitBtn.type = "submit";
    editTaskSubmitBtn.classList.add("submit");
    editTaskSubmitBtn.id = "edit-task-submit-btn";
    editTaskSubmitBtn.textContent = "Update";

    header.appendChild(headerContent);
    headerContent.appendChild(editTaskForm);
    editTaskForm.append(
    lvlRow1,
    lvlCol1,
    lvlCol2,
    //   lvlRowWidth1,
    lvlCol3,
    lvlCol4,
    lvlRowWidth2
    );
    lvlRow1.append(editTaskImg, editTaskFormTitle);
    lvlCol1.append(editTaskNameLabel, editTaskNameInput);
    lvlCol2.append(editTaskFolderLabel, editTaskFolderSelect);
    // lvlRowWidth1.append(lvlCol3);
    lvlCol3.append(editTaskDueDateLabel, editTaskDueDateInput);
    lvlCol4.append(editTaskDescriptionLabel, textArea);
    lvlRowWidth2.append(editTaskCancelBtn, editTaskSubmitBtn);
}

export function populateEditTaskFormFolderOptions(folders) {
  const editTaskFolderSelect = document.querySelector("#edit-task-folder");
  folders.forEach((folderItem) => {
    const folderOption = document.createElement("option");
    folderOption.classList.add(".edit-task-folder-option");
    folderOption.value = `${folderItem.folderName}`;
    folderOption.textContent = `${folderItem.folderName}`;

    editTaskFolderSelect.appendChild(folderOption);
  });
}

export function populateEditTaskFormWithTaskData(tasks, index) {
  // const taskTiles = document.querySelectorAll(".task");
  // const taskTile = taskTiles[index];
  // const editTaskName = document.querySelector("#edit-task-name");
  // const editTaskFolder = document.querySelector("#edit-task-folder");
  // const editTaskDueDate = document.querySelector("#edit-task-due-date");
  // const editTaskDescription = document.querySelector("#edit-task-description");
  // const editTaskFolderSelect = document.querySelector("#edit-task-folder");
  // const matchingTasks = tasks.filter(
  //   (task) => task[index] === editBtnClicked(index)
  //   );
  // matchingTasks.forEach((tasks, index) => {
  //     editTaskName.value = tasks[index].taskName;
  //     editTaskFolder.value = tasks[index].folderLocation;
  //     editTaskDueDate.value = tasks[index].dueByDate;
  //     editTaskDescription.value = tasks[index].descriptionText;
  // })
}

// export function newTaskPriorityChecked() {
// 	const darkLiteBtn = document.querySelector("#dark-lite-btn");		
//   	const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
//   	const newTaskPriorityFlagImg = document.querySelector("#new-task-priority-flag-img");
//     if (newTaskPriorityToggle) {
//         if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
//             newTaskPriorityToggle.dataset.value = "high";
//             newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
//         } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
//             newTaskPriorityToggle.dataset.value = "low";
//             newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImgBG;
//         } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
//             newTaskPriorityToggle.dataset.value = "high";
//             newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
//         } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
//             newTaskPriorityToggle.dataset.value = "low";
//             newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImgBG;
//         }
        
        
        
        
//         // else {
//         //     newTaskPriorityToggle.dataset.value = "low";
//         //     newTaskPriorityFlagImg.src = "";
//         // }     
//     } else {
//         console.warn("newTaskPriorityToggle is null or not found in the DOM.");
//     }
// };

/***************** */

// export function clearNewTaskForm() {
// const newTaskForm = document.querySelector("#new-task-form");
// const newTaskCancelBtn = document.querySelector("#new-task-cancel-btn");

//     if (newTaskCancelBtn && newTaskForm) {
//         newTaskSubmitBtn.addEventListener("click", function () {

//         // Reset form fields
//         newTaskForm.reset();
        
//         // Optionally, remove validation messages or states
//         document.querySelectorAll("`${newTaskForm}` input select").forEach(input => {
//         input.setCustomValidity('');});
//     }) 
//     } else {
//         console.warn("newTaskCancelBtn or newTaskForm is null or not found in the DOM.");
//     }
// }

export function clearEditTaskForm() {
  const editTaskForm = document.querySelector("#edit-task-form");
  const editTaskCancelBtn = document.querySelector("#edit-task-cancel-btn");
  	// const newTaskPriorityToggle = document.querySelector(
    //   "#new-task-priority-toggle"
    // );
      	const editTaskPriorityFlagImg = document.querySelector(
          "#edit-task-priority-flag-img"
        );
  if (editTaskCancelBtn && editTaskForm) {
    editTaskCancelBtn.addEventListener("click", function () {
      window.location.reload();
    });
  } else {
    console.warn(
      "editTaskCancelBtn or editTaskForm is null or not found in the DOM."
    );
  }
}


// function getTaskFormData() {
//   return {
//     taskName: document.querySelector("#new-task-name").value,
//     folderLocation: document.querySelector("#new-task-folder").value,
//     priorityFlag: document.querySelector("#new-task-priority-toggle").dataset
//       .value,
//     dueByDate: document.querySelector("#new-task-due-date").value,
//     descriptionText: document.querySelector("#new-task-description").value,
//     // taskId: Date.now(),
//     taskId:`t${workingTasks.length + 1}`,
//     completedFlag: "incomplete",
//   };
// }

// function createEditTask(formData) {
//   return edit Task(
//     formData.taskId,
//     formData.taskName,
//     formData.dueByDate,
//     formData.overdueFlag,
//     formData.priorityFlag,
//     formData.completedFlag,
//     formData.folderLocation,
//     formData.descriptionText
//   );
// }

// export function updateEditTask() {
//   const editTaskSubmitBtn = document.querySelector("#edit-task-submit-btn");
//   const editTaskForm = document.querySelector("#edit-task-form");
// //   const newTaskNameInput = document.querySelector("#new-task-name");
// //   const newTaskDueDateInput = document.querySelector("#new-task-due-date");

//   if (
//     editTaskSubmitBtn &&
//     editTaskForm 
//     // &&
//     // newTaskNameInput.value &&
//     // newTaskDueDateInput.value
//   ) {
//     // newTaskSubmitBtn.addEventListener("submit", function (event) {
//     //   event.preventDefault();

//         editTaskForm.addEventListener("submit", function (event) {
//           event.preventDefault();

//           // Extract data from form...
//           const formData = getTaskFormData();

//           // Create new task
//           const editTask = createEditTask(formData);

//           // Add task
//           updateTask(editTask);
//           window.location.reload();
//         });
//   } else {
//     console.warn(
//       "editTaskSubmitBtn or editTaskForm is null or not found in the DOM."
//     );
//   }
// }
