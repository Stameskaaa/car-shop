import { HeaderIcon } from '../../icons/HeaderIcon/HeaderIcon';
import { TelegrammIcon } from '../../icons/TelegrammIcon/TelegrammIcon';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon/WhatsAppIcon';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderIcon />
      <nav className={styles.navigation}>
        <a href="">Авто из Японии</a>
        <a href="">Авто из Китая</a>
        <a href="">Авто из Кореи</a>
        <span>О нас</span>
      </nav>

      <div>
        <TelegrammIcon /> <WhatsAppIcon />
        <span>
          +7 123 456 78 90 <br />
          Звонок по РФ бесплатный
        </span>
      </div>
    </header>
  );
};
