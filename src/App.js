import { useState, useEffect, useRef } from 'react'

import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'
import Header from './components/Header/Header'

import { symbols } from './data/symbols'

let task = 'I am Batman!'

let mapTask = task.split('').map((l) => {
  return { status: '', symbol: l }
})

mapTask[0].status = 'current'

console.log(mapTask)

function App() {
  const secretInputRef = useRef()
  const audioRef = useRef()

  const [task, setTask] = useState(mapTask)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharCode, setCurrentCharCode] = useState(
    mapTask[currentIndex].symbol.charCodeAt(currentIndex)
  )

  const [isCapital, setIsCapital] = useState()
  const [isMuted, setIsMuted] = useState(false)
  const muteHandler = () => setIsMuted(!isMuted)

  useEffect(() => {
    secretInputRef.current.focus()

    if (currentCharCode >= 65 && currentCharCode <= 90) {
      setIsCapital(true)
    } else {
      setIsCapital(false)
    }
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
        setTask([...task])

        if (
          mapTask[prev].symbol.charCodeAt(0) >= 65 &&
          mapTask[prev].symbol.charCodeAt(0) <= 90
        ) {
          setIsCapital(true)
        } else {
          setIsCapital(false)
        }

        return prev
      }
      setCurrentCharCode(task[prev].symbol.charCodeAt(0))

      task[prev].status = 'current'
      setTask([...task])

      if (
        mapTask[prev].symbol.charCodeAt(0) >= 65 &&
        mapTask[prev].symbol.charCodeAt(0) <= 90
      ) {
        setIsCapital(true)
      } else {
        setIsCapital(false)
      }

      return prev
    })
  }

  const onChangeHandler = (e) => {
    let code = e.target.value.charCodeAt(0)

    if (currentCharCode === code) {
      task[currentIndex].status = 'hit'
    } else {
      task[currentIndex].status = 'miss'
    }

    next()
    e.target.value = null
  }

  const onKeyDownHandler = () => {
    if (!isMuted) audioRef.current.play()
  }

  return (
    <div className='App' onClick={getFocusBackToInput}>
      <Header isMuted={isMuted} mute={muteHandler} />
      <Task task={task} current={currentIndex} />
      <Keyboard
        symbols={symbols}
        currentCharCode={currentCharCode}
        isCapital={isCapital}
      />
      {/* <button onClick={next}>Test button</button> */}
      <input
        className='secretinput'
        type='text'
        ref={secretInputRef}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      ></input>

      <audio
        ref={audioRef}
        controls
        src='/audio/key1.wav'
        className='audio'
      ></audio>
    </div>
  )
}

export default App
