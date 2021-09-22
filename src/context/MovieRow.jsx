import React, { useContext } from 'react'
import Login from './Login'
import UserContext from './userContext'

function MovieRow(props) {
  const userContext = useContext(UserContext)
  return (
    <div>
      Movie Row: {userContext.currentUser.name ? userContext.currentUser.name : 'None'}
      <Login />
    </div>
  )
}

export default MovieRow
