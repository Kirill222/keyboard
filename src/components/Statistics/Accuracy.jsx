import s from './accuracy.module.css'

function Accuracy({ accuracy }) {
  return <div>{accuracy >= 0 && `${accuracy.toFixed(2)} %`}</div>
}

export default Accuracy
