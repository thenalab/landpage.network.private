import React from 'react'
import * as styles from 'styles/Footer.module.scss'
import Logo from 'assets/images/logos/thena.png';
import Icon1 from 'assets/images/navbar-network/1.svg';
import Icon2 from 'assets/images/navbar-network/2.svg';
import Icon3 from 'assets/images/navbar-network/3.svg';
import Icon4 from 'assets/images/navbar-network/4.svg';
import Icon5 from 'assets/images/navbar-network/5.svg';
import { MODAL_TYPE } from 'constants/common';
import Thena from './cards/Thena';
import Smart from './cards/Smart';
import Team from './cards/Team';
import Advision from './cards/Advision';
import Partnership from './cards/Partnership';
import Contact from './cards/Contact';

export default function Footer({ setOpeningModal }) {
  const openThena = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Thena Blockchain',
      textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tab: <Thena />,
    }
  })
  const openSmart = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Smart Blockchain',
      textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tab: <Smart />,
    }
  })
  const openTeam = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Team',
      textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tab: <Team />,
    }
  })
  const openAdvision = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Partnership',
      textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tab: <Partnership />,
    }
  })
  const openContact = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Get in Touch',
      textSmall: '',
      tab: <Contact />,
    }
  })
  return (
    <div className={styles.footer}>
      <img className={styles.img} src={Logo.src} alt='' />
      <div className={styles.icons}>
        <div className={styles.icon} onClick={openThena}><Icon1 /></div>
        <div className={styles.icon} onClick={openSmart}><Icon2 /></div>
        <div className={styles.icon} onClick={openTeam}><Icon3 /></div>
        <div className={styles.icon} onClick={openAdvision}><Icon4 /></div>
        <div className={styles.icon} onClick={openContact}><Icon5 /></div>
      </div>
      <div className={styles.textLarge}>Blockchain Thena</div>
      <div className={styles.textSmall}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
    </div>
  )
}
