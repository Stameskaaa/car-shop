import { RedButton } from '../RedButton/RedButton';
import styles from './Form.module.scss';

export const Form = () => {
  return (
    <div className={styles.container}>
      <h1>Оставить заявку</h1>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form} action="">
        <div className={`${styles.formGroup} ${styles.inputGroup}`}>
          <label htmlFor="name">Имя</label>
          <input id="name" placeholder="Введите имя" type="text" />
        </div>
        <div className={`${styles.formGroup} ${styles.inputGroup}`}>
          <label htmlFor="phone">
            Телефон <span>(Обязательно)</span>
          </label>
          <input id="phone" placeholder="+7" type="text" />
        </div>
        <div className={`${styles.formGroup} ${styles.areaGroup}`}>
          <label htmlFor="question">Уточните свой вопрос</label>
          <textarea rows={5} id="question" placeholder="Введите текст сообщения" name=""></textarea>
        </div>
        <div className={styles.checkBoxGroup}>
          <input id="checkbox" type="checkbox" name="" />
          <label htmlFor="checkbox">
            С <span>правилами политики конфиденциальности</span> ознакомлен
          </label>
        </div>
        <div className={styles.buttonGroup}>
          <RedButton text="Отправить" />
        </div>
      </form>
    </div>
  );
};
