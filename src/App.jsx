import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [actualIndex, setactualIndex] = useState(0)

  return (
    <>
      <header>
        <img src={reactLogo} alt="React Logo" id="react-logo" />
        <h1>Propriedades Iniciais do React</h1>
      </header>
    </>
  )
}

export default App
