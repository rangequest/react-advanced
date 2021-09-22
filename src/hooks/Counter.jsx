import React, { useEffect, useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`
    return () => {
      console.log('Clean up')
    }
  })

  return (
    <React.Fragment>
      <input type="text" name="username" id="username" onChange={e => setName(e.target.value)} />
      <div>
        {name} clicked : {count} times.
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </React.Fragment>
  )
}

export default Counter
