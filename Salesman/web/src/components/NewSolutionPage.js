import React, {Component} from 'react';
import {postInstance} from '../requests/requests'


const classPrefix = "new-problem-";

class NewSolutionPage extends Component {

    render() {
      return (

        <div className={"container"}>
          <h2>Panel dodawania zadania</h2>
          <p>Podaj manualnie parametry wykonywania zadania lub skorzystaj z zaproponowanych przez nas wartości.</p>
          <hr />
          <div className={"row"}>
            <div className={"col-5 margin20"}>
              <div className={"form-group"}>
                <label>ID problemu</label>
                <input type={"text"} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Wielosć populacji</label>
                <input type={"text"} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Ilość generacji</label>
                <input type={"text"} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Wielośc pojedynczego zadania</label>
                <input type={"text"} className={"form-control"} />
              </div>
              <div className={"form-group"}>
                <label>Ilość procesów</label>
                <input type={"text"} className={"form-control"} />
              </div>
              <button className={"btn btn-info"}>Dodaj</button>
            </div>
          </div>
        </div>

      )
    }
}

export default NewSolutionPage;
