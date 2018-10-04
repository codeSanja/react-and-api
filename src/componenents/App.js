import React, { Component } from 'react';
import './App.css';
import News from './News/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Latest news
          </p>
        </header>
        <News what="everything" query="q=apple" />
        <News what="top-headlines" query="q=bitcoin" />
      </div>
    );
  }
}

export default App;
