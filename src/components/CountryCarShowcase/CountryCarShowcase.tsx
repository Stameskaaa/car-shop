import { CarShowCaseCard } from './CarShowCaseCard/CarShowCaseCard';
import styles from './CountryCarShowcase.module.scss';
import car1 from '../../assets/CountryShowCase/car1.png';
import car2 from '../../assets/CountryShowCase/car2.png';

export const CountryCarShowcase = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Автомобили из Китая и Кореи</h1>
          <p>Поможем с покупкой автомобилей из Китая и Кореи.</p>
        </header>

        <div className={styles.card__container}>
          <CarShowCaseCard
            image={car1}
            title={'Автомобили из Китая'}
            text={'Chery, Haval, EXEED и другие китайские автомобили.'}
          />
          <CarShowCaseCard
            image={car2}
            title={'Автомобили из Китая'}
            text={'Chery, Haval, EXEED и другие китайские автомобили.'}
          />
        </div>
      </section>
    </div>
  );
};
