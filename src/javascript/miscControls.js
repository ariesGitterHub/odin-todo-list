import priorityFlagGreen from "../assets/priority-green.svg";
import priorityImageClicked from "../assets/priority.svg";
import priorityImageUnclicked from "../assets/priority-dk.svg";

import completedImageClicked from "../assets/completed.svg";
import completedImageUnclicked from "../assets/completed-dk.svg";

import overdueImageClicked from "../assets/overdue.svg";
import overdueImageUnclicked from "../assets/overdue-red.svg";

function newTaskPriorityChecked() {
    const newTaskPriority = document.querySelector("#priority-checkbox");
    const newTaskPriorityImg = document.querySelector("#priority-true-img");
    if (newTaskPriority.checked) {
      newTaskPriorityImg.src = priorityFlagGreen;
    } else {
      newTaskPriorityImg.src = "";
    }
};

function priorityBtnClicked() {
    console.log("YEP!");
    const taskPriorityBtn = document.querySelector(".task-priority-btn");
    const taskPriorityImg = document.querySelector(".task-priority-img");
    const taskTitle = document.querySelector(".task-title");

    if (taskPriorityBtn.value === "normal") {
        taskPriorityBtn.value = "high";
        taskPriorityBtn.style.backgroundColor = "var(--dark-alert)";        
        taskPriorityImg.src = priorityImageClicked;
        taskTitle.style.color = "var(--dark-alert)";

    } else if (taskPriorityBtn.value === "high") {
        taskPriorityBtn.value = "normal";
        taskPriorityBtn.style.backgroundColor = "var(--dark-bkgd)";        
        taskPriorityImg.src = priorityImageUnclicked;
        taskTitle.style.color = "var(--fc07)";
    }
};

function completedBtnClicked() {
    console.log("YEP!");
    const taskCompletedBtn = document.querySelector(".task-completed-btn");
    const taskCompletedImg = document.querySelector(".task-completed-img");
    const taskTitle = document.querySelector(".task-title");
    const taskDueDate = document.querySelector(".task-due-date");
    const taskOverdueImg = document.querySelector(".task-overdue-img");
    const taskDescription = document.querySelector(".task-description");

    if (taskCompletedBtn.value === "incomplete") {
        taskCompletedBtn.value = "completed";
        taskCompletedImg.src = completedImageClicked;
        taskCompletedBtn.style.backgroundColor = "var(--fc07)";
        taskTitle.style.textDecoration = "line-through";
        taskDueDate.style.textDecoration = "line-through";
        taskDescription.style.textDecoration = "line-through";
        taskOverdueImg.src = overdueImageClicked;
    } else if (taskCompletedBtn.value === "completed") {
        taskCompletedBtn.value = "incomplete";
        taskCompletedImg.src = completedImageUnclicked;
        taskCompletedBtn.style.backgroundColor = "var(--dark-bkgd)";
        taskTitle.style.textDecoration = "none";
        taskDueDate.style.textDecoration = "none";
        taskDescription.style.textDecoration = "none";
        taskOverdueImg.src = overdueImageUnclicked;
    }
};


const miscControls = {
  newTaskPriorityChecked,
  priorityBtnClicked,
  completedBtnClicked,
};


export default miscControls;