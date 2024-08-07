import { dmNewTaskImg } from "./imageExporter.js";

export function createNewTaskForm() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const newTaskForm = document.createElement("form");
    newTaskForm.id = "new-task-form";
    newTaskForm.action = "";

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const newTaskImg = document.createElement("img");
    newTaskImg.id = "new-task-img";
    newTaskImg.src = dmNewTaskImg;
    newTaskImg.alt = "";

    const newTaskFormTitle = document.createElement("p");
    newTaskFormTitle.classList.add("font-fancy");
    newTaskFormTitle.textContent = "New Task";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const newTaskTitleLabel = document.createElement("label");
    newTaskTitleLabel.classList.add("form-field-title");
    newTaskTitleLabel.for = "new-task-title";
    newTaskTitleLabel.textContent = "Task Title";

    const newTaskTitleInput = document.createElement("input");
    newTaskTitleInput.type = "text";
    newTaskTitleInput.id = "new-task-title";
    newTaskTitleInput.name = "new-task-title";
    newTaskTitleInput.placeholder = "Enter new task title";
    newTaskTitleInput.required;

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const newTaskFolderLabel = document.createElement("label");
    newTaskFolderLabel.classList.add("form-field-title");
    newTaskFolderLabel.for = "new-task-folder";
    newTaskFolderLabel.textContent = "Task Folder";

    const newTaskFolderSelect = document.createElement("select");
    newTaskFolderSelect.id = "new-task-folder";
    newTaskFolderSelect.name = "new-task-folder";
    newTaskFolderSelect.required;

    // ADD OPTIONS?
    // const newTaskFolderOption = document.createElement("option");
    // newTaskFolderOption;

    // TOGGLE SWITCH    
    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const lvlCol3 = document.createElement("div");
    lvlCol3.classList.add("lvl-col");

    const taskToggleP = document.createElement("p");
    taskToggleP.classList.add("form-field-title");
    taskToggleP.textContent = "Priority";

    const taskToggleLabel = document.createElement("label");
    taskToggleLabel.classList.add("switch");
    taskToggleLabel.for = "new-task-priority-toggle";

    const taskToggleInput = document.createElement("input");
    taskToggleInput.type = "checkbox";
    taskToggleInput.id = "new-task-priority-toggle";
    taskToggleInput.name = "new-task-priority-toggle";

    const span1 = document.createElement("span");
    span1.classList.add("slider", "round");

    const newTaskPriorityFlagImg = document.createElement("img");
    newTaskPriorityFlagImg.id = "new-task-priority-flag-img";
    newTaskPriorityFlagImg.src = "";
    newTaskPriorityFlagImg.alt = "";

    const lvlCol4 = document.createElement("div");
    lvlCol4.classList.add("lvl-col");

    const newTaskDueDateLabel = document.createElement("label");
    newTaskDueDateLabel.classList.add("form-field-title");
    newTaskDueDateLabel.for = "new-task-due-date";
    newTaskDueDateLabel.textContent = "Due Date";

    const newTaskDueDateInput = document.createElement("input");
    newTaskDueDateInput.type = "date";
    newTaskDueDateInput.id = "new-task-due-date";
    newTaskDueDateInput.name = "new-task-due-date";
    newTaskDueDateInput.required;

    const lvlCol5 = document.createElement("div");
    lvlCol5.classList.add("lvl-col");

    const newTaskDescriptionLabel = document.createElement("label");
    newTaskDescriptionLabel.classList.add("form-field-title");
    newTaskDescriptionLabel.for = "new-task-description";
    newTaskDescriptionLabel.textContent = "Brief Description (optional)";

    const textArea = document.createElement("textarea");
    textArea.id = "new-task-description";
    textArea.name = "new-task-description";
    textArea.rows = "";
    textArea.cols = "";
    textArea.placeholder = "Enter your description here...";

    const lvlRowWidth2 = document.createElement("div");
    lvlRowWidth2.classList.add("lvl-row-width");

    const newTaskCancelBtn = document.createElement("button");
    newTaskCancelBtn.classList.add("cancel");
    newTaskCancelBtn.id = "new-task-cancel";
    newTaskCancelBtn.textContent = "Cancel";

    const newTaskSubmitBtn = document.createElement("button");
    newTaskSubmitBtn.classList.add("submit");
    newTaskSubmitBtn.id = "new-task-submit";
    newTaskSubmitBtn.textContent = "Submit";

    header.appendChild(headerContent);
    headerContent.appendChild(newTaskForm);
    newTaskForm.append(
    lvlRow1,
    lvlCol1,
    lvlCol2,
    lvlRowWidth1,
    lvlCol5,
    lvlRowWidth2,
    );
    lvlRow1.append(newTaskImg, newTaskFormTitle);
    lvlCol1.append(newTaskTitleLabel, newTaskTitleInput);
    lvlCol2.append(newTaskFolderLabel, newTaskFolderSelect);
    lvlRowWidth1.append(
    lvlCol3,
    newTaskPriorityFlagImg,
    lvlCol4,       
    );
    lvlCol3.append(taskToggleP, taskToggleLabel);
    lvlCol4.append(newTaskDueDateLabel, newTaskDueDateInput);
    lvlCol5.append(newTaskDescriptionLabel, textArea);
    taskToggleLabel.append(taskToggleInput, span1);
    lvlRowWidth2.append(newTaskCancelBtn, newTaskSubmitBtn);
}