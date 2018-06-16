import React, { Component } from 'react';
import './App.css';
import NewGamesContainer from './components/NewGamesContainer'
import WordGuessContainer from './components/WordGuessContainer'
import NewEnterContainer from './components/NewEnterContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        
        < NewGamesContainer />
        < WordGuessContainer />
        < NewEnterContainer />
      </div>
    );
  }
}

export default App;
