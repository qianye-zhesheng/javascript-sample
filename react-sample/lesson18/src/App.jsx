import { useState } from "react";

const usePoint = 300;

function App() {
  const [pointBalance, setPointBalance] = useState(1000);
  const [message, setMessage] = useState("");

  const balanceAfterUse = pointBalance - usePoint;

  function handleUsePoint() {
    if (pointBalance < usePoint) {
      setMessage("ポイントが不足しています。");
      return;
    }
    setPointBalance(pointBalance - usePoint);
  }

  return (
    <>
      <h1>ポイント</h1>
      <p>
        ポイント残高：<span className="point-value">{pointBalance}</span>pt
      </p>
      <p>
        今回利用するポイント：<span className="point-value">{usePoint}</span>pt
      </p>
      <p>
        ポイント利用後の残高：<span className="point-value">{balanceAfterUse}</span>pt
      </p>
      <button onClick={handleUsePoint}>{usePoint}ポイント利用する</button>
      <p className="message">{message}</p>
    </>
  );
}

export default App;
