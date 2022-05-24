/* eslint-disable @next/next/no-img-element */
import React from 'react'

import classNames from 'classnames';

import * as styles from 'styles/Details.module.scss'

import { Card1, Card2, Card3, COLORS } from './Card';

import ArrowRight from 'assets/images/icons/arrow-right.svg';

export default function Details() {
  const [isOpen, setIsOpen] = React.useState(true);
  const toogle = () => setIsOpen(pre => !pre);
  return (
    <div className={classNames(
      styles.details,
      isOpen ? styles.detailsOpen : styles.detailsClose
    )}>
      <div className='content'>
        <div className='arrow' onClick={toogle}>
          <div className=''>
            <img src={ArrowRight.src} alt='' />
          </div>
        </div>
        <div className='grid'>
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
