
import './App.css';
import Recipe from './components/Recipe'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body className="App">
      <h1>Food Recipes</h1>
        <Recipe />
    </body>
  )
}

export default App;
