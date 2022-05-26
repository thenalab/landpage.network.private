import React from 'react';
import classNames from 'classnames';
import * as styles from 'styles/NavbarHamburger.module.scss';
import Card from 'components/cards/Card';
import Thena from './cards/Thena';
import Smart from './cards/Smart';
import Team from './cards/Team';
import Advision from './cards/Advision';
import Partership from './cards/Partership';
import Contact from './cards/Contact';

export default function NavbarHamburger() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [tab, setTab] = React.useState(null);
  const toogle = () => setIsOpen(pre => !pre);
  const setTabAndClose = (tab) => {
    setTab(tab);
    setIsOpen(false);
  }
  const setTabAndOpen = (tab) => {
    setTab(tab);
    setIsOpen(true);
  }
  React.useEffect(() => {
    if(isOpen) setTab(null);
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
        <div className='content-item' onClick={() => setTabAndClose(<Thena />)}>Thena Blockchain</div>
        <div className='content-item' onClick={() => setTabAndClose(<Smart />)}>Smart Blockchain</div>
        <div className='content-item' onClick={() => setTabAndClose(<Team />)}>Team</div>
        <div className='content-item' onClick={() => setTabAndClose(<Advision />)}>Advision</div>
        <div className='content-item' onClick={() => setTabAndClose(<Partership />)}>Partnership</div>
        <div className='content-item' onClick={() => setTabAndClose(<Contact />)}>Contact us</div>
      </div>
      <Card tab={tab} setTabAndOpen={setTabAndOpen} />
    </div>
  )
}
