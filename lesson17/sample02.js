const users = [
  { name: "佐藤", age: 25, points: 1200 },
  { name: "鈴木", age: 34, points: 300 },
  { name: "高橋", age: 41, points: 2500 },
  { name: "田中", age: 19, points: 800 },
];

const premiumUsers = users.filter((user) => user.points >= 1000);
console.table(premiumUsers);

const premiumUserNames = premiumUsers.map((user) => user.name);
console.log(premiumUserNames);

premiumUserNames.forEach((name) => {
  console.log(`特別会員 ${name}様`);
});
