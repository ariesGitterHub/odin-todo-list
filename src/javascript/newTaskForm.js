import {
    dmNewTaskImg,
    dmNewTaskPriorityFlagImg,
    dmNewTaskPriorityFlagImgBG,
    lmNewTaskPriorityFlagImg,
    lmNewTaskPriorityFlagImgBG,
} from "./imageExporter.js";

import { Task } from "./classes.js";

import { updateUI } from "./updateUI.js";

import { 
    workingTheme,
    addTask, 
    workingTasks 
} from "./storageAndData.js";

function defaultNewFormFlagImgs() {
    if (workingTheme[0].mode === "dark") {
        return {
        priorityFlag: dmNewTaskPriorityFlagImgBG,
        };
    } else if (workingTheme[0].mode === "lite") {
        return {
        priorityFlag: lmNewTaskPriorityFlagImgBG,
        };
    }
}

export function createNewTaskForm() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const imgUrls = defaultNewFormFlagImgs();

    const newTaskForm = document.createElement("form");
    newTaskForm.id = "new-task-form";
    newTaskForm.action = "";

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const newTaskImg = document.createElement("img");
    newTaskImg.id = "new-task-img";
    newTaskImg.src = dmNewTaskImg;
    newTaskImg.alt = "New task icon";

    const newTaskFormTitle = document.createElement("p");
    newTaskFormTitle.classList.add("font-fancy");
    newTaskFormTitle.textContent = "New Task";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const newTaskNameLabel = document.createElement("label");
    newTaskNameLabel.classList.add("form-field-title");
    newTaskNameLabel.setAttribute("for", "new-task-name");
    newTaskNameLabel.textContent = "Task Name";

    const newTaskNameInput = document.createElement("input");
    newTaskNameInput.type = "text";
    newTaskNameInput.id = "new-task-name";
    newTaskNameInput.name = "new-task-name";
    newTaskNameInput.placeholder = "Enter new task name...";
    newTaskNameInput.autocomplete = "off";
    newTaskNameInput.required = "true";

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const newTaskFolderLabel = document.createElement("label");
    newTaskFolderLabel.classList.add("form-field-title");
    newTaskFolderLabel.setAttribute("for", "new-task-folder");
    newTaskFolderLabel.textContent = "Task Folder";

    const newTaskFolderSelect = document.createElement("select");
    newTaskFolderSelect.id = "new-task-folder";
    newTaskFolderSelect.name = "new-task-folder";
    newTaskFolderSelect.value = "";
    newTaskFolderSelect.required = "true";

    // Toggle switch start
    
    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const lvlCol3 = document.createElement("div");
    lvlCol3.classList.add("lvl-col");

    const taskToggleP = document.createElement("p");
    taskToggleP.classList.add("form-field-title");
    taskToggleP.textContent = "Priority";

    const taskToggleLabel = document.createElement("label");
    taskToggleLabel.classList.add("switch");
    taskToggleLabel.setAttribute("for", "new-task-priority-toggle");

    const taskToggleInput = document.createElement("input");
    taskToggleInput.type = "checkbox";
    taskToggleInput.id = "new-task-priority-toggle";
    taskToggleInput.name = "new-task-priority-toggle";
    taskToggleInput.checked = false;
    taskToggleInput.dataset.value = "low";

    const span1 = document.createElement("span");
    span1.classList.add("slider", "round");

    const newTaskPriorityFlagImg = document.createElement("img");
    newTaskPriorityFlagImg.id = "new-task-priority-flag-img";
    newTaskPriorityFlagImg.src = imgUrls.priorityFlag;
    newTaskPriorityFlagImg.alt = "Priority flag icon";

    const lvlCol4 = document.createElement("div");
    lvlCol4.classList.add("lvl-col");

    const newTaskDueDateLabel = document.createElement("label");
    newTaskDueDateLabel.classList.add("form-field-title");
    newTaskDueDateLabel.setAttribute("for", "new-task-due-date");
    newTaskDueDateLabel.textContent = "Due Date";

    const newTaskDueDateInput = document.createElement("input");
    newTaskDueDateInput.type = "date";
    newTaskDueDateInput.id = "new-task-due-date";
    newTaskDueDateInput.name = "new-task-due-date";
    newTaskDueDateInput.required = "true";

    // Toggle switch end

    const lvlCol5 = document.createElement("div");
    lvlCol5.classList.add("lvl-col");

    const newTaskDescriptionLabel = document.createElement("label");
    newTaskDescriptionLabel.classList.add("form-field-title");
    newTaskDescriptionLabel.setAttribute("for", "new-task-description");
    newTaskDescriptionLabel.textContent = "Brief Description (optional)";

    const textArea = document.createElement("textarea");
    textArea.id = "new-task-description";
    textArea.name = "new-task-description";
    textArea.rows = "";
    textArea.cols = "";
    textArea.placeholder = "Enter additional details here...";

    const lvlRowWidth2 = document.createElement("div");
    lvlRowWidth2.classList.add("lvl-row-width");

    const newTaskCancelBtn = document.createElement("button");
    newTaskCancelBtn.type = "button";
    newTaskCancelBtn.classList.add("cancel", "btn-sound");
    newTaskCancelBtn.id = "new-task-cancel-btn";
    newTaskCancelBtn.textContent = "Cancel";

    const newTaskSubmitBtn = document.createElement("button");
    newTaskSubmitBtn.type = "submit";
    newTaskSubmitBtn.classList.add("submit", "btn-sound");
    newTaskSubmitBtn.id = "new-task-submit-btn";
    newTaskSubmitBtn.textContent = "Submit";

    header.appendChild(headerContent);
    headerContent.appendChild(newTaskForm);
    newTaskForm.append(
        lvlRow1,
        lvlCol1,
        lvlCol2,
        lvlRowWidth1,
        lvlCol5,
        lvlRowWidth2
    );
    lvlRow1.append(newTaskImg, newTaskFormTitle);
    lvlCol1.append(newTaskNameLabel, newTaskNameInput);
    lvlCol2.append(newTaskFolderLabel, newTaskFolderSelect);
    lvlRowWidth1.append(lvlCol3, newTaskPriorityFlagImg, lvlCol4);
    lvlCol3.append(taskToggleP, taskToggleLabel);
    lvlCol4.append(newTaskDueDateLabel, newTaskDueDateInput);
    lvlCol5.append(newTaskDescriptionLabel, textArea);
    taskToggleLabel.append(taskToggleInput, span1);
    lvlRowWidth2.append(newTaskCancelBtn, newTaskSubmitBtn);
}

