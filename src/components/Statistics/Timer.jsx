import s from './timer.module.css'

import { useState, useEffect } from 'react'

function Timer({ isTimerStarted }) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let timer
    if (isTimerStarted === 'reset') {
      setTime(0)
      return () => clearInterval(timer)
    } else if (isTimerStarted) {
      timer = setInterval(() => {
        setTime((prev) => {
          prev = prev + 0.1
          console.log(prev)
          return prev
        })
      }, 100)
    } else if (!isTimerStarted) {
      console.log(isTimerStarted)
      //clearInterval(timer)
      return () => clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [isTimerStarted])

  return <div>{`${Math.round(time * 100) / 100} s.`}</div>
}

export default Timer
