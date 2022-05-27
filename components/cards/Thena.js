import React from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import * as styles from './styles/Thena.module.scss'
import Phase1 from 'assets/images/phases/phase1.svg';
import Phase2 from 'assets/images/phases/phase2.svg';
import Phase3 from 'assets/images/phases/phase3.svg';
import Phase4 from 'assets/images/phases/phase4.svg';
import dot from 'assets/images/icons/dot.png';

export default function Thena() {
  return (
    <div className={styles.grid}>
      <div>
        <div>PHASE 1</div>
      </div>
      <div>
        <div>
          <div className={styles.absoluteDot}></div>
          <Phase1 />
          <ul>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.absoluteDot}></div>
          <Phase2 />
          <ul>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>PHASE 2</div>
      </div>
      <div>
        <div>PHASE 3</div>
      </div>
      <div>
        <div>
          <div className={styles.absoluteDot}></div>
          <Phase3 />
          <ul>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.absoluteDot}></div>
          <Phase4 />
          <ul>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
            <li>
              <img src={dot.src} alt='' />
              APP API Launch: Wallet, Defi, Crosschain-Bridge, NFT Marketplace
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>PHASE 4</div>
      </div>
    </div>
  )
}
