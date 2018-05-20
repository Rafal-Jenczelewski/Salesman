import React, {Component} from 'react'
import Problem from './Problem'
import {Link} from 'react-router-dom'


class ProblemsPage extends Component {
    state = {
        instances: []
    };

    async componentDidMount() {
        fetch("http://127.0.0.1:8000/tsp/instances")
          .then(response => response.json())
          .then(data => this.setState({ instances: data }));
    }

    render() {
        console.log(this.state.instances);
        let instances = this.state.instances.map(e => <Problem
            key={e.id}
            id={e.id}
            name={e.title}
            graph={e.graph}
            cityCount={e.cityCount}
            owner_id={e.owner_id}
        />);

        return (
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-8"}>
                <h2>Lista dodanych problemów:</h2>
              </div>
              <div className={"col-4 align-right"}>
                <Link to={"/new"}>
                  <button className={"btn btn-info"}>Dodaj nowy</button>
                </Link>
              </div>
            </div>
            <hr />
            <div className={"row"}>
              {instances}
            </div>
          </div>
        )
    }
}

export default ProblemsPage;
