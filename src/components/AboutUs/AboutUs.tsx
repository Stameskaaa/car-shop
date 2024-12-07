import styles from './AboutUs.module.scss';
import image from '../../assets/AboutUsBack.png';
import { MainIcon } from '../../icons/MainIcon/MainIcon';
import {
  AboutUsClock,
  AboutUsClockPeople,
  AboutUsReward,
  AboutUsDollar,
  AboutUsLike,
  AboutUsHands,
  AboutUsPeoples,
} from '../../icons/AboutUs/AboutUsIcons';
import { RedButton } from '../RedButton/RedButton';

const iconsArr = [
  { icon: <AboutUsClock />, text: 'Короткие сроки доставки ' },
  { icon: <AboutUsClockPeople />, text: 'Полное сопровождение. Связь с клиентом 24/7' },
  { icon: <AboutUsReward />, text: 'Опыт работы более 5 лет ' },
  { icon: <AboutUsDollar />, text: '⁠Привезем авто с выгодой до 30% ниже рынка РФ' },
  { icon: <AboutUsLike />, text: 'Высокий сервис для клиентов' },
  { icon: <AboutUsHands />, text: 'Полная клиентоориентированность' },
  { icon: <AboutUsPeoples />, text: '⁠Профессионализм сотрудников компании' },
];

export const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>О нас</h1>
            <p>
              Компания «AUTOCENTER» предлагает широкий выбор автомобилей от ведущих мировых
              производителей. Мы специализируемся на продаже новых и подержанных авто. Наша команда
              профессионалов поможет вам выбрать идеальный автомобиль, учитывая ваши потребности и
              бюджет.
            </p>
          </div>

          <img src={image} alt="cars" />
          <MainIcon />
        </div>

        <div className={styles.icons__container}>
          {iconsArr.map((iconData, index) => {
            return (
              <div className={styles.icons} key={index}>
                {iconData.icon} <span>{iconData.text}</span>
              </div>
            );
          })}
        </div>

        <RedButton text="Рассчитать стоимость" />
      </section>
    </div>
  );
};
