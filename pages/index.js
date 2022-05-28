import Head from 'next/head'

import * as styles from 'styles/Home.module.scss'

import NavbarHamburger from 'components/NavbarHamburger'
import BackgroundVideo from 'components/BackgroundVideo'
import Details from 'components/Details'
import Chat from 'components/Chat'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div className={styles.red}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundVideo />
        <Details />
        <Chat />
        <Footer />
        <NavbarHamburger />
      </main>
      <footer>
      </footer>
    </div>
  )
}
