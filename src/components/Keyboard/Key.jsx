import s from './key.module.css'

function Key({ symbol }) {
  if (symbol.type === 'bigonetwo') {
    return (
      <div className={`${s.key} ${s.bigonetwo} ${s.special}`}>
        {symbol.main}
      </div>
    )
  }

  if (symbol.shift) {
    return (
      <div className={`${s.key}`}>
        <span>{symbol.shift}</span>
        <span>{symbol.main}</span>
      </div>
    )
  }

  if (symbol.lower) {
    return (
      <div
        className={`${s.key}`}
        style={{
          fontSize: '26px',
          justifyContent: 'center',
          lineHeight: '26px',
        }}
      >
        {symbol.lower}
        {/* <span>{symbol.shift}</span>
        <span>{symbol.main}</span> */}
      </div>
    )
  }
}

export default Key
