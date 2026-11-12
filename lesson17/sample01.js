// ブラウザの開発者ツール（Console）で実行するサンプル
// JSONPlaceholder のユーザー一覧を取得し、会社名で絞り込んで表示する

async function showUsers() {
  try {
    // 1. サーバーへリクエスト
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // HTTPエラーを確認
    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    // 2. JSONをJavaScriptの値に変換
    const users = await response.json();

    console.log(users);

    // 3. 配列を処理：会社名に "Group" を含むユーザーだけ抽出
    const filteredUsers = users.filter((user) =>
      user.company.name.includes("Group"),
    );

    console.log(filteredUsers);

    // 4. 必要な項目だけの配列を作る
    const results = filteredUsers.map((user) => ({
      name: user.name,
      email: user.email,
      company: user.company.name,
    }));

    // 5. コンソールに表示
    console.table(results);
  } catch (error) {
    console.error("データ取得に失敗しました:", error);
  }
}

showUsers();
