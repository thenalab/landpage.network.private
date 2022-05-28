import React from 'react'
import * as styles from './styles/Advision.module.scss';
import Profile1 from 'assets/images/profiles/1.webp';
import Profile2 from 'assets/images/profiles/2.webp';
import Profile3 from 'assets/images/profiles/3.webp';
import Profile4 from 'assets/images/profiles/4.webp';
import Profile5 from 'assets/images/profiles/5.webp';
import Profile6 from 'assets/images/profiles/6.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { EffectCoverflow } from "swiper";
import "swiper/css/effect-coverflow";

const ProfileCard = ({ imgSrc, name, job }) => {
  return (
    <div className={styles.card}>
      <div className={styles.above}>
        <div className={styles.imgRelative}>
          <div className={styles.imgAbsolute}>
            <img src={imgSrc} alt='' />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.name}>{name}a</div>
          <div className={styles.job}>{job}</div>
        </div>
      </div>
      <div className={styles.description}>
        “I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore.
      </div>
    </div>
  )
}

const cardData = [
  {
    imgSrc: Profile1.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
  {
    imgSrc: Profile2.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
  {
    imgSrc: Profile3.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
  {
    imgSrc: Profile4.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
  {
    imgSrc: Profile5.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
  {
    imgSrc: Profile6.src,
    name: 'Nhu Thuy',
    job: 'CEO'
  },
]

export default function Advision() {
  return (
    <div className={styles.team}>
      <div className={styles.cardContainer}>
        <Swiper
          grabCursor={true}
          freeMode={true}
          effect={"coverflow"}
          spaceBetween={200}
          coverflowEffect={{
            rotate: 0,
            stretch: 1,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {
            cardData.map((card, index) => <SwiperSlide key={index}><ProfileCard {...card} /></SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}
