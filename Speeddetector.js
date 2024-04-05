
const speed = document
  .getElementById("button")
  .addEventListener("click", calculateSpeed);
const licenseStatus = document.getElementById("licenseStatus");

function calculateSpeed() {

  const speed = document.getElementById("speed").value;
  const speedLimit = 70;
  const PointsPerKm = 5;
  let NTSAPoints = 0;

  
  if (speed <= speedLimit) {
    licenseStatus.innerText = "ok";
  } 
    // Calculate NTSA points for exceeding speed limit
    const OverSpeeding = speed - speedLimit; 

  

    // floor rounds down a number to its nearest integer.
  NTSAPoints = Math.floor(OverSpeeding / PointsPerKm);

  
  } 
  if (NTSAPoints > 12) {
    licenseStatus.innerText = "License Status: License suspended";

    return `NTSAPoints: ${NTSAPoints}`

  } 
  
  const result = NTSAPoints(speed);
 

