#DAY 14: Scope

#Complete the Difference class by writing the following:
#A class constructor that takes an array of integers as a parameter and saves it to the elements instance variable.
#A computeDifference method that finds the maximum absolute difference between any numbers in N and stores it in the maximumDifference instance variable.
#This is not available in JavaScript


class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        maximum = 0

        for i in range(len(self.__elements)):
            for j in range(len(self.__elements)):
                absolute = abs(self.__elements[i] - self.__elements[j])
                if absolute > maximum:
                    maximum = absolute

        self.maximumDifference = maximum


_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)