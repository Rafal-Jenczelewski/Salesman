import React, {Component} from 'react';
import '../styles/newProblemPage.css';

class NewProblemPage extends Component {
    state = {
        matrixInput: '',
        citiesCount: '',
        type: 'file',
        file: undefined
    };

    constructor(props) {
        super(props);

        this.matrixChange = this.matrixChange.bind(this);
        this.countChange = this.countChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.fileChange = this.fileChange.bind(this);
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
            citiesCount: e.target.value
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

    render() {
        let content = null;
        if (this.state.type === 'manual')
            content = <div className={'matrix-inputs'}>
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
            content = <div className={'matrix-inputs'}>
                <label>Choose a file <input type={'file'} accept={".txt"} onChange={this.fileChange}/></label>
            </div>;

        let className = this.state.type === "file" ? " small" : "";

        return <div className={'content new-problem' + className}>
            <div className={'desc'}>
                <p>
                    Here, you can add new problem to your account. You can use .txt file with matrix of costs, or input
                    the
                    matrix yourself.
                </p>
                <div className={'radio'}>
                    <label>File <input type={'radio'} name={'upload-type'} value={'file'} onChange={this.typeChange}
                                  checked={this.state.type === 'file'}/></label>
                    <label>Manual <input type={'radio'} name={'upload-type'} value={'manual'} onChange={this.typeChange}
                                  checked={this.state.type === 'manual'}/></label>
                </div>
            </div>
            {content}
            <button className={'upload-button'}>Upload</button>
        </div>;
    }
}

export default NewProblemPage;
