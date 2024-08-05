import {
  darkLiteBtn,
  newTaskPriorityToggle,
  newTaskPriorityFlagImg,
  taskTitle,
  taskDueDate,
  taskFolder,
  taskOverdueNoticeImg,
  taskDescription,
  taskPriorityBtn,
  //   taskPriorityImg,
  taskCompletedBtn,
  //   taskCompletedImg,
} from "./config";

import dmNewTaskPriorityFlagImg from "../assets/dm-priority-adta.svg";
import lmNewTaskPriorityFlagImg from "../assets/lm-priority-adta.svg";
import dmTaskOverdueNoticeImg from "../assets/dm-overdue-adta.svg";
import dmOverdueBgImg from "../assets/dm-overdue-bg.svg";
import lmTaskOverdueNoticeImg from "../assets/lm-overdue-adta.svg";
import lmOverdueBgImg from "../assets/lm-overdue-bg.svg";

function newTaskPriorityChecked() {
    if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
      newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
    } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
      newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
    } else {
      newTaskPriorityFlagImg.src = "";
    }
};

function priorityBtnClicked() {
    if (taskPriorityBtn.value === "normal") {
        taskPriorityBtn.value = "high";

        taskPriorityBtn.style.borderColor = "var(--alert)";  
        taskTitle.style.color = "var(--alert)";

    } else if (taskPriorityBtn.value === "high") {
        taskPriorityBtn.value = "normal";
        taskPriorityBtn.style.borderColor = "var(--fc07)";        
        taskTitle.style.color = "var(--fc07)";
    }
};

function completedBtnClicked() {
    if (
      taskCompletedBtn.value === "incomplete" &&
      darkLiteBtn.value === "dark"
    ) {
      taskCompletedBtn.value = "completed";
      taskCompletedBtn.style.backgroundColor = "var(--activated)";
      taskTitle.style.textDecoration = "line-through";
      taskDueDate.style.textDecoration = "line-through";
      taskFolder.style.textDecoration = "line-through";
      taskDescription.style.textDecoration = "line-through";
      taskOverdueNoticeImg.src = dmOverdueBgImg;
    } else if (
      taskCompletedBtn.value === "completed" &&
      darkLiteBtn.value === "dark"
    ) {
      taskCompletedBtn.value = "incomplete";
      taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
      taskTitle.style.textDecoration = "none";
      taskDueDate.style.textDecoration = "none";
      taskFolder.style.textDecoration = "none";
      taskDescription.style.textDecoration = "none";
      taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
    } else if (
      taskCompletedBtn.value === "incomplete" &&
      darkLiteBtn.value === "lite"
    ) {
      taskCompletedBtn.value = "completed";
      taskCompletedBtn.style.backgroundColor = "var(--activated)";
      taskTitle.style.textDecoration = "line-through";
      taskDueDate.style.textDecoration = "line-through";
      taskFolder.style.textDecoration = "line-through";
      taskDescription.style.textDecoration = "line-through";
      taskOverdueNoticeImg.src = lmOverdueBgImg;
    } else if (
      taskCompletedBtn.value === "completed" &&
      darkLiteBtn.value === "lite"
    ) {
      taskCompletedBtn.value = "incomplete";
      taskCompletedBtn.style.backgroundColor = "var(--bkgd)";
      taskTitle.style.textDecoration = "none";
      taskDueDate.style.textDecoration = "none";
      taskFolder.style.textDecoration = "none";
      taskDescription.style.textDecoration = "none";
      taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;
    }
};


const miscControls = {
  newTaskPriorityChecked,
  priorityBtnClicked,
  completedBtnClicked,
};


export default miscControls;