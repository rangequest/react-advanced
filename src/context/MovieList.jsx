import React, { Component, Fragment } from 'react'
import MovieRow from './MovieRow'
import UserContext from './userContext'

export default class MovieList extends Component {
  componentDidMount() {
    console.log(this.context)
  }
  render() {
    return (
      <Fragment>
        Movie List: {this.context.currentUser.name ? this.context.currentUser.name : 'None'}
        <MovieRow />
      </Fragment>
    )
  }
}

MovieList.contextType = UserContext
