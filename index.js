const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dataArray = [];

function addTask() {
    if (inputBox.value.trim() === '') {
        document.getElementsByClassName("notification")[0].style.visibility = "visible";
        setTimeout(() => {
            document.getElementsByClassName("notification")[0].style.visibility = "hidden";
        }, 5000);
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        dataArray.push(inputBox.value);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        let indexValue = e.target.parentElement.innerHTML.replace('<span>×</span>', '');
        let index = dataArray.indexOf(indexValue);
        if (index > -1) {
            dataArray.splice(index, 1);
        }
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("dataArray", dataArray);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();