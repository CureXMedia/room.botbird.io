import { useState } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
  return (
    <>
    <h1>App</h1>
    </>
  )
}

export default App
