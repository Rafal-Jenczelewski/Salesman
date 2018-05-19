import React, {Component} from 'react'


const classPrefix = 'solution-';

class Solution extends Component {
    render(){
        return <div className={classPrefix + 'main'}>
            <div className={classPrefix + 'header'}>
                <span>Time: {this.props.time}</span>
                <span>Cost: {this.props.cost}</span>
            </div>
            <div className={classPrefix + 'content'}>
                <span>Result: {this.props.result}</span>
                <div className={classPrefix + 'params'}>
                    <span>Generations: {this.props.generations}</span>
                    <span>Population: {this.props.population}</span>
                </div>
            </div>
        </div>
    }
}

export default Solution;
