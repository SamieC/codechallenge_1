// Get User Input 
//Ensure the data type inputed is a whole number

var Marks = parseInt(prompt("What is the Students Marks?"));

//create a function to attch marks to the grades

function findGrade(Marks) {


    if (Marks > 100) {
        return "Invalid Mark inputed--Check Marks input cannot be above 100%";//Ensure marks is not above 100%- Logically
    } 
    else if (Marks > 79) {
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

//  create a connection between the function and a constant grade.
const grade = findGrade(Marks);

// show the Grade.
console.log ("The Student Grade is:", grade);

