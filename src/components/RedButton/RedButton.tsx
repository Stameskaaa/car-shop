import styles from './RedButton.module.scss';

interface Props {
  text: string;
}

export const RedButton: React.FC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
