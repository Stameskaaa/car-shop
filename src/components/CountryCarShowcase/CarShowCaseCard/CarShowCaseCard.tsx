import styles from './CarShowCaseCard.module.scss';

interface Props {
  image: string;
  title: string;
  text: string;
}

export const CarShowCaseCard: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="car" />
      <h1>{title}</h1>
      <p>{text}</p>
      <button className={styles.button}>Смотреть в каталоге</button>
    </div>
  );
};
