import React, {useState, useMemo} from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor : dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  const doubleNumber = slowFunction(number);

  return (
    <div className="App">
      <h1>UseMemo Hooks</h1>
      <div>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <br />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <span style={themeStyles}> {doubleNumber} </span>
      </div>
      
    </div>
  );

  function slowFunction (num) {
      return num * 2;
    }

}

export default App;
