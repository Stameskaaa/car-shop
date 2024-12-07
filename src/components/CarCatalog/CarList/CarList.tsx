import { CarItem } from '../CarItem/CarItem';
import car1 from '../../../assets/CarCatalog/car1.png';
import car2 from '../../../assets/CarCatalog/car2.png';
import car3 from '../../../assets/CarCatalog/car3.png';
import car4 from '../../../assets/CarCatalog/car4.png';
import car5 from '../../../assets/CarCatalog/car5.png';
import car6 from '../../../assets/CarCatalog/car6.png';
import car7 from '../../../assets/CarCatalog/car7.png';
import car8 from '../../../assets/CarCatalog/car8.png';
import styles from './CarList.module.scss';

const cars = [
  {
    img: car1,
    name: 'Subaru LEVORG VN5',
    year: 2021,
    size: '1.8',
    driveType: '4WD',
    fuelType: 'Бензин',
    transmissionType: 'Вариатор',
    price: '2 155 600',
  },
  {
    img: car2,
    name: 'Mazda Mazda6 2.5 AT Touring',
    year: 2020,
    size: '2.5',
    driveType: 'Передний',
    fuelType: 'Бензин',
    transmissionType: 'Автомат',
    price: '2 802 400',
  },
  {
    img: car3,
    name: 'Toyota CROWN AZSH21',
    year: 2019,
    size: '2.5',
    driveType: '4WD',
    fuelType: 'Гибрид',
    transmissionType: 'Планетарная',
    price: '2 852 600',
  },
  {
    img: car4,
    name: 'Lexus RC F USC10',
    year: 2019,
    size: '5.0',
    driveType: 'Задний',
    fuelType: 'Бензин',
    transmissionType: 'Автомат',
    price: '5 965 600',
  },
  {
    img: car5,
    name: 'Mitsubishi ECLIPSE CROSS G...',
    year: 2019,
    size: '1.5',
    driveType: 'Передний',
    fuelType: 'Бензин',
    transmissionType: 'Вариатор',
    price: '2 005 200',
  },
  {
    img: car6,
    name: 'Subaru IMPREZA WRX VAG',
    year: 2018,
    size: '2.0',
    driveType: '4WD',
    fuelType: 'Бензин',
    transmissionType: 'Вариатор',
    price: '2 852 600',
  },
  {
    img: car7,
    name: 'Lexus RX200T AGL20W',
    year: 2017,
    size: '2.0',
    driveType: 'Передний',
    fuelType: 'Бензин',
    transmissionType: 'Автомат',
    price: '2 999 800',
  },
  {
    img: car8,
    name: 'Mitsubishi Outlander PHEV G...',
    year: 2013,
    size: '3.0',
    driveType: '4WD',
    fuelType: 'Бензин',
    transmissionType: 'Автомат',
    price: '2 852 600',
  },
];

export const CarList = () => {
  return (
    <div className={styles.container}>
      {cars.map((car, index) => (
        <CarItem key={index} {...car} />
      ))}
    </div>
  );
};
