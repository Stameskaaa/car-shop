import { NextArrow } from '../../icons/NextArrow/NextArrow';
import { RedButton } from '../RedButton/RedButton';
import styles from './CarCatalog.module.scss';
import { CarList } from './CarList/CarList';

export const CarCatalog = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Автомобили из Японии</h1>
        <div className={styles.introText}>
          <p>Toyota, Honda, Nissan и другие японские автомобили.</p>

          <button className={styles.button}>
            Смотреть все <NextArrow />
          </button>
        </div>
      </header>

      <CarList />

      <div className={styles.checkAllButt_container}>
        <RedButton text="Смотреть все" />
      </div>
    </section>
  );
};
