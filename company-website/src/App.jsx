import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './components/Routing/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routing/>
    </>
  )
}

export default App
