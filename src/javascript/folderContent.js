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
    folder.classList.add("folder", "lvl-col-folder-view");
    folder.dataset.id = `${folderItem.folderId}`;
    // folder.style.backgroundColor = `var(${folderItem.folderColor})`;
    // folder.setAttribute("role", "button");

    const folderBar = document.createElement("div");
    folderBar.classList.add("folder-bar");
    folderBar.style.backgroundColor = `var(${folderItem.folderColor})`;

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

    const sanitizedFolderName = folderItem.folderName.replace(/\s+/g, "-");

    const folderTaskNum = document.createElement("p");
    folderTaskNum.classList.add("folder-task-num", sanitizedFolderName);
    folderTaskNum.textContent = ` (0 Tasks)`;

    const folderEditBtn = document.createElement("button");
    folderEditBtn.classList.add("folder-edit-btn");
    folderEditBtn.value = "off";
    folderEditBtn.style.backgroundColor = `var(${folderItem.folderColor})`;

    const folderEditBtnImg = document.createElement("img");
    folderEditBtnImg.classList.add("folder-edit-btn-img");
    folderEditBtnImg.src = imgUrls.edit;
    folderEditBtnImg.alt = "Edit folder icon";

  

    // const folderTaskField = document.createElement("div");
    // // folderTaskField.classList.add(
    // //   "folder-task-field",
    // //   `${folderItem.folderName}.replace(/\s+/g, '-')`
    // // );
    // folderTaskField.classList.add("folder-task-field", sanitizedFolderName);
    // // folderTaskField.textContent = `${folderItem.folderName}`;
    // folderTaskField.dataset.color = `${folderItem.folderColor}`

    // const matchingTasks = workingTasks.filter(
    //   (task) => task.folderLocation === folderItem.folderName
    //   );

    //     matchingTasks.forEach((task) => {

    //     const folderTaskField = document.createElement("div");
    //     // folderTaskField.classList.add(
    //     //   "folder-task-field",
    //     //   `${folderItem.folderName}.replace(/\s+/g, '-')`
    //     // );
    //     folderTaskField.classList.add(
    //       "folder-task-field",
    //       sanitizedFolderName
    //     );
    //     // folderTaskField.textContent = `${folderItem.folderName}`;
    //     folderTaskField.dataset.color = `${folderItem.folderColor}`; 
    //     const sanitizedTaskFolderP = folderItem.folderName.replace(/\s+/g, "-");
    //     const taskFolderPName = document.createElement("p");
    //     const taskFolderPDate = document.createElement("p");
    //     const taskFolderPCOP = document.createElement("p");
    //     const taskFolderBreak = document.createElement("br");
    //         // taskFolderP.classList.add("task-folder-p", sanitizedTaskFolderP);
    //     taskFolderPName.classList.add("task-folder-p", sanitizedTaskFolderP);
    //     taskFolderPDate.classList.add("task-folder-p", sanitizedTaskFolderP);
    //     taskFolderPCOP.classList.add("task-folder-p", sanitizedTaskFolderP);
    //     taskFolderPName.textContent = `${task.taskName.toUpperCase()}`;
    //     taskFolderPDate.textContent = `Due by ${reformatDate(
    //     task.dueByDate.replace(/-/g, "/")
    //     )}; ${task.overdueFlag}`;
    //     taskFolderPCOP.textContent = `Status: ${task.completedFlag}, ${task.priorityFlag} priority`;

    //     folder.append(folderTaskField);
    //     folderTaskField.append(
    //         taskFolderPName,
    //         taskFolderPDate,
    //         taskFolderPCOP,
    //         taskFolderBreak
    //     );
    //     folderTaskField.style.color = `var(${folderTaskField.dataset.color})`;
    //     folderTaskField.style.border = `calc(var(--border-size) *2) dashed var(${folderTaskField.dataset.color})`;
    //     });


    

      // const folderTrashBtn = document.createElement("button");
    // folderTrashBtn.classList.add("folder-trash-btn");

    // const folderTrashBtnImg = document.createElement("img");
    // folderTrashBtnImg.classList.add("folder-trash-btn-img");
    // folderTrashBtnImg.src = imgUrls.trash;
    // folderTrashBtnImg.alt = "Trash folder icon";

    // const sectionBotPad = document.createElement("div");
    // sectionBotPad.classList.add("section-bot-pad");

    folderContent.append(folder
        // , sectionBotPad
    );
    folder.append(folderBar
      // , folderTaskField
    );
    folderBar.append(lvlRow1, folderEditBtn);
    // folderTaskBtn.append(folderTaskBtnImg);
    lvlRow1.append(
      // folderTaskBtn,
      folderFolderImg,
      folderName,
      folderTaskNum,
    );
    folderEditBtn.append(folderEditBtnImg);

    const matchingTasks = workingTasks.filter(
      (task) => task.folderLocation === folderItem.folderName
    );

    matchingTasks.forEach((task) => {
      const folderTaskField = document.createElement("div");
      // folderTaskField.classList.add(
      //   "folder-task-field",
      //   `${folderItem.folderName}.replace(/\s+/g, '-')`
      // );
      folderTaskField.classList.add("folder-task-field", sanitizedFolderName);
      // folderTaskField.textContent = `${folderItem.folderName}`;
      folderTaskField.dataset.color = `${folderItem.folderColor}`;
      const sanitizedTaskFolderP = folderItem.folderName.replace(/\s+/g, "-");
      const taskFolderPName = document.createElement("p");
      const taskFolderPDate = document.createElement("p");
      const taskFolderPCOP = document.createElement("p");
      // const taskFolderBreak = document.createElement("br");
      // taskFolderP.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPName.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPDate.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPCOP.classList.add("task-folder-p", sanitizedTaskFolderP);
      taskFolderPName.textContent = `${task.taskName.toUpperCase()}`;
      taskFolderPDate.textContent = `Due by ${reformatDate(
        task.dueByDate.replace(/-/g, "/")
      )}; ${task.overdueFlag}`;
      taskFolderPCOP.textContent = `Status: ${task.completedFlag}, ${task.priorityFlag} priority`;

      folder.append(folderTaskField);
      folderTaskField.append(
        taskFolderPName,
        taskFolderPDate,
        taskFolderPCOP,
        // taskFolderBreak
      );
      folderTaskField.style.color = `var(${folderTaskField.dataset.color})`;
      folderTaskField.style.border = `calc(var(--border-size) *2) dashed var(${folderTaskField.dataset.color})`;
    });
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

