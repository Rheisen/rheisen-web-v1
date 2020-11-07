import React from 'react';

import styles from './positionSection.module.scss';

interface PositionSectionProps {
  title: string,
  timeframe?: string,
  children?: React.ReactNode,
}

export const PositionSection: React.FC<PositionSectionProps> = (props) => {
  return(
    <section className={styles.positionSectionWrapper}>
      <header className={styles.positionHeaderContainer}>
        <span className={styles.positionTitle}>{props.title}</span>
        {
          props.timeframe ? (
            <span className={styles.positionTimeframe}>{props.timeframe}</span>
          ) : null
        }
      </header>
      <div>
        {props.children}
      </div>
    </section>
  );
}
