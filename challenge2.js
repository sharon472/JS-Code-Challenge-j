// Challenge 2: Speed Detector (Toy Problem)


// Step 1: Ask the user to enter the speed of the car
// prompt() will show a small popup asking for input


const speed = Number(prompt("Enter the speed of the car:"));

// Step 2: Check if speed is less than 70
if (speed < 70) {

  console.log("Ok"); // If below limit, print Ok
} else {
  // Step 3: If speed is above 70, calculate demerit points (eg 7 demerit points)
  // (speed - 70) / 5 eg speed is 85 so 85-70(15 thus /points and we get 3)
  // Math.floor() ensures we only take whole number(eg 5,10)
  const points = Math.floor((speed - 70) / 5);

  // Step 4: Print the total points
  console.log(`Points: ${points}`);


  // Step 5: If more than 12 points, suspend license
  if (points > 12) {
    console.log("License suspended");
  }
}
