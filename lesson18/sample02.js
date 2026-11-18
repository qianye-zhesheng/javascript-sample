let points = 1000;
const usePoint = 300;

const pointsElement = document.querySelector("#points");
const usePointElement = document.querySelector("#use-point");
const pointsAfterUseElement = document.querySelector("#points-after-use");
const usePointButton = document.querySelector("#use-point-button");

function showPoints() {
  const pointsAfterUse = points - usePoint;

  pointsElement.textContent = points;
  usePointElement.textContent = usePoint;
  pointsAfterUseElement.textContent = pointsAfterUse;
}

function handleUsePoint() {
  points = points - usePoint;
  showPoints();
}

showPoints();

usePointButton.addEventListener("click", handleUsePoint);
