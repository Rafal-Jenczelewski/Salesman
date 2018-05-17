import React, {Component} from 'react'
import Problem from './Problem'
import {getInstances} from '../requests/requests'

const classPrefix = "problems-"

class ProblemsPage extends Component {
    state = {
        instances: []
    };

    componentDidMount() {
        let instances = getInstances();
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

        return <div className={classPrefix + "instances content"}>
            {instances}
        </div>
    }
}

export default ProblemsPage;