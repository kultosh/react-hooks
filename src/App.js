import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  let Increase
  let Decrease

  if(counter >= 0)
  {
     Increase = () => {
      setCounter( counter + 1)
    }
  
     Decrease = () => {
      setCounter( counter - 1)
    }
  }

  else
  {
    setCounter(0);
  }


  return (
    <div>
      <h1>React Hooks & Context</h1>
      <div>
        <button onClick={Increase}>+</button>
        <span>{counter}</span>
        <button onClick={Decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
