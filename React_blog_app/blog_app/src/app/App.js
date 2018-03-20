import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import users from '../services/Users';
import UsersList from './users/UsersList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: users.getData()
    })
  }

  render() {
    return (
      <div className="App">
        <Header title="React Users"/>
        <UsersList users = {this.state.users}/>
        <Footer copy="&copy 2018 Copyright BITstudent"/>
      </div>
    );
  }
}

export default App;
