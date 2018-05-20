import React, {Component} from 'react'
import {getSoultions} from '../requests/requests'
import Solution from './Solution'

class SolutionHistory extends Component {

  state = {
      solutions: []
  };

  async componentDidMount() {
      fetch("http://127.0.0.1:8000/tsp/history")
        .then(response => response.json())
        .then(data => this.setState({ solutions: data }));
  }

    render() {

      console.log(this.state.solutions);
        let solutions = this.state.solutions.map(e => <Solution
            key={e.id}
            id={e.id}
            graph={e.graph}
            cityCount={e.cityCount}
            title={e.title}
            time={e.time}
            owner_id={e.owner_id}
            population={e.population}
            generations={e.generations}
            proc={e.proc}
            wpz={e.wpz}
        />);

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
              {solutions}
            </tbody>
          </table>
        </div>

      )
    }
}

export default SolutionHistory;
