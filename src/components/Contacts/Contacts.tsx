import { Card } from '@snack-uikit/card';
import { Typography } from '@snack-uikit/typography';

import { Section } from '../Section';
import styles from './styles.module.scss';

export function Contacts() {
  const telegramUrl = 'https://t.me/enkeess';
  const telegramUsername = '@enkeess';

  return (
    <div className={styles.contacts}>
      <Section>
        <Card outline className={styles.contactsCard}>
          <div className={styles.contactsContent}>
            <Typography.SansTitleL className={styles.contactsTitle}>Контакты</Typography.SansTitleL>
            <Typography.SansBodyM className={styles.contactsDescription}>
              Если у вас есть вопросы или предложения, напишите мне в Telegram
            </Typography.SansBodyM>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramLink}
            >
              <Typography.SansBodyL className={styles.telegramUsername}>{telegramUsername}</Typography.SansBodyL>
            </a>
          </div>
        </Card>
      </Section>
    </div>
  );
}

