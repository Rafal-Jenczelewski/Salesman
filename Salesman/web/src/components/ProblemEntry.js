import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProblemEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="col-12 margin20">
                <div className={"card"}>
                    <div className={"card-header"}>{this.props.name}</div>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>Liczba miast: {this.props.cityCount}</h5>
                        <pre>{this.props.graph}</pre>
                        <Link to={{pathname: "/new", state: {instance_id: this.props.id}}}
                              className={"btn btn-primary"}>Uruchom
                            zadanie</Link> &nbsp;
                        //TODO: link?
                        <Link to={"/new"} className={"btn btn-danger"}>Usuń problem</Link>
                    </div>
                </div>
            </div>

        )
    }

}

export default ProblemEntry;
