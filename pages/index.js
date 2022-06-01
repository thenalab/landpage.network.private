import Head from 'next/head';
import * as styles from 'styles/Home.module.scss';
import NavbarHamburger from 'components/NavbarHamburger';
import BackgroundVideo from 'components/BackgroundVideo';
import Details from 'components/Details';
import Footer from 'components/Footer';
import Chatbot from 'components/Chatbot';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundVideo />
        <Details />
        <Footer />
        <NavbarHamburger />
        <Chatbot />
      </main>
      <footer>
      </footer>
    </div>
  )
}
