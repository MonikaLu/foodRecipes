
import './App.css';
import Recipe from './components/Recipe'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <body className="App">
    <header>
      <h1>Food Recipes</h1>
    </header>
    <div>
      Hello
    </div>
      <Button variant='outline-danger' type='submit'>
          Start!
      </Button>
        <Recipe />
    </body>
  )
}

export default App;
