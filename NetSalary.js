// Get user input-Salary float data type is added
const basicSalary = parseFloat(prompt("Enter basic salary:"));

function calculateNetSalary(basicSalary) {

    const grossSalary = basicSalary;
    // Assuming no benefitsthat gross salary is just basic salary

    // Calculate NSSF deduction (Assume that it is 6% of gross salary-Employee Contribution)
    const NSSFdeduction = grossSalary * 0.06;

    // NHIF deduction (fixed at 2000-Assuming NHIF Fixed)
    const NHIFdeduction = 2000;

    // Total deductions before KRA(NSSF + NHIF)
    const preKRAdeductions = NSSFdeduction + NHIFdeduction;

    // Calculate adjusted gross salary(Taxable Income) for KRA (gross salary minus deductions)
    const TaxableIncome = grossSalary - preKRAdeductions;

    // Calculate KRA deduction based on Taxable Income- Assuming LAdder Scale Provided on KRA website.
    let KRAdeduction = 0;
    if (TaxableIncome < 24000) {
        KRAdeduction = TaxableIncome * 0.1;
    } else if (TaxableIncome < 32000) {
        KRAdeduction = TaxableIncome * 0.25;
    } else if (TaxableIncome < 500000) {
        KRAdeduction = TaxableIncome * 0.3;
    } else if (TaxableIncome < 800000) {
        KRAdeduction = TaxableIncome * 0.325;
    } else {
        KRAdeduction = TaxableIncome * 0.35;
    }

    // Finding Total deductions
    const totalDeductions = preKRAdeductions + KRAdeduction;

    // Calculate net salary
    const netSalary = grossSalary - totalDeductions;

    // The expected Output-Fixed to 2 decimal places
    const grossSalaryFInal = `Gross Salary: KES ${grossSalary.toFixed(2)}`;

    const deductionsFinal = `Total Deductions: KES${totalDeductions.toFixed(2)}`;

    const netSalaryFinal = `Net Salary: KES${netSalary.toFixed(2)}`;


    return `${grossSalaryFInal}
  \n${deductionsFinal}
  \n${netSalaryFinal}`;
}



// Calculate 
const netSalaryResult = calculateNetSalary(basicSalary);

// display 
console.log(netSalaryResult);
println(netSalaryResult);


