import React, {Component} from 'react'
import {testRequest} from '../requests/requests'

class TestPage extends Component {
    render() {
        return <div class="content">
            <button onClick={testRequest}>Click to test</button>
        </div>
    }
}

export default TestPage