import React, {useState, useEffect} from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <div>
      <h1>React Hooks & Context</h1>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h2>{resourceType}</h2>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre> 
      } 
      )}
    </div>
  );
}

export default App;
