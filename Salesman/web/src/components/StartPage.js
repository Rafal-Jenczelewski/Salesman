import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class StartPage extends Component {

    render() {
        return (
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <h2>Witaj, (user)!</h2>
                <hr />
              </div>
              <div className={"col-4"}>
                <div className={"card"}>
                  <div className={"card-body"}>
                    <center>
                      <i className={"fas fa-forward"}/><br />
                      Ilość twoich problemów: <b>4</b>
                    </center>
                  </div>
                </div>
              </div>
              <div className={"col-4"}>
                <div className={"card"}>
                  <div className={"card-body"}>
                  <center>
                    <i className={"fas fa-cogs"}/><br />
                    Ilość twoich problemów: <b>4</b>
                  </center>
                  </div>
                </div>
              </div>
              <div className={"col-4"}>
                <div className={"card"}>
                  <div className={"card-body"}>
                  <center>
                    <i className={"fas fa-code"}/><br />
                    Ilość twoich problemów: <b>4</b>
                  </center>
                  </div>
                </div>
              </div>
              <div className={"col-4"}>
                <div className={"card"}>
                  <div className={"card-body"}>
                  <center>
                    <i className={"fas fa-coins"}/><br />
                    Ilość twoich problemów: <b>4</b>
                  </center>
                  </div>
                </div>
              </div>
              <div className={"col-4"}>
                <div className={"card"}>
                  <div className={"card-body"}>
                  <center>
                    <i className={"fas fa-cubes"}/><br />
                    Ilość twoich problemów: <b>4</b>
                  </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )


    }
}

export default StartPage;
