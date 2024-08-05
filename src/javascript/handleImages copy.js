// This js file downloads all dark mode (dm) images as the default.
// It also handles dark and lite mode btn logic.

import {
    body,
    darkLiteBtn,
    crownImg,
    statusImg,
    addTaskImg,
    addFolderImg,
    darkLiteImg,
    taskNumImg,
    priorityNumImg,
    overdueNumImg,
    completedNumImg,
    folderNumImg,
    newTaskImg,
    newFolderImg,
    newTaskPriorityFlagImg,
    taskOverdueNoticeImg,
    taskPriorityImg,
    taskCompletedImg,
    taskEditImg,
    taskTrashImg,
} from "./config.js";

// Default Dark Mode Import SVGs
// app-title
import dmCrownImg from "../assets/dm-crown.svg";
// nav bar
import dmStatusImg from "../assets/dm-status.svg";
import dmAddTaskImg from "../assets/dm-add-task.svg";
import dmAddFolderImg from "../assets/dm-add-folder.svg";
import dmDarkLiteImg from "../assets/dm-light-bulb.svg";
// status banner
import dmTaskImg from "../assets/dm-task.svg"
import dmPriorityImg from "../assets/dm-priority.svg";
import dmOverdueImg from "../assets/dm-overdue.svg";
import dmCompletedImg from "../assets/dm-completed.svg";
import dmFolderImg from "../assets/dm-folder.svg";
// new task form
// already have dmAddTask
// import dmNewTaskPriorityFlagImg from "../assets/dm-priority-adta.svg";
// new folder form
// already have dmAddFolder
// task content
import dmTaskOverdueNoticeImg from "../assets/dm-overdue-adta.svg";
// already have dmPriorityImg above
// already have dmCompletedImg above
import dmEditImg from "../assets/dm-edit.svg";
import dmTrashImg from "../assets/dm-trash.svg";

//Lite Mode SVGs that correspond to above Dark Mode SVGs
import lmCrownImg from "../assets/lm-crown.svg";
import lmStatusImg from "../assets/lm-status.svg";
import lmAddTaskImg from "../assets/lm-add-task.svg";
import lmAddFolderImg from "../assets/lm-add-folder.svg";
import lmDarkLiteImg from "../assets/lm-light-bulb.svg";
import lmTaskImg from "../assets/lm-task.svg";
import lmPriorityImg from "../assets/lm-priority.svg";
import lmOverdueImg from "../assets/lm-overdue.svg";
import lmCompletedImg from "../assets/lm-completed.svg";
import lmFolderImg from "../assets/lm-folder.svg";
// import lmNewTaskPriorityFlagImg from "../assets/lm-priority-adta.svg"
import lmTaskOverdueNoticeImg from "../assets/lm-overdue-adta.svg";
import lmEditImg from "../assets/lm-edit.svg";
import lmTrashImg from "../assets/lm-trash.svg";

export function defaultImages() {
  // app-title
  crownImg.src = dmCrownImg;

  // nav bar
  statusImg.src = dmStatusImg;
  addTaskImg.src = dmAddTaskImg;
  addFolderImg.src = dmAddFolderImg;
  darkLiteImg.src = dmDarkLiteImg;

  // status banner
  taskNumImg.src = dmTaskImg;
  priorityNumImg.src = dmPriorityImg;
  overdueNumImg.src = dmOverdueImg;
  completedNumImg.src = dmCompletedImg;
  folderNumImg.src = dmFolderImg;

  // new task form
  newTaskImg.src = dmAddTaskImg;

  // new task form
  newFolderImg.src = dmAddFolderImg;

  // task content
  taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
  taskPriorityImg.src = dmPriorityImg;
  taskCompletedImg.src = dmCompletedImg;
  taskEditImg.src = dmEditImg;
  taskTrashImg.src = dmTrashImg;
};

export function handleDarkLiteBtn() {

  if (darkLiteBtn) {
    darkLiteBtn.addEventListener("click", toggle);
  } else {
    console.warn("Warning: darkLiteBtn components missing.");
  }

  function toggle() {

    if (darkLiteBtn.value === "dark") {
      darkLiteBtn.value = "lite";

      body.classList.add("lite-mode");

      crownImg.src = lmCrownImg;

      statusImg.src = lmStatusImg;
      addTaskImg.src = lmAddTaskImg;
      addFolderImg.src = lmAddFolderImg;
      darkLiteImg.src = lmDarkLiteImg;

      taskNumImg.src = lmTaskImg;
      priorityNumImg.src = lmPriorityImg;
      overdueNumImg.src = lmOverdueImg;
      completedNumImg.src = lmCompletedImg;
      folderNumImg.src = lmFolderImg;

      newTaskImg.src = lmAddTaskImg;
      newTaskPriorityFlagImg.src = "";

      newFolderImg.src = lmAddFolderImg;

      taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;

      taskPriorityImg.src = lmPriorityImg;
      taskCompletedImg.src = lmCompletedImg;
      taskEditImg.src = lmEditImg;
      taskTrashImg.src = lmTrashImg;

    } else if (darkLiteBtn.value === "lite") {
      darkLiteBtn.value = "dark";

      body.classList.remove("lite-mode");

      crownImg.src = dmCrownImg;

      statusImg.src = dmStatusImg;
      addTaskImg.src = dmAddTaskImg;
      addFolderImg.src = dmAddFolderImg;
      darkLiteImg.src = dmDarkLiteImg;

      taskNumImg.src = dmTaskImg;
      priorityNumImg.src = dmPriorityImg;
      overdueNumImg.src = dmOverdueImg;
      completedNumImg.src = dmCompletedImg;
      folderNumImg.src = dmFolderImg;

      newTaskImg.src = dmAddTaskImg;
      newTaskPriorityFlagImg.src = "";

      newFolderImg.src = dmAddFolderImg;

      taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;

      taskPriorityImg.src = dmPriorityImg;
      taskCompletedImg.src = dmCompletedImg;
      taskEditImg.src = dmEditImg;
      taskTrashImg.src = dmTrashImg;
    }
  }
};
