var dayOfWeek = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
dayOfWeek.push("Sunday");
var message = "Hello world from ";
dayOfWeek.forEach(function (day) {
    if (day == "Monday") {
        console.log(message + " last " + day + ".");
    }
    else {
        console.log(message + " next " + day + ".");
    }
});
