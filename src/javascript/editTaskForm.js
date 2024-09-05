import {
    dmTaskImg
} from "./imageExporter.js";

import {
    workingTasks,
    updateEditedTasks,
} from "./storageAndData.js";

export function taskEditBtnClicked(index) {
    const editTaskForm = document.querySelector("#edit-task-form");
    editTaskForm.classList.toggle("flex");
    populateEditTaskForm(index);
}

let targetId = "";

function populateEditTaskForm(index) {
    const taskTiles = document.querySelectorAll(".task");
    const taskTile = taskTiles[index];

    targetId = taskTile.dataset.id;
    
    const matchingTasks = workingTasks.filter((task) => task.taskId === targetId);

    if (matchingTasks.length === 0) {
        console.error("No matching task found");
        return;
    }

    // Assumes there is only one matching task
    const task = matchingTasks[0];

    // pulls values from the task
    const extractedTaskValues = {
        taskName: task.taskName,
        folderLocation: task.folderLocation,
        taskDueByDate: task.dueByDate,
        taskDescription: task.descriptionText,
    };

    // populates fields with pulled array values
    const editTaskName = document.querySelector("#edit-task-name");
    editTaskName.value = extractedTaskValues.taskName;

    const editTaskFolder = document.querySelector("#edit-task-folder");
    editTaskFolder.value = extractedTaskValues.folderLocation;

    const editTaskDueDate = document.querySelector("#edit-task-due-date");
    const currentDateFormat = extractedTaskValues.taskDueByDate;
    const newDateFormat = currentDateFormat.replace(/\//g, "-");
    editTaskDueDate.value = newDateFormat;

    const editTaskDescription = document.querySelector("#edit-task-description");
    editTaskDescription.value = extractedTaskValues.taskDescription;

    return targetId;
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
    editTaskImg.alt = "Task icon";

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
    editTaskNameInput.placeholder = "";
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
    editTaskCancelBtn.classList.add("cancel", "btn-sound");
    editTaskCancelBtn.id = "edit-task-cancel-btn";
    editTaskCancelBtn.textContent = "Cancel";

    const editTaskSubmitBtn = document.createElement("button");
    editTaskSubmitBtn.type = "submit";
    editTaskSubmitBtn.classList.add("submit", "btn-sound");
    editTaskSubmitBtn.id = "edit-task-submit-btn";
    editTaskSubmitBtn.textContent = "Update";

    header.appendChild(headerContent);
    headerContent.appendChild(editTaskForm);
    editTaskForm.append(
    lvlRow1,
    lvlCol1,
    lvlCol2,
    lvlCol3,
    lvlCol4,
    lvlRowWidth2
    );
    lvlRow1.append(editTaskImg, editTaskFormTitle);
    lvlCol1.append(editTaskNameLabel, editTaskNameInput);
    lvlCol2.append(editTaskFolderLabel, editTaskFolderSelect);
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

export function clearEditTaskForm() {
    const editTaskForm = document.querySelector("#edit-task-form");
    const editTaskCancelBtn = document.querySelector("#edit-task-cancel-btn");

    if (editTaskCancelBtn && editTaskForm) {
        editTaskCancelBtn.addEventListener("click", function () {
            editTaskForm.classList.toggle("flex");
        });
    } else {
        console.warn(
        "editTaskCancelBtn or editTaskForm is null or not found in the DOM."
        );
    }
}

export function submitEditedTask() {
    const editTaskSubmitBtn = document.querySelector("#edit-task-submit-btn");
    const editTaskForm = document.querySelector("#edit-task-form");
            
    if (editTaskSubmitBtn && editTaskForm) {
            editTaskForm.addEventListener("submit", function (event) {
            event.preventDefault();
    
        updateEditedTasks(targetId);  
        });
    } else {
        console.warn("newTaskSubmitBtn or newTaskForm is null or not found in the DOM.");
    }
}