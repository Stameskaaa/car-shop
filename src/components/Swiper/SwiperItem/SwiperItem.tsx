import { StarIcon } from '../../../icons/StarIcon/StarIcon';
import styles from './SwiperItem.module.scss';

interface Props {
  starCount: number;
  src: string;
  name: string;
  text: string;
  date: string;
}

export const SwiperItem: React.FC<Props> = ({ starCount, src, name, text, date }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={name} />
      <div className={styles.item_info}>
        <h1>{name}</h1>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon gold={starCount > i ? true : false} key={i} />
          ))}
        </div>
        <p>{text}</p>
        <div className={styles.item_date}>{date}</div>
      </div>
    </div>
  );
};
