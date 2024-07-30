export class Task {
  constructor(
    taskId,
    taskName,
    overdueStatus,
    dueByDate,
    priorityFlag,
    completedCheck,
    folderLocation,
    descriptionText
  ) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.overdueStatus = overdueStatus;
    this.dueByDate = dueByDate;
    this.priorityFlag = priorityFlag;
    this.completedCheck = completedCheck;
    this.folderLocation = folderLocation;
    this.descriptionText = descriptionText;
  }

//   getTaskDetails() {
//     return `Task Id: ${this.taskId}, Task: ${this.taskName}, Overdue: ${this.overdueStatus ? "YES!" : ""}, Due by ${this.dueByDate}, Priority: ${this.priorityFlag ? "High" : "Normal"}, Folder: ${this.folderLocation}, Details: ${this.descriptionText}.`;
//   }
}

export class Folder {
  constructor(
    folderId,
    folderName,
    folderColor
  ) {
    this.folderId = folderId;
    this.folderName = folderName;
    this.folderColor = folderColor;
  }
}
