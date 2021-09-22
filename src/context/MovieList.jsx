import React, { Component } from 'react'
import UserContext from './userContext'

export default class MovieList extends Component {
  componentDidMount() {
    console.log(this.context)
  }
  render() {
    return <UserContext.Consumer>{userContext => <div>Movie List {userContext.name}</div>}</UserContext.Consumer>
  }
}

MovieList.contextType = UserContext
