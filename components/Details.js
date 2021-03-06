/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import classNames from 'classnames';
import * as styles from 'styles/Details.module.scss'
import { Card1, Card2, Card3, COLORS } from './Card';
import ArrowRight from 'assets/images/icons/arrow-right.svg';
import Stat from 'assets/images/icons/stat.svg';
import { MODAL_TYPE } from 'constants/common';

export default function Details({ openingModal, setOpeningModal }) {
  const [isOpen, setIsOpen] = React.useState(true);
  useEffect(() => {
    setIsOpen(openingModal.cardType === MODAL_TYPE.DETAILS);
  }, [openingModal.cardType]);
  const toogle = () => {
    if (openingModal.cardType === MODAL_TYPE.DETAILS) return setOpeningModal({});
    setOpeningModal({ cardType: MODAL_TYPE.DETAILS });
  }
  return (
    <div className={classNames(
      styles.details,
      isOpen ? styles.detailsOpen : styles.detailsClose
    )}>
      <div>
        <div className={styles.arrow} onClick={toogle}>
          {isOpen ? <ArrowRight /> : <Stat />}
        </div>
        <div className={styles.grid}>
          <Card1 title="Visitor right now" number="681,264" />
          <Card1 title="Total sales" number="$2,475" percent={40} color={COLORS.GREEN} />
          <Card1 title="Total sessions" number="$22,266" percent={30} color={COLORS.RED} />
          <Card1 title="Total orders" number="22,266" percent={50} color={COLORS.GREEN} />
        </div>
        <Card2 title="Total orders" arr={[
          { subtitle: "Culumbus •  United State", numberText: "27k session", percent: 80, color: COLORS.GREEN },
          { subtitle: "New York •  United State", numberText: "28k session", percent: 20, color: COLORS.RED },
          { subtitle: "L.A •  United State", numberText: "29k session", percent: 90, color: COLORS.GREEN },
        ]} />
        <Card3 title="Customer" arr={[
          { numberText: "3.2k customers", percent: 20, color: COLORS.RED },
          { numberText: "18.5k customers", percent: 60, color: COLORS.GREEN },
        ]} />
      </div>
    </div>
  )
}
