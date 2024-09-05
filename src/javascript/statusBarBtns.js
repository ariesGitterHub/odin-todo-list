export function countTaskTypes(tasks) {
//   console.log(`This is the current list of tasks: ${JSON.stringify(tasks, null, 2)}`);

    const taskNumBtnP = document.querySelector("#task-num-btn-p");
    const priorityNumBtnP = document.querySelector("#priority-num-btn-p");
    const overdueNumBtnP = document.querySelector("#overdue-num-btn-p");
    const completedNumBtnP = document.querySelector("#completed-num-btn-p");

    let totalPriorityCount = 0;
    let totalOverdueCount = 0;
    let totalCompletedCount = 0;

    if (tasks) {
        const totalTaskCount = tasks.length;
        taskNumBtnP.textContent = totalTaskCount;

        // Total number of priority tasks
        tasks.forEach((task) => {
            if (task.priorityFlag === "high") {
            totalPriorityCount += 1;
            priorityNumBtnP.textContent = totalPriorityCount;
            }
        });

        // Total number of overdue tasks
        tasks.forEach((task) => {
            if (task.overdueFlag === "overdue") {
            totalOverdueCount += 1;
            overdueNumBtnP.textContent = totalOverdueCount;
            }
        });

        // Total number of completed tasks
        tasks.forEach((task) => {
            if (task.completedFlag === "completed") {
            totalCompletedCount += 1;
            completedNumBtnP.textContent = totalCompletedCount;
            }
        });
    } else {
        console.warn(`${tasks} array is empty or missing from the DOM`)
    }
}

export function countFolders(folders) {
    const folderNumBtnP = document.querySelector("#folder-num-btn-p");

    if (folders) {
        const totalFolderCount = folders.length;
        folderNumBtnP.textContent = totalFolderCount;
    } else {
        console.warn(`${folders} array is empty or missing from the DOM`);
    }
}

export function showAllTaskView() {
    const taskTiles = document.querySelectorAll(".task");

    removeFolderView();

    taskTiles.forEach((taskTile) => {
        if (taskTile.classList.contains("none")) {
            taskTile.classList.toggle("none");
        }
    });
}

export function showPriorityView() {
    const taskTiles = document.querySelectorAll(".task");

    showAllTaskView();
    removeFolderView();

    taskTiles.forEach((taskTile) => {
        const taskPriorityBtn = taskTile.querySelector(".task-priority-btn"); //OOF! I FORGOT ABOUT USING THIS TYPE OF SYNTAX...

        if (taskPriorityBtn && taskPriorityBtn.value === "low") {
            taskTile.classList.add("none");
        }
    });
}

export function showOverdueView() {
    const taskTiles = document.querySelectorAll(".task");

    showAllTaskView();
    removeFolderView();
    taskTiles.forEach((taskTile) => {
        const taskOverdueNoticeImg = taskTile.querySelector(".task-overdue-notice-img");

        if (!taskOverdueNoticeImg) {
            taskTile.classList.add("none");
        }
    });
}

export function showCompletedView() {
    const taskTiles = document.querySelectorAll(".task");

    showAllTaskView();
    removeFolderView();

    taskTiles.forEach((taskTile) => {
        const taskCompletedBtn = taskTile.querySelector(".task-completed-btn");

        if (taskCompletedBtn && taskCompletedBtn.value === "incomplete") {
            taskTile.classList.add("none");
        }
    });
}

export function removeFolderView() {
    const folderContent = document.querySelector("#folder-content");
    const taskContent = document.querySelector("#task-content");

    if (!folderContent.classList.contains("none")) {
        folderContent.classList.toggle("none");
        taskContent.classList.toggle("none");

        showAllTaskView();
    } 
}
    

export function showFolderView() {
    const folderContent = document.querySelector("#folder-content");
    const taskContent = document.querySelector("#task-content");

    if (!taskContent.classList.contains("none")) {
        taskContent.classList.toggle("none");
        folderContent.classList.toggle("none");
    } 
	else if (taskContent.classList.contains("none")) {
        taskContent.classList.toggle("none");
        folderContent.classList.toggle("none");
    }
}