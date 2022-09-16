import s from './accuracy.module.css'

function Accuracy({ accuracy }) {
  return <div>{accuracy && `${Math.round(accuracy)} %`}</div>
}

export default Accuracy
