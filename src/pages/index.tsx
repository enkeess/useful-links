import { Typography } from '@snack-uikit/typography';

import { LinksGroup } from '#components/LinksGroup';
import { LINKS_GROUPS } from '#constants/links';

import styles from './styles.module.scss';

export function Pages() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography 
          family="sans"
          purpose="display"
          size="l"
          className={styles.title}
        >
          Полезные ссылки
        </Typography>
        <Typography 
          family="sans"
          purpose="body"
          size="m"
          className={styles.subtitle}
        >
          Коллекция полезных ресурсов для разработчиков
        </Typography>
      </header>

      <main className={styles.main}>
        {LINKS_GROUPS.map((group, index) => (
          <LinksGroup 
            key={`${group.title}-${index}`}
            group={group}
          />
        ))}
      </main>
    </div>
  );
}
