export function handleStatusBtn() {
  
    if (statusBtn && statusBanner) {
        statusBtn.addEventListener("click", toggle);
    } else {
        console.warn("Warning: statusBtn or statusBanner components missing.");
    }

  function toggle() {
    if (newTaskForm.classList.contains("flex")) {
      newTaskForm.classList.toggle("flex"); //Toggles this off...
      statusBanner.classList.toggle("flex");
    } else if (newFolderForm.classList.contains("flex")) {
      newFolderForm.classList.toggle("flex"); //Toggles this off...
      statusBanner.classList.toggle("flex");
    } else {
      statusBanner.classList.toggle("flex");
    }
  }
};

export function handleAddTaskBtn() {
    if (addTaskBtn && newTaskForm) {
        addTaskBtn.addEventListener("click", toggle);
  } else {
        console.warn("Warning: addTaskBtn or newTaskForm components missing.");
  }

  function toggle() {
    if (newFolderForm.classList.contains("flex")) {
      newFolderForm.classList.toggle("flex"); //Toggles this off...
      newTaskForm.classList.toggle("flex");
    } else if (statusBanner.classList.contains("flex")) {
      statusBanner.classList.toggle("flex");
      newTaskForm.classList.toggle("flex");
    } else {
      newTaskForm.classList.toggle("flex");
    }
  }
};

export function handleAddFolderBtn() {
    if (addFolderBtn && newFolderForm) {
        addFolderBtn.addEventListener("click", toggle);
    } else {
        console.warn(
        "Warning: addFolderBtn or newFolderForm components missing."
      );
    }

  function toggle() {
    if (newTaskForm.classList.contains("flex")) {
      newTaskForm.classList.toggle("flex"); //Toggles this off...
      newFolderForm.classList.toggle("flex");
    } else if (statusBanner.classList.contains("flex")) {
      statusBanner.classList.toggle("flex"); //Toggles this off...
      newTaskForm.classList.toggle("flex");
    } else {
      newFolderForm.classList.toggle("flex");
    }
  }
};

// export function handleDarkLiteBtn() {

//   if (darLiteBtn) {
//     darkLiteBtn.addEventListener("click", toggle);
//   } else {
//     console.warn("Warning: darkLiteBtn components missing.");
//   }

//   function toggle() {

//     if (darkLiteBtn.value === "dark") {
//       darkLiteBtn.value = "lite";

//       body.classList.add("lite-mode");

//       crownImg.src = lmCrownImg;

//       statusImg.src = lmStatusImg;
//       addTaskImg.src = lmAddTaskImg;
//       addFolderImg.src = lmAddFolderImg;
//       darkLiteImg.src = lmDarkLiteImg;

//       taskNumImg.src = lmTaskImg;
//       priorityNumImg.src = lmPriorityImg;
//       overdueNumImg.src = lmOverdueImg;
//       completedNumImg.src = lmCompletedImg;
//       folderNumImg.src = lmFolderImg;

//       newTaskImg.src = lmAddTaskImg;
//       newTaskPriorityFlagImg.src = "";

//       newFolderImg.src = lmAddFolderImg;

//       taskOverdueNoticeImg.src = lmTaskOverdueNoticeImg;

//       taskPriorityImg.src = lmPriorityImg;
//       taskCompletedImg.src = lmCompletedImg;
//       taskEditImg.src = lmEditImg;
//       taskTrashImg.src = lmTrashImg;

//     } else if (darkLiteBtn.value === "lite") {
//       darkLiteBtn.value = "dark";

//       body.classList.remove("lite-mode");

//       crownImg.src = dmCrownImg;

//       statusImg.src = dmStatusImg;
//       addTaskImg.src = dmAddTaskImg;
//       addFolderImg.src = dmAddFolderImg;
//       darkLiteImg.src = dmDarkLiteImg;

//       taskNumImg.src = dmTaskImg;
//       priorityNumImg.src = dmPriorityImg;
//       overdueNumImg.src = dmOverdueImg;
//       completedNumImg.src = dmCompletedImg;
//       folderNumImg.src = dmFolderImg;

//       newTaskImg.src = dmAddTaskImg;
//       newTaskPriorityFlagImg.src = "";

//       newFolderImg.src = dmAddFolderImg;

//       taskOverdueNoticeImg.src = dmTaskOverdueNoticeImg;

//       taskPriorityImg.src = dmPriorityImg;
//       taskCompletedImg.src = dmCompletedImg;
//       taskEditImg.src = dmEditImg;
//       taskTrashImg.src = dmTrashImg;
//     }
//   }
// };