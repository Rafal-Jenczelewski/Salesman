import React, {Component} from 'react';
import NavBar from './components/NavBar'
import TestPage from './components/TestPage'
import {BrowserRouter, Route} from "react-router-dom"
import './index.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Route path={"/test"} component={TestPage}/>
                    <Route exact path={"/"}/>
                    <Route path={"/new"}/>
                    <Route path={"/requests"}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
