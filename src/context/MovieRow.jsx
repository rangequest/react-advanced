import React, { useContext } from 'react'
import UserContext from './userContext'

function MovieRow(props) {
  const currentUser = useContext(UserContext)
  return <div>{currentUser.name}</div>
}

export default MovieRow
