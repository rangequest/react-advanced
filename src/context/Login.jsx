import React, { useContext } from 'react'
import UserContext from './userContext'

function Login(props) {
  const context = useContext(UserContext)
  return (
    <div>
      <button onClick={() => context.onLoggedIn(context.currentUser.name)}>Login</button>
    </div>
  )
}

export default Login
