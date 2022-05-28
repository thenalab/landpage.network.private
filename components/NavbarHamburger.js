import React from 'react';
import classNames from 'classnames';
import * as styles from 'styles/NavbarHamburger.module.scss';
import Card from 'components/cards/Card';
import Thena from './cards/Thena';
import Smart from './cards/Smart';
import Team from './cards/Team';
import Advision from './cards/Advision';
import Partnership from './cards/Partnership';
import Contact from './cards/Contact';

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

export default function NavbarHamburger() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [cardProps, setCardProps] = React.useState({});
  const toogle = () => setIsOpen(pre => !pre);
  const setCardPropsAndClose = (cardProps) => {    
    setCardProps(cardProps);
    setIsOpen(false);
  }
  const setCardPropsAndOpen = (cardProps) => {
    setCardProps(cardProps);
    setIsOpen(true);
  }
  React.useEffect(() => {
    if(isOpen) setCardProps({});
  }, [isOpen])
  return (
    <div className={classNames(
      styles.navbar,
      isOpen ? styles.navbarOpen : styles.navbarClose
    )}>
      <div className='hamburgers' onClick={toogle}>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
      </div>
      <div className='content'>
        {
          navbarData.map(({ navText, ...rest }) => (
            <div key={navText} className='content-item' onClick={() => setCardPropsAndClose(rest)}>{navText}</div>
          ))
        }
      </div>
      <Card cardProps={cardProps} setCardPropsAndOpen={setCardPropsAndOpen} />
    </div>
  )
}
