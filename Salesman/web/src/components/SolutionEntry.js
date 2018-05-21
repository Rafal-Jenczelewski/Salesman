import React, {Component} from 'react'


class SolutionEntry extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <tr>
                <th>{this.props.id}</th>
                <th>{this.props.title}</th>
                <th>{this.props.cityCount}</th>
                <th>{this.props.graph}</th>
                <th>{this.props.time}</th>
                <th>{this.props.population}</th>
                <th>{this.props.generations}</th>
                <th>{this.props.wpz}</th>
                <th>{this.props.proc}</th>
            </tr>

        )
    }
}

export default SolutionEntry;
