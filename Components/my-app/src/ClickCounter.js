import React, { useState } from 'react';
import CounterButton from './CounterButton';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* <CounterButton onClick={handleClick} /> */}
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default ClickCounter;