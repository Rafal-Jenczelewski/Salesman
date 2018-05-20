import React, {Component} from 'react';
import {postTask} from '../requests/requests'

class NewSolutionPage extends Component {
    state = {
        population: 100,
        generations: 50,
        singleTaskSize: 2,
        processCount: 1
    };

    constructor(props) {
        super(props);

        this.nameChange = this.nameChange.bind(this);
        this.populationHandler = this.populationHandler.bind(this);
        this.generationsHandler = this.generationsHandler.bind(this);
        this.singleTaskSizeHandler = this.singleTaskSizeHandler.bind(this);
        this.processCountHandler = this.processCountHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    populationHandler(e) {
        if (!Number.isInteger(e.target.value - 0))
            return;

        this.setState({
            population: e.target.value - 0
        })
    }

    generationsHandler(e) {
        if (!Number.isInteger(e.target.value - 0))
            return;

        this.setState({
            generations: e.target.value - 0
        })
    }

    singleTaskSizeHandler(e) {
        if (!Number.isInteger(e.target.value - 0))
            return;

        this.setState({
            singleTaskSize: e.target.value - 0
        })
    }

    processCountHandler(e) {
        if (!Number.isInteger(e.target.value - 0))
            return;

        this.setState({
            processCount: e.target.value - 0
        })
    }

    submit() {
        console.log(this.props.location.state);
        postTask({
            title: this.state.name,
            instance_id: this.props.location.state,
            status: "0",
            population: this.state.population,
            generations: this.state.generations,
            owner_id: 1
        })
    }

    render() {
      return (
        <div className={"container"}>
          <h2>Panel dodawania zadania</h2>
          <p>Podaj manualnie parametry wykonywania zadania lub skorzystaj z zaproponowanych przez nas wartości.</p>
          <hr />
          <div className={"row"}>
            <div className={"col-5 margin20"}>
              <div className={"form-group"}>
                <label>Nazwa zadania</label>
                <input type={"text"} className={"form-control"} value={this.state.name} onChange={this.nameChange}/>
              </div>
              <div className={"form-group"}>
                <label>Wielosć populacji</label>
                <input type={"text"} value={this.state.population} onChange={this.populationHandler} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Ilość generacji</label>
                <input type={"text"} value={this.state.generations} onChange={this.generationsHandler} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Wielkość pojedynczego zadania</label>
                <input type={"text"} value={this.state.singleTaskSize} onChange={this.singleTaskSizeHandler} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Ilość procesów</label>
                <input type={"text"} value={this.state.processCount} onChange={this.processCountHandler} className={"form-control"} />
              </div>
              <button className={"btn btn-info"} onClick={this.submit}>Dodaj</button>
            </div>
          </div>
        </div>
      )
    }
}

export default NewSolutionPage;
