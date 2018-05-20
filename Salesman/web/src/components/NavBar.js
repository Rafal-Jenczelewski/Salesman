import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {
      return (

        <nav className={"navbar navbar-expand-lg navbar-light bg-light margin50"}>
          <Link className={"navbar-brand"} to={"/start"}>TSP Solver</Link>
          <div className={"collapse navbar-collapse"}>
            <ul className={"navbar-nav"}>
              <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/problems"}>Problemy</Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/tasks"}>Zadania</Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/history"}>Historia</Link>
              </li>
              <li className={"nav-item"}>
                <Link className={"nav-link"} to={"/server"}>Serwer</Link>
              </li>
            </ul>
          </div>
        </nav>

      )
    }
}

export default NavBar
