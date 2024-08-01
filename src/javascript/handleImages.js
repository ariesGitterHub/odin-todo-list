import {
  darkLightBtn,
  crownImg,
  statusImg,
  addTaskImg,
  addFolderImg,
  darkLightImg,
  taskNumImg,
  priorityNumImg,
  overdueNumImg,
  completedNumImg,
  folderNumImg,
  newTaskImg,
  newTaskFlagImg,
  newFolderImg,

} from "./config.js";
// Default Dark Mod
import dmCrownImg from "../assets/dm-crown.svg";
import dmStatusImg from "../assets/dm-status.svg";
import dmAddTaskImg from "../assets/dm-add-task.svg";
import dmAddFolderImg from "../assets/dm-add-folder.svg";
import dmDarkLightImg from "../assets/dm-light-bulb.svg";

import dmTaskImg from "../assets/dm-task.svg"
import dmPriorityImg from "../assets/dm-priority.svg";
import dmOverdueImg from "../assets/dm-overdue.svg";
import dmCompletedImg from "../assets/dm-completed.svg";
import dmFolderImg from "../assets/dm-folder.svg";

import dmNewTaskFlagImg from "../assets/o-priority-green.svg"

// Default Lite Mod
import lmCrownImg from "../assets/lm-crown.svg";
import lmStatusImg from "../assets/lm-status.svg";
import lmAddTaskImg from "../assets/lm-add-task.svg";
import lmAddFolderImg from "../assets/lm-add-folder.svg";
import lmDarkLightImg from "../assets/lm-light-bulb.svg";

import lmTaskImg from "../assets/lm-task.svg"
import lmPriorityImg from "../assets/lm-priority.svg";
import lmOverdueImg from "../assets/lm-overdue.svg";
import lmCompletedImg from "../assets/lm-completed.svg";
import lmFolderImg from "../assets/lm-folder.svg";

import lmNewTaskFlagImg from "../assets/o-priority-red.svg"

// export const handleImages = (() => {

export const handleImages = (() => {
//   if (darkLightBtn.value === "dark") {
    crownImg.src = dmCrownImg;

    statusImg.src = dmStatusImg;
    addTaskImg.src = dmAddTaskImg;
    addFolderImg.src = dmAddFolderImg;
    darkLightImg.src = dmDarkLightImg;

    taskNumImg.src = dmTaskImg;
    priorityNumImg.src = dmPriorityImg;
    overdueNumImg.src = dmOverdueImg;
    completedNumImg.src = dmCompletedImg;
    folderNumImg.src = dmFolderImg;

    newTaskImg.src = dmAddTaskImg;
    newTaskFlagImg.src = dmNewTaskFlagImg;

    newFolderImg.src = dmAddFolderImg;
//   } else if (darkLightBtn.value === "lite") {
//     crownImg.src = lmCrownImg;

//     statusImg.src = lmStatusImg;
//     addTaskImg.src = lmAddTaskImg;
//     addFolderImg.src = lmAddFolderImg;
//     darkLightImg.src = lmDarkLightImg;

//     taskNumImg.src = lmTaskImg;
//     priorityNumImg.src = lmPriorityImg;
//     overdueNumImg.src = lmOverdueImg;
//     completedNumImg.src = lmCompletedImg;
//     folderNumImg.src = lmFolderImg;

//     newTaskImg.src = lmAddTaskImg;
//     newTaskFlagImg.src = lmNewTaskFlagImg;
//     newFolderImg.src = lmAddFolderImg;
//   }

  // const taskNumImg = document.querySelector("#task-num-img");
  // taskNumImg.src = taskNumImage;

  // const folderNumImg = document.querySelector("#folder-num-img");
  // folderNumImg.src = folderNumImage;

  // const priorityNumImg = document.querySelector("#priority-num-img");
  // priorityNumImg.src = priorityNumImage;

  // const overdueNumImg = document.querySelector("#overdue-num-img");
  // overdueNumImg.src = overdueNumImage;

  // const completedNumImg = document.querySelector("#completed-num-img");
  // completedNumImg.src = completedNumImage;

  // const addTaskFormImg = document.querySelector("#add-task-form-img");
  // addTaskFormImg.src = addTaskImage

  // const addFolderFormImg = document.querySelector("#add-folder-form-img");
  // addFolderFormImg.src = addFolderImage;

  // Task Mock Ups...
  // const taskChangeDateImg = document.querySelector(".task-change-date-img");
  // taskChangeDateImg.src = taskChangeDateImage;

  // const taskPriorityImg = document.querySelector(".task-priority-img");
  // taskPriorityImg.src = priorityNumImage;

  // const taskOverdueImg = document.querySelector(".task-overdue-img");
  // taskOverdueImg.src = taskOverdueImage;

  // const taskCompletedImg = document.querySelector(".task-completed-img");
  // taskCompletedImg.src = completedNumImage;

  // const taskFolderImg = document.querySelector(".task-folder-img");
  // taskFolderImg.src = folderNumImage;
})();
