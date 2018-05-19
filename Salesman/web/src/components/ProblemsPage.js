import React, {Component} from 'react'
import Problem from './Problem'
import {getInstances} from '../requests/requests'
import {Link} from 'react-router-dom'

const classPrefix = "problems-"

class ProblemsPage extends Component {
    state = {
        instances: []
    };

    async componentDidMount() {
        let instances = await getInstances();
        console.log("insta:");
        console.log(instances);
        this.setState({
            instances: instances
        });
    }

    render() {
        let instances = this.state.instances.map(e => <Problem
            key={e.id}
            id={e.id}
            name={e.name}
            graph={e.graph}
            cityCount={e.cityCount}
            owner_id={e.owner_id}
        />);

        /*return <div className={classPrefix + "instances content"}>
            {instances}
        </div>*/

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
