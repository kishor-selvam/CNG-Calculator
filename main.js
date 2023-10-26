// Input
const tripDistanceEl = document.getElementById("trip-distance");
const fuelEfficiencyEl = document.getElementById("fuel-efficiency");
const fuelCostEl = document.getElementById("fuel-cost");
// Button
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (tripDistanceEl.value == "") {
    console.log("Enter trip Distance value");
  } else if (fuelEfficiencyEl.value == "") {
    console.log("Enter fuel efficiency value");
  } else if (fuelCostEl.value == "") {
    console.log("Enter fuel cost value");
  } else {
    const distanceKM = tripDistanceEl.value;
    const fuelEfficiency = fuelEfficiencyEl.value;
    const fuelCost = fuelCostEl.value;
    const result = (distanceKM / fuelEfficiency) * fuelCost;

    const finalAns = "Your fuel cost will be around: ₹ " + result;
    console.log(finalAns)
  }
});
