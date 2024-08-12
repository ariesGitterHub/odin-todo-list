// remove dmTaskOverdueNoticeImg oafter making a function that renders this only if the date is past due
import {
  dmTaskOverdueNoticeImg,
//   lmTaskOverdueNoticeImg,
  // dmTaskOverdueBgImg,
  //   redOverdueImg,
  dmPriorityImg,
  dmCompletedImg,
  dmEditImg,
  dmTrashImg,
} from "./imageExporter.js";

import { reformatDate } from "./checkStatus.js";


export function createTasks(tasks) { 
    const taskContent = document.querySelector("#task-content");
    // taskContent.innerHTML = "";

    tasks.forEach(taskItem => {
        const task = document.createElement("div");
        task.classList.add("task");

        const mainCol = document.createElement("div");
        mainCol.classList.add("lvl-col");

        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = `${taskItem.taskName}`;

        // const br1 = document.createElement("br");

        const taskDueDate = document.createElement("div");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.dataset.date = `${taskItem.dueByDate}`
        taskDueDate.textContent = `Due: ${reformatDate(taskItem.dueByDate)}`; 


        const lvlRow1 = document.createElement("div");
        lvlRow1.classList.add("lvl-row");

        // const taskDueDate = document.createElement("div");
        // taskDueDate.classList.add("task-due-date");
        // taskDueDate.textContent = `Due: ${reformatDate(
        //   taskItem.dueByDate
        // )}`;              

        const taskOverdueNoticeImg = document.createElement("img");
        taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
        taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
        taskOverdueNoticeImg.alt = "Date is overdue icon";

        const taskOverdueNoticeP = document.createElement("p");
        taskOverdueNoticeP.classList.add("task-overdue-notice-p");
        taskOverdueNoticeP.textContent = "";

        const taskFolder = document.createElement("div");
        taskFolder.classList.add("task-folder");
        taskFolder.textContent = `${taskItem.folderLocation}`;

        const br2 = document.createElement("br");
      
        const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = `${taskItem.descriptionText}`;
   
        const br3 = document.createElement("br");

        const taskBtnCont = document.createElement("div");
        taskBtnCont.classList.add("lvl-row", "task-btn-cont");
   
        const taskBtnCol1 = document.createElement("div");
        taskBtnCol1.classList.add("lvl-col");
      
        const taskPriorityBtn = document.createElement("button");
        taskPriorityBtn.classList.add("task-priority-btn");
        taskPriorityBtn.value = "normal";

        const taskPriorityBtnImg = document.createElement("img");
        taskPriorityBtnImg.classList.add("task-priority-btn-img");
        taskPriorityBtnImg.src = dmPriorityImg;
        taskPriorityBtnImg.alt = "Priority task icon";

        const taskBtnCol2 = document.createElement("div");
        taskBtnCol2.classList.add("lvl-col");
     
        const taskCompletedBtn = document.createElement("button");
        taskCompletedBtn.classList.add("task-completed-btn");
        taskCompletedBtn.value = "incomplete";

        const taskCompletedBtnImg = document.createElement("img");
        taskCompletedBtnImg.classList.add("task-completed-btn-img");
        taskCompletedBtnImg.src = dmCompletedImg;
        taskCompletedBtnImg.alt = "Completed task icon";
   
        const taskBtnCol3 = document.createElement("div");
        taskBtnCol3.classList.add("lvl-col");

        const taskEditBtn = document.createElement("button");
        taskEditBtn.classList.add("task-edit-btn");
        taskEditBtn.value = "off";

        const taskEditBtnImg = document.createElement("img");
        taskEditBtnImg.classList.add("task-edit-btn-img");
        taskEditBtnImg.src = dmEditImg;
        taskEditBtnImg.alt = "Edit task icon";

        const taskBtnCol4 = document.createElement("div");
        taskBtnCol4.classList.add("lvl-col");

        const taskTrashBtn = document.createElement("button");
        taskTrashBtn.classList.add("task-trash-btn");
   
        const taskTrashBtnImg = document.createElement("img");
        taskTrashBtnImg.classList.add("task-trash-btn-img");
        taskTrashBtnImg.src = dmTrashImg;
        taskTrashBtnImg.alt = "Trash task icon";
    
        const sectionBotPad = document.createElement("div");
        sectionBotPad.classList.add("section-bot-pad");

        taskContent.append(task, sectionBotPad);
        task.append(mainCol, br3, taskBtnCont);
        mainCol.append(
          taskTitle,
          // br1,
          taskDueDate,
          lvlRow1,
          taskFolder,
          br2,
          taskDescription
        );
        lvlRow1.append(
          // taskDueDate,
          taskOverdueNoticeImg,
          taskOverdueNoticeP
        );
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
    const folderName = taskFolderElement.innerText;
    const matchingFolder = folders.find(
      (folder) => folder.folderName === folderName
    );

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
  const taskTitles = document.querySelectorAll(".task-title");

  const taskPriorityBtn = taskPriorityBtns[index];
  const taskTitle = taskTitles[index];

  if (taskPriorityBtn) {
    if (taskPriorityBtn.value === "normal") {
      taskPriorityBtn.value = "high";
      taskPriorityBtn.style.backgroundColor = "var(--activated)";
      taskTitle.style.borderColor = "var(--alert)";
      // Append "!!!" to the task title if not already present
      if (!taskTitle.textContent.includes("!!!")) {
        taskTitle.textContent += " !!!";
      }
    } else if (taskPriorityBtn.value === "high") {
      taskPriorityBtn.value = "normal";
      taskPriorityBtn.style.backgroundColor = "var(--bkgd)"; // Reset to default
      taskTitle.style.borderColor = "var(--bkgd)"; // Reset to default
      const titleText = taskTitle.textContent;
      if (titleText.includes("!!!")) {
        taskTitle.textContent = titleText.replace(" !!!", ""); // Remove the last occurrence of "!!!"
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
      taskTile.style.textDecoration = "line-through";
      taskCompletedBtn.style.backgroundColor = "var(--activated)";
    } else if (taskCompletedBtn.value === "completed") {
      taskCompletedBtn.value = "incomplete";
      taskTile.style.textDecoration = "none";
      taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
    }
  } else {
    console.warn("taskCompletedBtn is null or not found in the DOM.");
  }
}

function checkDateForOverdue() {
let today = new Date
};