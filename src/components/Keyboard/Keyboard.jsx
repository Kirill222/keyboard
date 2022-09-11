import s from './keyboard.module.css'

import Key from './Key'

function Keyboard({ symbols, currentCharCode }) {
  return (
    <div className={s.keyboard}>
      {symbols &&
        symbols.map((k, index) => {
          let codeLower
          if (k.lower) {
            codeLower = k.lower.charCodeAt(0)
          }
          let codeUpper
          if (k.upper) {
            codeUpper = k.upper.charCodeAt(0)
          }

          if (
            (k.lower && codeLower === currentCharCode) ||
            (k.upper && codeUpper === currentCharCode) ||
            (k.code && k.code === currentCharCode)
          ) {
            return <Key symbol={k} key={k.id} currentKey={true} />
          } else {
            return <Key symbol={k} key={k.id} currentKey={false} />
          }
        })}
    </div>
  )
}

export default Keyboard
