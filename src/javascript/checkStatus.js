import {
    dmTaskOverdueNoticeImg,
} from "./imageExporter.js";

import {
    format,
    getDay,
    isEqual,
    startOfDay, 
    endOfDay,
    isBefore,
    formatDistanceToNowStrict,
    compareAsc,
} from "date-fns";

// import { workingTheme, saveTheme } from "./storageAndData.js";
// import { toggleDarkLiteMode } from "./toggleDarkLiteMode.js";

// export function toggleDarkLiteMode() {
//   const body = document.querySelector("body");

//   const darkLiteBtn = document.querySelector("#dark-lite-btn");

//   const titleImg = document.querySelector("#title-img");

//   const statusBtnImg = document.querySelector("#status-btn-img");
//   const newTaskBtnImg = document.querySelector("#new-task-btn-img");
//   const newFolderBtnImg = document.querySelector("#new-folder-btn-img");
//   const darkLiteBtnImg = document.querySelector("#dark-lite-btn-img");

//   const taskNumBtnImg = document.querySelector("#task-num-btn-img");
//   const priorityNumBtnImg = document.querySelector("#priority-num-btn-img");
//   const overdueNumBtnImg = document.querySelector("#overdue-num-btn-img");
//   const completedNumBtnImg = document.querySelector("#completed-num-btn-img");
//   const folderNumBtnImg = document.querySelector("#folder-num-btn-img");

//   const newTaskImg = document.querySelector("#new-task-img");
//   const newFolderImg = document.querySelector("#new-folder-img");

//   const taskPriorityBtnImg = document.querySelectorAll(
//     ".task-priority-btn-img"
//   );
//   const taskCompletedBtnImg = document.querySelectorAll(
//     ".task-completed-btn-img"
//   );
//   const taskEditBtnImg = document.querySelectorAll(".task-edit-btn-img");
//   const taskTrashBtnImg = document.querySelectorAll(".task-trash-btn-img");

//   const taskOverdueNoticeImg = document.querySelectorAll(
//     ".task-overdue-notice-img"
//   );

//   if (darkLiteBtn) {
//     if (darkLiteBtn.value === "dark") {
//       body.classList.remove("lite-mode");

//       titleImg.src = dmCrownImg;
//       // titleImg.src = dmCoffeeImg;
//       statusBtnImg.src = dmStatusImg;
//       newTaskBtnImg.src = dmNewTaskImg;
//       newFolderBtnImg.src = dmNewFolderImg;
//       darkLiteBtnImg.src = dmDarkLiteImg;

//       taskNumBtnImg.src = dmTaskImg;
//       priorityNumBtnImg.src = dmPriorityImg;
//       overdueNumBtnImg.src = dmOverdueImg;
//       completedNumBtnImg.src = dmCompletedImg;
//       folderNumBtnImg.src = dmFolderImg;

//       newTaskImg.src = dmNewTaskImg;
//       newFolderImg.src = dmNewFolderImg;

//       // taskPriorityBtnImg.src = dmPriorityImg;
//       // taskCompletedBtnImg.src = dmCompletedImg;
//       // taskEditBtnImg.src = dmEditImg;
//       // taskTrashBtnImg.src = dmTrashImg;

//       taskPriorityBtnImg.forEach(function (image) {
//         image.src = dmPriorityImg;
//       });
//       taskCompletedBtnImg.forEach(function (image) {
//         image.src = dmCompletedImg;
//       });
//       taskEditBtnImg.forEach(function (image) {
//         image.src = dmEditImg;
//       });
//       taskTrashBtnImg.forEach(function (image) {
//         image.src = dmTrashImg;
//       });

//       taskOverdueNoticeImg.forEach(function (image) {
//         image.src = dmTaskOverdueNoticeImg;
//       });
//     } else if (darkLiteBtn.value === "lite") {
//       // titleImg.src = lmCrownImg;
//       body.classList.add("lite-mode");
//       titleImg.src = lmCoffeeImg;
//       statusBtnImg.src = lmStatusImg;
//       newTaskBtnImg.src = lmNewTaskImg;
//       newFolderBtnImg.src = lmNewFolderImg;
//       darkLiteBtnImg.src = lmDarkLiteImg;

//       taskNumBtnImg.src = lmTaskImg;
//       priorityNumBtnImg.src = lmPriorityImg;
//       overdueNumBtnImg.src = lmOverdueImg;
//       completedNumBtnImg.src = lmCompletedImg;
//       folderNumBtnImg.src = lmFolderImg;

//       newTaskImg.src = lmNewTaskImg;
//       newFolderImg.src = lmNewFolderImg;

//       taskPriorityBtnImg.forEach(function (image) {
//         image.src = lmPriorityImg;
//       });
//       taskCompletedBtnImg.forEach(function (image) {
//         image.src = lmCompletedImg;
//       });
//       taskEditBtnImg.forEach(function (image) {
//         image.src = lmEditImg;
//       });
//       taskTrashBtnImg.forEach(function (image) {
//         image.src = lmTrashImg;
//       });

//       taskOverdueNoticeImg.forEach(function (image) {
//         image.src = lmTaskOverdueNoticeImg;
//       });
//     }
//   } else {
//     console.warn("darkLiteBtn is null or not found in the DOM.");
//   }
// }


