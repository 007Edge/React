import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: 'shivam',
    id: 23
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
      <link href="/src/style.css" rel="stylesheet"></link>
      <h1 className="text-3xl font-bold text-white bg-red-900 m-1 p-2">    Hello world!  </h1>
      <Card userName='edge' age = '18'/>
      <Card userName='shivam' age = '20'/>

    </>
  )
}

// NOTE in return (<> <Card Obj1{myObj} Obj2={newArr} /> </>).   NOTE: we can pass multiple objects like this
export default App
