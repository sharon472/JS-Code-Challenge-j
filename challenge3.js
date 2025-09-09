// Net Salary Calculator (Kenya - 2025)

// Ask the user to enter their salary details

const basicSalary = Number(prompt("Enter your Basic Salary (Ksh):"));
const benefits = Number(prompt("Enter your Benefits (Ksh):"));

//Calculate Gross Salary
// Gross salary is the total BEFORE any deductions
const grossSalary = basicSalary + benefits;
function calculatePAYE(income) {
  let tax = 0;

  if (income <= 24000) {
    tax = income * 0.10;
  } else if (income <= 32333) {
    tax = (24000 * 0.10) + ((income - 24000) * 0.25);
  } else if (income <= 500000) {
    tax = (24000 * 0.10) + (8333 * 0.25) + ((income - 32333) * 0.30);
  } else if (income <= 800000) {
    tax = (24000 * 0.10) + (8333 * 0.25) + ((500000 - 32333) * 0.30) + ((income - 500000) * 0.325);
  } else {
    tax = (24000 * 0.10) + (8333 * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((income - 800000) * 0.35);
  }


  tax = tax - 2400;



  //it is used Make sure tax doesn’t go below 0
  return tax < 0 ? 0 : tax;
}


const paye = calculatePAYE(grossSalary);

const shif = grossSalary * 0.0275;


//  Calculate Housing Levy
const housingLevy = grossSalary * 0.015;

// Net Salary = Gross - (PAYE + + SHIF + Housing Levy)

const netSalary = grossSalary - (paye + nssf + shif + housingLevy);
console.log("----- Salary Breakdown -----");
console.log(`Basic Salary: Ksh ${basicSalary}`);
console.log(`Benefits: Ksh ${benefits}`);
console.log(`Gross Salary: Ksh ${grossSalary}`);
console.log(`PAYE (Tax): Ksh ${paye}`);
console.log(`Housing Levy: Ksh ${housingLevy}`);
console.log(`Net Salary: Ksh ${netSalary}`);
