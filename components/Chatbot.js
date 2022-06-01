import React, { useEffect } from 'react';
import * as styles from 'styles/Chatbot.module.scss';
import Close from 'assets/images/icons/close.svg';
import Chat from 'assets/images/icons/chat.svg';
import Send from 'assets/images/icons/send.svg';
import classNames from 'classnames';
import { MODAL_TYPE } from 'constants/common';

const videoSrc = "https://framerusercontent.com/modules/assets/bVcEWVqwOBQSxJmtvCxuQCPEdRQ~LHYDy7YEUkKVT3wa0Ig7S6lzoXDM2JzUlE7G2E3d_9s.mp4";

export default function Chatbot({ openingModal, setOpeningModal }) {
  const [isOpen, setIsOpen] = React.useState(true);
  useEffect(() => {
    setIsOpen(openingModal.cardType === MODAL_TYPE.CHAT_BOT);
  }, [openingModal.cardType]);
  const toogle = () => {
    if (openingModal.cardType === MODAL_TYPE.CHAT_BOT) return setOpeningModal({});
    setOpeningModal({ cardType: MODAL_TYPE.CHAT_BOT });
  }
  return (
    <div className={classNames(
      styles.chatbot,
      isOpen ? styles.chatbotOpen : styles.chatbotClose
    )}>
      <div className={styles.iconWrapper} onClick={toogle}>
        <video src={videoSrc} loop autoPlay muted></video>
      </div>
      <div className={styles.chatModal}>
        <div className={styles.chatModalHeader}>
          <div className={styles.closeWrapper}>
            <Close onClick={() => setIsOpen(false)} />
          </div>
          <div className={styles.chatWrapper}>
            <Chat />
          </div>
        </div>
        <div className={styles.chatModalBody}>Body</div>
        <div className={styles.chatModalFooter}>
          <div className={styles.inputWrapper}>
            <input placeholder='What do you want to talk?' />
          </div>
          <div className={styles.sendWrapper}>
            <Send />
          </div>
        </div>
      </div>
    </div>
  )
}
