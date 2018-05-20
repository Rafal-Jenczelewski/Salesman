import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Task from './Task'
import {fetchTasks} from '../requests/requests'

class TasksPage extends Component {

  state = {
      tasks: []
  };

  async componentDidMount() {
      let tasks = await fetchTasks();
      this.setState({
          tasks: tasks
      })
  }

  render() {
    console.log(this.state.tasks);
      let tasks = this.state.tasks.map(e => <Task
          key={e.id}
          id={e.id}
          title={e.title}
          status={e.status}
          instance_id={e.instance_id}
          owner_id={e.owner_id}
          population={e.population}
          generations={e.generations}
          proc={e.proc}
          wpz={e.wpz}
      />);

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
              <div className={"col-12"}>
                {tasks}
              </div>
            </div>
          </div>
        )
    }
}

export default TasksPage;
