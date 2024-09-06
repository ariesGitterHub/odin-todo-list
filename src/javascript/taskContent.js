import {
    dmTaskOverdueNoticeImg,
    dmPriorityImg,
    dmCompletedImg,
    dmEditImg,
    dmTrashImg,
    lmTaskOverdueNoticeImg,
    lmPriorityImg,
    lmCompletedImg,
    lmEditImg,
    lmTrashImg,
} from "./imageExporter.js";

import { reformatDate } from "./checkStatus.js";

import {
    updatePriorityStatus, 
    updateCompleteStatus,
    removeTask,
    workingTheme,
} from "./storageAndData.js";

export function defaultTaskBtnImgs() {
    if (workingTheme[0].mode === "dark") {
        return {
            overdueNotice: dmTaskOverdueNoticeImg,
            priority: dmPriorityImg,
            completed: dmCompletedImg,
            edit: dmEditImg,
            trash: dmTrashImg,
        };
    } else if (workingTheme[0].mode === "lite") {
        return {
            overdueNotice: lmTaskOverdueNoticeImg,
            priority: lmPriorityImg,
            completed: lmCompletedImg,
            edit: lmEditImg,
            trash: lmTrashImg,
        };
    }
}

export function createTasks(tasks) { 
    const taskContent = document.querySelector("#task-content");
    const imgUrls = defaultTaskBtnImgs();
    
    tasks.forEach(taskItem => {      
        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.id = `${taskItem.taskId}`;

        const mainCol = document.createElement("div");
        mainCol.classList.add("lvl-col");

        const taskName = document.createElement("p");
        taskName.classList.add("task-name");
        taskName.dataset.name = `${taskItem.taskName}`; 
        taskName.textContent = `${taskItem.taskName}`;

        const lvlRowWrap = document.createElement("div");
        lvlRowWrap.classList.add("lvl-row-wrap");  
        
        const lvlRow1 = document.createElement("div");
        lvlRow1.classList.add("lvl-row");

        const taskOverdueNoticeImg = document.createElement("img");
        taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
        taskOverdueNoticeImg.src = imgUrls.overdueNotice;
        taskOverdueNoticeImg.alt = "Overdue warning icon";

        const taskOverdueNoticeP = document.createElement("p");
        taskOverdueNoticeP.classList.add("task-overdue-notice-p");
        taskOverdueNoticeP.textContent = "";

        const taskDueDate = document.createElement("div");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.dataset.date = `${taskItem.dueByDate.replace(/-/g, "/")}`;
        taskDueDate.textContent = `Due: ${reformatDate(taskItem.dueByDate.replace(/-/g, "/"))}`; 

        const taskFolder = document.createElement("div");
        taskFolder.classList.add("task-folder");
        taskFolder.dataset.folder = `${taskItem.folderLocation}`;
        taskFolder.textContent = `Folder: ${taskItem.folderLocation}`;

        const br1 = document.createElement("br");
        br1.classList.add("task-description-removeBR1");
    
        const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.dataset.description = `${taskItem.descriptionText}`; 
        taskDescription.textContent = `${taskItem.descriptionText}`;

        const br2 = document.createElement("br");
        br2.classList.add("task-description-removeBR2");

        const taskBtnCont = document.createElement("div");
        taskBtnCont.classList.add("lvl-row", "task-btn-cont");

        const taskBtnCol1 = document.createElement("div");
        taskBtnCol1.classList.add("lvl-col");
    
        const taskPriorityBtn = document.createElement("button");
        taskPriorityBtn.classList.add("task-priority-btn", "btn-sound");
        taskPriorityBtn.value = "low";

        const taskPriorityBtnImg = document.createElement("img");
        taskPriorityBtnImg.classList.add("task-priority-btn-img");
        taskPriorityBtnImg.src = imgUrls.priority;
        taskPriorityBtnImg.alt = "Priority flag icon";

        const taskBtnCol2 = document.createElement("div");
        taskBtnCol2.classList.add("lvl-col");
    
        const taskCompletedBtn = document.createElement("button");
        taskCompletedBtn.classList.add("task-completed-btn", "btn-sound");
        taskCompletedBtn.value = "incomplete";

        const taskCompletedBtnImg = document.createElement("img");
        taskCompletedBtnImg.classList.add("task-completed-btn-img");
        taskCompletedBtnImg.src = imgUrls.completed;
        taskCompletedBtnImg.alt = "Completed check mark icon";

        const taskBtnCol3 = document.createElement("div");
        taskBtnCol3.classList.add("lvl-col");

        const taskEditBtn = document.createElement("button");
        taskEditBtn.classList.add("task-edit-btn", "btn-sound");
        taskEditBtn.dataset.id = `${taskItem.taskId}`;

        const taskEditBtnImg = document.createElement("img");
        taskEditBtnImg.classList.add("task-edit-btn-img");
        taskEditBtnImg.src = imgUrls.edit;
        taskEditBtnImg.alt = "Edit task icon";

        const taskBtnCol4 = document.createElement("div");
        taskBtnCol4.classList.add("lvl-col");

        const taskTrashBtn = document.createElement("button", "btn-sound");
        taskTrashBtn.classList.add("task-trash-btn");

        const taskTrashBtnImg = document.createElement("img");
        taskTrashBtnImg.classList.add("task-trash-btn-img");
        taskTrashBtnImg.src = imgUrls.trash;
        taskTrashBtnImg.alt = "Trash can icon";
    
        const sectionBotPad = document.createElement("div");
        sectionBotPad.classList.add("section-bot-pad");

        taskContent.append(task, sectionBotPad);
        task.append(mainCol, taskBtnCont);
        mainCol.append(
            taskName,
            lvlRowWrap,
            br1,
            taskDescription,
            br2,
        );
        lvlRowWrap.append(
            lvlRow1,
            taskDueDate,
            taskFolder,
        );
        lvlRow1.append(taskOverdueNoticeImg, taskOverdueNoticeP);
        taskBtnCont.append(
            taskBtnCol1,
            taskBtnCol2,
            taskBtnCol3,
            taskBtnCol4
        );
        taskBtnCol1.append(taskPriorityBtn);
        taskPriorityBtn.append(taskPriorityBtnImg);
        taskBtnCol2.append(taskCompletedBtn);
        taskCompletedBtn.append(taskCompletedBtnImg);
        taskBtnCol3.append(taskEditBtn);
        taskEditBtn.append(taskEditBtnImg);
        taskBtnCol4.append(taskTrashBtn);
        taskTrashBtn.append(taskTrashBtnImg);
        
    })
                  
};

