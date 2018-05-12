import React, {Component} from 'react'
import {Sticky, StickyContainer} from 'react-sticky'
import {} from 'react-sticky'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (<StickyContainer>
            <Sticky relative={false} topOffset={0}>{({style}) => (<header style={style} className={"nav-bar"}>
                <Link className={"link"} to={"/"}>Home</Link>
                <Link className={"link"} to={"/new"}>New request</Link>
                <Link className={"link"} to={"test"}>Test</Link>
                <Link className={"link"} to={"/requests"}>Requests</Link>
            </header>)}</Sticky>
        </StickyContainer>)
    }
}

export default NavBar