import React from 'react'

import classNames from 'classnames';

import * as styles from 'styles/NavbarHamburger.module.scss'

export default function NavbarHamburger() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toogle = () => setIsOpen(pre => !pre);
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
        <div className='content-item'>Thena Blockchain</div>
        <div className='content-item'>Smart Blockchain</div>
        <div className='content-item'>Team</div>
        <div className='content-item'>Advision</div>
        <div className='content-item'>Partnership</div>
        <div className='content-item'>Contact us</div>
      </div>
    </div>
  )
}
