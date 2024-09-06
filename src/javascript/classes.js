export class Theme {
	constructor(mode) {
		this.mode = mode;
	}
}

export class Folder {
	constructor(folderId, folderName, folderColor) {
		this.folderId = folderId;
		this.folderName = folderName;
		this.folderColor = folderColor;
	}
}

export class Task {
	constructor(
		taskId,
		taskName,
		dueByDate,
		overdueFlag,
		priorityFlag,
		completedFlag,
		folderLocation,
		descriptionText
	) {
		this.taskId = taskId;
		this.taskName = taskName;
		this.dueByDate = dueByDate;
		this.overdueFlag = overdueFlag;
		this.priorityFlag = priorityFlag;
		this.completedFlag = completedFlag;
		this.folderLocation = folderLocation;
		this.descriptionText = descriptionText;
	}
}