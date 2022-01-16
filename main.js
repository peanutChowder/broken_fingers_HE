// var taskInput = document.getElementById("task_input")

class DateUpdater {
    constructor(dateElementStr) {
        this.date = new Date();
        this.dateElement = document.getElementById(dateElementStr)
        this.daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    displayDate() {
        var dayWeekNum = this.date.getDay();
        var dayMonthNum = this.date.getDate();

        this.dateElement.textContent = `${this.daysWeek[dayWeekNum]} the ${" |".repeat(dayMonthNum)}${this.getDateSuffix(dayMonthNum)}`
    }


    getDateSuffix(dayMonthNum) {
        var secondDigit = dayMonthNum % 10;

        switch (secondDigit) {
            case 1:
                return 'st';
            
            case 2:
                return 'nd';

            case 3:
                return 'rd';

            default:
                return 'th';
        }
    }

}

class TaskAdder {
    constructor(taskInputStr, taskListStr) {
        this.taskInputElement = document.getElementById(taskInputStr);
        this.taskListElements = document.getElementById(taskListStr);
        this.taskDueDateElement = "";
    }

    createNewTaskDiv() {
        var newTaskDiv = document.createElement('div');
        
        this.appendNewTaskDivElements(newTaskDiv);
        this.taskListElements.appendChild(newTaskDiv);

        this.taskInputElement.value = "";
    }

    appendNewTaskDivElements(newTaskDiv) {
        var iNode = document.createElement('i');
        var spanNode = document.createElement('span');
        this.taskDueDateElement = document.createElement('span');

        iNode.className = "far fa-check-circle";
        iNode.onclick = function () {incrementOne(this)}
        this.taskDueDateElement.id = "due_date";
        spanNode.textContent = this.taskInputElement.value;

        this.addDate();

        var newTaskDivElements = [iNode, spanNode, this.taskDueDateElement];

        for (let i = 0; i < newTaskDivElements.length; i++) {
            newTaskDiv.appendChild(newTaskDivElements[i]);
        }
    }

        addDate() {
            var dateInput = document.getElementById("date_slider");

            if (dateInput.value != 0) {
                console.log("Due date detected");
                this.taskDueDateElement.textContent = this.calculateDate(dateInput.value);
                this.calculateDate(dateInput.value)
                displayDateSelector();
            }
    }

        calculateDate(dateSeconds) {
            var yyyy = Math.floor(dateSeconds / 3.154E7);
            dateSeconds -= yyyy * 3.154E7;

            var mm = Math.floor(dateSeconds / 2.628E6);
            dateSeconds -= mm * 2.628E6;

            var dd = Math.floor(dateSeconds / 86400);

            return `Due date: ${dd}/${mm}/${yyyy}`;
    }
}

class DateSelector {
    constructor() {
        this.dates = [];
        this.newTaskContainerElement = document.getElementById("new_task_container");

        this.sliderElement = this.setSlider();
        this.textElement = this.setTextElement();
        this.dateSelectorElement = this.setDateSelector();
    }

    setDateSelector() {
        var dateSelectorElement = document.createElement('div');
        dateSelectorElement.id = "date_selector";
        dateSelectorElement.style.display = "none";
        
        dateSelectorElement.appendChild(this.sliderElement);
        dateSelectorElement.appendChild(this.textElement);

        this.newTaskContainerElement.appendChild(dateSelectorElement);

        this.sliderElement.oninput = function() {displaySliderValue(this.value)};
        
        
        return dateSelectorElement;
    }

    setTextElement() {
        var textElement = document.createElement("div");
        textElement.id = "date_text";
        textElement.textContent = "Due date in seconds: 0";
        return textElement;
    }

    setSlider() {
        var sliderElement = document.createElement("input");
        sliderElement.id = "date_slider";
        sliderElement.type = "range";
        sliderElement.min = 0;
        sliderElement.max = 10E10;
        sliderElement.value = 0;
        sliderElement.step = 1;

        return sliderElement;
    }
}

function addTask() {
    event.preventDefault();
    var taskAdder = new TaskAdder("task_input", "task_list");
    taskAdder.createNewTaskDiv();
}

function displayDateSelector() {
    var dateSelectorElement = document.getElementById("date_selector");
    console.log("togglew")
    if (dateSelectorElement.style.display === "none") {
        dateSelectorElement.style.display = "block";
    } else {
        dateSelectorElement.style.display = "none";
        console.log("set to none")
    }
}

function displaySliderValue(value) {
    var dateTextElement = document.getElementById("date_text");
    dateTextElement.textContent = `Due date in seconds: ${document.getElementById("date_slider").value}`;
}

function incrementOne(taskElement) {
    // var progress = document.getElementById("progress");
    // const maxIncrement = 10;
    // increment += 1;
    

    // if (increment == maxIncrement) {
    //     progress.style.width = (incrementOne / maxIncrement) + "%";
    //     taskElement.parentNode.remove();
    // }
    taskElement.parentNode.remove()
}

// function decrementOne() {
//     if (increment > 0) {
//         increment -= 1;
//     }
// }


function main() {
    var dateUpdater = new DateUpdater("date");
    dateUpdater.displayDate();

    a = new DateSelector();
    // setInterval(decrementOne(), 300);
}

var increment = 0;
main();