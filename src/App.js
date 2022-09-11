import { useState, useEffect, useRef } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

function App() {
  const secretInputRef = useRef()

  const [task, setTask] = useState('i am batman!')
  const [currentSymbol, setCurrentSymbol] = useState(0)
  const [currentCharCode, setCurrentCharCode] = useState(
    task.charCodeAt(currentSymbol)
  )

  useEffect(() => {
    secretInputRef.current.focus()
  }, [])

  const next = () => {
    setCurrentSymbol((prev) => {
      prev++
      if (prev === task.length) {
        prev = 0
        setCurrentCharCode(task.charCodeAt(prev))
        return prev
      }
      setCurrentCharCode(task.charCodeAt(prev))
      return prev
    })
  }

  const getFocusBackToInput = () => {
    secretInputRef.current.focus()
  }

  const onChangeHandler = (e) => {
    let code = e.target.value.charCodeAt(0)

    if (code === currentCharCode) {
      next()
    }

    e.target.value = null
  }

  return (
    <div className='App' onClick={getFocusBackToInput}>
      <Task task={task} current={currentSymbol} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
      <input
        type='text'
        ref={secretInputRef}
        onChange={onChangeHandler}
        // value={inputValue}
      ></input>
    </div>
  )
}

export default App
