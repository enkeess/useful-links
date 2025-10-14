import { Card } from '@snack-uikit/card';
import { Typography } from '@snack-uikit/typography';

import { CURSOR_LINKS, type LinkGroup } from '#constants/links';

import styles from './styles.module.scss';

function LinkCard({ title, url, description }: { title: string; url: string; description?: string }) {
  return (
    <Card
      outline
      className={styles.linkCard}
      href={url}
      header={<Card.Header title={title} description={description} />}
    />
  );
}

function LinkGroup({ title, links }: LinkGroup) {
  return (
    <div className={styles.linkGroup}>
      <Typography.SansTitleL className={styles.groupTitle}>{title}</Typography.SansTitleL>
      <div className={styles.linksGrid}>
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.groupsContainer}>
        {CURSOR_LINKS.map((group, index) => (
          <LinkGroup key={index} {...group} />
        ))}
      </div>
    </div>
  );
}
