//DAY 9: Recursion

//Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.

function processData(input) {
    var inputSplit = input.split('\n');
    var n = parseInt(inputSplit[0]);
    var searchLength = inputSplit.length - n;
    var phoneBook = [];
    
    for (var i = 1; i <= n; i++) {
        var list = inputSplit[i].split(' ');
        phoneBook[list[0]] = list[1];
    }
    
    for (var i = 1; i < searchLength; i++) {
        var name = inputSplit[i + n];
        if (phoneBook.hasOwnProperty(name)) {
            console.log(name + '=' + phoneBook[name]);
        } else {
            console.log('Not found');
        }
    }
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