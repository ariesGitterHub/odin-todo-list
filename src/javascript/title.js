import {
  dmCrownImg,
} from "./imageExporter.js";

// let today = new Date().toISOString().slice(0, 10);

function getTodayFormattedDate() {
  const date = new Date();

  // Get year, month, day
  const year = date.getFullYear();

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];

  const day = date.getDate().toString().padStart(2, "0");

  // Get day of the week
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = dayNames[date.getDay()];

  return `${year} ${month} ${day} (${dayOfWeek})`;
}

const today = getTodayFormattedDate();

console.log(today);

function convertToFormattedDate() {
  const arrayDate = new Date();

  // Get year, month, day
  const year = date.getFullYear();

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];

  const day = date.getDate().toString().padStart(2, "0");

  // Get day of the week
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = dayNames[date.getDay()];

  return `${year} ${month} ${day} (${dayOfWeek})`;
}

export function createTitle() { 
    const header = document.querySelector("header");

    const appTitleCont = document.createElement("div");
    appTitleCont.classList.add("lvl-col")
    appTitleCont.id = "app-title-cont";

    const appTitle = document.createElement("h1");
    appTitle.classList.add("font-fancy");
    appTitle.textContent = "Task ";

    const crownImg = document.createElement("img");
    crownImg.id = "crown-img";
    crownImg.src = dmCrownImg;
    crownImg.alt = "Crown icon";

    // const appDateCont = document.querySelector("div");
    // appDateCont.id = "app-date-cont";

    const appDate = document.createElement("p");
    appDate.id = "app-date";
    appDate.textContent = `Today is ${today}`;

    // header.appendChild(appTitleCont);
    header.appendChild(appTitleCont);
    appTitleCont.appendChild(appTitle);
    appTitleCont.appendChild(appDate);

    appTitle.append(crownImg, " King");
}

