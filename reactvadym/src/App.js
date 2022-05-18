import React from 'react';
import { Footer, Main, Header } from './components';
import { Burger } from './containers';
import './App.css';


function App() {
  // const ingredients = [{ name: 'bacon', price: 1.2 }, { name: 'cheese', price: 0.9 }, { name: 'meat', price: 1.15 }, { name: 'salad', price: 0.6 }, { name: 'pickle', price: 0.35 }, { name: 'chicken', price: 0.85 }] // In future we wil get this from API

  return (
    <div className="App">
      <Header />
      <Main />
      <Burger />
      <Footer />
    </div>
  );
}

export default App;
