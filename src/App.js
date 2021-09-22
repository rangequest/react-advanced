import React, { Component } from 'react'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'

export default class App extends Component {
  state = {
    currentUser: {
      name: 'Range Quest',
    },
  }
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    )
  }
}
