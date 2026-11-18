async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error("データ取得に失敗しました:", error);
  }
}

fetchUsers();
