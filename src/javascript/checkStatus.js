import {
  dmCrownImg,
  dmStatusImg,
  dmNewTaskImg,
  dmNewFolderImg,
  dmDarkLiteImg,
  dmTaskImg,
  dmPriorityImg,
  dmOverdueImg,
  dmCompletedImg,
  dmFolderImg,
  dmEditImg,
  dmTrashImg,

  dmTaskOverdueNoticeImg,

  // dmTaskOverdueBgImg,
  lmCrownImg,
  lmStatusImg,
  lmNewTaskImg,
  lmNewFolderImg,
  lmDarkLiteImg,
  lmTaskImg,
  lmPriorityImg,
  lmOverdueImg,
  lmCompletedImg,
  lmFolderImg,
  lmEditImg,
  lmTrashImg,

  lmTaskOverdueNoticeImg,

  // lmTaskOverdueBgImg,
} from "./imageExporter.js";

import { format, getDay, isBefore, formatDistanceToNowStrict } from "date-fns";

export function changeDarkLiteImgs() {
  const darkLiteBtn = document.querySelector("#dark-lite-btn");

  const crownImg = document.querySelector("#crown-img");
  const statusBtnImg = document.querySelector("#status-btn-img");
  const newTaskBtnImg = document.querySelector("#new-task-btn-img");
  const newFolderBtnImg = document.querySelector("#new-folder-btn-img");
  const darkLiteBtnImg = document.querySelector("#dark-lite-btn-img");

  const taskNumBtnImg = document.querySelector("#task-num-btn-img");
  const priorityNumBtnImg = document.querySelector("#priority-num-btn-img");
  const overdueNumBtnImg = document.querySelector("#overdue-num-btn-img");
  const completedNumBtnImg = document.querySelector("#completed-num-btn-img");
  const folderNumBtnImg = document.querySelector("#folder-num-btn-img");

  const newTaskImg = document.querySelector("#new-task-img");
  const newFolderImg = document.querySelector("#new-folder-img");

  const taskPriorityBtnImg = document.querySelectorAll(
    ".task-priority-btn-img"
  );
  const taskCompletedBtnImg = document.querySelectorAll(
    ".task-completed-btn-img"
  );
  const taskEditBtnImg = document.querySelectorAll(".task-edit-btn-img");
  const taskTrashBtnImg = document.querySelectorAll(".task-trash-btn-img");

  const taskOverdueNoticeImg = document.querySelectorAll(
    ".task-overdue-notice-img"
  );

  if (darkLiteBtn) {
    if (darkLiteBtn.value === "dark") {
      crownImg.src = dmCrownImg;
      statusBtnImg.src = dmStatusImg;
      newTaskBtnImg.src = dmNewTaskImg;
      newFolderBtnImg.src = dmNewFolderImg;
      darkLiteBtnImg.src = dmDarkLiteImg;

      taskNumBtnImg.src = dmTaskImg;
      priorityNumBtnImg.src = dmPriorityImg;
      overdueNumBtnImg.src = dmOverdueImg;
      completedNumBtnImg.src = dmCompletedImg;
      folderNumBtnImg.src = dmFolderImg;

      newTaskImg.src = dmNewTaskImg;
      newFolderImg.src = dmNewFolderImg;

      // taskPriorityBtnImg.src = dmPriorityImg;
      // taskCompletedBtnImg.src = dmCompletedImg;
      // taskEditBtnImg.src = dmEditImg;
      // taskTrashBtnImg.src = dmTrashImg;

      taskPriorityBtnImg.forEach(function (image) {
        image.src = dmPriorityImg;
      });
      taskCompletedBtnImg.forEach(function (image) {
        image.src = dmCompletedImg;
      });
      taskEditBtnImg.forEach(function (image) {
        image.src = dmEditImg;
      });
      taskTrashBtnImg.forEach(function (image) {
        image.src = dmTrashImg;
      });

      taskOverdueNoticeImg.forEach(function (image) {
        image.src = dmTaskOverdueNoticeImg;
      });
    } else if (darkLiteBtn.value === "lite") {
      crownImg.src = lmCrownImg;
      statusBtnImg.src = lmStatusImg;
      newTaskBtnImg.src = lmNewTaskImg;
      newFolderBtnImg.src = lmNewFolderImg;
      darkLiteBtnImg.src = lmDarkLiteImg;

      taskNumBtnImg.src = lmTaskImg;
      priorityNumBtnImg.src = lmPriorityImg;
      overdueNumBtnImg.src = lmOverdueImg;
      completedNumBtnImg.src = lmCompletedImg;
      folderNumBtnImg.src = lmFolderImg;

      newTaskImg.src = lmNewTaskImg;
      newFolderImg.src = lmNewFolderImg;

      taskPriorityBtnImg.forEach(function (image) {
        image.src = lmPriorityImg;
      });
      taskCompletedBtnImg.forEach(function (image) {
        image.src = lmCompletedImg;
      });
      taskEditBtnImg.forEach(function (image) {
        image.src = lmEditImg;
      });
      taskTrashBtnImg.forEach(function (image) {
        image.src = lmTrashImg;
      });

      taskOverdueNoticeImg.forEach(function (image) {
        image.src = lmTaskOverdueNoticeImg;
      });
    }
  } else {
    console.warn("darkLiteBtn is null or not found in the DOM.");
  }
}

