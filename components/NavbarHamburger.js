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
    setIsOpen(openingModal.cardType === MODAL_TYPE.NAVBAR);
  }, [openingModal.cardType]);
  // const [cardProps, setCardProps] = React.useState({});
  const [index, setIndex] = React.useState(-1);
  const handleHamburgersClick = () => {
    if (openingModal.cardType === MODAL_TYPE.NAVBAR) return setOpeningModal({});
    setOpeningModal({ cardType: MODAL_TYPE.NAVBAR });
    setIndex(-1);
  };
  // React.useEffect(() => {
  //   if (isOpen) setCardProps({});
  // }, [isOpen])
  return (
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
              { 'item-active': index === _index }
            )} onClick={() => {
              setOpeningModal({
                cardType: MODAL_TYPE.CARD, cardProps: rest, openAfterClose: {
                  cardType: MODAL_TYPE.NAVBAR
                }
              });
              setIndex(_index);
            }
            }>{navText}</div>
          ))
        }
      </div>
      <Card openingModal={openingModal} setOpeningModal={setOpeningModal} />
    </div>
  )
}
