import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('blue')
  
  const Increase = () => {
    // Note: You can use any variable inplace of prevCount. It is just the variable that denotes the previous state
    setCount(prevCount => prevCount + 1)
    setTheme('blue')
  }

  const Decrease = () => {
    setCount(prevCount => prevCount - 1)
    setTheme('red')
  }

  return (
    <div>
      <h1>React Hooks & Context</h1>
      <div>
        <button onClick={Increase}>+</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={Decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
