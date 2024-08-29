import {
  // dmNewTaskImg,
  dmFolderImg,
  // dmNewTaskPriorityFlagImg,
  // dmNewTaskPriorityFlagImgBG, 
  // lmNewTaskPriorityFlagImg,
  // lmNewTaskPriorityFlagImgBG,
} from "./imageExporter.js";

import { Task } from "./classes.js";

import { workingTheme, updateTask, workingTasks } from "./storageAndData.js";

// function defaultEditFormFlagImgs() {
//   if (workingTheme[0].mode === "dark") {
//     return {
//       priorityFlag: dmNewTaskPriorityFlagImgBG,
//     };
//   } else if (workingTheme[0].mode === "lite") {
//     return {
//       priorityFlag: lmNewTaskPriorityFlagImgBG,
//     };
//   }
// }

export function editTaskForm() {

    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    // const imgUrls = defaultEditFormFlagImgs();

    const editTaskForm = document.createElement("form");
    editTaskForm.id = "edit-task-form";
    editTaskForm.action = "";

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const editTaskImg = document.createElement("img");
    editTaskImg.id = "edit-task-img";
    editTaskImg.src = dmFolderImg;
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
    editTaskFolderSelect.id = "new-task-folder";
    editTaskFolderSelect.name = "new-task-folder";
    editTaskFolderSelect.value = "";
    editTaskFolderSelect.required = "true";

 

    // TOGGLE SWITCH    
    // const lvlRowWidth1 = document.createElement("div");
    // lvlRowWidth1.classList.add("lvl-row-width");

    // const lvlCol3 = document.createElement("div");
    // lvlCol3.classList.add("lvl-col");

    // const taskToggleP = document.createElement("p");
    // taskToggleP.classList.add("form-field-title");
    // taskToggleP.textContent = "Priority";

    // const taskToggleLabel = document.createElement("label");
    // taskToggleLabel.classList.add("switch");
    // taskToggleLabel.setAttribute("for", "edit-task-priority-toggle");

    // const taskToggleInput = document.createElement("input");
    // taskToggleInput.type = "checkbox";
    // taskToggleInput.id = "edit-task-priority-toggle";
    // taskToggleInput.name = "edit-task-priority-toggle";
    // taskToggleInput.checked = false;
    // taskToggleInput.dataset.value = "low";

    // const span1 = document.createElement("span");
    // span1.classList.add("slider", "round");

    // const editTaskPriorityFlagImg = document.createElement("img");
    // editTaskPriorityFlagImg.id = "edit-task-priority-flag-img";
    // editTaskPriorityFlagImg.src = imgUrls.priorityFlag;
    // editTaskPriorityFlagImg.alt = "";

    const lvlCol4 = document.createElement("div");
    lvlCol4.classList.add("lvl-col");

    const editTaskDueDateLabel = document.createElement("label");
    editTaskDueDateLabel.classList.add("form-field-title");
    editTaskDueDateLabel.setAttribute("for", "edit-task-due-date");
    editTaskDueDateLabel.textContent = "Edit Due Date";

    const editTaskDueDateInput = document.createElement("input");
    editTaskDueDateInput.type = "date";
    editTaskDueDateInput.id = "edit-task-due-date";
    editTaskDueDateInput.name = "edit-task-due-date";
    editTaskDueDateInput.required = "true";

    const lvlCol5 = document.createElement("div");
    lvlCol5.classList.add("lvl-col");

    const editTaskDescriptionLabel = document.createElement("label");
    editTaskDescriptionLabel.classList.add("form-field-title");
    editTaskDescriptionLabel.setAttribute("for", "edit-task-description");
    editTaskDescriptionLabel.textContent = "Brief Description (optional)";

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
      lvlRowWidth1,
      lvlCol5,
      lvlRowWidth2
    );
    lvlRow1.append(editTaskImg, editTaskFormTitle);
    lvlCol1.append(editTaskNameLabel, editTaskNameInput);
    lvlCol2.append(editTaskFolderLabel, editTaskFolderSelect);
    // newTaskFolderSelect.append(newTaskFolderOption);
    lvlRowWidth1.append(lvlCol3, editTaskPriorityFlagImg, lvlCol4);
    lvlCol3.append(taskToggleP, taskToggleLabel);
    lvlCol4.append(editTaskDueDateLabel, editTaskDueDateInput);
    lvlCol5.append(editTaskDescriptionLabel, textArea);
    taskToggleLabel.append(taskToggleInput, span1);
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


function getTaskFormData() {
  return {
    taskName: document.querySelector("#new-task-name").value,
    folderLocation: document.querySelector("#new-task-folder").value,
    priorityFlag: document.querySelector("#new-task-priority-toggle").dataset
      .value,
    dueByDate: document.querySelector("#new-task-due-date").value,
    descriptionText: document.querySelector("#new-task-description").value,
    // taskId: Date.now(),
    taskId:`t${workingTasks.length + 1}`,
    completedFlag: "incomplete",
  };
}

function createEditTask(formData) {
  return edit Task(
    formData.taskId,
    formData.taskName,
    formData.dueByDate,
    formData.overdueFlag,
    formData.priorityFlag,
    formData.completedFlag,
    formData.folderLocation,
    formData.descriptionText
  );
}

export function updateEditTask() {
  const editTaskSubmitBtn = document.querySelector("#edit-task-submit-btn");
  const editTaskForm = document.querySelector("#edit-task-form");
//   const newTaskNameInput = document.querySelector("#new-task-name");
//   const newTaskDueDateInput = document.querySelector("#new-task-due-date");

  if (
    editTaskSubmitBtn &&
    editTaskForm 
    // &&
    // newTaskNameInput.value &&
    // newTaskDueDateInput.value
  ) {
    // newTaskSubmitBtn.addEventListener("submit", function (event) {
    //   event.preventDefault();

        editTaskForm.addEventListener("submit", function (event) {
          event.preventDefault();

          // Extract data from form...
          const formData = getTaskFormData();

          // Create new task
          const editTask = createEditTask(formData);

          // Add task
          updateTask(editTask);
          window.location.reload();
        });
  } else {
    console.warn(
      "editTaskSubmitBtn or editTaskForm is null or not found in the DOM."
    );
  }
}
