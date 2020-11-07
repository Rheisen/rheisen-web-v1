import React from 'react';
import { Send } from 'react-feather';

import Header from 'components/Header';
import Footer from 'components/Footer';
import InfoCardSection from 'components/InfoCardSection';

import styles from './contact.module.scss';

export const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <header className={styles.smallSplashWrapper}>
        <h2>Contact Me</h2>
      </header>
      <InfoCardSection email={true} linkedin={true}>
        <div className={styles.sendIconContainer}>
          <Send className={styles.sendIcon} size={28} />
        </div>
        <p>
          Hey there! Getting in touch with me is pretty easy - just drop me an email and I'll try to respond within
          two days. If you would like to contact me more formally, feel free to reach out to me on LinkedIn. I don't
          use any other forms of social media at the moment, so I'm afraid that's it for getting in touch with me.
          Hope to hear from you soon!
        </p>
      </InfoCardSection>
      <Footer />
    </React.Fragment>
  );
};
