import React, { useEffect } from 'react';
import * as styles from 'styles/ChatContact.module.scss';
import ChatIcon from 'assets/images/icons/chat.svg';
import SkypeIcon from 'assets/images/icons/skype.svg';
import WhatsAppIcon from 'assets/images/icons/whatsapp.svg';
import XIcon from 'assets/images/icons/xicon.svg';
import classNames from 'classnames';
import { MODAL_TYPE } from 'constants/common';

export default function ChatContact({ openingModal, setOpeningModal }) {
  const [isOpen, setIsOpen] = React.useState(true);
  useEffect(() => {
    setIsOpen(openingModal === MODAL_TYPE.CHAT_CONTACT);
  }, [openingModal]);
  const toogle = () => {
    if (openingModal === MODAL_TYPE.CHAT_CONTACT) return setOpeningModal(null);
    setOpeningModal(MODAL_TYPE.CHAT_CONTACT);
  }
  return (
    <div className={classNames(
      styles.chat,
      isOpen ? styles.chatOpen : styles.chatClose
    )} onClick={toogle}>
      <div>
        <ChatIcon className='chat' />
      </div>
      <SkypeIcon className='icon' />
      <WhatsAppIcon className='icon' />
      <XIcon className='icon' />
    </div>
  )
}
