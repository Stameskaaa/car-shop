import styles from './MainSection.module.scss';
import cars from '../../assets/cars.png';
import triangle from '../../assets/triangle.png';
import { RedButton } from '../RedButton/RedButton';

export const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info__block}>
          <h1>Авто из Японии, Кореи и Китая с выгодой до 30% ниже рынка РФ</h1>
          <p>Высокий сервис для клиентов, от заключения договора до выдачи/отправки авто.</p>
          <RedButton text="Рассчитать стоимость" />
        </div>

        <div className={styles.image__container}>
          <img className={styles.image__cars} src={cars} alt="cars" />
          <img className={styles.image__triangle} src={triangle} alt="triangle" />
        </div>
      </div>
    </section>
  );
};
