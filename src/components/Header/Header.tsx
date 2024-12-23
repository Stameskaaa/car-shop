import { HeaderIcon } from '../../icons/HeaderIcon/HeaderIcon';
import { TelegrammIcon } from '../../icons/TelegrammIcon/TelegrammIcon';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon/WhatsAppIcon';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper__header}>
      <header className={styles.header}>
        <HeaderIcon />
        <nav className={styles.navigation}>
          <a href="">Авто из Японии</a>
          <a href="">Авто из Китая</a>
          <a href="">Авто из Кореи</a>
          <span className={styles.about__popup_container}>
            О нас{' '}
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3538 1.35378L6.35375 6.35378C6.30732 6.40027 6.25217 6.43715 6.19147 6.46231C6.13077 6.48748 6.06571 6.50043 6 6.50043C5.9343 6.50043 5.86923 6.48748 5.80853 6.46231C5.74783 6.43715 5.69269 6.40027 5.64625 6.35378L0.646253 1.35378C0.552433 1.25996 0.499725 1.13272 0.499725 1.00003C0.499725 0.867352 0.552433 0.740104 0.646253 0.646284C0.740074 0.552463 0.867321 0.499756 1 0.499756C1.13269 0.499756 1.25993 0.552463 1.35375 0.646284L6 5.29316L10.6463 0.646284C10.6927 0.599829 10.7479 0.562978 10.8086 0.537837C10.8693 0.512696 10.9343 0.499756 11 0.499756C11.0657 0.499756 11.1308 0.512696 11.1915 0.537837C11.2521 0.562978 11.3073 0.599829 11.3538 0.646284C11.4002 0.692739 11.4371 0.747889 11.4622 0.808586C11.4873 0.869282 11.5003 0.934336 11.5003 1.00003C11.5003 1.06573 11.4873 1.13079 11.4622 1.19148C11.4371 1.25218 11.4002 1.30733 11.3538 1.35378Z"
                fill="black"
              />
            </svg>
            <div className={styles.about_popup}>
              <span>Компания</span>
              <span>Отзывы</span>
              <span>Контакты</span>
            </div>
          </span>
        </nav>

        <div className={styles.number__block}>
          <TelegrammIcon /> <WhatsAppIcon />
          <div>
            <b className={styles.number}>+7 123 456 78 90</b> <br />
            <span className={styles.number__text}>Звонок по РФ бесплатный</span>
          </div>
        </div>
      </header>
    </div>
  );
};
