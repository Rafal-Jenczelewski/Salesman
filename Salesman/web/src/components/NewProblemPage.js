import React, {Component} from 'react';
import {postInstance} from '../requests/requests'

class NewProblemPage extends Component {
    state = {
        name: '',
        matrixInput: '',
        citiesCount: '',
        file: undefined
    };

    constructor(props) {
        super(props);

        this.nameChange = this.nameChange.bind(this);
        this.matrixChange = this.matrixChange.bind(this);
        this.countChange = this.countChange.bind(this);
        this.fileChange = this.fileChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    matrixChange(e) {
        this.setState({
            matrixInput: e.target.value
        });
    }

    countChange(e) {
        if (!Number.isInteger(e.target.value - 0)) {
            return;
        }

        this.setState({
            citiesCount: e.target.value - 0
        });
    }

    fileChange(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

    submit() {
        postInstance({
            title: this.state.name,
            graph: this.state.matrixInput,
            cityCount: this.state.citiesCount,
            owner_id: 1
        })
    }

    render() {
        return (

            <div className={"container"}>
                <h2>Panel dodawania problemu</h2>
                <p>Możesz dodać swój problem manualnie lub skorzystać z bloku uploadu plików.</p>
                <hr/>
                <div className={"row"}>
                    <div className={"col-12 margin20"}>
                        <div className={"form-group"}>
                            <label>Nazwa problemu</label>
                            <input type={"text"} onChange={this.nameChange} value={this.state.name}
                                   className={"form-control"}/>
                        </div>
                        <div className={"form-group"}>
                            <label>Ilość miast</label>
                            <input type={"text"} className={"form-control"}/>
                        </div>
                    </div>
                    <div className={"col-6 margin20"}>
                        <h5>Wpisz macierz miast swojego problemu</h5>
                        <textarea className={"form-control"} rows={"10"}/>
                    </div>
                    <div className={"col-6 margin20"}>
                        <h5>Dodaj plik z macierzą miast problemu</h5>
                        <input type={'file'} onChange={this.fileChange} value={this.state.file} accept={".txt"}/>
                    </div>
                    <div className={"col-12 margin20"}>
                        <button className={"btn btn-info"} onClick={this.submit}>Dodaj</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewProblemPage;
