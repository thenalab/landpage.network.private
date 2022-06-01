import React, {useState} from 'react';
import Head from 'next/head';
import * as styles from 'styles/Home.module.scss';
import NavbarHamburger from 'components/NavbarHamburger';
import BackgroundVideo from 'components/BackgroundVideo';
import Details from 'components/Details';
import Footer from 'components/Footer';
import Chatbot from 'components/Chatbot';
import ChatContact from 'components/ChatContact';
import NavbarNetwork from 'components/NavbarNetwork';

export default function Home() {
  const [openingModal, setOpeningModal] = useState({
    // cardType,
    // cardProps
  });
  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundVideo />
        <Footer setOpeningModal={setOpeningModal} />
        <NavbarHamburger openingModal={openingModal} setOpeningModal={setOpeningModal} />
        <NavbarNetwork openingModal={openingModal} setOpeningModal={setOpeningModal} />
        <Details openingModal={openingModal} setOpeningModal={setOpeningModal} />
        <ChatContact openingModal={openingModal} setOpeningModal={setOpeningModal} />
        <Chatbot openingModal={openingModal} setOpeningModal={setOpeningModal} />
      </main>
      <footer>
      </footer>
    </div>
  )
}
