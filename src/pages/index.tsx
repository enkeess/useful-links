import { Contacts } from '#components/Contacts';
import { Header } from '#components/Header';
import { Instructions } from '#components/Instructions';

import styles from './styles.module.scss';

export function Pages() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Instructions />

      <Contacts />
    </div>
  );
}
