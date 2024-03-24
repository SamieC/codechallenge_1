// Input USER Speed
const speed = parseFloat(prompt("Enter car speed (km/h):"));

// cREATE FUNCTION TO SET SPEED AND SET POINTS COUNTER
function NTSAPoints(speed) {
  //Set speed limit

  const speedLimit = 70;
  const PointsPerKm = 5;
  let NTSAPoints = 0;

  // check if the inputed speed is below the Limint
  if (speed < speedLimit) {
    return "Ok";
  }

  // Calculate NTSA points for exceeding speed limit
  const OverSpeeding = speed - speedLimit; 

// floor rounds down a number to its nearest integer.
  NTSAPoints = Math.floor(OverSpeeding / PointsPerKm);

//   set condition for suspending licesne
  if (NTSAPoints > 12) {
    return "License suspended";
  }
  // Return the number of NTSAPoints
  return `NTSAPoints: ${NTSAPoints}`;
}


// Calculation of points
const result = NTSAPoints(speed);

//Display
console.log(result);


