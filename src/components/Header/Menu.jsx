import s from './menu.module.css'
import { FaCog } from 'react-icons/fa'
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi'
import { useState } from 'react'

function Menu({ isMuted, mute }) {
  //const muteHandler = () => setIsMuted(!isMuted)

  return (
    <div className={s.menu}>
      <div className={s.cogwrapper}>
        <FaCog className={s.cog} />
      </div>
      <div className={s.items}>
        <div className={s.item} onClick={mute}>
          {isMuted ? <GiSpeakerOff /> : <GiSpeaker />}
        </div>
      </div>
    </div>
  )
}

export default Menu
