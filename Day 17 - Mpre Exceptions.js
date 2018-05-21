//DAY 17: More Exceptions

//Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and returns the integer result of n^p. If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.

class Calculator {
    constructor (n, p) {
      this.n = n;
      this.p = p;      
    }
    power(n, p) {
        if (n >= 0 && p >= 0) {
            return Math.pow(n, p);
        } else {
            return 'n and p should be non-negative'
        }
    }
}