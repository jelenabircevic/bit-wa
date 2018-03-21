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
      users: []
    }
    this.changeView = this.changeView.bind(this)
  }

  componentDidMount() {
    users.getData()
      .then(res => {
        this.setState({
          grid: false,
          viewButton: "view_module",
          classes: "container row",
          users: res
        })
      })
  }

  changeView() {
    this.setState((prevState, props)=>{
      return {
        grid: !prevState.grid,
        viewButton: (prevState.grid) ? "view_module" : "view_list"
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header title="Bit Persons" changeView={this.changeView} viewButton={this.state.viewButton} />
        <UsersList grid={this.state.grid} users={this.state.users} classes={this.state.classes} />
        <Footer copy="2018 Copyright BITstudent" />
      </div>
    );
  }
}

export default App;
