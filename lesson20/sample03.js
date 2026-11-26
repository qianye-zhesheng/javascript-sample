// ===== 本体 =====
// わざとバグを入れてある（100円につき1ポイントなのに、10で割っている）
function calcPoint(price) {
  return price / 10;
}

// ===== テスト用の道具 =====
function assertEqual(testName, actual, expected) {
  if (actual === expected) {
    console.log(`OK: ${testName}`);
  } else {
    console.log(`NG: ${testName} 期待値=${expected} 実際=${actual}`);
  }
}

// ===== テスト =====
assertEqual("1000円は10ポイント", calcPoint(1000), 10);
assertEqual("500円は5ポイント", calcPoint(500), 5);
assertEqual("100円は1ポイント", calcPoint(100), 1);
assertEqual("0円は0ポイント", calcPoint(0), 0);
