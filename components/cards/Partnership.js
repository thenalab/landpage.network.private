import React from 'react'

import * as styles from './styles/Partnership.module.scss';

import Instacart from 'assets/images/partnerships/instacart.webp';
import Uber from 'assets/images/partnerships/uber.webp';
import Disney from 'assets/images/partnerships/disney.webp';
import Netflix from 'assets/images/partnerships/netflix.webp';
import Spotify from 'assets/images/partnerships/spotify.webp';
import Cred from 'assets/images/partnerships/cred.webp';
import Amazon from 'assets/images/partnerships/amazon.webp';
import Duolingo from 'assets/images/partnerships/duolingo.webp';
import Microsoft from 'assets/images/partnerships/microsoft.webp';
import Tiktok from 'assets/images/partnerships/tiktok.webp';

const data = [
  Instacart,
  Uber,
  Disney,
  Netflix,
  Spotify,
  Cred,
  Amazon,
  Duolingo,
  Microsoft,
  Tiktok,
]

export default function Partnership() {
  return (
    <div className={styles.partnership}>
      <div className={styles.imgWrapper}>
        {
          data.map((image) => <img key={image.src} src={image.src} alt='' />)
        }
      </div>
    </div>
  )
}