export function populateNewTaskFormFolderOptions(folders) {
    const newTaskFolderSelect = document.querySelector("#new-task-folder");

    folders.forEach(folderItem => {
        const folderOption = document.createElement("option");
        folderOption.classList.add(".new-task-folder-option");
        folderOption.value = `${folderItem.folderName}`
        folderOption.textContent = `${folderItem.folderName}`;

        newTaskFolderSelect.appendChild(folderOption);
    })
}

export function newTaskPriorityChecked() {
	const darkLiteBtn = document.querySelector("#dark-lite-btn");		
  	const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
  	const newTaskPriorityFlagImg = document.querySelector("#new-task-priority-flag-img");
    if (newTaskPriorityToggle) {
        if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
            newTaskPriorityToggle.dataset.value = "high";
            newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
        } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
            newTaskPriorityToggle.dataset.value = "low";
            newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImgBG;
        } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
            newTaskPriorityToggle.dataset.value = "high";
            newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
        } else if (!newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
            newTaskPriorityToggle.dataset.value = "low";
            newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImgBG;
        }    
    } else {
        console.warn("newTaskPriorityToggle is null or not found in the DOM.");
    }
};

export function clearNewTaskForm() {
    const newTaskForm = document.querySelector("#new-task-form");
    const newTaskCancelBtn = document.querySelector("#new-task-cancel-btn");

    if (newTaskCancelBtn && newTaskForm) {
        newTaskCancelBtn.addEventListener("click", function () {
        updateUI();
    });
    } else {
        console.warn("newTaskCancelBtn or newTaskForm is null or not found in the DOM.");
    }
}

function getTaskFormData() {
    return {
        taskName: document.querySelector("#new-task-name").value,
        folderLocation: document.querySelector("#new-task-folder").value,
        priorityFlag: document.querySelector("#new-task-priority-toggle").dataset.value,
        dueByDate: document.querySelector("#new-task-due-date").value,
        descriptionText: document.querySelector("#new-task-description").value,
        taskId:`t${workingTasks.length + 1}`,
        completedFlag: "incomplete",
    };
}

function createNewTask(formData) {
    return new Task(
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

export function submitNewTask() {
    const newTaskSubmitBtn = document.querySelector("#new-task-submit-btn");
    const newTaskForm = document.querySelector("#new-task-form");

    if (newTaskSubmitBtn && newTaskForm) {
        newTaskForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Extract data from form...
            const formData = getTaskFormData();

            // Create new task
            const newTask = createNewTask(formData);

            // Add task
            addTask(newTask);
            updateUI();
            });
    } else {
        console.warn(
        "newTaskSubmitBtn or newTaskForm is null or not found in the DOM."
        );
    }
}