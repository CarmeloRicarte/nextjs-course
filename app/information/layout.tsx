import { ReactNode } from 'react';

import styles from './information-layout.module.scss';

function InformationLayout({ children }: { children: ReactNode }) {
  return <div className={styles.informationLayout}>{children}</div>;
}

export default InformationLayout;
