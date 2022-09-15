import s from './header.module.css'

import Menu from './Menu'

function Header({ isMuted, mute }) {
  return (
    <div className={s.header}>
      <Menu isMuted={isMuted} mute={mute} />
    </div>
  )
}

export default Header
