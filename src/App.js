import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const initCount = count;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const decrement2 = () => {
    setCount((prevCount) => prevCount - 2);
  };

  const reset = () => {
    setCount(0);
  };

  const times = () => {
    setCount(count * 2);
  };

  const triple = () => {
    setCount((prevCount) => prevCount * 3);
  };

  const divideThree = () => {
    if (count % 3 === 0) {
      setCount(count / 3);
    }
  };

  return (
    <div>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+2</button>
      <button onClick={decrement2}>-2</button>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={times}>x2</button>
        <button onClick={triple}>x3</button>
        <button onClick={divideThree}>3の倍数の時だけ3で割る</button>
      </div>
    </div>
  );
}

export default App;
