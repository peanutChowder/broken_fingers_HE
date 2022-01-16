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


function main() {
    var dateUpdater = new DateUpdater("date");
    dateUpdater.displayDate();
}

main();