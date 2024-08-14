import { Folder, Task } from "./classes.js";

const defaultFolders = [
  new Folder("f0", "Default", "--fc00"),
  new Folder("f1", "Chores", "--fc06"),
  new Folder("f2", "Fitness", "--fc01"),
  new Folder("f3", "Repair", "--fc06"),
];

const defaultTasks = [
  new Task(
    "t0",
    "Take out the trash",
    "08/12/2024",
    "high",
    "incomplete",
    "Default",
    "Don't forget to empty the upstairs trash cans!"
  ),
  new Task(
    "t1",
    "Grocery Store",
    "08/14/2024",
    "normal",
    "incomplete",
    "Chores",
    "Buy: apples, potatoes, carrots, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, frozen blueberries."
  ),
  // new Task(
  //   "t2",
  //   "Run my usual 5k course",
  //   "08/12/2024",
  //   "normal",
  //   "completed",
  //   "Fitness",
  //   "Try to go later in the evening, around sunset."
  // ),
  // new Task(
  //   "t3",
  //   "Write that novel about that thing.",
  //   //   "overdue",
  //   "11/05/2012",
  //   "normal",
  //   "incomplete",
  //   "Default",
  //   ""
  // ),
  // new Task(
  //   "t4",
  //   "Fix the sharks with the frickin' laser beams on their heads.",
  //   "04/01/2054",
  //   "high",
  //   "incomplete",
  //   "Repair",
  //   "Mind the radioactive squid, too."
  // ),
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

export function removeFolder(checkId) {
  workingFolders = workingFolders.filter(
    (folder) => folder.folderId !== checkId
  );
  saveFolders();
}

export function updateFolder(updatedFolder) {
  const index = workingFolders.findIndex(
    (folder) => folder.folderId === updatedFolder.folderId
  );
  if (index !== -1) {
    workingFolders[index] = updatedFolder;
    saveFolders();
  }
}

export function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    return JSON.parse(savedTasks);
  } else {
    return [...defaultTasks]; // Clone the initial array
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

// export function removeTask(checkId) {
//   workingTasks = workingTasks.filter((task) => task.taskId !== checkId);
//   saveTasks();
// }

export function removeTask(dataId) {
  workingTasks = workingTasks.filter((task) => task.taskId !== dataId);
  saveTasks();
}


export function updateTask(updatedTask) {
  const index = workingTasks.findIndex((task) => task.taskId === updatedTask.taskId);
  if (index !== -1) {
    workingTasks[index] = updatedTask;
    saveTasks();
  }
}

