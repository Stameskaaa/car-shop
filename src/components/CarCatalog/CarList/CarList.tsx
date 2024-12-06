import { CarItem } from '../CarItem/CarItem';
import car1 from '../../../assets/car1.png';
import styles from './CarList.module.scss';
const car = {
  img: car1,
  name: 'Subaru LEVORG VN5',
  year: 2021,
  size: 1.8,
  driveType: '4WD',
  fuelType: 'Бензин',
  transmissionType: 'Вариатор',
  price: '2 155 600',
};
const cars = Array.from({ length: 8 }, () => car);

export const CarList = () => {
  return (
    <div className={styles.container}>
      {cars.map((car, index) => (
        <CarItem key={index} {...car} />
      ))}
    </div>
  );
};
