import { useState } from "react";

const usePoint = 300;

function App() {
  const [points, setPoints] = useState(1000);

  const pointsAfterUse = points - usePoint;

  function handleUsePoint() {
    setPoints(points - usePoint);
  }

  return (
    <>
      <h1>ポイント</h1>
      <p>
        ポイント残高：<span className="point-value">{points}</span>pt
      </p>
      <p>
        今回利用するポイント：<span className="point-value">{usePoint}</span>pt
      </p>
      <p>
        ポイント利用後の残高：
        <span className="point-value">{pointsAfterUse}</span>pt
      </p>
      <button onClick={handleUsePoint}>{usePoint}ポイント利用する</button>
    </>
  );
}

export default App;
