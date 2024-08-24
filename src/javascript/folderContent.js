import {
    dmTaskImg,
    dmFolderImg,
    dmEditImg,
    dmTrashImg,
    lmTaskImg,
    lmFolderImg,
    lmEditImg,
    lmTrashImg,

  dmTaskOverdueNoticeImg,
  dmPriorityImg,
  dmCompletedImg,    

    lmTaskOverdueNoticeImg,
  lmPriorityImg,
  lmCompletedImg,
} from "./imageExporter.js";

import {checkIfOverdue} from "./checkStatus.js"

// import { defaultTaskBtnImgs } from "./taskContent.js"

import { reformatDate } from "./checkStatus.js";

import {
    workingFolders,
    workingTasks,
    workingTheme,
    // removeFolder,
    // workingFolder,
} from "./storageAndData.js";

// function defaultFolderBtnImgs() {
//   if (workingTheme[0].mode === "dark") {
//     return {
//       folder: dmFolderImg,
//       edit: dmEditImg,
//       trash: dmTrashImg,
//     };
//   } else if (workingTheme[0].mode === "lite") {
//     return {
//       folder: lmFolderImg,
//       edit: lmEditImg,
//       trash: lmTrashImg,
//     };
//   }
// }d
function defaultFolderBtnImgs() {
  if (workingTheme[0].mode === "dark") {
    return {
        task: lmTaskImg,
        folder: lmFolderImg,
        edit: lmEditImg,
        //   trash: dmTrashImg,
    };
  } else if (workingTheme[0].mode === "lite") {
    return {
        task: dmTaskImg,
        folder: dmFolderImg,
        edit: dmEditImg,
        //   trash: lmTrashImg,
    };
  }
}
checkIfOverdue(workingTasks);

export function createFolders(folders) {
  //   const taskContent = document.querySelector("#task-content");
  const folderContent = document.querySelector("#folder-content");
  folderContent.classList.add("none");
  // taskContent.innerHTML = "";

  const imgUrls = defaultFolderBtnImgs();

  folders.forEach((folderItem) => {

    const folder = document.createElement("div");
    folder.classList.add("folder");
    folder.dataset.id = `${folderItem.folderId}`;
    folder.style.backgroundColor = `var(${folderItem.folderColor})`;
    // folder.setAttribute("role", "button");

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row-spaced");

    // const folderTaskBtn = document.createElement("button");
    // folderTaskBtn.classList.add("folder-task-btn");
    // folderTaskBtn.value = "off";
    // folderTaskBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

    // const folderTaskBtnImg = document.createElement("img");
    // folderTaskBtnImg.classList.add("folder-task-btn-img");
    // folderTaskBtnImg.src = imgUrls.task;
    // folderTaskBtnImg.alt = "Task folder icon";

    const folderFolderImg = document.createElement("img");
    folderFolderImg.classList.add("folder-folder-img");
    folderFolderImg.src = imgUrls.folder;
    folderFolderImg.alt = "Folder icon";

    const folderName = document.createElement("p");
    folderName.classList.add("folder-name");
    folderName.textContent = `${folderItem.folderName}`;

    const folderEditBtn = document.createElement("button");
    folderEditBtn.classList.add("folder-edit-btn");
    folderEditBtn.value = "off";
    folderEditBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

    const folderEditBtnImg = document.createElement("img");
    folderEditBtnImg.classList.add("folder-edit-btn-img");
    folderEditBtnImg.src = imgUrls.edit;
    folderEditBtnImg.alt = "Edit folder icon";

    const sanitizedFolderName = folderItem.folderName.replace(/\s+/g, "-");

    const folderTaskField = document.createElement("div");
    // folderTaskField.classList.add(
    //   "folder-task-field",
    //   `${folderItem.folderName}.replace(/\s+/g, '-')`
    // );
    folderTaskField.classList.add("folder-task-field", sanitizedFolderName);
    // folderTaskField.textContent = `${folderItem.folderName}`;
    folderTaskField.dataset.color = `${folderItem.folderColor}`

    const matchingTasks = workingTasks.filter(
      (task) => task.folderLocation === folderItem.folderName
      );

    matchingTasks.forEach((task) => {

    const sanitizedTaskFolderP = folderItem.folderName.replace(/\s+/g, "-");

      const taskFolderP = document.createElement("p");
    //   taskFolderP.classList.add(
    //     "task-folder-p",
    //     `${task.folderLocation}.replace(/\s+/g, '-')`
    //   );

    taskFolderP.classList.add("task-folder-p", sanitizedTaskFolderP);

      taskFolderP.textContent = `"${
        task.taskName.toUpperCase()}" (Due ${task.dueByDate}; Status: ${task.overdueFlag}; Priority: ${task.priorityFlag})`; // Assuming each task has a taskName property
      folderTaskField.appendChild(taskFolderP);
            taskFolderP.style.color = `var(${folderTaskField.dataset.color})`;
    });

      // const folderTrashBtn = document.createElement("button");
    // folderTrashBtn.classList.add("folder-trash-btn");

    // const folderTrashBtnImg = document.createElement("img");
    // folderTrashBtnImg.classList.add("folder-trash-btn-img");
    // folderTrashBtnImg.src = imgUrls.trash;
    // folderTrashBtnImg.alt = "Trash folder icon";

    const sectionBotPad = document.createElement("div");
    sectionBotPad.classList.add("section-bot-pad");

    folderContent.append(folder, folderTaskField, sectionBotPad);
    folder.append(lvlRow1, folderEditBtn);
    // folderTaskBtn.append(folderTaskBtnImg);
    lvlRow1.append(
        // folderTaskBtn,
         folderFolderImg, folderName);
    folderEditBtn.append(folderEditBtnImg);
  });
}

