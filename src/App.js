import React, {useState} from 'react';

function App() {
  const [state, setState] = useState({count: 0, theme: 'blue'});
  const counter = state.count
  const theme = state.theme
  
  const Increase = () => {
    setState(prevState => {
      return {
        ...prevState, count: prevState.count + 1, theme: 'blue'
      }
    })
  }

  const Decrease = () => {
    setState(prevState => {
      return {
        ...prevState, count: prevState.count - 1, theme: 'red'
      }
    })
  }

  return (
    <div>
      <h1>React Hooks & Context</h1>
      <div>
        <button onClick={Increase}>+</button>
        <span>{counter}</span>
        <span>{theme}</span>
        <button onClick={Decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
