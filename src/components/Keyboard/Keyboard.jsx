import s from './keyboard.module.css'

import Key from './Key'

function Keyboard({ symbols, currentCharCode }) {
  return (
    <div className={s.keyboard}>
      {symbols &&
        symbols.map((k) => {
          return <Key symbol={k} key={k.id} />
        })}
    </div>
  )
}

export default Keyboard
