import React, { Component } from 'react';
import './App.css';
import WordslistContainer from './components/WordslistContainer'
import NewGameContainer from './components/NewGameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        < WordslistContainer/>
        < NewGameContainer/>
      </div>
    );
  }
}

export default App;
