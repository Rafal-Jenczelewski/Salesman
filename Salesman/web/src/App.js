import React, {Component} from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Redirect} from "react-router-dom"
import './styles/index.css';
import NewProblemPage from './components/NewProblemPage'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Route path={"/new"} component={NewProblemPage}/>
                    <Route path={"/problems"}/>
                    <Redirect from={"/"} to={"/problems"}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
