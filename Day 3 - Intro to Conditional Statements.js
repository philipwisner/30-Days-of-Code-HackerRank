//DAY 3: DATA TYPES

//If N is odd, print Weird
//If N is even and in the inclusive range of 2 to 5, print Not Weird
//If N is even and in the inclusive range of 6 to 20, print Weird
//If N is even and greater than 20, print Not Weird

function main() {
    var N = parseInt(readLine());
    if (N % 2 === 0) {
        if (N > 20 || N === 2 || N === 4) {
            console.log('Not Weird')
        } else if (N >= 6 || N <= 20) {
            console.log('Weird')
        }
    } else {
        console.log('Weird');
    }        
}