import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import Body from './Body/Body'
import Foot from './footer/foot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Body></Body>
    <Foot></Foot>
    </>
  )
}

export default App
