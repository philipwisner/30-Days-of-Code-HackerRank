//DAY 6: Let's Review

//Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as  space-separated strings on a single line 

function processData(input) {
    let even = '';
    let odd = '';
    
    let inputs = input.split('\n');
    let length = parseInt(inputs[0]);
    let words = inputs.slice(1);
    
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (j % 2) {
               even += words[i][j];         
            } else {
                odd += words[i][j];
            }
        }
        console.log(odd + ' ' + even);
        even = '';
        odd = '';

    }
} 
