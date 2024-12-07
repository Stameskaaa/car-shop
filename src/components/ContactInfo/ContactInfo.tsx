import { Contacts2Gis, ContactsVL, ContactsYandex } from '../../icons/Contacts/ContactsIcons';
import { Form } from '../Form/Form';
import styles from './ContactInfo.module.scss';

export const ContactInfo = () => {
  return (
    <div className={styles.wraper}>
      <section className={styles.container}>
        <div className={styles.left_side}>
          <div className={styles.info}>
            <h1>Контактная информация</h1>
            <p>Оставьте свою заявку и наш менеджер свяжется с Вами для уточнения деталей.</p>
          </div>

          <div className={styles.links__container}>
            <div className={styles.сontact_details__container}>
              <div className={styles.сontact_details}>
                <h4>Позвонить</h4> <p>+7 123 456 78 90</p>
              </div>
              <div className={styles.сontact_details}>
                <h4>Написать</h4> <p>info@example.com</p>
              </div>
              <div className={styles.сontact_details}>
                <h4>Адрес</h4> <p>123 Main Street, Tokyo, Japan</p>
              </div>
            </div>

            <div className={styles.external_links}>
              <div className={styles.external_link}>
                <Contacts2Gis /> <p>Мы на 2гис</p>
              </div>
              <div className={styles.external_link}>
                <ContactsYandex /> <p>Мы на Яндекс картах</p>
              </div>
              <div className={styles.external_link}>
                <ContactsVL /> <p>VL справочник</p>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </section>
    </div>
  );
};
