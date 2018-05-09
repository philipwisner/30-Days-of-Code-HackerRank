//DAY 21: Generics

/*
Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.

Note: You must use generics to solve this challenge. Do not write overloaded functions.
*/

//Not available in JavaScript or Python

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    var swapped;
    var numberOfSwaps = 0;
    do {
        swapped = false;
        for (var i = 0; i < n; i++) {
            if (a[i] > a[i + 1]) {
                numberOfSwaps++;
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    console.log('Array is sorted in ' + numberOfSwaps + ' swaps.'); 
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[a.length-1]);
}