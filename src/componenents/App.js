import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import Sidenews from './News/Sidenews'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href='/' className="bran-logo center">My feed</a>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col s8">
                        <News what="everything" query="q=apple" />
                        <News what="everything" query="q=bitcoin" />
                    </div>
                    <div className="col s4">
                        <Sidenews what="top-headlines" query="q=bitcoin" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
