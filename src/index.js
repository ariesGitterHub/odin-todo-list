import "./styles/styles.css";
import crownImage from "./assets/crown-dk.svg";
import menuImage from "./assets/menu-dk.svg";
import addTaskImage from "./assets/add-task-dk.svg";
import addFolderImage from "./assets/add-folder-dk.svg";
import statusImage from "./assets/grid-dk.svg";

// import modeDkImage from "./assets/moon-dk.svg";
// import modeLtImage from "./assets/sun-lt.svg";

import showAllImage from "./assets/home-dk.svg";
import taskNumImage from "./assets/task-dk.svg";
import folderNumImage from "./assets/folder-dk.svg";
import priorityNumImage from "./assets/priority-dk.svg";
import overdueNumImage from "./assets/overdue-dk.svg";
import completedNumImage from "./assets/completed-dk.svg";

function addImages() {
const crownImg = document.querySelector("#crown-img");
crownImg.src = crownImage;

const menuImg = document.querySelector("#menu-img");
menuImg.src = menuImage;

const addTaskImg = document.querySelector("#add-task-img");
addTaskImg.src = addTaskImage;

const addFolderImg = document.querySelector("#add-folder-img");
addFolderImg.src = addFolderImage;

const statusImg = document.querySelector("#status-img");
statusImg.src = statusImage;

// const modeDkImg = document.querySelector("#mode-dk-img");
// modeDkImg.src = modeDkImage;

const showAllImg = document.querySelector("#show-all-img");
showAllImg.src = showAllImage;

const taskNumImg = document.querySelector("#task-num-img");
taskNumImg.src = taskNumImage;

const folderNumImg = document.querySelector("#folder-num-img");
folderNumImg.src = folderNumImage;

const priorityNumImg = document.querySelector("#priority-num-img");
priorityNumImg.src = priorityNumImage;

const overdueNumImg = document.querySelector("#overdue-num-img");
overdueNumImg.src = overdueNumImage;

const completedNumImg = document.querySelector("#completed-num-img");
completedNumImg.src = completedNumImage;
}

addImages()

// function addStatusBtns() {
//     const statusBanner = document.querySelector("#status-banner");
 
//     const taskNumBtn = document.createElement("button");
//     taskNumBtn.id = "task-num-btn";
//     const taskNumImg = document.createElement("img");
//     taskNumImg.id = "task-num-img";
 

//     statusBanner.appendChild(taskNumBtn);
// }

// addStatusBtns();