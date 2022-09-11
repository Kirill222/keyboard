import s from './symbol.module.css'

function Symbol({ symbol, current }) {
  // console.log(className)

  if (current) {
    return <div className={`${s.symbol} ${s.current}`}>{symbol}</div>
  }

  return <div className={s.symbol}>{symbol}</div>
}

export default Symbol
