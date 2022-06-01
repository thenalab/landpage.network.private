import React from 'react'

import classNames from 'classnames';

import * as styles from 'styles/Card.module.scss'

export const COLORS = {
  RED: 0,
  GREEN: 1
}

export const Card1 = ({ title, number, color, percent }) => {
  return (
    <div className={styles.card1}>
      <div className='title'>{title}</div>
      <div className='number'>{number}</div>
      {percent && <div className='gradient-wrapper'>
        <div
          className={classNames({
            'gradient-red': color === COLORS.RED,
            'gradient-green': color === COLORS.GREEN
          })}
          style={{ width: `${percent}%` }}
        ></div>
      </div>}
    </div>
  )
}

export const Card2 = ({ title, arr }) => {
  return (
    <div className={styles.card2}>
      <div className='title'>{title}</div>
      <div className='card-wrapper'>
        {
          arr.map(({ subtitle, numberText, percent, color }, index) => (
            <div key={index}>
              <div className='subtitle'>{subtitle}</div>
              <div className={styles.grid2}>
                <div className='gradient-wrapper'>
                  <div
                    className={classNames({
                      'gradient-red': color === COLORS.RED,
                      'gradient-green': color === COLORS.GREEN
                    })}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <div className='numberText'>{numberText}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const Card3 = ({ title, arr }) => {
  return (
    <div className={styles.card3}>
      <div className='title'>{title}</div>
      <div className='card-wrapper'>
        {
          arr.map(({ numberText, percent, color }, index) => (
            <div key={index}>
              <div className={styles.flex}>
                <div className='gradient-wrapper'>
                  <div
                    className={classNames({
                      'gradient-red': color === COLORS.RED,
                      'gradient-green': color === COLORS.GREEN
                    })}
                    style={{ width: `${Math.floor(180 * percent / 100)}px` }}
                  ></div>
                </div>
                <div className='numberText'>{numberText}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}