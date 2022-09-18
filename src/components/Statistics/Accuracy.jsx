import s from './accuracy.module.css'

function Accuracy({ accuracy }) {
  return <div>{accuracy >= 0 && `${Math.round(accuracy)} %`}</div>
}

export default Accuracy
