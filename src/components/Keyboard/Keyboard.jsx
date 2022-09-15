import s from './keyboard.module.css'

import Key from './Key'

function Keyboard({ symbols, currentCharCode, isCapital }) {
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

          let codeShift
          if (k.shift) {
            codeShift = k.shift.charCodeAt(0)
          }

          if (
            (k.lower && codeLower === currentCharCode) ||
            (k.upper && codeUpper === currentCharCode) ||
            (k.shift && codeShift === currentCharCode) ||
            (k.code && k.code === currentCharCode)
          ) {
            return (
              <Key
                symbol={k}
                key={k.id}
                currentKey={true}
                isCapital={isCapital}
              />
            )
          } else {
            return (
              <Key
                symbol={k}
                key={k.id}
                currentKey={false}
                isCapital={isCapital}
              />
            )
          }
        })}
    </div>
  )
}

export default Keyboard
