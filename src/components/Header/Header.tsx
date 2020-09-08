import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Folder, PenTool, Camera, FileText, Mail } from 'react-feather';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <React.Fragment>
      <header className={styles.headerWrapper}>
        <section className={styles.headerContainer}>
          <Link to='/' className={styles.homeLink}>
            Rheisen X Dennis
          </Link>
          { displayNav ? (
            <React.Fragment>
              <X
                className={styles.exitIcon}
                size={28}
                aria-label='Exit Page Navigation'
                onClick={() => setDisplayNav(false)}
              />
              <nav className={styles.navContainer}>
                <div className={styles.borderElement} />
                <Link to='/'><span>Home</span><Home size={20} className={styles.linkIcon} /></Link>
                <Link to='/projects'><span>Projects</span><Folder size={20} className={styles.linkIcon} /></Link>
                <Link to='/writings'><span>Writings</span><PenTool size={20} className={styles.linkIcon} /></Link>
                <Link to='/photography'><span>Photography</span><Camera size={20} className={styles.linkIcon} /></Link>
                <Link to='/resume'><span>Resume</span><FileText size={20} className={styles.linkIcon} /></Link>
                <Link to='/contact'><span>Contact Me</span><Mail size={20} className={styles.linkIcon} /></Link>
              </nav>
            </React.Fragment>
          ) : (
            <Menu
              className={styles.menuIcon}
              size={28}
              aria-label='Page Navigation Menu'
              onClick={() => setDisplayNav(true)}
            />
          )
          }
        </section>
      </header>
      <div className={styles.pageBuffer}></div>
    </React.Fragment>
  );
}
