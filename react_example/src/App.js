import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'
import ProductStore from "./ProductStore";
import ShoppingCartActions from "./ShoppingCartActions";
import ProductForm from "./ProductForm";

function App() {
    var products = [
        {name : 'Apple', price : 5},
        {name : 'Banana', price : 3},
        {name : 'Cherry', price : 12}
    ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ShoppingCart/>
        </p>
          <button onClick={()=>{ShoppingCartActions.emptyShoppingCart()}}>Empty</button> <br/>
          <button onClick={()=>{ShoppingCartActions.loadDummyShoppingCart()}}>Dummy</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <ShoppingCart/>
          <br/>
          <ProductForm/>
      </header>
    </div>
  );
}

export default App;
