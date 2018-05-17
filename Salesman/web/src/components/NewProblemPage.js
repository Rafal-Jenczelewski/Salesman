import React, {Component} from 'react';
import '../styles/newProblemPage.css';
import {postInstance} from '../requests/requests'

const classPrefix = "new-problem-";

class NewProblemPage extends Component {
    state = {
        name: '',
        matrixInput: '',
        citiesCount: '',
        type: 'file',
        file: undefined
    };

    constructor(props) {
        super(props);

        this.nameChange = this.nameChange.bind(this);
        this.matrixChange = this.matrixChange.bind(this);
        this.countChange = this.countChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
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

    typeChange(e) {
        this.setState({
            type: e.target.value,
            file: undefined
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
        let content = null;
        if (this.state.type === 'manual')
            content = <div className={classPrefix + 'matrix-inputs'}>
                <div>
                    <label htmlFor={'matrix-input'}>Matrix: </label>
                    <textarea id={'matrix-input'} value={this.state.matrixInput}
                              onChange={this.matrixChange}/>
                </div>
                <div>
                    <label htmlFor={'count-input'}>Count: </label>
                    <input id={'count-input'} type={'text'} value={this.state.citiesCount}
                           onChange={this.countChange}/>
                </div>
            </div>;
        else if (this.state.type === 'file')
            content = <div className={classPrefix + 'matrix-inputs'}>
                <label>Choose a file <input type={'file'} accept={".txt"} onChange={this.fileChange}/></label>
            </div>;

        let className = this.state.type === "file" ? " small" : "";

        return <div className={"content " + classPrefix + 'inputs' + className}>
            <div className={classPrefix + 'desc'}>
                <p>
                    Here, you can add new problem to your account. You can use .txt file with matrix of costs, or input
                    the
                    matrix yourself.
                </p>
                <div className={classPrefix + 'radio'}>
                    <label>File <input type={'radio'} name={'upload-type'} value={'file'} onChange={this.typeChange}
                                  checked={this.state.type === 'file'}/></label>
                    <label>Manual <input type={'radio'} name={'upload-type'} value={'manual'} onChange={this.typeChange}
                                  checked={this.state.type === 'manual'}/></label>
                </div>
            </div>
            <div className={classPrefix + 'name'}>
                <label>Name <input type={"text"} onChange={this.nameChange} value={this.state.name}/></label>
            </div>
            {content}
            <button className={classPrefix + 'upload-button'} onClick={this.submit}>Upload</button>
        </div>;
    }
}

export default NewProblemPage;
