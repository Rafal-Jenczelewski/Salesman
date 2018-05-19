import React, {Component} from 'react'
import {postTask} from '../requests/requests'
import SolutionHistory from './SolutionHistory'
import {Link} from 'react-router-dom'


const classPrefix = "problem-";

class Problem extends Component {
    state = {
        taskName: '',
        population: 100,
        generations: 10,
        expanded: false
    };

    constructor(props) {
        super(props);

        this.nameChange = this.nameChange.bind(this);
        this.generationsChange = this.generationsChange.bind(this);
        this.populationChange = this.populationChange.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    nameChange(e) {
        this.setState({
            taskName: e.target.value
        })
    }

    populationChange(e) {
        this.setState({
            population: e.target.value - 0
        })
    }

    generationsChange(e) {
        this.setState({
            generations: e.target.value - 0
        })
    }

    submitTask() {
        postTask({
            title: this.state.taskName,
            status: "0",
            owner_id: 1,
            instance_id: this.props.id,
            population: this.state.population,
            generations: this.state.generations
        })
    }

  /*  render() {
        return <div className={classPrefix + "main"}>
            <div className={classPrefix + "header"}>
                <span>{this.props.name}</span>
                <span>Count: {this.props.cityCount}</span>
            </div>
            <div className={classPrefix + "content"}>
                <textarea disabled={true}>{this.props.graph}</textarea>
                <div className={classPrefix + 'buttons'}>
                    <button onClick={() => this.setState({expanded: true})}>History</button>
                    <button onClick={this.submitTask}>Task</button>
                </div>
            </div>
            <div className={classPrefix + "task"}>
                <div className={classPrefix + "input"}><label>Name </label><input type={'text'}
                                                                                  value={this.state.taskName}
                                                                                  onChange={this.nameChange}/></div>
                <div className={classPrefix + "input"}><label>Generations </label><input type={'text'}
                                                                                         value={this.state.generations}
                                                                                         onChange={this.generationsChange}/>
                </div>
                <div className={classPrefix + "input"}><label>Population </label><input type={'text'}
                                                                                        value={this.state.population}
                                                                                        onChange={this.populationChange}/>
                </div>
            </div>
            {this.state.expanded ? <SolutionHistory/> : null}
        </div>
    }*/
    render() {
      return (

        <div className="col-12 margin20">
          <div className={"card"}>
            <div className={"card-header"}>{this.props.name}</div>
            <div className={"card-body"}>
              <h5 className={"card-title"}>Liczba miast: {this.props.cityCount}</h5>
              <pre>{this.props.graph}</pre>
              <Link to={"/new"} className={"btn btn-primary"}>Uruchom zadanie</Link> &nbsp;
              <Link to={"/new"} className={"btn btn-danger"}>Usuń problem</Link>
            </div>
          </div>
        </div>

      )
    }





}

export default Problem;
