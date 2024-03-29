import Link from 'next/link';

import { Route } from '../../models';
import styles from './Navigator.module.scss';

interface Props {
  pathNames: Route[];
}

const Navigator: React.FC<Props> = ({ pathNames }) => {
  return (
    <div className={styles.navigator}>
      {pathNames.map((pathName) => (
        <Link
          className='bg-fuchsia-500 hover:bg-sky-700'
          key={pathName.name}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
