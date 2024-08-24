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
    new Folder("f3", "Repair", "--fc03"),
    new Folder("f4", "Social", "--fc04"),
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
}

export function updateFolder(updatedFolder) {
const index = workingFolders.findIndex((folder) => folder.folderId === updatedFolder.folderId);
    if (index !== -1) {
    workingFolders[index] = updatedFolder;
    saveFolders();
    }
}

const defaultTasks = [
    new Task(
    "t0",
    "Take out the trash",
    "2024-08-01",
    "",
    "normal",
    "incomplete",
    "Chores",
    "Don't forget to empty the upstairs trash cans!"
    ),
    new Task(
    "t1",
    "Grocery Store",
    "2024-08-31",
    "",
    "high",
    "incomplete",
    "Chores",
    "Buy: apples, potatoes, carrots, garlic, oatmeal, coffee, pasta, pasta sauce, soy milk, cheese, bread, peanut butter, frozen blueberries."
    ),
    new Task(
    "t2",
    "Run my usual 5k course",
    "2024-08-12",
    "",
    "normal",
    "incomplete",
    "Fitness",
    "Try to go later in the evening, around sunset."
    ),
    new Task(
    "t3",
    "Write that novel about that thing.",
    //   "overdue",
    "2000-11-05",
    "",
    "normal",
    "incomplete",
    "*Default",
    ""
    ),
    new Task(
    "t4",
    "Fix the sharks with the frickin' laser beams on their heads",
    "2054-04-01",
    "",
    "high",
    "incomplete",
    "Repair",
    "Mind the radioactive squid, too."
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
        task.priorityFlag = task.priorityFlag === "normal" ? "high" : "normal";
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