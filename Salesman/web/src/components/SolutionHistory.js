import React, {Component} from 'react'
import {getSoultions} from '../requests/requests'
import Solution from './Solution'
import '../styles/solutionHistory.css'

const classPrefix = "solution-history-";

class SolutionHistory extends Component {
    state = {
        solutions: []
    };

    async componentDidMount() {
        let solutions = await getSoultions();
        this.setState({
            solutions: solutions.solutions
        })
    }

    render() {
        let solutions = this.state.solutions.map(e => <Solution result={e.result} time={e.time} cost={e.cost}
                                                                population={e.population}
                                                                generations={e.generations}/>);

        return <div className={classPrefix + "main"}>
            {solutions}
        </div>
    }
}

export default SolutionHistory;