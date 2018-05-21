//DAY 20: Sorting

/*
Using a bubble sort return how many swaps were completed in order to return the array in numerical order. Also return the first Element and the last element in the array.
*/

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