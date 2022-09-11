import { useState } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

function App() {
  const [task, setTask] = useState('i am batman!')
  const [currentSymbol, setCurrentSymbol] = useState(0)
  const [currentCharCode, setCurrentCharCode] = useState(
    task.charCodeAt(currentSymbol)
  )

  const next = () => {
    setCurrentSymbol((prev) => {
      prev++
      if (prev === task.length) {
        alert('Finish')
        prev = 0
        setCurrentCharCode(task.charCodeAt(prev))
        return prev
      }
      setCurrentCharCode(task.charCodeAt(prev))
      return prev
    })

    // setCurrentCharCode(task.charCodeAt(currentSymbol))
  }

  console.log(currentCharCode)

  return (
    <div className='App'>
      <Task task={task} current={currentSymbol} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
    </div>
  )
}

export default App
