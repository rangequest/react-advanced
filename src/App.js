import React, { Component } from 'react'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'

export default class App extends Component {
  handleLoggedIn = username => {
    console.log('Getting the user: ' + username)
    const user = { name: 'RQ' }
    this.setState({ currentUser: user })
  }
  state = {
    currentUser: {
      name: 'Not Logged In',
    },
  }
  render() {
    return (
      <UserContext.Provider value={{ currentUser: this.state.currentUser, onLoggedIn: this.handleLoggedIn }}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    )
  }
}
