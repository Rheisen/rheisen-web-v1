import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Photo from './components/Photo';

import styles from './photography.module.scss';

export const Photography: React.FC = () => {
  return(
    <React.Fragment>
      <Header />

      <header className={styles.smallSplashWrapper}>
        <h2>Photography</h2>
      </header>

      <section className={styles.photographyWrapper}>
        <div>
          <Photo imageName='clocktower' alt='Porto Clocktower' />
          <Photo imageName='red-light' alt='Kabir in Red Light' />
          <Photo imageName='white-nike' alt='White Nikes' />
          <Photo imageName='fog' alt='Fog' />
          <Photo imageName='seaport-sunset' alt='Seaport Sunset' />
          <Photo imageName='ymca' alt='YMCA' />
          <Photo imageName='walk' alt='Walk' />
        </div>
        <div>
          <Photo imageName='balance' alt='Balance' />
          <Photo imageName='crystal' alt='Crystal' />
          <Photo imageName='angel' alt='Angel' />
          <Photo imageName='incense' alt='Incense' />
          <Photo imageName='evening' alt='Evening' />
          <Photo imageName='bird' alt='Bird' />
          <Photo imageName='rastro' alt='Rastro' />
        </div>
        <div>
          <Photo imageName='leafs' alt='Leafs' />
          <Photo imageName='shades' alt='Shades' />
          <Photo imageName='look' alt='Look' />
          <Photo imageName='morning' alt='Morning' />
          <Photo imageName='citgo' alt='Citgo' />
          <Photo imageName='palace' alt='Palace' />
          <Photo imageName='pepe' alt='Pepe' />
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}
