import React from 'react';
import * as styles from 'styles/NavbarNetwork.module.scss';
import ThenaYellow from 'assets/images/logos/thena-yellow.webp';
import BranchTopRight from 'assets/images/branches/branchTopRight.webp';
import BranchTopLeft from 'assets/images/branches/branchTopLeft.webp';
import { MODAL_TYPE } from 'constants/common';
import Thena from './cards/Thena';
import Smart from './cards/Smart';
import Team from './cards/Team';
import Advision from './cards/Advision';
import Partnership from './cards/Partnership';
import Contact from './cards/Contact';

export default function NavbarNetwork({ openingModal, setOpeningModal }) {
  if (openingModal.cardType === MODAL_TYPE.CARD) return '';
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
  const openPartnership = () => setOpeningModal({
    cardType: MODAL_TYPE.CARD,
    cardProps: {
      textLarge: 'Advision',
      textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tab: <Advision />,
    }
  })
  return (
    <div className={styles.navbar}>
      <div className={styles.thenaBlockchain} onClick={openThena}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopRight.src} alt='' />
        </div>
        <div className={styles.leaf}>
          Thena Blockchain
        </div>
      </div>
      <div className={styles.smartBlockchain} onClick={openSmart}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopLeft.src} alt='' />
        </div>
        <div className={styles.leaf}>
          Smart Blockchain
        </div>
      </div>
      <div className={styles.team} onClick={openTeam}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopLeft.src} alt='' />
        </div>
        <div className={styles.leaf}>
          Team
        </div>
      </div>
      <div className={styles.advision} onClick={openAdvision}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopRight.src} alt='' />
        </div>
        <div className={styles.leaf}>
          advision
        </div>
      </div>
      <div className={styles.partnership} onClick={openPartnership}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopLeft.src} alt='' />
        </div>
        <div className={styles.leaf}>
          Partnership
        </div>
      </div>
      <div className={styles.contact} onClick={openContact}>
        <img src={ThenaYellow.src} alt='' />
        <div className={styles.branch}>
          <img src={BranchTopLeft.src} alt='' />
        </div>
        <div className={styles.leaf}>
          Contact
        </div>
      </div>
    </div>
  )
}
