function date() {
    var dateVal = document.getElementById("date").value
    var year = parseInt(dateVal.substring(0, 4))
    var month = parseInt(dateVal.substring(5, 7))
    var day = parseInt(dateVal.substring(8, 10))
    const a = new Date(year, month-1, day);
    var days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    var r = days[a.getDay()];
    document.getElementById("myId").innerHTML = r;
}