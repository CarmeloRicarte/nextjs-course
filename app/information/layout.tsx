import { ReactNode } from 'react';

import { firacode } from '../models';
import styles from './information-layout.module.scss';

function InformationLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${firacode.className} ${styles.informationLayout}`}>
      {children}
    </div>
  );
}

export default InformationLayout;
