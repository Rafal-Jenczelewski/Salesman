import React, {Component} from 'react'
import ProblemEntry from './ProblemEntry'
import {Link} from 'react-router-dom'
import {fetchInstances} from '../requests/requests'

class ProblemsPage extends Component {
    state = {
        instances: []
    };

    async componentDidMount() {
        let instances = await fetchInstances();
        this.setState({
            instances: instances
        })
    }

    render() {
        console.log(this.state.instances);
        let instances = this.state.instances.map(e => <ProblemEntry
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
