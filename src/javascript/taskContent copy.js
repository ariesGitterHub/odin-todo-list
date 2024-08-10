// remove dmTaskOverdueNoticeImg oafter making a function that renders this only if the date is past due
import {
  dmTaskOverdueNoticeImg,
  lmTaskOverdueNoticeImg,
  //   redOverdueImg,
  dmPriorityImg,
  dmCompletedImg,
  dmEditImg,
  dmTrashImg,
} from "./imageExporter.js";

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

        const br1 = document.createElement("br");

        const lvlRow1 = document.createElement("div");
        lvlRow1.classList.add("lvl-row");

        const taskDueDate = document.createElement("div");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.textContent = `Due: ${taskItem.dueByDate}`;

        // const span = document.createElement("span");
        // span.classList.add("date-holder");
        // span.textContent = "00/00/0000";
        // taskDueDate.appendChild(span);

        const taskOverdueNoticeImg = document.createElement("img");
        taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
        // taskOverdueNoticeImg.src = "";
        taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
        // taskOverdueNoticeImg.src = redOverdueImg;
        taskOverdueNoticeImg.alt = "Date is overdue icon";

        const taskOverdueNoticeP = document.createElement("p");
        taskOverdueNoticeImg.classList.add("task-overdue-notice-p");
        // taskOverdueNoticeImg.src = "";
        taskOverdueNoticeP.textContent = "OVERDUE";

        // const lvlRow2 = document.createElement("div");
        // lvlRow2.classList.add("lvl-row");
        // mainCol.appendChild(XXXXXXXXX);

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
          br1,
          lvlRow1,
          taskFolder,
          br2,
          taskDescription
        );
        lvlRow1.append(taskDueDate, taskOverdueNoticeImg, taskOverdueNoticeP);
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

// export function createTaskColors(folders) {
//     let foundFolder
//     const taskFolder = document.querySelectorAll(".task-folder");
//     taskFolder.forEach(target => {
//         foundFolder = target.innerText;
//         console.log(foundFolder);
        

//     // })

//         if (foundFolder === folders.folderName) {

//           const task = document.querySelectorAll(".task");
//           task.forEach((item) => {
//             item.style.borderColor = `var(${folders.folderColor})`;
//             item.style.color = `var(${folders.folderColor})`;
//           });
//           // task.style.borderColor = `var(${folders.folderColor})`
//           // task.style.color = `var(${folders.folderColor})`;

//           const taskBtns = document.querySelectorAll(".task button");
//           taskBtns.forEach((item) => {
//             item.style.borderColor = `var(${folders.folderColor})`;
//           });
//           // taskBtns.style.borderColor = `var(${folders.folderColor})`;

//           const taskBtnsHover = document.querySelectorAll(".task button:hover");
//           taskBtnsHover.forEach((item) => {
//             item.style.borderColor = `var(${folders.folderColor})`;
//           });

//           const taskBtnsFocus = document.querySelectorAll(".task button:focus");
//           taskBtnsFocus.forEach((item) => {
//             item.style.borderColor = `var(${folders.folderColor})`;
//           });
//           // taskBtnsFocus.style.borderColor = `var(${folders.folderColor})`;
//         } else {
//             console.warn("No folders found.")
//         }
        
//     })

// };
// RE-EXAMINE THIS CLOSELY!!!! This was a bit beyond me to finish 100% correctly...
export function createTaskColor(folders) {
  const taskFolderElements = document.querySelectorAll(".task-folder");

  taskFolderElements.forEach((taskFolderElement) => {
    const folderName = taskFolderElement.innerText;
    const matchingFolder = folders.find(
      (folder) => folder.folderName === folderName
    );

    if (matchingFolder) {
      const task = taskFolderElement.closest(".task"); // Find the parent .task element

      // Apply styles to the task
      task.style.borderColor = `var(${matchingFolder.folderColor})`;
      task.style.color = `var(${matchingFolder.folderColor})`;

      // Apply styles to the buttons inside the task
      const taskBtns = task.querySelectorAll("button");
      taskBtns.forEach((button) => {
        button.style.borderColor = `var(${matchingFolder.folderColor})`;
      });

      // Optional: Apply styles for hover and focus states (CSS would be better for this)
      // You can create CSS classes dynamically and apply them
    } else {
      console.warn(`No matching folder found for ${folderName}.`);
    }
  });
}


// export function priorityBtnClicked() {
//     if (taskPriorityBtn) {
//       taskPriorityBtn.addEventListener("click", handleClick);
//     } else {
//       console.warn(
//         "Warning: taskPriorityBtn or taskContent components missing."
//       );
//     }

//     function handleClick() {
//         if (taskPriorityBtn.value === "normal") {
//         taskPriorityBtn.value = "high";

//         taskPriorityBtn.style.borderColor = "var(--alert)";
//         taskTitle.style.color = "var(--alert)";
//         } else if (taskPriorityBtn.value === "high") {
//         taskPriorityBtn.value = "normal";
//         taskPriorityBtn.style.borderColor = "var(--fc07)";
//         taskTitle.style.color = "var(--fc07)";
//         }
//     }
// };

// export function completedBtnClicked() {
//     if (taskCompletedBtn) {
//       taskCompletedBtn.addEventListener("click", handleClick);
//     } else {
//       console.warn(
//         "Warning: taskCompletedBtn or taskContent components missing."
//       );
//     }

//     function handleClick() {
//         if (taskCompletedBtn.value === "incomplete" && darkLiteBtn.value === "dark") {
//         taskCompletedBtn.value = "completed";
//         taskCompletedBtn.style.backgroundColor = "var(--activated)";
//         taskTitle.style.textDecoration = "line-through";
//         taskDueDate.style.textDecoration = "line-through";
//         taskFolder.style.textDecoration = "line-through";
//         taskDescription.style.textDecoration = "line-through";
//         taskOverdueNoticeImg.src = dmOverdueBgImg;
//         } else if (
//         taskCompletedBtn.value === "completed" &&
//         darkLiteBtn.value === "dark"
//         ) {
//         taskCompletedBtn.value = "incomplete";
//         taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
//         taskTitle.style.textDecoration = "none";
//         taskDueDate.style.textDecoration = "none";
//         taskFolder.style.textDecoration = "none";
//         taskDescription.style.textDecoration = "none";
//         taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
//         } else if (
//         taskCompletedBtn.value === "incomplete" &&
//         darkLiteBtn.value === "lite"
//         ) {
//         taskCompletedBtn.value = "completed";
//         taskCompletedBtn.style.backgroundColor = "var(--activated)";
//         taskTitle.style.textDecoration = "line-through";
//         taskDueDate.style.textDecoration = "line-through";
//         taskFolder.style.textDecoration = "line-through";
//         taskDescription.style.textDecoration = "line-through";
//         taskOverdueNoticeImg.src = lmOverdueBgImg;
//         } else if (
//         taskCompletedBtn.value === "completed" &&
//         darkLiteBtn.value === "lite"
//         ) {
//         taskCompletedBtn.value = "incomplete";
//         taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
//         taskTitle.style.textDecoration = "none";
//         taskDueDate.style.textDecoration = "none";
//         taskFolder.style.textDecoration = "none";
//         taskDescription.style.textDecoration = "none";
//         taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;
//         }
//     }
// };
