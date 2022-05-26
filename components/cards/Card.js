import React from 'react'

import * as styles from './styles/Card.module.scss'
import CloseIcon from 'assets/images/icons/close.svg';
import classNames from 'classnames';

export default function Card({ tab, setTabAndOpen }) {
  return (
    <div className={classNames(styles.card, tab ? styles.cardShow : styles.cardHidden)}>
      <div className={styles.cardInner}>
        {tab}
      </div>
      <div className={styles.closeIcon} onClick={() => setTabAndOpen(null)}>
        <CloseIcon />
      </div>
    </div>
  )
}
