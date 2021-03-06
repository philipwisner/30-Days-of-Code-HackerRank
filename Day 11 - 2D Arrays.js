//DAY 11: 2D Arrays

//Sum up the values of an hourglass shape in a 2D array

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var hourglassSumArray = [];
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i] && arr[i+1] && arr[i+2]) {
                if (arr[i][j+1] != undefined && arr[i][j+2] != undefined) {
                    hourglassSumArray.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
                }
            }
        }
    }
    console.log(Math.max.apply(null, hourglassSumArray));
}