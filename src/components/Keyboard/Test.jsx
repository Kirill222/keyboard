import s from './keyboard.module.css'

import Key from './Key'

function Test({ symbols }) {
  return (
    <div className={s.keyboard}>
      {symbols &&
        symbols.map((k) => {
          return <Key symbol={k} />
        })}
    </div>
  )
}

export default Test
