import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import users from '../services/Users';
import UsersList from './users/UsersList';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false,
      viewButton: "view_module",
      users: []
    }
    this.changeView = this.changeView.bind(this)
    this.refreshUsers = this.refreshUsers.bind(this)
  }

  componentDidMount() {
    if (localStorage.data) {
      this.setState({data: JSON.parse(localStorage.data)})
    }
    this.refreshUsers()
  }

  changeView() {
    this.setState((prevState, props) => {
      return {
        grid: !prevState.grid,
        viewButton: (prevState.grid) ? "view_module" : "view_list"
      }
    })
  }

  refreshUsers() {
    users.getData()
      .then(res => {
        this.setState({
          users: res
        })
        localStorage.setItem('data', JSON.stringify(res))
      })
  }

  render() {
    return (
      <div className="App">
        <Header title="Bit Persons" refreshUsers={this.refreshUsers} changeView={this.changeView} viewButton={this.state.viewButton} />
        <UsersList grid={this.state.grid} users={this.state.users} />
        <Footer copy="2018 Copyright BITstudent" />
      </div>
    );
  }
}

export default App;
