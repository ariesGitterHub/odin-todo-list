import { 
    Theme, 
    Folder, 
    Task 
} from "./classes.js";

import { updateUI } from "./updateUI.js";


function getLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
        total += localStorage.getItem(key).length * 2; // Rough estimation
        }
    }
    return total;
}
console.log("LocalStorage Size:", getLocalStorageSize(), "bytes");



// THEME


const defaultTheme = [
    new Theme("dark")
];

export function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return JSON.parse(savedTheme);
    } else {
        return [...defaultTheme]; // Clones the initial array
    }
}

export let workingTheme = loadTheme();
console.log(workingTheme);

export function saveTheme() {
    localStorage.setItem("theme", JSON.stringify(workingTheme));
}


// FOLDER


const defaultFolders = [
    new Folder("f0", "*Default", "--fc00"),
    new Folder("f1", "Chores", "--fc06"),
    new Folder("f2", "Fitness", "--fc01"),
    new Folder("f3", "Repair", "--fc09"),
    new Folder("f4", "Social", "--fc03"),
    new Folder("f5", "Travel", "--fc04"),
];

export function loadFolders() {
    const savedFolders = localStorage.getItem("folders");
    if (savedFolders) {
        return JSON.parse(savedFolders);
    } else {
        return [...defaultFolders]; // Clones the initial array
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

    updateUI();
}

export function updateEditedFolders(dataId) {
    let folders = loadFolders();
    folders = folders.map((folder) => {
        if (folder.folderId === dataId) {
            const editFolderName = document.querySelector("#edit-folder-name");
            const editFolderColorPicked = document.querySelector("#edit-folder-color-picked");

            folder.folderName = editFolderName.value;
            folder.folderColor = editFolderColorPicked.dataset.value;
        }
        return folder;
    });

    workingFolders = folders;
    saveFolders();

    updateUI();
}


// TASK


function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function getYesterdayDate() {
    const today = new Date(); 
    today.setDate(today.getDate() - 1); 
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`; 
}

function getTomorrowDate() {
    const today = new Date(); 
    today.setDate(today.getDate() + 1); 
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`; 
}

function getDayAfterTomorrowDate() {
    const today = new Date(); 
    today.setDate(today.getDate() + 2); 
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`; 
}

function getRandomFutureDate(daysAhead = 5000) { // Reminder that 5000 is a default parameter and that I can pass in anything below. E.g., const randomFutureDate = getRandomFutureDate(30); 
    const today = new Date();              
    const randomDays = Math.floor(Math.random() * daysAhead) + 1;
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + randomDays);  

    const year = futureDate.getFullYear();
    const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
    const day = futureDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;    
}

const today = getTodayDate();
const yesterday = getYesterdayDate();
const tomorrow = getTomorrowDate();
const dayAfterTomorrow = getDayAfterTomorrowDate(); 
const randomFutureDate = getRandomFutureDate(); 

const defaultTasks = [
  new Task(
    "t0",
    "Take out the trash",
    today,
    "",
    "high",
    "incomplete",
    "Chores",
    "Don't forget to empty the upstairs trash cans!"
  ),
  new Task(
    "t1",
    "Grocery store",
    tomorrow,
    "",
    "low",
    "incomplete",
    "Chores",
    "Buy: apples, oranges, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, and frozen blueberries."
  ),
  new Task(
    "t2",
    "Run my usual 5k course",
    dayAfterTomorrow,
    "",
    "low",
    "incomplete",
    "Fitness",
    "Try to go in the evening to avoid too many cars and people."
  ),
  new Task(
    "t3",
    "Get drinks with neighbors",
    yesterday,
    "",
    "low",
    "completed",
    "Social",
    "Be home early."
  ),
  new Task(
    "t4",
    "Visit Guedelon Castle",
    randomFutureDate,
    "",
    "low",
    "incomplete",
    "Travel",
    "Make sure to renew my passport in advance. It might help to learn some French too."
  ),
  new Task(
    "t5",
    "Fix the barbwire fence",
    "2099-11-05",
    "",
    "high",
    "incomplete",
    "Repair",
    "Watch out for the radioactive zombies and roving bands of marauders."
  ),
  new Task(
    "t6",
    "Clean out the gutters",
    tomorrow,
    "",
    "low",
    "incomplete",
    "Chores",
    ""
  ),
  new Task(
    "t7",
    "Finish laundry",
    dayAfterTomorrow,
    "",
    "low",
    "incomplete",
    "Chores",
    "Try to hang most of it on the drying rack in the bathroom."
  ),
  new Task(
    "t8",
    "Finish up The Odin Project",
    randomFutureDate,
    "",
    "low",
    "incomplete",
    "*Default",
    "Be tenacious!!!!!!"
  ),
  new Task(
    "t9",
    "Summon Cthulhu",
    "2069-04-01",
    "",
    "high",
    "incomplete",
    "*Default",
    "ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn."
  ),
  new Task(
    "t10",
    "Breakfast with the cousin",
    dayAfterTomorrow,
    "",
    "low",
    "incomplete",
    "Social",
    "It's my turn to buy."
  ),
  new Task(
    "t11",
    "Vote",
    "2024-11-05",
    "",
    "high",
    "incomplete",
    "*Default",
    "Get breakfast beforehand."
  ),
  new Task(
    "t12",
    "Neighborhood block party",
    "2024-09-21",
    "",
    "low",
    "incomplete",
    "Social",
    "Should I make a dish?"
  ),
  new Task(
    "t13",
    "Do a long run",
    "2024-09-01",
    "",
    "low",
    "completed",
    "Fitness",
    "Stretch afterwards..."
  ),
  new Task(
    "t14",
    "Fix dryer",
    "2024-08-31",
    "",
    "low",
    "completed",
    "Repair",
    "Buy a new fuse to fix this. Try to get the original part."
  ),
];

export function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        return JSON.parse(savedTasks);
    } else {
        return [...defaultTasks]; //Again, clones the initial array
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
    updateUI();
}

export function updatePriorityStatus(dataId) {
    let tasks = loadTasks(); // THIS WAS THE ISSUE: YOU HAVE TO...Load the current tasks from localStorage..FIRST

    tasks = tasks.map((task) => {
        if (task.taskId === dataId) {
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
            task.completedFlag = task.completedFlag === 'incomplete' ? 'completed' : 'incomplete';
        }
        return task;
    });

    workingTasks = tasks;
    saveTasks();
}

export function updateEditedTasks(dataId) {
    let tasks = loadTasks();

    tasks = tasks.map((task) => {
        if (task.taskId === dataId) {
            const editTaskName = document.querySelector("#edit-task-name");
            const editTaskFolder = document.querySelector("#edit-task-folder");
            const editTaskDueDate = document.querySelector("#edit-task-due-date");
            const editTaskDescription = document.querySelector("#edit-task-description");

            task.taskName = editTaskName.value;
            task.folderLocation = editTaskFolder.value;
            task.dueByDate = editTaskDueDate.value;
            task.descriptionText = editTaskDescription.value;
        }
        return task;
    });

    workingTasks = tasks;
    saveTasks();
    updateUI();
}