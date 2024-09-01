import { 
    Theme, 
    Folder, 
    Task 
} from "./classes.js";

const defaultTheme = [
    new Theme("dark")
];

export function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
    return JSON.parse(savedTheme);
    } else {
    return [...defaultTheme]; // Clone the initial array
    }
}

export let workingTheme = loadTheme();
console.log(workingTheme);

export function saveTheme() {
localStorage.setItem("theme", JSON.stringify(workingTheme));
}

const defaultFolders = [
    new Folder("f0", "*Default", "--fc00"),
    new Folder("f1", "Chores", "--fc09"),
    new Folder("f2", "Fitness", "--fc01"),
    new Folder("f3", "Repair", "--fc07"),
    new Folder("f4", "Social", "--fc03"),
    new Folder("f5", "Travel", "--fc06"),
];

export function loadFolders() {
    const savedFolders = localStorage.getItem("folders");
    if (savedFolders) {
    return JSON.parse(savedFolders);
    } else {
    return [...defaultFolders]; // Clone the initial array
    }
}

export let workingFolders = loadFolders();
console.log(workingFolders);

export function saveFolders() {
    localStorage.setItem("folders", JSON.stringify(workingFolders));
}

export function addFolder(folder) {
    workingFolders.push(folder);
    saveFolders();
}

export function removeFolder(dataId) {
    workingFolders = workingFolders.filter((folder) => folder.folderId !== dataId);
    saveFolders();
    //   window.location.reload();
}

// export function removeTask(dataId) {
//   workingTasks = workingTasks.filter((task) => task.taskId !== dataId);
//   saveTasks();
//   window.location.reload();
// }

// export function updateFolder(updatedFolder) {
// const index = workingFolders.findIndex((folder) => folder.folderId === updatedFolder.folderId);
//     if (index !== -1) {
//     workingFolders[index] = updatedFolder;
//     saveFolders();
//     }
// }

const defaultTasks = [
  new Task(
    "t0",
    "Take out the trash",
    "2024-09-02",
    "",
    "high",
    "incomplete",
    "Chores",
    "Don't forget to empty the upstairs trash cans!"
  ),
  new Task(
    "t1",
    "Grocery Store",
    "2024-08-31",
    "",
    "low",
    "incomplete",
    "Chores",
    "Buy: apples, oranges, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, and frozen blueberries."
  ),
  new Task(
    "t2",
    "Run my usual 5k course",
    "2024-09-02",
    "",
    "low",
    "incomplete",
    "Fitness",
    "Because of the heat, try to go later in the evening, like around sunset."
  ),
  new Task(
    "t3",
    "Get drinks at the Skeller with Mike and Rich.",
    //   "overdue",
    "1996-07-11",
    "",
    "low",
    "incomplete",
    "Social",
    ""
  ),
  new Task(
    "t4",
    "Fix the barb wire fence at the secret compound",
    "2054-04-01",
    "",
    "high",
    "incomplete",
    "Repair",
    "Mind the radioactive zombies, too."
  ),
  new Task(
    "t5",
    "Visit Guedelon Castle in France",
    "2026-07-01",
    "",
    "low",
    "incomplete",
    "Travel",
    "Renew my passport."
  ),
];

export function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
    return JSON.parse(savedTasks);
    } else {
    return [...defaultTasks];
    }
}

export let workingTasks = loadTasks();
console.log(workingTasks);

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(workingTasks));
}

export function addTask(task) {
    workingTasks.push(task);
    saveTasks();
}

export function removeTask(dataId) {
    workingTasks = workingTasks.filter((task) => task.taskId !== dataId);
    saveTasks();
    window.location.reload();
}

export function updatePriorityStatus(dataId) {
    let tasks = loadTasks(); // THIS WAS THE ISSUE: YOU HAVE TO...Load the current tasks from localStorage..FIRST

    tasks = tasks.map((task) => {
        if (task.taskId === dataId) {
        // Toggle the status
        task.priorityFlag = task.priorityFlag === "low" ? "high" : "low";
        }
        return task;
    });

    workingTasks = tasks;
    saveTasks();
}

// Add this function to update a task's status
export function updateCompleteStatus(dataId) {
    let tasks = loadTasks(); // THIS WAS THE ISSUE: YOU HAVE TO...Load the current tasks from localStorage..FIRST

    tasks = tasks.map(task => {
        if (task.taskId === dataId) {
        // Toggle the status
        task.completedFlag = task.completedFlag === 'incomplete' ? 'completed' : 'incomplete';
        }
        return task;
    });

    workingTasks = tasks;
    saveTasks();
}

// export function updateTasks(updatedTask) {
//   const index = workingTasks.findIndex(
//     (task) => task.taskId === updatedTask.taskId
//   );
//   if (index !== -1) {
//     workingTasks[index] = updatedTask;
//     saveTasks();
//   }
// }

export function updateEditedTasks(dataId) {
  let tasks = loadTasks();
    tasks = tasks.map((task) => {
      if (task.taskId === dataId) {

    const editTaskName = document.querySelector("#edit-task-name");
    const editTaskFolder = document.querySelector("#edit-task-folder");
    const editTaskDueDate = document.querySelector("#edit-task-due-date");
    const editTaskDescription = document.querySelector(
      "#edit-task-description"
    );

        // Toggle the status
        task.taskName = editTaskName.value;
        task.folderLocation = editTaskFolder.value;
        task.dueByDate = editTaskDueDate.value;
        task.descriptionText = editTaskDescription.value;
      }
      return task;
    });

    workingTasks = tasks;
    saveTasks();
window.location.reload();
}

export function updateEditedFolders(dataId) {
  let folders = loadFolders();
  folders = folders.map((folder) => {
    if (folder.folderId === dataId) {
      const editFolderName = document.querySelector("#edit-folder-name");
      const editFolderColorPicked = document.querySelector("#edit-folder-color-picked");

      // Toggle the status
      folder.folderName = editFolderName.value;
      folder.folderColor = editFolderColorPicked.dataset.value;
    }
    return folder;
  });

  workingFolders = folders;
      saveFolders();
  window.location.reload();
}