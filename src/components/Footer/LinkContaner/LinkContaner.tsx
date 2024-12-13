import styles from './LinkContaner.module.scss';

interface Props {
  title: string;
  carList: string[];
}

export const LinkContaner: React.FC<Props> = ({ title, carList }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>
        {carList.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </p>
    </div>
  );
};
