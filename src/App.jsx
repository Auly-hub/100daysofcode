import { useState } from 'react'
import UserClass from './UserClass'
import UsersFunction from './UsersFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserClass/>
     <UsersFunction/>
    </>
  )
}

export default App
