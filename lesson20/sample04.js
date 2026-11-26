// ===== 本体 =====
// まだ作っていない（Red の状態）
function getRank(totalPoint) {
  return undefined;
}

// ===== テスト用の道具 =====
function assertEqual(testName, actual, expected) {
  if (actual === expected) {
    console.log(`OK: ${testName}`);
  } else {
    console.log(`NG: ${testName} 期待値=${expected} 実際=${actual}`);
  }
}

// ===== テスト（先に書く）=====
// 0〜999: 通常会員 / 1000以上: プレミアム会員
assertEqual("0ポイントは通常会員", getRank(0), "通常会員");
assertEqual("999ポイントは通常会員", getRank(999), "通常会員");
assertEqual("1000ポイントはプレミアム会員", getRank(1000), "プレミアム会員");
assertEqual("5000ポイントはプレミアム会員", getRank(5000), "プレミアム会員");
