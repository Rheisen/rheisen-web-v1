import React from 'react';
import { ArrowDownCircle, MapPin, GitHub, Gitlab, Mail, Download } from 'react-feather';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './home.module.scss';
import profileImage from './assets/profile.jpg';

export const Home: React.FC = () => {
  return(
    <React.Fragment>
      <Header />
      <section className={styles.splashWrapper}>
        <div className={styles.welcomeContainer}>
          <p className={styles.welcomeMessage}>
            Hello, and welcome to my quaint pocket of the internet. This is where I share my love of software, books,
            writing, and philosophy on a semi-regular basis. Please feel invited to poke around, and reach out if you
            would like to connect.
          </p>
          <p className={styles.closingMessage}>
            Have a great day,
          </p>
          <h2 className={styles.signature}>
            Rheisen
          </h2>
        </div>
        <div className={styles.pageDownContainer}>
          <ArrowDownCircle className={styles.pageDownIcon} size={28} />
        </div>
      </section>

      <section id='about-me' className={styles.aboutWrapper}>
        <div className={styles.aboutContainer}>
          <aside>
            <section className={styles.contactCard}>
              <img src={profileImage} alt='Picture of Rheisen Dennis' />
              <div className={styles.fullLineBreak} />
              <div className={styles.partialLineBreak} />
              <div className={styles.iconInfoContainer}>
                <MapPin className={styles.pinIcon} size={24} />
                <span>Boston, MA</span>
              </div>
              <div className={styles.iconInfoContainer}>
                <Mail className={styles.mailIcon} size={24} />
                <span>rheisen.dennis@protonmail.com</span>
              </div>
              <div className={styles.iconInfoContainer}>
                <GitHub className={styles.githubIcon} size={24} />
                <a href='https://github.com/rheisen' target='_blank'>https://github.com/rheisen</a>
              </div>
              <div className={styles.iconInfoContainer}>
                <Gitlab className={styles.gitlabIcon} size={24} />
                <a href='https://gitlab.com/rheisen' target='_blank'>https://gitlab.com/rheisen</a>
              </div>
              <a href='/documents/rheisen-dennis-resume.pdf' target='_blank' className={styles.resumeLink}>
                <Download className={styles.downloadIcon} size={24} />
                <span>Download Resume</span>
              </a>
            </section>
          </aside>
          <article className={styles.aboutArticle}>
            <h2>About Me</h2>
            <p>
              Getting to know someone is a complex process. It can be easy to forget that every person contains a
              lifetime of formative experiences, and conversely easy to assume that the people you interact with know
              more about your experience than you've revealed to them. It's impossible to share all of our
              experiences with another person, or even a decent fraction of them in a timely manner. How then should
              we go about conveying ourselves so that we are understood by others, and so that we form meaningful
              relationships?
            </p>
            <p>
              I can't claim to have the "correct" answer to this question, but I think that we can benefit from
              introspecting, determining what our values are, identifying why we have them, and seeing which values
              drive our behavior and in what ways. Following this, sharing our values can allow others to understand
              us more succinctly.
            </p>
            <p>
              From there, we can cross-examine our values. We can compare the journeys we've had to reach shared
              values, and/or have empathetic conversations regarding the areas where our values diverge. I don't think
              any set of values is "correct", and so these conversations should always be, in my opinion, undertaken
              with an open mind. In this manner, I think we can come to understand one another, and form meaningful
              relationships.
            </p>
            <p>
              Continuing along these lines, I'd like to share my values with you. I hope that through this we can
              begin to form a meaningful (albeit initially one-sided) relationship. If you'd like to reach
              out to me about these values, or share a value with me that you think could be of benefit, please email
              me! I'd be happy to talk with you and bond over a values discussion.
            </p>
            <div className={styles.articleBreak} />
            <h3>Wisdom</h3>
            <p>
              I define wisdom as doing the right thing at the right time. To me this means being mindful and enabling
              the manifestation of my values to dictate my actions. This is ultimately what I aspire to.
            </p>
            <h3>Temperance</h3>
            <p>
              I define temperance as maintaining self-control, and using self-control to act in accordance with ones
              values. To me this means maintaining self-control and acting with courage and compassion. I view
              temperance as being the first requirement in achieving wisdom.
            </p>
            <h3>Courage</h3>
            <p>
              I define courage as knowing one's responsibilities, knowing one's capabilities, and fully utilizing those
              capabilities towards those responsibilities. To me this means realizing my responsibilities as a human,
              a son, a brother, a friend, a student, etc. and applying my capabilities to those responsibilities to
              the best of my ability. I view courage as the guide for how I should act.
            </p>
            <h3>Compassion</h3>
            <p>
              I define compassion as caring for myself and others. I define caring for something as sympathizing with
              it, and acting virtuously in its benefit. To me this ultimately means sympathizing with myself and
              others, and acting virtuously for the benefit of myself and others. I view compassion as the guide for
              what purpose I should act.
            </p>
            <div className={styles.articleBreak} />
            <p>
              My journey to these values and these value definitions has been greatly inspired by Stoic philosophy and
              Buddhist ethics, both of which I owe an incredible debt of gratitude. I am also forever grateful for my
              parents, whose encouragement to try my best brought about a growth mindset from a young age. I attribute
              their influence and that mindset for having made my values an evolving doctrine in my efforts to realize
              the best version of myself.
            </p>
            <p>
              If you've made it to the end here, I hope you feel as though you've gotten to know me better! If you
              think you have an improvement for my value definitions, please feel invited to share that with me - I'd
              love to hear from you! If something in my values / value definitions resonated with you, feel welcome
              to make it your own! If you'd like to view the things I'm working on, the pictures I've taken, or my
              writings, please feel encouraged to explore the rest of this site. In any case, I hope you have a great
              day!
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
