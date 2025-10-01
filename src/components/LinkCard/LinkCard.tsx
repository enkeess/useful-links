import { ButtonFilled } from '@snack-uikit/button';
import { Card } from '@snack-uikit/card';
import { Typography } from '@snack-uikit/typography';

import { LinkItem } from '#types/links';

import styles from './styles.module.scss';

type LinkCardProps = {
  item: LinkItem;
}

export function LinkCard({ item }: LinkCardProps) {
  const handleClick = () => {
    window.open(item.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={item.imgUrl} 
          alt={item.title}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <Typography 
          family="sans"
          purpose="title"
          size="m"
          className={styles.title}
        >
          {item.title}
        </Typography>
        
        <Typography 
          family="sans"
          purpose="body"
          size="s"
          className={styles.description}
        >
          {item.description}
        </Typography>
        
        <ButtonFilled 
          onClick={handleClick}
          className={styles.button}
          size="s"
          label="Перейти"
        />
      </div>
    </Card>
  );
}
