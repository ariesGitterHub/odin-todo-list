// remove dmTaskOverdueNoticeImg oafter making a function that renders this only if the date is past due
import {
  dmTaskOverdueNoticeImg,
  dmPriorityImg,
  dmCompletedImg,
  dmEditImg,
  dmTrashImg,
} from "./imageExporter.js";

// import { Task, Folder } from "./classes.js";

// export function defaultData() {
//   const initialTasks = [
//     new Task("t0", "Take out the trash", "overdue", "2024 JUL 29", "high", "incomplete", "Chores", ""),
//     new Task("t1", "Grocery Store", "overdue", "2024 AUG 01", "normal", "incomplete", "Chores", "Buy: milk, bread, eggs."),
//     new Task("t2", "Do Laundry", "overdue", "2024 AUG 05", "normal", "incomplete", "Chores", ""),
//   ];
  // initialTasks.forEach((task) => console.log(task.getTaskDetails()));
//   console.log(initialTasks);

//   const initialFolders = [
//     new Folder("f0", "Default", "#ffffff"),
//     new Folder("f1", "Chores", "fffffff"),
//   ];

//   console.log(initialFolders);
// }

export function createTasks(tasks) {
    const taskContent = document.querySelector("#task-content");
    // taskContent.innerHTML = "";

    tasks.forEach(taskItem => {
        const task = document.createElement("div");
        task.classList.add("task");
        taskContent.appendChild(task);

        const mainCol = document.createElement("div");
        mainCol.classList.add("lvl-col");
        task.appendChild(mainCol);

        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = `${taskItem.taskName}`;
        mainCol.appendChild(taskTitle);

        const br1 = document.createElement("br");
        mainCol.appendChild(br1);

        const lvlRow1 = document.createElement("div");
        lvlRow1.classList.add("lvl-row");
        mainCol.appendChild(lvlRow1);

        const taskDueDate = document.createElement("div");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.textContent = `Due: ${taskItem.taskName}`;
        lvlRow1.appendChild(taskDueDate);

        // const span = document.createElement("span");
        // span.classList.add("date-holder");
        // span.textContent = "00/00/0000";
        // taskDueDate.appendChild(span);

        const taskOverdueNoticeImg = document.createElement("img");
        taskOverdueNoticeImg.classList.add("task-overdue-notice-img");
        // taskOverdueNoticeImg.src = "";
        taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
        taskOverdueNoticeImg.alt = "Date is overdue icon";
        lvlRow1.appendChild(taskOverdueNoticeImg);

        // const lvlRow2 = document.createElement("div");
        // lvlRow2.classList.add("lvl-row");
        // mainCol.appendChild(XXXXXXXXX);

        const taskFolder = document.createElement("div");
        taskFolder.classList.add("task-folder");
        taskFolder.textContent = `${taskItem.folderLocation}`;
        mainCol.appendChild(taskFolder);

        const br2 = document.createElement("br");
        mainCol.appendChild(br2);

        const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = `${taskItem.descriptionText}`;
        mainCol.appendChild(taskDescription);

        const br3 = document.createElement("br");
        task.appendChild(br3);

        const taskBtnCont = document.createElement("div");
        taskBtnCont.classList.add("lvl-row", "task-btn-cont");
        task.appendChild(taskBtnCont);

        const taskBtnCol1 = document.createElement("div");
        taskBtnCol1.classList.add("lvl-col");
        taskBtnCont.appendChild(taskBtnCol1);

        const taskPriorityBtn = document.createElement("button");
        taskPriorityBtn.classList.add("task-priority-btn");
        taskPriorityBtn.value = "normal";
        taskBtnCol1.appendChild(taskPriorityBtn);

        const taskPriorityBtnImg = document.createElement("img");
        taskPriorityBtnImg.classList.add("task-priority-btn-img");
        taskPriorityBtnImg.src = dmPriorityImg;
        taskPriorityBtnImg.alt = "Priority task icon";
        taskPriorityBtn.appendChild(taskPriorityBtnImg);

        const taskBtnCol2 = document.createElement("div");
        taskBtnCol2.classList.add("lvl-col");
        taskBtnCont.appendChild(taskBtnCol2);

        const taskCompletedBtn = document.createElement("button");
        taskCompletedBtn.classList.add("task-completed-btn");
        taskCompletedBtn.value = "incomplete";
        taskBtnCol2.appendChild(taskCompletedBtn);

        const taskCompletedBtnImg = document.createElement("img");
        taskCompletedBtnImg.classList.add("task-completed-btn-img");
        taskCompletedBtnImg.src = dmCompletedImg;

        taskCompletedBtnImg.alt = "Completed task icon";
        taskCompletedBtn.appendChild(taskCompletedBtnImg);

        const taskBtnCol3 = document.createElement("div");
        taskBtnCol3.classList.add("lvl-col");
        taskBtnCont.appendChild(taskBtnCol3);

        const taskEditBtn = document.createElement("button");
        taskEditBtn.classList.add("task-edit-btn");
        taskEditBtn.value = "off";
        taskBtnCol3.appendChild(taskEditBtn);

        const taskEditBtnImg = document.createElement("img");
        taskEditBtnImg.classList.add("task-edit-btn-img");
        taskEditBtnImg.src = dmEditImg;
        taskEditBtnImg.alt = "Edit task icon";
        taskEditBtn.appendChild(taskEditBtnImg);

        const taskBtnCol4 = document.createElement("div");
        taskBtnCol4.classList.add("lvl-col");
        taskBtnCont.appendChild(taskBtnCol4);

        const taskTrashBtn = document.createElement("button");
        taskTrashBtn.classList.add("task-trash-btn");
        taskBtnCol4.appendChild(taskTrashBtn);

        const taskTrashBtnImg = document.createElement("img");
        taskTrashBtnImg.classList.add("task-trash-btn-img");
        taskTrashBtnImg.src = dmTrashImg;
        taskTrashBtnImg.alt = "Trash task icon";
        taskTrashBtn.appendChild(taskTrashBtnImg);
            
    })
                   
};

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
