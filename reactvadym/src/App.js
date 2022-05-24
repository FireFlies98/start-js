import React from 'react';
import Burger from './containers/Burger';
import './App.css';


function App() {
  const ingredients = [{ name: 'bacon', price: 1.7 }, { name: 'cheese', price: 1 }, { name: 'meat', price: 2 }, { name: 'salad', price: 0.4 }, { name: 'pickle', price: 0.35 }, { name: 'chicken', price: 1.2 }] // In future we wil get this from API

  return (
    <div className="App">
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default App;
