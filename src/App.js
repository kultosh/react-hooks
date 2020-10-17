import React, {useState, useRef, useEffect} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');

  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h2>useRef Hook</h2>
      <div>
        <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <p>My name is {name} </p>
    
      <button onClick={focus}>Focus</button>
    </div>
  )

}

export default App;
