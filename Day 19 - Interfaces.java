#DAY 19: Interfaces

#The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

#Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of n.

#Not available in JavaScript

class Calculator implements AdvancedArithmetic{

    public int divisorSum(int n){
        int divisorSum=n;
        for(int i=1;i<n;i++)
        {
            if(n%i==0)
                divisorSum += i;
        }
        return divisorSum;
    }
} 