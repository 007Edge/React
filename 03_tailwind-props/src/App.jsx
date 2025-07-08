import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link href="/src/style.css" rel="stylesheet"></link>
      <h1 className="text-3xl font-bold underline bg-red-900">    Hello world!  </h1>
    </>
  )
}

export default App
