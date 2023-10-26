// Input
const tripDistanceEl = document.getElementById("trip-distance");
const fuelEfficiencyEl = document.getElementById("fuel-efficiency");
const fuelCostEl = document.getElementById("fuel-cost");
// Button
const calculateBtn = document.getElementById("calculateBtn");
// Alert Design
const validationAlertEl = document.getElementById("validationAlert");
// Final Answer
const finalAnsEl = document.getElementById("finalAns");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    tripDistanceEl.value == "" &&
    tripDistanceEl.value == "" &&
    fuelCostEl.value == ""
  ) {
    validationAlertEl.className =
      "block text-center mt-5 bg-red-600 rounded text-white py-1.5";
    const newEl = document.createElement("p");
    newEl.innerText = "fill the all input fields";
    validationAlertEl.append(newEl);
    setTimeout(() => {
      validationAlertEl.className = "hidden";
      validationAlertEl.innerHTML = "";
    }, 1500);
  } else if (tripDistanceEl.value == "") {
    validationAlertEl.className =
      "block text-center mt-5 bg-red-600 rounded text-white py-1.5";
    const newEl = document.createElement("p");
    newEl.innerText = "Please enter Trip Distance value";
    validationAlertEl.append(newEl);
    setTimeout(() => {
      validationAlertEl.className = "hidden";
      validationAlertEl.innerHTML = "";
    }, 1500);
  } else if (fuelEfficiencyEl.value == "") {
    validationAlertEl.className =
      "block text-center mt-5 bg-red-600 rounded text-white py-1.5";
    const newEl = document.createElement("p");
    newEl.innerText = "Please enter Fuel Efficiency value";
    validationAlertEl.append(newEl);
    setTimeout(() => {
      validationAlertEl.className = "hidden";
      validationAlertEl.innerHTML = "";
    }, 1500);
    console.log("Enter fuel efficiency value");
  } else if (fuelCostEl.value == "") {
    validationAlertEl.className =
      "block text-center mt-5 bg-red-600 rounded text-white py-1.5";
    const newEl = document.createElement("p");
    newEl.innerText = "Please enter Fuel Cost value";
    validationAlertEl.append(newEl);
    setTimeout(() => {
      validationAlertEl.className = "hidden";
      validationAlertEl.innerHTML = "";
    }, 1500);
    console.log("Enter fuel cost value");
  } else {
    const distanceKM = tripDistanceEl.value;
    const fuelEfficiency = fuelEfficiencyEl.value;
    const fuelCost = fuelCostEl.value;
    const result = (distanceKM / fuelEfficiency) * fuelCost;
    finalAnsEl.innerHTML = "";
    finalAnsEl.className =
      "bg-emerald-500 rounded py-1.5 text-white text-center";
    const finalAns = "Your fuel cost will be around: ₹ " + result;
    const newEl = document.createElement("p");
    newEl.innerText = finalAns;
    finalAnsEl.append(newEl);
  }
});
