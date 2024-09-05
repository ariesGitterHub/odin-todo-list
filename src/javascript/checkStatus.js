import { dmTaskOverdueNoticeImg } from "./imageExporter.js";

import {
    format,
    getDay,
    isEqual,
    startOfDay, 
    endOfDay,
    isBefore,
    formatDistanceToNowStrict,
} from "date-fns";

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
    // I Forgot about localCompare!
    return name1.localeCompare(name2);
  });
}

export function checkPriorityStatus(tasks) {
    const taskPriorityBtns = document.querySelectorAll(".task-priority-btn");
    const taskNames = document.querySelectorAll(".task-name");

    tasks.forEach((task, index) => {
        const taskPriorityBtn = taskPriorityBtns[index];
        const taskName = taskNames[index];

        if (taskPriorityBtn) {
            if (task.priorityFlag === "high" && !taskName.textContent.includes("!!!")) {
                taskPriorityBtn.value = "high";
                taskPriorityBtn.style.backgroundColor = "var(--activated)";
                taskName.style.color = "var(--alert)";
                taskName.style.textDecoration = "underline";
                taskName.textContent += " !!!";
            }
        } else {
            taskPriorityBtn.value = "low";
            const titleText = taskName.textContent;
            if (titleText.includes("!!!")) {
            taskName.textContent = titleText.replace(" !!!", ""); // Removes the last occurrence of "!!!"
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
                if (task.completedFlag === "completed") {
                    taskCompletedBtn.value = "completed";
                    taskCompletedBtn.style.backgroundColor = "var(--activated)";
                    taskTile.style.textDecoration = "line-through";
                    taskTile.style.textDecorationThickness = "3px";
                    taskTile.style.backgroundColor = "var(--activated)";
                } else {
                    taskCompletedBtn.value = "incomplete";
                }
            }
    });
}

export function reformatDate(date) {
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const formattedDate = format(date, "yyyy MMM dd");
    // Gets the day of the week index (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeekIndex = getDay(date);
    // Gets the day of the week name from the array
    const dayOfWeek = weekdayNames[dayOfWeekIndex];
    // Combines everything together...
    return `${formattedDate} (${dayOfWeek})`;
}

export function checkIfOverdue(tasks) {
    const taskTiles = document.querySelectorAll(".task");
    const taskOverdueNoticeImgs = document.querySelectorAll(".task-overdue-notice-img");
    const taskOverdueNoticePs = document.querySelectorAll(".task-overdue-notice-p");
    const taskDueDates = document.querySelectorAll(".task-due-date");

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    tasks.forEach((task) => {
    // Reminder: this ensures that dueByDate is a Date object
    const dueDate = new Date(task.dueByDate);

    if (dueDate < yesterday) {
        task.overdueFlag = "overdue";
    } else {
        task.overdueFlag = "on-time";
    }
    });

    taskTiles.forEach((taskTile, index) => {
        const taskOverdueNoticeImg = taskOverdueNoticeImgs[index];
        const taskOverdueNoticeP = taskOverdueNoticePs[index];
        const taskDueDate = taskDueDates[index];
        let dueDateStr = taskDueDate.dataset.date;
        let readDueDate = new Date(dueDateStr);
        const isToday = isEqual(startOfDay(readDueDate), startOfDay(today));
        const isOverdue = isBefore(endOfDay(readDueDate), endOfDay(today));
        const timeOverdue = formatDistanceToNowStrict(endOfDay(readDueDate), endOfDay(today));

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
    const br1s = document.querySelectorAll(".task-description-removeBR1");
    const br2s = document.querySelectorAll(".task-description-removeBR2");

    tasks.forEach((task, index) => {
        const taskDescription = taskDescriptions[index];
        const br1 = br1s[index];
        const br2 = br2s[index];

        if (taskDescription) {
            if (task.descriptionText === "") {
                taskDescription.remove();
                br1.remove();
                br2.remove();
            } 
        }
    });
}

export function checkIfNoTasks() {
    const taskContent = document.querySelector("#task-content");
    const taskTiles = document.querySelector(".task");
    const msg = `You currently have no tasks. Click the "add task" button in the navigation bar to create a new task and get started. You may also create new folders by clicking on the "new folder" button.`;

    if (!taskTiles) {
        const noCurrentTaskMsg = document.createElement("p");
        noCurrentTaskMsg.id = "no-current-task-msg";
        noCurrentTaskMsg.textContent = msg;
        taskContent.appendChild(noCurrentTaskMsg);
    }
}

export function checkFolderAddClass() {
    const taskTiles = document.querySelectorAll(".task");

    taskTiles.forEach((taskTile) => {
        const taskFolder = taskTile.querySelector(".task-folder");

        if (taskFolder) {
        const folderNameData = taskFolder.dataset.folder;
        // Sanitizes folder name to avoid spacing issue in class
        const sanitizedClassName = folderNameData.replace(/\s+/g, "-");

        taskTile.classList.add(sanitizedClassName);
        }
    });
}