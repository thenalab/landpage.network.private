import React from 'react'
import * as styles from './styles/Team.module.scss';
import Profile1 from 'assets/images/profiles/1.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
import { FreeMode, Pagination } from "swiper";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.above}>
        <div className={styles.imgRelative}>
          <div className={styles.imgAbsolute}>
            <img src={Profile1.src} alt='' />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.name}>
            Nhu Thuy
          </div>
          <div className={styles.job}>
            CEO
          </div>
        </div>
      </div>
      <div className={styles.description}>
        “I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore.
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.cardContainer}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  )
}
