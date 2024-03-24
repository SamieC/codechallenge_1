// Get User Input and ensure the number is a float.

var Marks = parseFloat(prompt("What is the Students Mark?"));

//create function to find the Grade

function findGrade(Marks) {


    if (Marks > 100) {
        return "Invalid Grade--Check Marks input";
    } else if (Marks > 79) {
        return "A";
    } else if (Marks >= 60) {
        return "B";
    } else if (Marks >= 50) {
        return "C";
    } else if (Marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Calculate the Grade
const grade = findGrade(Marks);

// display the Grade
console.log("The Student Grade is:", grade);

