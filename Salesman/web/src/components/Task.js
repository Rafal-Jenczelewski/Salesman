import React, {Component} from 'react'
import {postTask} from '../requests/requests'
import {Link} from 'react-router-dom'


class Task extends Component {
    state = {
    };

    constructor(props) {
        super(props);
    }

    render() {
      return (

        <div className="col-12 margin20">
          <div className={"card"}>
            <div className={"card-header"}>{this.props.title}</div>
            <div className={"card-body"}>
                <table className={"table"}>
                <thead>
                  <tr>
                    <th scope={"col"}>ID Instancji</th>
                    <th scope={"col"}>Wielosć populacji</th>
                    <th scope={"col"}>Ilość generacji</th>
                    <th scope={"col"}>Wielośc pojedynczego zadania</th>
                    <th scope={"col"}>Ilość procesów</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{this.props.instance_id}</th>
                    <th>{this.props.population}</th>
                    <th>{this.props.generations}</th>
                    <th>{this.props.wpz}</th>
                    <th>{this.props.proc}</th>
                  </tr>
                </tbody>
                </table>
                <hr />
                <br />
                <h5 className={"card-title"}>Status: {this.props.status}</h5>
            </div>
          </div>
        </div>

      )
    }
}

export default Task;
