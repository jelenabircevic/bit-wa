import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import users from '../services/Users';
import Home from './users/Home';
import Loading from './partials/Loading';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false,
      viewButton: "view_module",
      users: [],
      loading: false
    }
    this.changeView = this.changeView.bind(this)
    this.refreshUsers = this.refreshUsers.bind(this)
    this.filterUsers = this.filterUsers.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.setState({
        users: JSON.parse(localStorage.getItem('data')),
        grid: (localStorage.getItem('grid') === "true"),
        viewButton: (localStorage.getItem('grid')) ? "view_list" : "view_module",
      })
    } else {
      this.refreshUsers()
    }
  }

  changeView() {
    this.setState((prevState, props) => {
      localStorage.setItem('grid', !prevState.grid)
      return {
        grid: !prevState.grid,
        viewButton: (prevState.grid) ? "view_module" : "view_list"
      }
    })
  }

  refreshUsers() {
    this.setState({ loading: true });
    users.getData()
      .then(res => {
        this.setState({
          users: res,
        })
        this.setState({ loading: false });
        localStorage.setItem('data', JSON.stringify(res))
      })
  }

  filterUsers(event) {
    const query = event.target.value;
    this.setState((prevState, props) => {
      return {
        users: JSON.parse(localStorage.getItem('data')).filter((user) => user.fullName.includes(query))
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header title="Bit Persons" refreshUsers={this.refreshUsers} changeView={this.changeView} viewButton={this.state.viewButton} />
        {(this.state.loading) ? <Loading /> : <Home filterUsers={this.filterUsers} grid={this.state.grid} users={this.state.users} />}
        <Footer copy="2018 Copyright BITstudent" />
      </div>
    );
  }
}

export default App;
