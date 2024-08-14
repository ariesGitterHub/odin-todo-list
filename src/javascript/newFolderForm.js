import { dmNewFolderImg } from "./imageExporter.js";

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
    colorPickerBtn.classList.add("color-picker-btn");
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
    newFolderImg.alt = "";

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

    const newFolderColorBtns1 = document.createElement("div");
    newFolderColorBtns1.classList.add("lvl-row-width", "color-picker-btn-cont1");

    // const btnFC01 = document.createElement("button");
    // btnFC01.id = "fc01";
    // btnFC01.classList.add("color-picker-btn");
    // btnFC01.textContent = "1";

    // const btnFC02 = document.createElement("button");
    // btnFC02.id = "fc02";
    // btnFC02.classList.add("color-picker-btn");
    // btnFC02.textContent = "2";

    // const btnFC03 = document.createElement("button");
    // btnFC03.id = "fc03";
    // btnFC03.classList.add("color-picker-btn");
    // btnFC03.textContent = "3";

    // const btnFC04 = document.createElement("button");
    // btnFC04.id = "fc04";
    // btnFC04.classList.add("color-picker-btn");
    // btnFC04.textContent = "4";

    // const btnFC05 = document.createElement("button");
    // btnFC05.id = "fc05";
    // btnFC05.classList.add("color-picker-btn");
    // btnFC05.textContent = "5";



    const newFolderColorBtns2 = document.createElement("div");
    newFolderColorBtns2.classList.add("lvl-row-width", "color-picker-btn-cont2");

    // const btnFC06 = document.createElement("button");
    // btnFC06.id = "fc06";
    // btnFC06.classList.add("color-picker-btn");
    // btnFC06.textContent = "6";

    // const btnFC07 = document.createElement("button");
    // btnFC07.id = "fc07";
    // btnFC07.classList.add("color-picker-btn");
    // btnFC07.textContent = "7";

    // const btnFC08 = document.createElement("button");
    // btnFC08.id = "fc08";
    // btnFC08.classList.add("color-picker-btn");
    // btnFC08.textContent = "8";

    // const btnFC09 = document.createElement("button");
    // btnFC09.id = "fc09";
    // btnFC09.classList.add("color-picker-btn");
    // btnFC09.textContent = "9";

    // const btnFC10 = document.createElement("button");
    // btnFC10.id = "fc10";
    // btnFC10.classList.add("color-picker-btn");
    // btnFC10.textContent = "10";
        
    const lvlRowWidth1 = document.createElement("div");
    lvlRowWidth1.classList.add("lvl-row-width");

    const newFolderCancelBtn = document.createElement("button");
    newFolderCancelBtn.type = "button";
    newFolderCancelBtn.classList.add("cancel");
    newFolderCancelBtn.id = "new-folder-cancel-btn";
    newFolderCancelBtn.textContent = "Cancel";

    const newFolderSubmitBtn = document.createElement("button");
    newFolderSubmitBtn.type = "submit";
    newFolderSubmitBtn.classList.add("submit");
    newFolderSubmitBtn.id = "new-folder-submit-btn";
    newFolderSubmitBtn.textContent = "Submit";

    header.appendChild(headerContent);
    headerContent.appendChild(newFolderForm);
    newFolderForm.append(lvlRow1, lvlCol1, lvlCol2, lvlRowWidth1);
    lvlRow1.append(newFolderImg, newFolderFormTitle);
    lvlCol1.append(newFolderNameLabel, newFolderNameInput);
    lvlCol2.append(lvlRow2, newFolderColorBtns1, newFolderColorBtns2);
    lvlRow2.append(newFolderColorP, newFolderColorPicked);
    // newFolderColorBtns1.append(
    // btnFC01,
    // btnFC02,
    // btnFC03,
    // btnFC04,
    // btnFC05
    // );


    buttonSet1.forEach((button) => newFolderColorBtns1.append(button));

    // newFolderColorBtns2.append(
    // btnFC06,
    // btnFC07,
    // btnFC08,
    // btnFC09,
    // btnFC10
    // );    

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
        newFolderColorPicked.style.backgroundColor = `var(${button.value})`;
        newFolderColorPicked.style.color = "var(--bkgd)";
        newFolderColorPicked.textContent = `"Number ${button.textContent}"`;     
    } )
})
}