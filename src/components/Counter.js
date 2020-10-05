import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Conut: {count.count1}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
