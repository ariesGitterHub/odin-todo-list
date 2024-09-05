import {
    dmTaskImg,
    dmFolderImg,
    dmEditImg,
    dmTrashImg,
    lmTaskImg,
    lmFolderImg,
    lmEditImg,
    lmTrashImg,
} from "./imageExporter.js";

import { checkIfOverdue, reformatDate } from "./checkStatus.js";

import {
    workingTasks,
    workingTheme,
    removeFolder,
} from "./storageAndData.js";

function defaultFolderBtnImgs() {
    if (workingTheme[0].mode === "dark") {
        return {
            task: lmTaskImg,
            folder: lmFolderImg,
            edit: lmEditImg,
            trash: dmTrashImg,
        };
    } else if (workingTheme[0].mode === "lite") {
        return {
            task: dmTaskImg,
            folder: dmFolderImg,
            edit: dmEditImg,
            trash: lmTrashImg,
        };
    }
}

checkIfOverdue(workingTasks);

export function createFolders(folders) {
    const folderContent = document.querySelector("#folder-content");
    folderContent.classList.add("none");

    const imgUrls = defaultFolderBtnImgs();

    folders.forEach((folderItem) => {
        const folder = document.createElement("div");
        folder.classList.add("folder", "lvl-col-folder-view");
        folder.dataset.id = `${folderItem.folderId}`;

        const folderBar = document.createElement("div");
        folderBar.classList.add("folder-bar");
        folderBar.style.backgroundColor = `var(${folderItem.folderColor})`;

        const lvlRow1 = document.createElement("div");
        lvlRow1.classList.add("lvl-row-start");

        const folderFolderImg = document.createElement("img");
        folderFolderImg.classList.add("folder-folder-img");
        folderFolderImg.src = imgUrls.folder;
        folderFolderImg.alt = "Folder icon";

        const folderName = document.createElement("p");
        folderName.classList.add("folder-name");
        folderName.textContent = `${folderItem.folderName}`;

        const sanitizedFolderName = folderItem.folderName.replace(/\s+/g, "-");

        const folderTaskNum = document.createElement("p");
        folderTaskNum.classList.add("folder-task-num", sanitizedFolderName);
        folderTaskNum.textContent = ` (0)`;

        const lvlRow2 = document.createElement("div");
        lvlRow2.classList.add("lvl-row-end");

        const folderEditBtn = document.createElement("button");
        folderEditBtn.classList.add("folder-edit-btn", "btn-sound");
        folderEditBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

        const folderEditBtnImg = document.createElement("img");
        folderEditBtnImg.classList.add("folder-edit-btn-img");
        folderEditBtnImg.src = imgUrls.edit;
        folderEditBtnImg.alt = "Edit icon";

        const folderTrashBtn = document.createElement("button");
        folderTrashBtn.classList.add("folder-trash-btn", "btn-sound");
        folderTrashBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

        const folderTrashBtnImg = document.createElement("img");
        folderTrashBtnImg.classList.add("folder-trash-btn-img");
        folderTrashBtnImg.src = imgUrls.trash;
        folderTrashBtnImg.alt = "Trash can icon";

        folderContent.append(folder);
        folder.append(folderBar);
        folderBar.append(lvlRow1, lvlRow2);
        lvlRow1.append(
            folderFolderImg,
            folderName,
            folderTaskNum,
        );
        lvlRow2.append(folderEditBtn, folderTrashBtn);
        folderEditBtn.append(folderEditBtnImg);
        folderTrashBtn.append(folderTrashBtnImg);

        const matchingTasks = workingTasks.filter(
            (task) => task.folderLocation === folderItem.folderName
        );

        matchingTasks.forEach((task) => {
            const folderTaskField = document.createElement("div");
            folderTaskField.classList.add("folder-task-field", sanitizedFolderName);
            folderTaskField.dataset.color = `${folderItem.folderColor}`;
            folderTaskField.style.color = `var(${folderTaskField.dataset.color})`;
            folderTaskField.style.borderColor = `var(${folderTaskField.dataset.color})`;

            const sanitizedTaskFolderP = folderItem.folderName.replace(/\s+/g, "-");

            const folderTaskNameImgRow = document.createElement("div");
            folderTaskNameImgRow.classList.add("folder-task-name-img-row", "lvl-row");
        
            const folderTaskImg = document.createElement("img");
            folderTaskImg.classList.add("folder-task-img");
            folderTaskImg.src = imgUrls.task;
            folderTaskImg.alt = "Task icon";

            const taskFolderPName = document.createElement("p");
            taskFolderPName.classList.add(
                "task-folder-p",
                 "task-folder-p-name",
                sanitizedTaskFolderP
                );
            taskFolderPName.textContent = `${task.taskName.toUpperCase()}`;

            const folderTaskDateFolderRow = document.createElement("div");
            folderTaskDateFolderRow.classList.add("folder-task-date-folder-row", "lvl-row");

            const taskFolderPDate = document.createElement("p");
            taskFolderPDate.classList.add(
                "task-folder-p",
                "task-folder-p-date",
                sanitizedTaskFolderP
                );
            taskFolderPDate.textContent = `Due by ${reformatDate(task.dueByDate.replace(/-/g, "/"))}; ${task.overdueFlag}`;

            const taskFolderPCOP = document.createElement("p");
            taskFolderPCOP.classList.add(
              "task-folder-p",
              "task-folder-p-cop",
              sanitizedTaskFolderP
            );
            taskFolderPCOP.textContent = `Status: ${task.completedFlag}, ${task.priorityFlag} priority`;

            folder.append(folderTaskField);
            folderTaskField.append(
            folderTaskNameImgRow,
            folderTaskDateFolderRow
            );
            folderTaskNameImgRow.append(folderTaskImg, taskFolderPName);
            folderTaskDateFolderRow.append(taskFolderPDate, taskFolderPCOP);
        });
    });
}

export function countTasksByFolder() {
const folderTiles = document.querySelectorAll(".folder");

    folderTiles.forEach(folderTile => {
        const taskFolderPs = folderTile.querySelectorAll(".task-folder-p");
        const taskCount = taskFolderPs.length / 3;
        const folderTaskNum = folderTile.querySelector(".folder-task-num");

        if (taskCount) {
          folderTaskNum.textContent = `(${taskCount})`;
        } 
    })
}

export function folderTrashBtnClicked(index) {
    const folderTrashBtns = document.querySelectorAll(".folder-trash-btn");
    const folderTrashBtn = folderTrashBtns[index];
    const folderTiles = document.querySelectorAll(".folder");
    const folderTile = folderTiles[index];

    if (folderTrashBtn) {
        removeFolder(folderTile.dataset.id);
    } else {
        console.warn("folderTrashBtn is null or not found in the DOM.");
    }
}