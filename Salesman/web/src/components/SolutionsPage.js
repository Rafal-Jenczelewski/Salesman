import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SolutionsPage extends Component {

    render() {


        return (
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-8"}>
                <h2>Lista dodanych zadań:</h2>
              </div>
              <div className={"col-4 align-right"}>
                <Link to={"/new_problem"}>
                  <button className={"btn btn-info"}>Dodaj nowe</button>
                </Link>
              </div>
            </div>
            <hr />
            <div className={"row"}>
            </div>
          </div>
        )


    }
}

export default SolutionsPage;
