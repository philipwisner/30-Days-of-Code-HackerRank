DAY 10: Binary Numbers

Convert base 10 number to base 2. Then count the consecutive ones, and return that number

function main() {
  var n = parseInt(readLine());
  var binaryNum = [];

  while (n > 0) {
    binaryNum.push(n % 2)
    n = Math.floor(n / 2)
  };
    
  binaryNum = binaryNum.reverse();

  var ones = 0;;
  var max = 0;

  for (i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === 1) {
      ones += 1;
    } else if (binaryNum[i] === 0) {
      if (ones > max) max = ones;
      ones = 0;
    }
  }

  if (ones > max) max = ones

  console.log(max)
}