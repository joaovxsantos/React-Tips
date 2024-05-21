import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DATA_TEXT } from './data'
import Button from './Components/Button/Button'
import Content from './Components/Content/Content'

function App() {
  const [actualIndex, setactualIndex] = useState(0)

  return (
    <>
      <header>
        <img src={reactLogo} alt="React Logo" id="react-logo" />
        <h1>Propriedades Iniciais do React</h1>
      </header>
      <section className="sec-infos">
        {DATA_TEXT.map((data, index) => <Button className={actualIndex === index ? 'active' : undefined} key={index} onClick={() => setactualIndex(index)}>{data.title}</Button>)}
        <Content {...DATA_TEXT[actualIndex]} />
      </section>
    </>
  )
}

export default App
