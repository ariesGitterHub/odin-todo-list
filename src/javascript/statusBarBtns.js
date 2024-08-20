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
      console.log(`Array length/total # tasks = ${totalTaskCount}`);
      taskNumBtnP.textContent = totalTaskCount;

      // Total number of priority tasks
      tasks.forEach((task) => {
        if (task.priorityFlag === "high") {
          totalPriorityCount += 1;
          priorityNumBtnP.textContent = totalPriorityCount;
          console.log(`Priority tasks = ${totalPriorityCount}`);
        }
      });

      // Total number of overdue tasks
        tasks.forEach((task) => {
            if (task.overdueFlag === "overdue") {
            totalOverdueCount += 1;
            overdueNumBtnP.textContent = totalOverdueCount;
            console.log(`Priority tasks = ${totalOverdueCount}`);
            }
        });

      // Total number of completed tasks
      tasks.forEach((task) => {
        if (task.completedFlag === "completed") {
          totalCompletedCount += 1;
          completedNumBtnP.textContent = totalCompletedCount;
          console.log(`Completed tasks = ${totalCompletedCount}`);
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
    console.log(`Array length/total # folders = ${totalFolderCount}`);
    folderNumBtnP.textContent = totalFolderCount;

  } else {
    console.warn(`${folders} array is empty or missing from the DOM`);
  }
}