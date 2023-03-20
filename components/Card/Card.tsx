import Image from 'next/image';

import styles from './Card.module.scss';

interface CardData {
  name: string;
  created: string;
  type?: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= 'No Type';
  return (
    <div className={styles.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image
          width='100'
          height='100'
          src={data.image}
          blurDataURL={data.image}
          placeholder='blur'
          alt={data.name}
          priority
        />
      )}
    </div>
  );
}

export default Card;
