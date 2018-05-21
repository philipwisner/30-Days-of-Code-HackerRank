//DAY 12: Inheritance

/* You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

A Student class constructor, which has  parameters:
A string, firstName.
A string, lastName.
An integer, if.
An integer array (or vector) of test scores, scores.
A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average: 
*/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
        this.scores = scores;
    }
    
    calculate() {
        var scoreSum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            scoreSum += this.scores[i];
        }
        var grade =  scoreSum / this.scores.length;
        
        var score;
        if (grade <= 100 & grade >= 90) {
            score = 'O';
        } else if (grade <= 90 & grade >= 80) {
            score = 'E';
        } else if (grade <= 80 & grade >= 70) {
            score = 'A';  
        } else if (grade <= 70 & grade >= 55) {
            score = 'P';
        } else if (grade <= 55 & grade >= 40) {
            score = 'D';
        } else {
            score = 'T';
        }
        
        return score;
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
}