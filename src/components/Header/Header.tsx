import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Folder, PenTool, Camera, FileText, Mail } from 'react-feather';

import styles from './header.module.scss';

const useNavigationDisplay = (initialVisibility: boolean) => {
  const [isNavigationVisible, setNavigationVisible] = useState(initialVisibility);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if(ref.current && !ref.current.contains(event.target as Node)) {
      setNavigationVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });

  return { ref, isNavigationVisible, setNavigationVisible };
}

export const Header: React.FC = () => {
  const { ref, isNavigationVisible, setNavigationVisible } = useNavigationDisplay(false);

  return (
    <React.Fragment>
      <header className={styles.headerWrapper} ref={ref}>
        <section className={styles.headerContainer}>
          <Link to='/' className={styles.homeLink}>
            Rheisen X Dennis
          </Link>
          { isNavigationVisible ? (
            <React.Fragment>
              <X
                className={styles.exitIcon}
                size={28}
                aria-label='Exit Page Navigation'
                onClick={() => setNavigationVisible(false)}
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
              onClick={() => setNavigationVisible(true)}
            />
          )
          }
        </section>
      </header>
      <div className={styles.pageBuffer}></div>
    </React.Fragment>
  );
}
