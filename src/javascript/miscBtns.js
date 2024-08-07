import {
    dmNewTaskPriorityFlagImg,
    // dmTaskOverdueNoticeImg,
    // dmOverdueBgImg,
    lmNewTaskPriorityFlagImg,
    // lmTaskOverdueNoticeImg,
    // lmOverdueBgImg,
} from "./imageExporter.js"

export function newTaskPriorityChecked() {
	const darkLiteBtn = document.querySelector("#dark-lite-btn");		
  	const newTaskPriorityToggle = document.querySelector("#new-task-priority-toggle");
  	const newTaskPriorityFlagImg = document.querySelector("#new-task-priority-flag-img");
    if (newTaskPriorityToggle) {
        if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
            newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
        } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
            newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
        } else {
            newTaskPriorityFlagImg.src = "";
        }     
    } else {
        console.warn("newTaskPriorityToggle is null or not found in the DOM.");
    }
};

// export function priorityBtnClicked() {
//     if (taskPriorityBtn.value === "normal") {
//         taskPriorityBtn.value = "high";

//         taskPriorityBtn.style.borderColor = "var(--alert)";  
//         taskTitle.style.color = "var(--alert)";

//     } else if (taskPriorityBtn.value === "high") {
//         taskPriorityBtn.value = "normal";
//         taskPriorityBtn.style.borderColor = "var(--fc07)";        
//         taskTitle.style.color = "var(--fc07)";
//     }
// };

// export function completedBtnClicked() {
//     if (
//       taskCompletedBtn.value === "incomplete" &&
//       darkLiteBtn.value === "dark"
//     ) {
//       taskCompletedBtn.value = "completed";
//       taskCompletedBtn.style.backgroundColor = "var(--activated)";
//       taskTitle.style.textDecoration = "line-through";
//       taskDueDate.style.textDecoration = "line-through";
//       taskFolder.style.textDecoration = "line-through";
//       taskDescription.style.textDecoration = "line-through";
//       taskOverdueNoticeImg.src = dmOverdueBgImg;
//     } else if (
//       taskCompletedBtn.value === "completed" &&
//       darkLiteBtn.value === "dark"
//     ) {
//       taskCompletedBtn.value = "incomplete";
//       taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
//       taskTitle.style.textDecoration = "none";
//       taskDueDate.style.textDecoration = "none";
//       taskFolder.style.textDecoration = "none";
//       taskDescription.style.textDecoration = "none";
//       taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
//     } else if (
//       taskCompletedBtn.value === "incomplete" &&
//       darkLiteBtn.value === "lite"
//     ) {
//       taskCompletedBtn.value = "completed";
//       taskCompletedBtn.style.backgroundColor = "var(--activated)";
//       taskTitle.style.textDecoration = "line-through";
//       taskDueDate.style.textDecoration = "line-through";
//       taskFolder.style.textDecoration = "line-through";
//       taskDescription.style.textDecoration = "line-through";
//       taskOverdueNoticeImg.src = lmOverdueBgImg;
//     } else if (
//       taskCompletedBtn.value === "completed" &&
//       darkLiteBtn.value === "lite"
//     ) {
//       taskCompletedBtn.value = "incomplete";
//       taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
//       taskTitle.style.textDecoration = "none";
//       taskDueDate.style.textDecoration = "none";
//       taskFolder.style.textDecoration = "none";
//       taskDescription.style.textDecoration = "none";
//       taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;
//     }
// };
