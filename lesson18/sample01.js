let points = 1000;
const usePoint = 300;

const pointsElement = document.querySelector("#points");
const usePointButton = document.querySelector("#use-point-button");

function showPoints() {
  pointsElement.textContent = points;
}

function handleUsePoint() {
  points = points - usePoint;
  showPoints();
}

showPoints();

usePointButton.addEventListener("click", handleUsePoint);
