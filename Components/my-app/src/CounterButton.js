import React from 'react';

const CounterButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src="https://www.google.com/search?q=doggy+images" alt="Button Image"></img>
      {/* The event handling logic remains the same. */}
    </button>
  );
};

export default CounterButton;