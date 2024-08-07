import { dmNewFolderImg } from "./imageExporter.js";

export function createNewFolderForm() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const newFolderForm = document.createElement("form");
    newFolderForm.id = "new-folder-form";
    newFolderForm.action = "";
    headerContent.appendChild(newFolderForm);

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const newFolderImg = document.createElement("img");
    newFolderImg.id = "new-folder-img";
    newFolderImg.src = dmNewFolderImg;
    newFolderImg.alt = "";

    const newFolderFormTitle = document.createElement("p");
    newFolderFormTitle.classList.add("font-fancy");
    newFolderFormTitle.textContent = "New Folder";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const newTaskTitleLabel = document.createElement("label");
    newTaskTitleLabel.classList.add("form-field-title");
    newTaskTitleLabel.for = "new-task-title";
    newTaskTitleLabel.textContent = "Task Title";

    const newTaskTitleInput = document.createElement("input");
    newTaskTitleInput.type = "text";
    newTaskTitleInput.id = "new-task-title";
    newTaskTitleInput.name = "new-task-title";
    newTaskTitleInput.placeholder = "Enter new task title";
    newTaskTitleInput.required;

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const newFolderColorP = document.createElement("p");
    newFolderColorP.classList.add("form-field-title");
    newFolderColorP.textContent = "Folder Color";

    const newFolderColorBtns1 = document.createElement("div");
    newFolderColorBtns1.classList.add("lvl-row-width", "color-picker-cont1");

    const btnFC01 = document.createElement("button");
    btnFC01.id = "fc01";
    btnFC01.classList.add("color-picker");
    btnFC01.textContent = "1";

    const btnFC02 = document.createElement("button");
    btnFC02.id = "fc02";
    btnFC02.classList.add("color-picker");
    btnFC02.textContent = "2";

    const btnFC03 = document.createElement("button");
    btnFC03.id = "fc03";
    btnFC03.classList.add("color-picker");
    btnFC03.textContent = "3";

    const btnFC04 = document.createElement("button");
    btnFC04.id = "fc04";
    btnFC04.classList.add("color-picker");
    btnFC04.textContent = "4";

    const btnFC05 = document.createElement("button");
    btnFC05.id = "fc05";
    btnFC05.classList.add("color-picker");
    btnFC05.textContent = "5";

    const newFolderColorBtns2 = document.createElement("div");
    newFolderColorBtns2.classList.add("lvl-row-width", "color-picker-cont2");

    const btnFC06 = document.createElement("button");
    btnFC06.id = "fc06";
    btnFC06.classList.add("color-picker");
    btnFC06.textContent = "6";

    const btnFC07 = document.createElement("button");
    btnFC07.id = "fc07";
    btnFC07.classList.add("color-picker");
    btnFC07.textContent = "7";

    const btnFC08 = document.createElement("button");
    btnFC08.id = "fc08";
    btnFC08.classList.add("color-picker");
    btnFC08.textContent = "8";

    const btnFC09 = document.createElement("button");
    btnFC09.id = "fc09";
    btnFC09.classList.add("color-picker");
    btnFC09.textContent = "9";

    const btnFC10 = document.createElement("button");
    btnFC10.id = "fc10";
    btnFC10.classList.add("color-picker");
    btnFC10.textContent = "10";
        
    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const newFolderCancelBtn = document.createElement("button");
    newFolderCancelBtn.classList.add("cancel");
    newFolderCancelBtn.id = "new-task-cancel";
    newFolderCancelBtn.textContent = "Cancel";

    const newFolderSubmitBtn = document.createElement("button");
    newFolderSubmitBtn.classList.add("submit");
    newFolderSubmitBtn.id = "new-task-submit";
    newFolderSubmitBtn.textContent = "Submit";

    header.appendChild(headerContent);
    headerContent.appendChild(newFolderForm);
    newFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
    lvlRow1.append(newFolderImg, newFolderFormTitle);
    lvlCol1.append(newTaskTitleLabel, newTaskTitleInput);
    lvlCol2.append(newFolderColorP, newFolderColorBtns1, newFolderColorBtns2);
    newFolderColorBtns1.append(
    btnFC01,
    btnFC02,
    btnFC03,
    btnFC04,
    btnFC05
    );
    newFolderColorBtns2.append(
    btnFC06,
    btnFC07,
    btnFC08,
    btnFC09,
    btnFC10
    );    
    lvlRowWidth1.append(newFolderCancelBtn, newFolderSubmitBtn);
}
