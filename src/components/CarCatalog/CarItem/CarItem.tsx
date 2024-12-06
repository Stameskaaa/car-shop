import styles from './CarItem.module.scss';

interface Props {
  img: string;
  name: string;
  year: number;
  size: number;
  driveType: string;
  fuelType: string;
  transmissionType: string;
  price: string;
}

export const CarItem: React.FC<Props> = ({
  img,
  name,
  year,
  size,
  driveType,
  fuelType,
  transmissionType,
  price,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt="Car" />
      <h1 className={styles.header}>{name}</h1>
      <p className={styles.info}>
        {year} • {size} • {driveType} • {fuelType} • {transmissionType}
      </p>
      <div className={styles.price__block}>
        <p>{price}</p> <button>Оставить заявку</button>
      </div>
    </div>
  );
};
