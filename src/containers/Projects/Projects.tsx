import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import InfoCardSection from 'components/InfoCardSection';

import styles from './projects.module.scss';

export const Projects: React.FC = () => {
  return(
    <React.Fragment>
      <Header />
        <header className={styles.smallSplashWrapper}>
          <h2>Projects</h2>
        </header>
        <InfoCardSection git={true}>
          <p>Content coming soon! In the meantime, please check out my Github page!</p>
        </InfoCardSection>
      <Footer />
    </React.Fragment>
  );
}
