//DAY 5: Loops

//Given an integer n, print its first 10 multoples. Eacher multiple n x i, where 1 <= i <= 10 should be printed on anew line in the form: n x i = result;

function main() {
    var n = parseInt(readLine());
		for (var i = 1; i <= 10; i++) {
			var result = n * i;
			var i = i;
			console.log(n + ' x ' + i + ' = ' + result);
		}
}