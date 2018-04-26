//DAY 7: Arrays

//Given an array, arr, of n integers, print arr's elements in reverse order as a single line of space-separated numbers.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var reverseArr = arr.reverse().join(' ');
    console.log(reverseArr);
}