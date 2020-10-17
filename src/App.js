import React, {useState, useRef, useEffect} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');

  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name])

  return (
    <div className="App">
      <h2>useRef Hook</h2>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <p>My name is {name} and it used to be {prevName.current} </p>
    </div>
  )

}

export default App;