export function checkPriorityStatus(tasks) {
  const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
    const taskTitles = document.querySelectorAll(".task-title");

  tasks.forEach((task, index) => {
    // Ensure you are matching the corresponding button to the task
    const taskPriorityBtn = taskPriorityBtns[index];
      const taskTitle = taskTitles[index];

    if (taskPriorityBtn) {
      if (task.priorityFlag === "high" && !taskTitle.textContent.includes("!!!")) {
        taskPriorityBtn.value = "high";
        taskPriorityBtn.style.backgroundColor = "var(--activated)";
        taskTitle.style.borderColor = "var(--alert)"
        

        taskTitle.textContent += " !!!";
      }

        console.log(`Priority set to high for task ${task.taskName}.`);
      } else {
        taskPriorityBtn.value = "normal";
      const titleText = taskTitle.textContent;
      if (titleText.includes("!!!")) {
        taskTitle.textContent = titleText.replace(" !!!", ""); // Remove the last occurrence of "!!!"

      }
    }
  });
}

export function checkCompletedStatus(tasks) {
  const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
  const taskTiles = document.querySelectorAll(".task");

  tasks.forEach((task, index) => {
    const taskCompletedBtn = taskCompletedBtns[index];
    const taskTile = taskTiles[index];

    if (taskCompletedBtn) {
      if (task.completedCheck === "completed") {
        taskCompletedBtn.value = "completed";
        taskTile.style.textDecoration = "line-through";
        taskCompletedBtn.style.backgroundColor = "var(--activated)";
        console.log(`Task ${task.taskName} is completed.`);
      } else {
        taskCompletedBtn.value = "incomplete";
      }
    }
  });
}

export function reformatDate(date) {
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Format the date as "yyyy MMM dd"
  const formattedDate = format(date, "yyyy MMM dd");

  // Get the day of the week index (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeekIndex = getDay(date);

  // Get the day of the week name from the array
  const dayOfWeek = weekdayNames[dayOfWeekIndex];

  // Combine everything
  return `${formattedDate} (${dayOfWeek})`;
}

export function checkIfOverdue(tasks) {
    const taskTiles = document.querySelectorAll(".task");
    const taskOverdueNoticeImgs = document.querySelectorAll(".task-overdue-notice-img");
    const taskOverdueNoticePs = document.querySelectorAll(".task-overdue-notice-p");
    const taskDueDates = document.querySelectorAll(".task-due-date");

    const today = new Date();
    console.log(`Today: ${today}`);
   
    // tasks.forEach(taskItem => {
    //   let taskDueByDate = taskItem.dueByDate;
    //   console.log(`Date from array: ${taskDueByDate}`);
    //   let reformatTaskDueByDate = new Date(taskDueByDate);
    //   console.log(`Reformatted date from array: ${reformatTaskDueByDate}`);
    //   const result = isAfter(reformatTaskDueByDate, today)
    //   console.log(result);
    //   const distance = formatDistanceToNow(reformatTaskDueByDate, today);
    //   console.log(distance);

   
    taskTiles.forEach((taskTile, index) => {
      const taskOverdueNoticeImg = taskOverdueNoticeImgs[index];
      const taskOverdueNoticeP = taskOverdueNoticePs[index];
      const taskDueDate = taskDueDates[index];

      let dueDateStr = taskDueDate.dataset.date;
      console.log(dueDateStr);

      let readDueDate = new Date(dueDateStr);
      console.log(readDueDate);

      const isOverdue = isBefore(readDueDate, today);
      console.log(isOverdue);

      const timeOverdue = formatDistanceToNowStrict(readDueDate, today);
      console.log(timeOverdue);

      if (isOverdue) {
      taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
      taskOverdueNoticeP.textContent = `Overdue: ${timeOverdue}`;  
      } else {
      taskOverdueNoticeImg.remove();
      taskOverdueNoticeP.remove(); 
      }
    })
}



  // function setOverdue() {
  // const taskTiles = document.querySelectorAll(".task");

  // const taskOverdueNoticeImgs = document.querySelectorAll(".task-overdue-notice-img");
  // const taskOverdueNoticePs = document.querySelectorAll(".task-overdue-notice-p");
  
  // taskTiles.forEach((taskTileItem, index) => {
  //   const taskOverdueNoticeImg = taskOverdueNoticeImgs[index];
  //   const taskOverdueNoticeP = taskOverdueNoticePs[index];

  // })

      // const taskTile = taskTiles[index];


 

    // }