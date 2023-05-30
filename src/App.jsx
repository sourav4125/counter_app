import { useState } from 'react'

import './App.css'



const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="counter">
    <button className="counter-btn" onClick={onIncrement}>+</button>
    <span className="counter-value">{value}</span>
    <button className="counter-btn" onClick={onDecrement}>-</button>
  </div>
);

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="app">
      <Counter value={count} onIncrement={increment} onDecrement={decrement} />
      <button className="btn" onClick={incrementByTen}>+10</button>
      <button className="btn" onClick={decrementByTen}>-10</button>
    </div>
  );
};

export default App;


// export default App
