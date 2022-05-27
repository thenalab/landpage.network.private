import React from 'react'
import SimpleBar from 'simplebar-react';
import * as styles from './styles/Card.module.scss'
import CloseIcon from 'assets/images/icons/close.svg';
import classNames from 'classnames';

export default function Card({ cardProps, setCardPropsAndOpen }) {
  return (
    <div className={classNames(styles.card, cardProps.tab ? styles.cardShow : styles.cardHidden)}>
      <div className={styles.cardInner}>
        <SimpleBar style={{ height: '100%' }}>
          <div className={styles.content}>
            <div className={styles.textLarge}>{cardProps.textLarge}</div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.textSmall}>{cardProps.textSmall}</div>
            {cardProps.tab}
          </div>
        </SimpleBar>
      </div>
      <div className={styles.closeIcon} onClick={() => setCardPropsAndOpen({})}>
        <CloseIcon />
      </div>
    </div>
  )
}
