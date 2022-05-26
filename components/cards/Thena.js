import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import * as styles from './styles/Thena.module.scss'
import Phase1 from 'assets/images/phases/phase1.svg';
import Phase2 from 'assets/images/phases/phase2.svg';
import Phase3 from 'assets/images/phases/phase3.svg';
import Phase4 from 'assets/images/phases/phase4.svg';
import dot from 'assets/images/icons/dot.png';

const lorem = Array(5)
  .fill("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  .join(' ');
export default function Thena() {
  return (
    <SimpleBar style={{ height: '100%' }}>
      <div className={styles.content}>
        <div className={styles.textLarge}>Roadmap</div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.textSmall}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
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
      </div>
    </SimpleBar>
  )
}
