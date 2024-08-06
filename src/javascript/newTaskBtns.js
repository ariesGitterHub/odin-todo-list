import {
  newTaskPriorityFlagImg,
} from "./imageExporter";

import dmNewTaskPriorityFlagImg from "../assets/dm-priority-adta.svg";
import lmNewTaskPriorityFlagImg from "../assets/lm-priority-adta.svg";

export function newTaskPriorityChecked() {
    if (newTaskPriorityToggle) {
        newTaskPriorityToggle.addEventListener("change", toggle);
    } else {
        console.warn(
          "Warning: newTaskPriorityToggle or newFolderForm components missing."
        );
    }
    function toggle() {
        if (newTaskPriorityToggle.checked && darkLiteBtn.value === "dark") {
            newTaskPriorityFlagImg.src = dmNewTaskPriorityFlagImg;
        } else if (newTaskPriorityToggle.checked && darkLiteBtn.value === "lite") {
            newTaskPriorityFlagImg.src = lmNewTaskPriorityFlagImg;
        } else {
            newTaskPriorityFlagImg.src = "";
        }
    }
};
