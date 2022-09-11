import { useState, useRef } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

function App() {
  const secretInputRef = useRef()

  const [task, setTask] = useState('I am batman!')
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
  secretInputRef.current.focus()

  const getFocusBackToInput = () => {
    secretInputRef.current.focus()
  }

  return (
    <div className='App' onClick={getFocusBackToInput}>
      <Task task={task} current={currentSymbol} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
      <input type='text' ref={secretInputRef}></input>
    </div>
  )
}

export default App
