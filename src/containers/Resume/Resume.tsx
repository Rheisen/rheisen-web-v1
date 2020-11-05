import React from 'react';

import Header from 'components/Header';
import InfoCardSection from 'components/InfoCardSection';
import Footer from 'components/Footer';

import styles from './resume.module.scss';

export const Resume: React.FC = () => {
  return(
    <React.Fragment>
      <Header />
      <section className={styles.smallSplashWrapper}>
        <h2>Resume</h2>
      </section>
      <InfoCardSection linkedin={true} git={true} resume={true}>
      </InfoCardSection>
      <Footer />
    </React.Fragment>
  );
}
