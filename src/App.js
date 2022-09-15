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
  const [isFinished, setIsFinished] = useState(false)

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

  const checkIfCapital = (index) => {
    if (
      mapTask[index].symbol.charCodeAt(0) >= 65 &&
      mapTask[index].symbol.charCodeAt(0) <= 90
    ) {
      setIsCapital(true)
    } else {
      setIsCapital(false)
    }
  }

  const next = () => {
    setCurrentIndex((prev) => {
      prev++
      if (prev === mapTask.length) {
        //prev = 0
        //setCurrentCharCode(mapTask[prev].symbol.charCodeAt(0))
        //task[prev].status = 'current'

        task[task.length - 1].status = 'hit'
        setTask([...task])

        checkIfCapital(prev)

        return prev
      }
      setCurrentCharCode(task[prev].symbol.charCodeAt(0))

      task[prev].status = 'current'
      setTask([...task])

      checkIfCapital(prev)

      return prev
    })
  }

  const onKeyDownHandler = (e) => {
    if (isFinished) return

    if (!e.repeat) {
      !isMuted && audioRef.current.play()

      if (e.key === task[currentIndex].symbol) {
        task[currentIndex].status = 'hit'
      } else {
        task[currentIndex].status = 'miss'
      }

      if (currentIndex !== task.length - 1 && e.key !== 'Shift') {
        next()
      }

      if (currentIndex === task.length - 1) {
        if (e.key !== 'Shift' && e.key === task[currentIndex].symbol) {
          task[task.length - 1].status = 'hit'
          setTask([...task])
          setIsFinished(true)
        } else if (e.key !== 'Shift' && e.key !== task[currentIndex].symbol) {
          task[task.length - 1].status = 'miss'
          setTask([...task])
          setIsFinished(true)
        }
      }

      e.target.value = null
    }
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
      <input
        className='secretinput'
        type='text'
        ref={secretInputRef}
        onKeyDown={onKeyDownHandler}
      ></input>

      <audio
        ref={audioRef}
        // controls
        src='/audio/33.mp3'
        className='audio'
      ></audio>
    </div>
  )
}

export default App
