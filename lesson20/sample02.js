// ===== 本体 =====
function calcPoint(price) {
  return price / 100;
}

// ===== テスト =====
const actual = calcPoint(1000);
const expected = 10;

if (actual === expected) {
  console.log("OK: 1000円の購入で10ポイント");
} else {
  console.log(`NG: 1000円の購入 期待値=${expected} 実際=${actual}`);
}
