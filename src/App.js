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

  const [inputCode, setInputCode] = useState(currentCharCode)

  useEffect(() => {
    secretInputRef.current.focus()
  }, [])

  // useEffect(() => {
  //   // console.log(inputCode)

  //   if (inputCode === currentCharCode) {
  //     console.log('hi', inputCode)
  //   }
  // }, [inputCode])

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

  const onKeyDownHandler = (e) => {
    let code = secretInputRef.current.value.charCodeAt(0)

    // if ((code >= 97 && code <= 122) || (code >= 65 && code >= 90)) {}
    setInputCode(code)

    if (code === currentCharCode) {
      next()
    }

    secretInputRef.current.value = ''
  }

  console.log('rerender')

  return (
    <div className='App' onClick={getFocusBackToInput}>
      <Task task={task} current={currentSymbol} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
      <input
        type='text'
        ref={secretInputRef}
        onKeyDown={onKeyDownHandler}
      ></input>
    </div>
  )
}

export default App
