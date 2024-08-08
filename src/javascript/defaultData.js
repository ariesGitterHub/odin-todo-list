import { Task, Folder } from "./classes.js";

export function defaultData() {
  const initialTasks = [
    new Task(
      "t0",
      "Take out the trash",
      "overdue",
      "2024 JUL 29",
      "high",
      "incomplete",
      "Chores",
      ""
    ),
    new Task(
      "t1",
      "Grocery Store",
      "overdue",
      "2024 AUG 01",
      "normal",
      "incomplete",
      "Chores",
      "Buy: milk, bread, eggs."
    ),
    new Task(
      "t2",
      "Do Laundry",
      "overdue",
      "2024 AUG 05",
      "normal",
      "incomplete",
      "Chores",
      ""
    ),
  ];
  // initialTasks.forEach((task) => console.log(task.getTaskDetails()));
  // console.log(initialTasks);

  const initialFolders = [
    new Folder("f0", "Default", "--fc07"),
    new Folder("f1", "Chores", "--fc05"),
    new Folder("f2", "Fitness", "--fc01"),
    new Folder("f3", "Repair", "--fc10"),
  ];

  // console.log(initialFolders);
}
