import React, {Component} from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Redirect} from "react-router-dom"
import './styles/index.css';
import NewProblemPage from './components/NewProblemPage'
import ProblemsPage from './components/ProblemsPage'
import ServerPage from './components/ServerPage'
import CurrentTasksPage from './components/CurrentTasksPage'
import SolutionHistory from './components/SolutionHistory'
import StartPage from './components/StartPage'
import NewSolutionPage from './components/NewSolutionPage'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Route path={"/new"} component={NewProblemPage}/>
                    <Route path={"/tasks"} component={CurrentTasksPage}/>
                    <Route path={"/new_problem"} component={NewSolutionPage}/>
                    <Route path={"/problems"} component={ProblemsPage}/>
                    <Route path={"/server"} component={ServerPage}/>
                    <Route path={"/history"} component={SolutionHistory}/>
                    <Route path={"/start"} component={StartPage}/>
                    <Redirect from={"/"} to={"/start"}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