// export function colorFolderText(folders, tasks) {
//     const folderTaskField = document.querySelectorAll(`${folders.folderName}`);

//     folderTaskField.forEach(element => {
//     const taskFolderP = document.querySelector(`${tasks.folderLocation}`);
//     if (element.getAttribute === taskFolderP.getAttribute) {
//         taskFolderP.style.color = `${element.dataset.color}`
//         }
//     })
// }



// function createFolderTasks(tasks) { 
//     const folderTaskField = document.querySelectorAll(".folder-task-field");

//         tasks.forEach(taskItem => {

//         const task = document.createElement("div");
//         task.classList.add("task");
//         task.dataset.id = `${taskItem.taskId}`;

//         const mainCol = document.createElement("div");
//         mainCol.classList.add("lvl-col");

//         const taskName = document.createElement("p");
//         taskName.classList.add("task-name2");
//         taskName.textContent = `${taskItem.taskName}`;

//         const taskDueDate = document.createElement("div");
//         taskDueDate.classList.add("task-due-date");
//         taskDueDate.dataset.date = `${taskItem.dueByDate.replace(/-/g, "/")}`;
//         taskDueDate.textContent = `Due: ${reformatDate(
//           taskItem.dueByDate.replace(/-/g, "/")
//         )}`; 
    
//         const sectionBotPad = document.createElement("div");
//         sectionBotPad.classList.add("section-bot-pad");

//         folderTaskField.append(task, sectionBotPad);
//         task.append(mainCol);
//         mainCol.append(
//             taskName,
//             taskDueDate,
//         );
//     })    
// }

// export function checkAndOrganizeByFolder(tasks) {
//   tasks.sort(function (a, b) {
//     let folder1 = a.folderLocation.toLowerCase();
//     let folder2 = b.folderLocation.toLowerCase();

//     // Forgot about localCompare!
//     return folder1.localeCompare(folder2);
//   });
// }
    

// export function folderTaskBtnClicked(index) {
//     const folderTaskBtns = document.querySelectorAll(".folder-task-btn");
//     const folderTiles = document.querySelectorAll(".folder");
//     const taskTiles = document.querySelectorAll(".task");

//     const taskFolderPs = document.querySelectorAll(".task-folder-p");

//     const folderTaskBtn = folderTaskBtns[index];
//     const folderTile = folderTiles[index];
//     const taskTile = taskTiles[index];

//     const taskFolderP = taskFolderPs[index];

//   if (folderTaskBtn) {
//     // createFolderTasks(workingTasks)
//     // console.log(taskTiles);
//     // checkAndOrganizeByFolder(workingTasks);
// console.log("Yippee!");
// taskFolderP.classList.toggle("none");


    
//   } else {
//     console.warn("folderTaskBtn is null or not found in the DOM.");
//   }
// }
