import priorityFlagGreen from "../assets/priority-green.svg";


function priorityChecked() {
const priorityTrue = document.querySelector("#priority-checkbox");
const priorityTrueImg = document.querySelector("#priority-true-img");
if (priorityTrue.checked) {
    priorityTrueImg.src = priorityFlagGreen;
    } else {
        priorityTrueImg.src = "";
    }
}

export default priorityChecked;