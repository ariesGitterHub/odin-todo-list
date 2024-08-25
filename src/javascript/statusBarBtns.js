// import { workingTasks, loadTasks } from "./storageAndData";



// export function countTaskTypes(tasks) {
//   // Using JSON.stringify for a formatted output
//   console.log(
//     `This is the current list of tasks: ${JSON.stringify(tasks, null, 2)}`
//   );

//   // Alternative: Logging each task individually
//   tasks.forEach((task) => {
//     console.log("Task:", task);
//   });
// }

//*****names... */
//    taskNumBtnP.id = "task-num-btn-p";
//     priorityNumBtnP.id = "priority-num-btn-p";
//      overdueNumBtnP.id = "overdue-num-btn-p";
//    completedNumBtnP.id = "completed-num-btn-p";
//    folderNumBtnP.id = "folder-num-btn-p";


export function countTaskTypes(tasks) {
//   console.log(
//     `This is the current list of tasks: ${JSON.stringify(tasks, null, 2)}`);
    const taskNumBtnP = document.querySelector("#task-num-btn-p");
    const priorityNumBtnP = document.querySelector("#priority-num-btn-p");
    const overdueNumBtnP = document.querySelector("#overdue-num-btn-p");
    const completedNumBtnP = document.querySelector("#completed-num-btn-p");

    let totalPriorityCount = 0;
    let totalOverdueCount = 0;
    let totalCompletedCount = 0;

    if (tasks) {
      // Total number of tasks
      const totalTaskCount = tasks.length;
      // console.log(`Array length/total # tasks = ${totalTaskCount}`);
      taskNumBtnP.textContent = totalTaskCount;

      // Total number of priority tasks
      tasks.forEach((task) => {
        if (task.priorityFlag === "high") {
          totalPriorityCount += 1;
          priorityNumBtnP.textContent = totalPriorityCount;
          // console.log(`Priority tasks = ${totalPriorityCount}`);
        }
      });

      // Total number of overdue tasks
        tasks.forEach((task) => {
            if (task.overdueFlag === "overdue") {
            totalOverdueCount += 1;
            overdueNumBtnP.textContent = totalOverdueCount;
            // console.log(`Priority tasks = ${totalOverdueCount}`);
            }
        });

      // Total number of completed tasks
      tasks.forEach((task) => {
        if (task.completedFlag === "completed") {
          totalCompletedCount += 1;
          completedNumBtnP.textContent = totalCompletedCount;
          // console.log(`Completed tasks = ${totalCompletedCount}`);
        }
      });
    } else {
        console.warn(`${tasks} array is empty or missing from the DOM`)
    }
}


export function countFolders(folders) {
  //   console.log(
  //     `This is the current list of tasks: ${JSON.stringify(folders, null, 2)}`);

    const folderNumBtnP = document.querySelector("#folder-num-btn-p");

    if (folders) {
        const totalFolderCount = folders.length;
        // console.log(`Array length/total # folders = ${totalFolderCount}`);
        folderNumBtnP.textContent = totalFolderCount;

    } else {
        console.warn(`${folders} array is empty or missing from the DOM`);
    }
}

// export function showPriorityView() {
//     // const taskContent = document.querySelector("#task-content");
//     const taskTiles = document.querySelectorAll(".task");
//     const taskTile = taskTiles[index];
//     const taskPriorityBtn = document.querySelector(".task-priority-btn")

//     taskTiles.forEach(index => {
//         if (taskPriorityBtn.value === "normal") {
//           taskTile[index].classList.toggle("none")
//         }
//     })
// }
// export function showPriorityView() {
//   // Get all task elements
//   const taskTiles = document.querySelectorAll(".task");
//   // Get the priority button
//   const taskPriorityBtn = document.querySelector(".task-priority-btn");

//   // Get the value of the priority button
//   const priorityValue = taskPriorityBtn.value;

//   // Iterate over each task tile
//   taskTiles.forEach((taskTile) => {
//     // Check if the button's value is "normal"
//     if (priorityValue === "normal") {
//       // Toggle the "none" class based on the priority
//       taskTile.classList.toggle("none");
//     }
//   });
// }

// export function showPriorityView(tasks) {
//     console.log("I AM A FUNC...");

//     const taskTiles = document.querySelectorAll(".task");

//         taskTiles.forEach(taskTile => {
//         if (taskTile.dataset.id === tasks.taskId) {
//             if (tasks.priorityFlag === "normal") {
//                 taskTile.classList.add("hide-task");
//                 taskTile.classList.toggle("none");
//             } 
//         }   
//     })
// }

export function showAllTaskView() {
  // console.log("Show all view...");

  const taskTiles = document.querySelectorAll(".task");

  taskTiles.forEach((taskTile) => {
    if (taskTile.classList.contains("none")) {
        taskTile.classList.toggle("none");
        }
  });
}
    
export function showPriorityView() {
    // console.log("Priority view...");

    const taskTiles = document.querySelectorAll(".task");
showAllTaskView();
    taskTiles.forEach((taskTile) => {
      const taskPriorityBtn = taskTile.querySelector(".task-priority-btn"); //OOOF! FORGOT ABOUT USING THIS TYPE OF SYNTAX...
      if (taskPriorityBtn && taskPriorityBtn.value === "low") {
        taskTile.classList.add("none");
      }
    });
}

export function showOverdueView() {
  // console.log("Overdue view...");
  const taskTiles = document.querySelectorAll(".task");
showAllTaskView();
  taskTiles.forEach((taskTile) => {
    const taskOverdueNoticeImg = taskTile.querySelector(".task-overdue-notice-img");
    if (!taskOverdueNoticeImg) {
      taskTile.classList.add("none");
    }
  });
}

export function showCompletedView() {
  // console.log("Completed view...");
  const taskTiles = document.querySelectorAll(".task");
showAllTaskView();
  taskTiles.forEach((taskTile) => {
    const taskCompletedBtn = taskTile.querySelector(".task-completed-btn");
    if (taskCompletedBtn && taskCompletedBtn.value === "incomplete") {
      taskTile.classList.add("none");
    }
  });
}

export function showFolderView() {
    // console.log(`clicked on FOLDER NUM BTNS...`);
    const folderContent = document.querySelector("#folder-content");
    const taskContent = document.querySelector("#task-content");
    // folderContent.classList.add("none");
    // taskContent.classList.add("flex");
    if (!taskContent.classList.contains("none")) {
      taskContent.classList.toggle("none");
      folderContent.classList.toggle("none");
    } else if (taskContent.classList.contains("none")) {
      taskContent.classList.toggle("none");
      folderContent.classList.toggle("none");
    }


}
//ADD TO ABOVE....

// export function handleNewTaskBtn() {
//   const statusBar = document.querySelector("#status-bar");
//   const newTaskForm = document.querySelector("#new-task-form");
//   const newFolderForm = document.querySelector("#new-folder-form");
//   if (newTaskForm) {
//     if (statusBar && statusBar.classList.contains("flex")) {
//       statusBar.classList.toggle("flex");
//       newTaskForm.classList.toggle("flex");
//     } else if (newFolderForm && newFolderForm.classList.contains("flex")) {
//       newFolderForm.classList.toggle("flex");
//       newTaskForm.classList.toggle("flex");
//     } else {
//       newTaskForm.classList.toggle("flex");
//     }
//   } else {
//     console.warn("newTaskForm is null or not found in the DOM.");
//   }
// }