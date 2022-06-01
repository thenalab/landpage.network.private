import React from 'react'
import SimpleBar from 'simplebar-react';
import * as styles from './styles/Card.module.scss'
import CloseIcon from 'assets/images/icons/close.svg';
import classNames from 'classnames';
import { MODAL_TYPE } from 'constants/common';

export default function Card({ cardProps, setCardPropsAndOpen, openingModal }) {
  if(openingModal!==MODAL_TYPE.CARD) return '';
  return (
    <div className={classNames(styles.card, cardProps.tab ? styles.cardShow : styles.cardHidden)}>
      <div className={styles.cardInner}>
        <SimpleBar className={styles.simpleBar}>
          <div className={styles.content}>
            <div className={styles.textLarge}>{cardProps.textLarge}</div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.textSmall}>{cardProps.textSmall}</div>
            <div className={styles.cardBody}>
              {cardProps.tab}
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className={styles.closeIcon} onClick={() => setCardPropsAndOpen({})}>
        <CloseIcon />
      </div>
    </div>
  )
}
