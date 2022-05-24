import React from 'react'

import * as styles from 'styles/Chat.module.scss'
import ChatIcon from 'assets/images/icons/chat.svg'
import SkypeIcon from 'assets/images/icons/skype.svg'
import WhatsAppIcon from 'assets/images/icons/whatsapp.svg'
import XIcon from 'assets/images/icons/xicon.svg'

export default function Chat() {
  return (
    <div className={styles.chat}>
      <div>
        <ChatIcon className='chat' />
      </div>
      <SkypeIcon className='icon' />
      <WhatsAppIcon className='icon' />
      <XIcon className='icon' />
    </div>
  )
}
