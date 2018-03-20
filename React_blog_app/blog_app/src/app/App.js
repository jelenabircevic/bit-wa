import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import users from '../services/Users';
import UsersList from './users/UsersList';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    users.getData()
    .then(res => {
      this.setState({
        classes: "container row",
        users: res
    })
  })
}

  render() {
    return (
      <div className="App">
        <Header title="React Users"/>
        <UsersList users = {this.state.users} classes={this.state.classes}/>
        <Footer copy="2018 Copyright BITstudent"/>
      </div>
    );
  }
}

export default App;
