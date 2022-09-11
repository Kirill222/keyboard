import s from './key.module.css'

function Key({ symbol }) {
  if (symbol.type === 'bigonetwo') {
    return (
      <div className={`${s.key} ${s.bigonetwo} ${s.special}`}>
        {symbol.main}
      </div>
    )
  }

  if (symbol.type === 'bigthree') {
    return (
      <div className={`${s.key} ${s.bigthree} ${s.special}`}>{symbol.main}</div>
    )
  }

  if (symbol.type === 'bigfour') {
    return (
      <div className={`${s.key} ${s.bigfour} ${s.special}`}>{symbol.main}</div>
    )
  }

  if (symbol.type === 'ctrl') {
    return (
      <div className={`${s.key} ${s.ctrl} ${s.special}`}>{symbol.main}</div>
    )
  }

  if (symbol.type === 'option') {
    return (
      <div className={`${s.key} ${s.option} ${s.special}`}>{symbol.main}</div>
    )
  }

  if (symbol.type === 'space') {
    return (
      <div className={`${s.key} ${s.space} ${s.special}`}>{symbol.main}</div>
    )
  }

  if (symbol.type === 'empty') {
    return (
      <div className={`${s.key} ${s.empty} ${s.special}`}>{symbol.main}</div>
    )
  }

  // switch (symbol.type) {
  //   case 'bigonetwo':

  // }

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
