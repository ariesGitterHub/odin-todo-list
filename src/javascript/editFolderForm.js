import {
    dmFolderImg,
} from "./imageExporter.js";

import {
    workingFolders,
    updateEditedFolders,
} from "./storageAndData.js";


export function folderEditBtnClicked(index) {
    const editFolderForm = document.querySelector("#edit-folder-form");
    editFolderForm.classList.toggle("flex");
    populateEditFolderForm(index);
}

const btnConfigs1 = [
    { id: "fc01", text: "1" },
    { id: "fc02", text: "2" },
    { id: "fc03", text: "3" },
    { id: "fc04", text: "4" },
    { id: "fc05", text: "5" },
];


const btnConfigs2 = [
    { id: "fc06", text: "6" },
    { id: "fc07", text: "7" },
    { id: "fc08", text: "8" },
    { id: "fc09", text: "9" },
    { id: "fc10", text: "10" },
];

function createButtons(configs) {
    return configs.map((config) => {
        const colorPickerBtn = document.createElement("button");
        colorPickerBtn.id = config.id;
        colorPickerBtn.type = "button";
        colorPickerBtn.classList.add("color-picker-btn", "btn-sound");
        colorPickerBtn.textContent = config.text;
        return colorPickerBtn;
    });
}

const buttonSet1 = createButtons(btnConfigs1);
const buttonSet2 = createButtons(btnConfigs2);

let targetId = "";

function populateEditFolderForm(index) {
    const folderTiles = document.querySelectorAll(".folder");
    const folderTile = folderTiles[index];

    targetId = folderTile.dataset.id;

    const matchingFolders = workingFolders.filter(
        (folder) => folder.folderId === targetId
    );

    if (matchingFolders.length === 0) {
        console.error("No matching folder found");
        return;
    }

    // Assumes there is only one matching folder
    const folder = matchingFolders[0];

    // pulls values from the folder
    const extractedFolderValues = {
        folderName: folder.folderName,
        folderColor: folder.folderColor,
    };

    // populates fields with pulled array values
    const editFolderName = document.querySelector("#edit-folder-name");
    editFolderName.value = extractedFolderValues.folderName;

    const editFolderColorPicked = document.querySelector("#edit-folder-color-picked");
    editFolderColorPicked.dataset.value = extractedFolderValues.folderColor;
    editFolderColorPicked.style.backgroundColor = `var(${extractedFolderValues.folderColor})`;

    return targetId;
}

export function createEditFolderForm() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector("#header-content");

    const editFolderForm = document.createElement("form");
    editFolderForm.id = "edit-folder-form";
    editFolderForm.action = "";
    headerContent.appendChild(editFolderForm);

    const lvlRow1 = document.createElement("div");
    lvlRow1.classList.add("lvl-row");

    const editFolderImg = document.createElement("img");
    editFolderImg.id = "edit-folder-img";
    editFolderImg.src = dmFolderImg;
    editFolderImg.alt = "Folder icon";

    const editFolderFormTitle = document.createElement("p");
    editFolderFormTitle.classList.add("font-fancy");
    editFolderFormTitle.textContent = "Edit Folder";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const editFolderNameLabel = document.createElement("label");
    editFolderNameLabel.classList.add("form-field-title");
    editFolderNameLabel.setAttribute("for", "edit-folder-name");
    editFolderNameLabel.textContent = "Edit Folder Name";

    const editFolderNameInput = document.createElement("input");
    editFolderNameInput.type = "text";
    editFolderNameInput.id = "edit-folder-name";
    editFolderNameInput.name = "edit-folder-name";
    editFolderNameInput.placeholder = "";
    editFolderNameInput.autocomplete = "off";
    editFolderNameInput.required = "true";

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const lvlRow2 = document.createElement("div");
    lvlRow2.classList.add("lvl-row");

    const editFolderColorP = document.createElement("p");
    editFolderColorP.classList.add("form-field-title");
    editFolderColorP.textContent = `Edit Color`;

    const editFolderColorPicked = document.createElement("span");
    editFolderColorPicked.id = "edit-folder-color-picked";
    editFolderColorPicked.textContent = "Click on a color...";
    editFolderColorPicked.dataset.value = "";

    const editFolderColorBtns1 = document.createElement("div");
    editFolderColorBtns1.classList.add("lvl-row-width", "color-picker-btn-cont1");

    const editFolderColorBtns2 = document.createElement("div");
    editFolderColorBtns2.classList.add("lvl-row-width", "color-picker-btn-cont2");

    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const editFolderCancelBtn = document.createElement("button");
    editFolderCancelBtn.type = "button";
    editFolderCancelBtn.classList.add("cancel", "btn-sound");
    editFolderCancelBtn.id = "edit-folder-cancel-btn";
    editFolderCancelBtn.textContent = "Cancel";

    const editFolderSubmitBtn = document.createElement("button");
    editFolderSubmitBtn.type = "submit";
    editFolderSubmitBtn.classList.add("submit", "btn-sound");
    editFolderSubmitBtn.id = "edit-folder-submit-btn";
    editFolderSubmitBtn.textContent = "Update";

    header.appendChild(headerContent);
    headerContent.appendChild(editFolderForm);
    editFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
    lvlRow1.append(editFolderImg, editFolderFormTitle);
    lvlCol1.append(editFolderNameLabel, editFolderNameInput);
    lvlCol2.append(lvlRow2, editFolderColorBtns1, editFolderColorBtns2);
    lvlRow2.append(editFolderColorP, editFolderColorPicked);

    buttonSet1.forEach((button) => editFolderColorBtns1.append(button));
    buttonSet2.forEach((button) => editFolderColorBtns2.append(button));

    lvlRowWidth1.append(editFolderCancelBtn, editFolderSubmitBtn);

    colorBtnClicked();
}

function colorBtnClicked() {
    const colorPickerBtns = document.querySelectorAll(".color-picker-btn");
    const editFolderColorPicked = document.querySelector("#edit-folder-color-picked");
    colorPickerBtns.forEach((button) => {
        button.addEventListener("click", () => {
        button.value = `--${button.id}`;
        editFolderColorPicked.dataset.value = `${button.value}`;
        editFolderColorPicked.style.backgroundColor = `var(${button.value})`;
        editFolderColorPicked.style.color = "var(--bkgd)";
        editFolderColorPicked.textContent = `"Number ${button.textContent}"`;
        });
    });
}

export function clearEditFolderForm() {
    const editFolderForm = document.querySelector("#edit-folder-form");
    const editFolderCancelBtn = document.querySelector("#edit-folder-cancel-btn");

    if (editFolderCancelBtn && editFolderForm) {
        editFolderCancelBtn.addEventListener("click", function () {
            editFolderForm.classList.toggle("flex");
        });
    } else {
        console.warn(
        "editFolderCancelBtn or editFolderForm is null or not found in the DOM."
        );
    }
}

export function submitEditedFolder() {
    const editFolderSubmitBtn = document.querySelector("#edit-folder-submit-btn");
    const editFolderForm = document.querySelector("#edit-folder-form");
            
    if (editFolderSubmitBtn && editFolderForm) {
        editFolderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        updateEditedFolders(targetId);
        });
    } else {
        console.warn("editFolderSubmitBtn or editFolderForm is null or not found in the DOM.");
    }
}