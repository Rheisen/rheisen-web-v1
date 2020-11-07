import React from 'react';
import { Link } from 'react-router-dom';
import { Clipboard, BookOpen, CheckSquare } from 'react-feather';

import Header from 'components/Header';
import InfoCardSection from 'components/InfoCardSection';
import Footer from 'components/Footer';

import ExperienceArticle from './components/ExperienceArticle';
import PositionSection from './components/PositionSection';

import styles from './resume.module.scss';

export const Resume: React.FC = () => {
  return(
    <React.Fragment>
      <Header />
      <section className={styles.smallSplashWrapper}>
        <h2>Resume</h2>
      </section>
      <InfoCardSection linkedin={true} git={true} resume={true}>
        <div className={styles.resumeWrapper}>
          <div className={styles.resumeHeaderContainer}>
            <Clipboard className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <ExperienceArticle company={'Wellframe'}>
              <PositionSection title={'Software Engineering Intern'} timeframe={'Jun 2020 - Aug 2020'}>
              </PositionSection>
              <PositionSection title={'Software Engineering Co-op'} timeframe={'Jan 2019 - Aug 2019'}>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Khoury College @ NU'}>
              <PositionSection title={'Object Oriented Design TA'} timeframe={'Jan 2020 - May 2020'}>
              </PositionSection>
              <PositionSection title={'Object Oriented Design TA'} timeframe={'Sep 2018 - Dec 2018'}>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Scout Studio'} timeframe={'Aug 2018 - Dec 2018'}>
              <PositionSection title={'Studio Software Developer'}>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Center for Open Science'} timeframe={'May 2017 - Aug 2017'}>
              <PositionSection title={'Software Engineering Intern'}>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Seam'} timeframe={'Apr 2016 - Jan 2018'}>
              <PositionSection title={'Co-founder & Software Engineer'}>
              </PositionSection>
            </ExperienceArticle>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <BookOpen className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <section className={styles.educationContainer}>
              <header>
                <h4>Northeastern University</h4>
                <span className={styles.timeframe}>Sep 2016 - Dec 2020</span>
              </header>
              <span className={styles.degree}>Bachelor of Science Computer Science and Business Administration</span>
              <p>
                <span className={styles.bold}>Honors: </span>
                University Scholars Program, Honors Program
              </p>
              <p>
                <span className={styles.bold}>Courses: </span>
                Accelerated Fundamentals of Computer Science 1 & 2 (Racket & Java), Object Oriented Design (Java),
                Algorithms and Data, Database Design (MySQL), Computer Systems (C), Computer Networks and Distributed
                Systems (Rust), Software Development (TypeScript / React)
              </p>
              <p>
                <span className={styles.bold}>Activities: </span>
                Husky Startup Challenge, IDEA venture founder, Intramural Soccer
              </p>
            </section>

            <section className={styles.educationContainer}>
              <header>
                <h4>Albemarle High School</h4>
                <span className={styles.timeframe}>Sep 2012 - May 2016</span>
              </header>
              <span className={styles.degree}>Advanced High School Diploma</span>
              <p>
                <span className={styles.bold}>Activities / Awards: </span>
                Math Engineering Science Academy, Honor Roll, Robotics Team Captain, TomTom Youth Summit
                Representative, Entrepreneurship & Computer Science Club Founder
              </p>
            </section>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <CheckSquare className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <div className={styles.skillContainer}>
              <span className={styles.skillLanguage}>Java</span>
              <span className={styles.skillLanguage}>Ruby</span>
              <span className={styles.skillLanguage}>JavaScript / TypeScript</span>
              <span className={styles.skillLanguage}>Rust</span>
              <span className={styles.skillLanguage}>HTML</span>
              <span className={styles.skillLanguage}>CSS / SCSS</span>
              <span className={styles.skillFramework}>Ruby on Rails</span>
              <span className={styles.skillFramework}>Java Spring</span>
              <span className={styles.skillFramework}>React</span>
              <span className={styles.skillTool}>Git</span>
              <span className={styles.skillTool}>Vim</span>
              <span className={styles.skillTool}>Git Flow</span>
              <span className={styles.skillTool}>JIRA</span>
            </div>
          </div>

          <div className={styles.endLinkContainer}>
            <Link to='/projects' className={styles.resumeProjectsLink}>View Projects</Link>
          </div>
        </div>

      </InfoCardSection>
      <Footer />
    </React.Fragment>
  );
}
