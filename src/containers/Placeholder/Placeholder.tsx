import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './placeholder.module.scss';

export const Placeholder: React.FC = () => {
  return(
    <React.Fragment>
      <Header />
      <section className={styles.placeholderContainer}>
        <h2>Content Coming Soon</h2>
      </section>
      <Footer />
    </React.Fragment>
  );
}
