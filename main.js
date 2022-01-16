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

        this.dateElement.textContent = `${this.daysWeek[dayWeekNum]} the ${dayMonthNum}${this.getDateSuffix(dayMonthNum)}`
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

        iNode.className = "far fa-check-circle";
        spanNode.textContent = this.taskInputElement.value;

        var newTaskDivElements = [iNode, spanNode];

        for (let i = 0; i < newTaskDivElements.length; i++) {
            newTaskDiv.appendChild(newTaskDivElements[i]);
        }
    }
}

class DateSelector {
    constructor() {
        this.slider = this.setSlider()
    }

    setSlider() {
        var slider = document.createElement("input");
        slider.id = "date_slider";
    }
}

function addTask() {
    event.preventDefault();
    var taskAdder = new TaskAdder("task_input", "task_list");
    taskAdder.createNewTaskDiv();
}

function displayDateSelector() {
    alert("working");
}


function main() {
    var dateUpdater = new DateUpdater("date");
    dateUpdater.displayDate();
}

main();