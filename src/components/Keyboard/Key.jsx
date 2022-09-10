import s from './key.module.css'

function Key({ symbol }) {
  if (symbol.type === 'bigonetwo') {
    return <div className={`${s.key} ${s.bigonetwo}`}>{symbol.main}</div>
  }

  if (symbol.shift) {
    return (
      <div className={`${s.key}`}>
        <span>{symbol.shift}</span>
        <span>{symbol.main}</span>
      </div>
    )
  }
}

export default Key
