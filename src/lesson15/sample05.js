const currentPoints = 500;

console.log("現在の残高:" + currentPoints);

const newPoints = addPoints(currentPoints, 100);

console.log("特典適用後のポイント:" + newPoints);

function addPoints(points, bonus) {
  return points + bonus;
}
