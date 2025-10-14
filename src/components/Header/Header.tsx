import { useRef, useState } from 'react';

import { CrossSVG, DaySVG, NightSVG } from '@snack-uikit/icons';
import { SegmentedControl } from '@snack-uikit/segmented-control';
import { Typography } from '@snack-uikit/typography';

import { Section } from '../Section';
import styles from './styles.module.scss';

export function Header() {
  const bodyRef = useRef<HTMLElement>(document.body);

  const [theme, setTheme] = useState(bodyRef.current.classList.contains('light') ? 'light' : 'dark');

  const toggleTheme = (newTheme: string) => {
    bodyRef.current.classList.toggle('light');
    bodyRef.current.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <header className={styles.header}>
      <Section>
        <nav className={styles.nav}>
          <div></div>
          <div className={styles.logo}>
            <CrossSVG className={styles.logoCross} size={16} />
            <Typography.SansHeadlineS> Полезные ссылки для работы с Cursor</Typography.SansHeadlineS>
            <CrossSVG className={styles.logoCross} size={16} />
          </div>
          <div className={styles.alignRight}>
            <SegmentedControl
              value={theme}
              onChange={toggleTheme}
              outline
              items={[
                {
                  value: 'light',
                  label: 'Light',
                  icon: <DaySVG size={20} />,
                },
                {
                  value: 'dark',
                  label: 'Dark',
                  icon: <NightSVG size={20} />,
                },
              ]}
              size='s'
            />
          </div>
        </nav>
      </Section>
    </header>
  );
}
