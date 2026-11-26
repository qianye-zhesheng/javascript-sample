// 本体：100円につき1ポイント（購入金額は100円単位とする）
function calcPoint(price) {
  return price / 100;
}

// 確認：結果を目で見て、合っているか自分で判断する
console.log(calcPoint(1000));
console.log(calcPoint(500));
console.log(calcPoint(0));
