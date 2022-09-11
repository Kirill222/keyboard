import Symbol from './Symbol'

import s from './task.module.css'

function Task({ task, current }) {
  console.log(task, current)
  return (
    <div className={s.task}>
      {task &&
        task.split('').map((symbol, index) => {
          if (index === current) {
            return <Symbol symbol={symbol} key={Math.random()} current={true} />
          }
          return <Symbol symbol={symbol} key={Math.random()} />
        })}
    </div>
  )
}

export default Task
