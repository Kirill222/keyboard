import { useState, useEffect, useRef } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

let task = 'I am Batman!'

let mapTask = task.split('').map((l) => {
  return { status: '', symbol: l }
})

mapTask[0].status = 'current'

console.log(mapTask)

function App() {
  const secretInputRef = useRef()

  const [task, setTask] = useState(mapTask)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharCode, setCurrentCharCode] = useState(
    mapTask[currentIndex].symbol.charCodeAt(currentIndex)
  )

  useEffect(() => {
    secretInputRef.current.focus()
  }, [])

  const getFocusBackToInput = () => {
    secretInputRef.current.focus()
  }

  const next = () => {
    setCurrentIndex((prev) => {
      prev++
      if (prev === mapTask.length) {
        prev = 0
        setCurrentCharCode(mapTask[prev].symbol.charCodeAt(0))
        task[prev].status = 'current'
        task[task.length - 1].status = 'hit'
        // setTask([...task])
        return prev
      }
      setCurrentCharCode(task[prev].symbol.charCodeAt(0))

      task[prev].status = 'current'
      task[prev - 1].status = 'hit'
      // setTask([...task])
      return prev
    })
  }

  const onChangeHandler = (e) => {
    let code = e.target.value.charCodeAt(0)
    if (code === currentCharCode) {
      task[currentIndex].status = 'hit'
      setTask([...task])
      next()
    }
    e.target.value = null
  }

  return (
    <div className='App' onClick={getFocusBackToInput}>
      <Task task={task} current={currentIndex} />
      <Keyboard symbols={symbols} currentCharCode={currentCharCode} />

      <button onClick={next}>Test button</button>
      <input
        className='secretinput'
        type='text'
        ref={secretInputRef}
        onChange={onChangeHandler}
        // value={inputValue}
      ></input>
    </div>
  )
}

export default App
