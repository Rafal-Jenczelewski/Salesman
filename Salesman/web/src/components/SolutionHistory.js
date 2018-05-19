import React, {Component} from 'react'
import {getSoultions} from '../requests/requests'
import Solution from './Solution'

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
      return (

        <div className={"container-fluid"}>
          <h2>Historia rozwiązań</h2>
          <hr />
          <table className={"table"}>
            <thead className={"thead-light"}>
              <tr>
                <th scope={"col"}>ID</th>
                <th scope={"col"}>Nazwa problemu</th>
                <th scope={"col"}>Ilość miast</th>
                <th scope={"col"}>Macierz rozwiązań</th>
                <th scope={"col"}>Czas wykonywania algorytmu</th>
                <th scope={"col"}>Wielosć populacji</th>
                <th scope={"col"}>Ilość generacji</th>
                <th scope={"col"}>Wielośc pojedynczego zadania</th>
                <th scope={"col"}>Ilość procesów</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>0</th>
                <th>Testowy problem</th>
                <th>12</th>
                <th>1 2 3 6 5 4 7 8 9 12 11 10</th>
                <th>5.23s</th>
                <th>200</th>
                <th>10000</th>
                <th>5</th>
                <th>9</th>
              </tr>
            </tbody>
          </table>
        </div>

      )
    }
}

export default SolutionHistory;
