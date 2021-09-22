import React, { Component } from 'react'
import MovieRow from './MovieRow'
import UserContext from './userContext'

export default class MovieList extends Component {
  componentDidMount() {
    console.log(this.context)
  }
  render() {
    return <MovieRow />
  }
}

MovieList.contextType = UserContext
