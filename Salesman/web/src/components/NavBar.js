import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (<header className={"nav-bar"}>
                <Link className={"link"} to={"/new"}>New problem</Link>
                <Link className={"link"} to={"/problems"}>Problems</Link>
            </header>)
    }
}

export default NavBar
