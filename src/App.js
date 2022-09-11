import { useState } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

function App() {
  const [task, setTask] = useState('I am Batman!')
  const [currentSymbol, setCurrentSymbol] = useState(0)
  const [currentCharCode, setCurrentCharCode] = useState(
    task.charCodeAt(currentSymbol)
  )

  console.log(currentCharCode)

  const next = () => {
    setCurrentSymbol((prev) => {
      console.log(prev++)
      if (prev === task.length) {
        alert('Finish')
        prev = 0
        return prev
      }
      return prev++
    })
  }

  return (
    <div className='App'>
      <Task task={task} current={currentSymbol} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
    </div>
  )
}

export default App
