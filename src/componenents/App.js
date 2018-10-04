import React, { Component } from 'react';
import './App.css';
import News from './News/News'

const items =
    [
        {id: 1, title: 'aaa'},
        {id: 2, title: 'bbb'}
    ]
;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Latest news
          </p>
        </header>
        <News items={items} />
      </div>
    );
  }
}

export default App;
