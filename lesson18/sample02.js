let pointBalance = 1000;
const usePoint = 300;

const pointBalanceElement = document.querySelector("#point-balance");
const usePointElement = document.querySelector("#use-point");
const balanceAfterUseElement = document.querySelector("#balance-after-use");
const usePointButton = document.querySelector("#use-point-button");
const messageElement = document.querySelector("#message");

function showPointBalance() {
  const balanceAfterUse = pointBalance - usePoint;

  pointBalanceElement.textContent = pointBalance;
  usePointElement.textContent = usePoint;
  balanceAfterUseElement.textContent = balanceAfterUse;
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
