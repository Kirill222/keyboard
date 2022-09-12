import Symbol from './Symbol'

import s from './task.module.css'

function Task({ task }) {
  return (
    <div className={s.task}>
      {task &&
        task.map((symbol) => {
          return <Symbol symbol={symbol} key={Math.random()} />
        })}
    </div>
  )
}

export default Task
