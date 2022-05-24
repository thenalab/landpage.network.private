import React from 'react'
import * as styles from 'styles/Footer.module.scss'
import Logo from 'assets/images/logos/thena.png';

export default function Footer() {
  console.log(Logo);
  return (
    <div className={styles.footer}>
      <img className='img' src={Logo.src} alt='' />
      <div className='text-large'>Blockchain Thena</div>
      <div className='text-small'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
    </div>
  )
}