// RE-EXAMINE THIS CLOSELY!!!! This was a bit beyond me to finish 100% correctly...
export function createTaskColor(folders) {
    const taskFolderElements = document.querySelectorAll(".task-folder");

    taskFolderElements.forEach((taskFolderElement) => {
    const folderName = taskFolderElement.dataset.folder;
    const matchingFolder = folders.find((folder) => folder.folderName === folderName);

    if (matchingFolder) {
        const task = taskFolderElement.closest(".task"); // Finds the parent .task element
        task.style.borderColor = `var(${matchingFolder.folderColor})`;
        task.style.color = `var(${matchingFolder.folderColor})`;

        const taskBtns = task.querySelectorAll("button");
        taskBtns.forEach((button) => {
            button.style.borderColor = `var(${matchingFolder.folderColor})`;
        });
    } else {
      console.warn(`No matching folder found for ${folderName}.`);
    }
  });
}

export function priorityBtnClicked(index) {
    const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
    const taskTiles = document.querySelectorAll(".task");
    const taskNames = document.querySelectorAll(".task-name");
    const taskPriorityBtn = taskPriorityBtns[index];
    const taskTile = taskTiles[index];
    const taskName = taskNames[index];

    if (taskPriorityBtn) {
        if (taskPriorityBtn.value === "low" ) {
            taskPriorityBtn.value = "high";
            taskPriorityBtn.style.backgroundColor = "var(--activated)";
            taskName.style.color = "var(--alert)";
            taskName.style.textDecoration = "underline";

            updatePriorityStatus(taskTile.dataset.id);
  
            // Append "!!!" to the task title if not already present

            if (!taskName.textContent.includes("!!!")) {
                taskName.textContent += " !!!";
            }
        } else if (taskPriorityBtn.value === "high") {
            taskPriorityBtn.value = "low";
            taskPriorityBtn.style.backgroundColor = "var(--bkgd)"; // Reset to default
            taskName.style.color = "inherit";
            taskName.style.textDecoration = "none";

            updatePriorityStatus(taskTile.dataset.id);
 
            const titleText = taskName.textContent;
            if (titleText.includes("!!!")) {
                taskName.textContent = titleText.replace(" !!!", ""); // Remove the last occurrence of "!!!"
            }
        }  
    } else {
    console.warn("taskPriorityBtn is null or not found in the DOM.");
    }
}

export function completedBtnClicked(index) {
    const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
    const taskTiles = document.querySelectorAll(".task");
    const taskCompletedBtn = taskCompletedBtns[index];
    const taskTile = taskTiles[index];
    
    if (taskCompletedBtn) {
        if (taskCompletedBtn.value === "incomplete") {
            taskCompletedBtn.value = "completed";
            taskCompletedBtn.style.backgroundColor = "var(--activated)";
            taskTile.style.textDecoration = "line-through";
            taskTile.style.textDecorationThickness = "3px";
            taskTile.style.backgroundColor = "var(--activated)";

            updateCompleteStatus(taskTile.dataset.id);
            
        } else if (taskCompletedBtn.value === "completed") {
            taskCompletedBtn.value = "incomplete";
            taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
            taskTile.style.textDecoration = "none";
            taskTile.style.backgroundColor = "var(--bkgd)";

            updateCompleteStatus(taskTile.dataset.id);
        }
    } else {
    console.warn("taskCompletedBtn is null or not found in the DOM.");
    }
}

export function taskTrashBtnClicked(index) {
    const taskTrashBtns = document.querySelectorAll(".task-trash-btn");
    const taskTiles = document.querySelectorAll(".task");
    const taskTrashBtn = taskTrashBtns[index];
    const taskTile = taskTiles[index];

    if (taskTrashBtn) {
        removeTask(taskTile.dataset.id);
    } else {
        console.warn("taskTrashBtn is null or not found in the DOM.");
    }
}