import s from './progressbar.module.css'

function Progressbar({ progress }) {
  return (
    <div className={s.progressbar}>
      <div className={s.progress} style={{ width: progress + '%' }}></div>
    </div>
  )
}

export default Progressbar
