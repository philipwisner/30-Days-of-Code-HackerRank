# DAY 25: Running Time and Complexity

# A prime is a natural number greater than 1 that has no positive
# divisors other than 1 and itself. Given a number, n, determine 
# and print whether it's prime or notPrime.

import math

numbers = int(input())

for i in range(0, numbers):
    num = int(input())
    if (num == 2):
        print("Prime")
    elif (num < 2):
        print("Not prime")
    else:
        flag = 0
        for j in range(2, math.ceil(math.sqrt(num)) + 1):
            if (num % j == 0):
                flag = 1
                break

        if (flag == 0):
            print("Prime")
        else:
            print("Not prime")