// export function countTasksByFolder(folders) {
//     const folderTaskNums = document.querySelectorAll(".folder-task-num");
//     // const folderTaskNum = folderTaskNums[index];
//  let totalTasksByFolder = 0;

//  folderTaskNums.forEach((match)=> {
//   folders.forEach((folderItem) => {
//     //  console.log(folderItem.folderName);

//     const matchingFolders = workingTasks.filter(
//       (task) => task.folderLocation === folderItem.folderName
//     );
//     // console.log(`The Matching Folders are: ${JSON.stringify(matchingFolders)}`);

//     if (match.classList.contains("folderItem.folderName")) {
//       matchingFolders.forEach((matching) => {
//         // console.log(matchingItem);
//         totalTasksByFolder += 1;
//         folderTaskNums.textContent = `(${totalTasksByFolder} tasks)`;
//       });
//     }
//   });
// })
// }

// export function countTasksByFolder() {
//     const folderTaskFields = document.querySelectorAll(".folder-task-field");
//     const taskFolderP = document.querySelector(".task-folder-p");


//     folderTaskFields.forEach((count) => {
//         console.log(
//           `Number of elements with class 'task-folder-p': ${taskFolderP.size}`
//         );
        
//     })
// }

// export function countTasksByFolder() {
//   const folderTaskFields = document.querySelectorAll(".folder-task-field");
//   const folderTaskNum = document.querySelector(".folder-task-num");
//   folderTaskFields.forEach((folderTaskField) => {
//     const taskFolderPs = folderTaskField.querySelectorAll(".task-folder-p");
//     const count = taskFolderPs.length / 3;
//     folderTaskNum.textContent = `(${count} tasks)`;
//     console.log(
//       `Number of elements with class 'task-folder-p' in folder-task-field: ${count}`
//     );
//   });
// }
// export function countTasksByField() {

//     const folderTaskFields = document.querySelectorAll(".folder-task-field");
//     // console.log(JSON.stringify(folderTiles));

//     folderTaskFields.forEach((folderTaskField) => {
//     //   console.log(folderTaskField);
//         const taskFolderPs = folderTaskField.querySelectorAll(".task-folder-p");
//         const count = taskFolderPs.length / 3;
//         console.log(count);
//     });
    
// }



export function countTasksByFolder() {
const folderTiles = document.querySelectorAll(".folder");

    folderTiles.forEach(folderTile => {
        const taskFolderPs = folderTile.querySelectorAll(".task-folder-p");
        const taskCount = taskFolderPs.length / 3;
        const folderTaskNum = folderTile.querySelector(".folder-task-num");

        if (taskCount === 1) {
            folderTaskNum.textContent = `(${taskCount} task)`;
        } else {
            folderTaskNum.textContent = `(${taskCount} tasks)`;
        }
    })
}