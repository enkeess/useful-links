import { Divider } from '@snack-uikit/divider';
import { Typography } from '@snack-uikit/typography';

import { LinkCard } from '#components/LinkCard';
import { LinksGroup as LinksGroupType } from '#types/links';

import styles from './styles.module.scss';

type LinksGroupProps = {
  group: LinksGroupType;
}

export function LinksGroup({ group }: LinksGroupProps) {
  return (
    <section className={styles.group}>
      <div className={styles.header}>
        <Typography 
          family="sans"
          purpose="headline"
          size="l"
          className={styles.title}
        >
          {group.title}
        </Typography>
        <Divider className={styles.divider} />
      </div>
      
      <div className={styles.cards}>
        {group.items.map((item, index) => (
          <LinkCard 
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
