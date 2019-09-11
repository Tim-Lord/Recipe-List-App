import React, { Component } from "react";
import Header from "./components/layouts/Header";
import Recipes from "./components/recipe/Recipes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Recipes />
      </div>
    );
  }
}

export default App;
