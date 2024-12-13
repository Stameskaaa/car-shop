import { MainIcon } from '../../icons/MainIcon/MainIcon';
import { TelegrammIcon } from '../../icons/TelegrammIcon/TelegrammIcon';
import { WhatsAppIcon } from '../../icons/WhatsAppIcon/WhatsAppIcon';
import { YouTubeIcon } from '../../icons/YouTubeIcon/YouTubeIcon';
import styles from './Footer.module.scss';
import { LinkContaner } from './LinkContaner/LinkContaner';

const autoJapan = {
  title: 'Авто из Японии',
  carList: [
    'Toyota',
    'Nissan',
    'Honda',
    'Mazda',
    'Mitsubishi',
    'Subaru',
    'Suzuki',
    'Lexus',
    'BMW',
    'Daihatsu',
  ],
};

const autoJapan2 = {
  title: 'Авто из Японии',
  carList: [
    'Changan',
    'Exeed',
    'Geely',
    'Chery',
    'Haval',
    'FAW',
    'BYD',
    'JAC',
    'Lifan',
    'DongFeng',
  ],
};

const autoKorea = {
  title: 'Авто из Кореи',
  carList: ['Hyundai', 'Kia', 'SsangYong', 'Daewoo', 'Samsung'],
};

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top__content}>
          <div className={styles.top__icon}>
            <MainIcon />
            <p>
              <span>О нас</span>
              <span>Каталог авто</span>
            </p>
          </div>

          <div className={styles.top__links_list}>
            <LinkContaner {...autoJapan} />
            <LinkContaner {...autoJapan2} />
            <LinkContaner {...autoKorea} />
          </div>
        </div>

        <div className={styles.bottom__content}>
          <div className={styles.bottom__policy}>
            {' '}
            <p>Политика конфиденциальности</p>
            <p>© 2003–2024 ООО "Автоцентр"</p>
          </div>
          <div className={styles.bottom__contacts}>
            <div>
              <WhatsAppIcon />
              <TelegrammIcon />
              <YouTubeIcon />
            </div>

            <p>
              <span>+7 123 456 78 90</span>
              <span>Звонок по РФ бесплатный</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
