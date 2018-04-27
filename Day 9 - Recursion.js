//DAY 9: Recursion

//rite a factorial function that takes a positive integer, N as a parameter and prints the result of N! (N factorial).

function factorial(n) {
//Reject number if less than 0; 
	if (n < 0) {
		 return -1;
	 }
//If number is 0, return 1;
	else if (n === 0) {
		return 1;
	}
//Perform factorial here
	else {
		return (n * factorial(n - 1));
	}
	
};

//WITHOUT RECURSION

function factorial2(n) {
	if (n === 0 || n === 1) {
		return 1;
		for (var i = n - 1; i >= 1; i--) {
			n *= i;
		}
		return n;
	} 
}