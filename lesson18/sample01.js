let pointBalance = 1000;
const usePoint = 300;

const pointBalanceElement = document.querySelector("#point-balance");
const usePointButton = document.querySelector("#use-point-button");
const messageElement = document.querySelector("#message");

function showPointBalance() {
  pointBalanceElement.textContent = pointBalance;
}

function handleUsePoint() {
  if (pointBalance < usePoint) {
    messageElement.textContent = "ポイントが不足しています。";
    return;
  }
  pointBalance = pointBalance - usePoint;
  showPointBalance();
}

usePointButton.addEventListener("click", handleUsePoint);

showPointBalance();
