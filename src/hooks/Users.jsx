import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      setUsers(result.data)
    }
    getUsers()
  }, [])

  return (
    <div>
      <ul>
        {users.map(u => (
          <li>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
