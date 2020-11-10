import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './writings.module.scss';

export const Writings: React.FC = () => {
  return(
    <React.Fragment>
      <Header />

      <header className={styles.smallSplashWrapper}>
        <h2>Writings</h2>
      </header>

      <section className={styles.writingsWrapper}>
      </section>

      <Footer />
    </React.Fragment>
  );
}
