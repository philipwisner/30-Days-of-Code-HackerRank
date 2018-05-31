// DAY 26: NESTED LOGIC

// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: .
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, .
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the .
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of .

function processData(input) {
    var dates = input.split("\n");

    var date1 = dates[0].split(" ");
    var date2 = dates[1].split(" ");

    var startDate = new Date(date1[2], date1[1], date1[0]);
    var endDate = new Date(date2[2], date2[1], date2[0]);

    var fine = 0;

    if (startDate <= endDate) {
        fine = 0;
    } else if (date1[1] === date2[1] && date1[2] === date2[2]) {
        fine = 15 * (date1[0] - date2[0]);
    } else if (date1[2] === date2[2]) {
        fine = 500 * (date1[1] - date2[1]);
    } else {
        fine = 10000;
    }
    console.log(fine);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
