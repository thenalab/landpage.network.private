import React, { useEffect } from 'react';
import classNames from 'classnames';
import * as styles from 'styles/NavbarHamburger.module.scss';
import Card from 'components/cards/Card';
import Thena from './cards/Thena';
import Smart from './cards/Smart';
import Team from './cards/Team';
import Advision from './cards/Advision';
import Partnership from './cards/Partnership';
import Contact from './cards/Contact';
import { MODAL_TYPE } from 'constants/common';

const navbarData = [
  {
    navText: 'Thena Blockchain',
    textLarge: 'Thena Blockchain',
    textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tab: <Thena />,
  },
  {
    navText: 'Smart Blockchain',
    textLarge: 'Smart Blockchain',
    textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tab: <Smart />,
  },
  {
    navText: 'Team',
    textLarge: 'Team',
    textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tab: <Team />,
  },
  {
    navText: 'Advision',
    textLarge: 'Advision',
    textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tab: <Advision />,
  },
  {
    navText: 'Partnership',
    textLarge: 'Partnership',
    textSmall: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tab: <Partnership />,
  },
  {
    navText: 'Contact us',
    textLarge: 'Get in Touch',
    textSmall: '',
    tab: <Contact />,
  },
]

export default function NavbarHamburger({ openingModal, setOpeningModal }) {
  const [isOpen, setIsOpen] = React.useState(true);
  useEffect(() => {
    setIsOpen(openingModal === MODAL_TYPE.NAVBAR);
  }, [openingModal]);
  const [cardProps, setCardProps] = React.useState({});
  const [index, setIndex] = React.useState(-1);
  const handleHamburgersClick = () => {
    if (openingModal === MODAL_TYPE.NAVBAR) return setOpeningModal(null);
    setOpeningModal(MODAL_TYPE.NAVBAR);
    setIndex(-1);
  };
  const setCardPropsAndClose = (cardProps, _index) => {
    setCardProps(cardProps);
    setOpeningModal(MODAL_TYPE.CARD);
    setIndex(_index);
  }
  const setCardPropsAndOpen = (cardProps) => {
    setCardProps(cardProps);
    setOpeningModal(MODAL_TYPE.NAVBAR);
  }
  React.useEffect(() => {
    if (isOpen) setCardProps({});
  }, [isOpen])
  return (
    <div className={styles.navbarWrapper}>
      <div className={classNames(
        styles.navbar,
        isOpen ? styles.navbarOpen : styles.navbarClose
      )}>
        <div className='hamburgers' onClick={handleHamburgersClick}>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </div>
        <div className='content'>
          {
            navbarData.map(({ navText, ...rest }, _index) => (
              <div key={navText} className={classNames(
                'content-item',
                { 'item-active': openingModal === MODAL_TYPE.NAVBAR && index === _index }
              )} onClick={() => setCardPropsAndClose(rest, _index)}>{navText}</div>
            ))
          }
        </div>
        <Card cardProps={cardProps} setCardPropsAndOpen={setCardPropsAndOpen} openingModal={openingModal} />
      </div>
    </div>
  )
}
