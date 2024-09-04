import { dmNewFolderImg } from "./imageExporter.js";
import { Folder } from "./classes.js";
import { updateUI } from "./updateUI.js";
import { addFolder, workingFolders } from "./storageAndData.js";

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
    newFolderImg.alt = "New folder icon";

    const newFolderFormTitle = document.createElement("p");
    newFolderFormTitle.classList.add("font-fancy");
    newFolderFormTitle.textContent = "New Folder";

    const lvlCol1 = document.createElement("div");
    lvlCol1.classList.add("lvl-col");

    const newFolderNameLabel = document.createElement("label");
    newFolderNameLabel.classList.add("form-field-title");
    newFolderNameLabel.setAttribute("for", "new-folder-name");
    newFolderNameLabel.textContent = "Folder Name";

    const newFolderNameInput = document.createElement("input");
    newFolderNameInput.type = "text";
    newFolderNameInput.id = "new-folder-name";
    newFolderNameInput.name = "new-folder-name";
    newFolderNameInput.placeholder = "Enter new folder name...";
    newFolderNameInput.autocomplete = "off";
    newFolderNameInput.required = "true";

    const lvlCol2 = document.createElement("div");
    lvlCol2.classList.add("lvl-col");

    const lvlRow2 = document.createElement("div");
    lvlRow2.classList.add("lvl-row");

    const newFolderColorP = document.createElement("p");
    newFolderColorP.classList.add("form-field-title");
    newFolderColorP.textContent = `Folder Color`;

    const newFolderColorPicked = document.createElement("span");
    newFolderColorPicked.id = "new-folder-color-picked";
    newFolderColorPicked.textContent = "Click on a color...";
    newFolderColorPicked.dataset.value = "";

    const newFolderColorBtns1 = document.createElement("div");
    newFolderColorBtns1.classList.add("lvl-row-width", "color-picker-btn-cont1");

    const newFolderColorBtns2 = document.createElement("div");
    newFolderColorBtns2.classList.add("lvl-row-width", "color-picker-btn-cont2");
        
    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const newFolderCancelBtn = document.createElement("button");
    newFolderCancelBtn.type = "button";
    newFolderCancelBtn.classList.add("cancel", "btn-sound");
    newFolderCancelBtn.id = "new-folder-cancel-btn";
    newFolderCancelBtn.textContent = "Cancel";

    const newFolderSubmitBtn = document.createElement("button");
    newFolderSubmitBtn.type = "submit";
    newFolderSubmitBtn.classList.add("submit", "btn-sound");
    newFolderSubmitBtn.id = "new-folder-submit-btn";
    newFolderSubmitBtn.textContent = "Submit";

    header.appendChild(headerContent);
    headerContent.appendChild(newFolderForm);
    newFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
    lvlRow1.append(newFolderImg, newFolderFormTitle);
    lvlCol1.append(newFolderNameLabel, newFolderNameInput);
    lvlCol2.append(lvlRow2, newFolderColorBtns1, newFolderColorBtns2);
    lvlRow2.append(newFolderColorP, newFolderColorPicked);

    buttonSet1.forEach((button) => newFolderColorBtns1.append(button));
    buttonSet2.forEach((button) => newFolderColorBtns2.append(button));

    lvlRowWidth1.append(newFolderCancelBtn, newFolderSubmitBtn);

    colorBtnClicked();
}

function colorBtnClicked() {
    const colorPickerBtns = document.querySelectorAll(".color-picker-btn");
    const newFolderColorPicked = document.querySelector("#new-folder-color-picked");

    colorPickerBtns.forEach(button => {
        button.addEventListener("click", () => {
            button.value = `--${button.id}`;
            newFolderColorPicked.dataset.value = `${button.value}`;
            newFolderColorPicked.style.backgroundColor = `var(${button.value})`;
            newFolderColorPicked.style.color = "var(--bkgd)";
            newFolderColorPicked.textContent = `"Number ${button.textContent}"`;     
        } )
    })
}

export function clearNewFolderForm() {
    const newFolderForm = document.querySelector("#new-folder-form");
    const newFolderCancelBtn = document.querySelector("#new-folder-cancel-btn");

    if (newFolderCancelBtn && newFolderForm) {
        newFolderCancelBtn.addEventListener("click", function () {
        updateUI();
        });
    } else {
        console.warn(
        "newFolderCancelBtn or newFolderForm is null or not found in the DOM."
        );
    }
}

function getFolderFormData() {
    return {
        folderName: document.querySelector("#new-folder-name").value,
        folderColor: document.querySelector("#new-folder-color-picked").dataset.value,
        folderId: `f${workingFolders.length + 1}`,
    };
}

function createNewFolder(formData) {
    return new Folder(
        formData.folderId,
        formData.folderName,
        formData.folderColor
    );
}

export function submitNewFolder() {
    const newFolderSubmitBtn = document.querySelector("#new-folder-submit-btn");
    const newFolderForm = document.querySelector("#new-folder-form");

    if (newFolderSubmitBtn && newFolderForm) {

        newFolderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = getFolderFormData();

        const newFolder = createNewFolder(formData);

        addFolder(newFolder);
        updateUI();
        });
    } else {
        console.warn("newFolderSubmitBtn or newFolderForm is null or not found in the DOM.");
    }
}