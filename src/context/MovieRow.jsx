import React, { useContext } from 'react'
import CartContext from './cartContext'
import Login from './Login'
import UserContext from './userContext'

function MovieRow(props) {
  const userContext = useContext(UserContext)
  const cartContext = useContext(CartContext)
  console.log(cartContext)
  return (
    <div>
      Movie Row: {userContext.currentUser.name ? userContext.currentUser.name : 'None'}
      <Login />
    </div>
  )
}

export default MovieRow
