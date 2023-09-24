// below is code for a grading system
 

const marks = 100;
/*
grade A is the peak with marks beginning at 100 to 80
grade B follows with marks ranging from 79 to 60
grade C contains marks 59 to 40
grade D starts from 
*/

function gradeChart (marks){
let isA, isB, isC, isD, isE;

if (marks >= 80){
    isA = true;
}else if (marks <= 79 && marks >= 60){
    isB = true;
}else if (marks <= 59 && marks >= 50){
    isC = true;
}else if (marks <= 49 && marks >= 40){
    isD = true;
}else if (marks <= 39 && marks > 0){
    isE = true;
}
}

return marks;