// `${taskItem.dueByDate.replace(/-/g, "/")}` ...not needed...

export function checkAndOrganizeByDate(tasks) {
    tasks.sort(function (a, b) {
        let date1 = new Date(a.dueByDate);
        let date2 = new Date(b.dueByDate);
        return date1 - date2;
    });
}

export function checkAndOrganizeByName(folders) {
  folders.sort(function (a, b) {
    let name1 = a.folderName.toLowerCase(); 
    let name2 = b.folderName.toLowerCase();

    // Forgot about localCompare!
    return name1.localeCompare(name2);
  });
}

export function checkPriorityStatus(tasks) {
    const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
    const taskNames = document.querySelectorAll(".task-name");

    tasks.forEach((task, index) => {
        // Ensure you are matching the corresponding button to the task
        const taskPriorityBtn = taskPriorityBtns[index];
        const taskName = taskNames[index];

        if (taskPriorityBtn) {
            if (
            task.priorityFlag === "high" &&
            !taskName.textContent.includes("!!!")
            ) {
                taskPriorityBtn.value = "high";
                taskPriorityBtn.style.backgroundColor = "var(--activated)";
                taskName.style.border = "2px solid var(--alert)";
                taskName.textContent += " !!!";
            }
        } else {
            taskPriorityBtn.value = "normal";
            const titleText = taskName.textContent;
            if (titleText.includes("!!!")) {
            taskName.textContent = titleText.replace(" !!!", ""); // Remove the last occurrence of "!!!"
            }
        }
});
}

export function checkCompletedStatus(tasks) {
    const taskCompletedBtns = document.querySelectorAll(".task-completed-btn");
    const taskTiles = document.querySelectorAll(".task");
    const taskNames = document.querySelectorAll(".task-name");
        tasks.forEach((task, index) => {
            const taskCompletedBtn = taskCompletedBtns[index];
            const taskTile = taskTiles[index];
            const taskName = taskNames[index];
                if (taskCompletedBtn) {
                    if (task.completedFlag === "completed") {
                        taskCompletedBtn.value = "completed";
                        taskCompletedBtn.style.backgroundColor = "var(--activated)";
                        taskTile.style.textDecoration = "line-through";
                        taskTile.style.textDecorationThickness = "3px";
                        taskTile.style.backgroundColor = "var(--activated)";
                        taskName.style.backgroundColor = "var(--activated)";
                    } else {
                        taskCompletedBtn.value = "incomplete";
                    }
                }
        });
}

export function reformatDate(date) {
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    // console.log(`TODAY IS ${today}`);

    tasks.forEach((task) => {
    // Ensure dueByDate is a Date object
    const dueDate = new Date(task.dueByDate);

    if (dueDate < today) {
        task.overdueFlag = "overdue";
    } else {
        task.overdueFlag = "normal";
    }
    });

    taskTiles.forEach((taskTile, index) => {
        const taskOverdueNoticeImg = taskOverdueNoticeImgs[index];
        const taskOverdueNoticeP = taskOverdueNoticePs[index];
        const taskDueDate = taskDueDates[index];

        let dueDateStr = taskDueDate.dataset.date;
        console.log(`dueDateStr: ${dueDateStr}`);

        let readDueDate = new Date(dueDateStr);
        console.log(`readDueDate: ${readDueDate}`);

        const isToday = isEqual(startOfDay(readDueDate), startOfDay(today));
        console.log(`isToday? ${isToday}`);

        const isOverdue = isBefore(endOfDay(readDueDate), endOfDay(today));
        // console.log(`isOverdue? ${isOverdue}`);

        const timeOverdue = formatDistanceToNowStrict(endOfDay(readDueDate), endOfDay(today));
        // console.log(`Amount of time overdue: ${timeOverdue}`);

        if (isToday) {
            taskOverdueNoticeImg.remove();
            taskOverdueNoticeP.style.marginLeft = ".75rem";
            taskOverdueNoticeP.textContent = "This is due today.";
            } else if (isOverdue) {
            taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;
            taskOverdueNoticeP.textContent = `Overdue for ${timeOverdue}.`;  
            } else {
            taskOverdueNoticeImg.remove();
            taskOverdueNoticeP.remove(); 
        }
    })
}

export function checkDescriptionStatus(tasks) {
    const taskDescriptions = document.querySelectorAll(".task-description");
    const br2s = document.querySelectorAll(".task-description-remove2");
    const br3s = document.querySelectorAll(".task-description-remove3");

    tasks.forEach((task, index) => {
        const taskDescription = taskDescriptions[index];
        const br2 = br2s[index];
        const br3 = br3s[index];

        if (taskDescription) {
        if (task.descriptionText === "") {
            taskDescription.remove();
            br2.remove();
            br3.remove();
        } 
        }
    });
}

export function checkIfNoTasks() {
    const taskContent = document.querySelector("#task-content");
    const taskTiles = document.querySelector(".task");
    const msg = `You have no current tasks. Click the "add task" button in the navigation bar to create a task and get started.`;
    if (!taskTiles) {
        const noCurrentTaskMsg = document.createElement("h1");
        noCurrentTaskMsg.id = "no-current-task-msg";
        noCurrentTaskMsg.textContent = msg;
        taskContent.appendChild(noCurrentTaskMsg);
    }
}

