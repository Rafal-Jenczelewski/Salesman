import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ServerPage extends Component {

    render() {


        return (
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <h2>Parametry klastra obliczeniowego:</h2>
                <hr />
              </div>
              <div className={"col-12"}>
                <ul>
                  <li>Ilość komputerów w sieci: </li>
                  <li>Inne dane: </li>
                  <li>Inne dane: </li>
                  <li>Inne dane: </li>
                  <li>Inne dane: </li>
                  <li>Inne dane: </li>
                </ul>
              </div>
            </div>
          </div>
        )


    }
}

export default ServerPage;
