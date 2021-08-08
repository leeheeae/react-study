import React from 'react';

const Counter = ({ onIncrease, onDecrase, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrase}>-1</button>
    </div>
  );
};

export default Counter;
