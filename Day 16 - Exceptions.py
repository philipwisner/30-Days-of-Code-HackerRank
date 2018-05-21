#DAY 16: Exceptions - String to Integer

#Read string S, if it has an integer value, print it, if else print 'Bad String'. Must use a error catching, cannot use if/else or loops. I did this in python because it is much easier than JavaScript

import sys


S = input().strip()
try:
    N = int(S)
    print(N)
except: 
    print('Bad String')