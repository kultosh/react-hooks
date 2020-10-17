import React, {useState, useRef, useEffect} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('null');

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div className="App">
      <h2>useRef Hook</h2>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <p>My name is {name} </p>
      <p>I rendered {renderCount.current}</p>
    </div>
  )

}

export default App;
