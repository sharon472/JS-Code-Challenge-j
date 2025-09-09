//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
 // Adding prompt thus a propmt will appaer in the browser thus one can enter any number and it is graded
 //To check grade right click then press inspect and chooose console 
const marks = Number(prompt("Enter student marks (0 - 100):"));

// Check grade conditions

 if(marks >79 && marks <=100){
console.log("Grade A")
 }
 else if(marks>=60 && marks<=79){
    console.log("Grade B")
}
else if(marks >= 49&& marks <=59){
console.log("Grade C")
 }
 else if(marks >= 40&& marks <49){
console.log("Grade D")
 }
 else if (marks >= 0 && marks < 40) {
  console.log("Grade: E");

 }
 //// This block checks if any grade entered is between 0-100
  else {
  console.log("Kindly enter marks between 0 and 100.");
}
