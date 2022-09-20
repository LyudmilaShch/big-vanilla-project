import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Lyuda", "Katya", "Dima", "Viktor"]
  const users = [{id: 1, name: "Lyuda"}, {id: 2, name: "Katya"},{id:3, name: "Dima"},{id:4, name: "Viktor"}]


const liElements = users.map(u => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
