import { useState } from "react";
import styles from "./Faq.module.scss";

const Faq = () => {
  const [check, setChecked] = useState<boolean>(false);
  const [secondChecked, setSecondChecked] = useState<boolean>(false);
  return (
    <div>
      <div className={styles.container}>
        <button
          onClick={() => setChecked((prev) => !prev)}
          className={styles.button}
        >
          <p>ОБЩИЕ ВОПРОСЫ</p>
          <img
            className={styles.buttonImg}
            src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
            alt=""
          />
        </button>
        <div className={check ? styles.info : styles.none}>
          <h2 className={styles.name}>Зачем все это?</h2>
          <p className={styles.text}>
            Вызывающе, дорого, престижно — это понятия, которыми руководствуются
            рабы моды. Наша продукция является жестом неуважения к людям
            гламурного разума.
          </p>
          <h2 className={styles.name}>Почему так дорого?</h2>
          <p className={styles.text}>
            Мы используем одну из самых дорогих тканей и материалов в наших
            изделиях, в то время как весь рынок нацелен на дешевое производство.
          </p>
          <h2 className={styles.name}>
            Будет ли еще товар, кроме футболок, свитшотов и т.д?
          </h2>
          <p className={styles.text}>
            Все зависит от спроса. Производство качественных вещей
            дорогостоящее, поэтому мы сначала рассуждаем: нужна ли эта новая
            вещь. Сейчас мы планируем запустить производство новых рюкзаков.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <button
          onClick={() => setSecondChecked((prev) => !prev)}
          className={styles.button}
        >
          <p>ДОСТАВКА И ОПЛАТА</p>
          <img
            className={styles.buttonImg}
            src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
            alt=""
          />
        </button>
        <div className={secondChecked ? styles.info : styles.none}>
          <h2 className={styles.name}>Как формируется стоимость доставки?</h2>
          <p className={styles.text}>
            Каждый товар имеет свой вес: футболки от 170 до 260 грамм, свитшоты
            от 400 до 700, худые до 850 и так далее. Это зависит от размера
            XS-3XL. Поэтому при заказе футболки, если добавить свитшот, цена
            доставки увеличится (из-за веса посылки). До 500 грамм одна цена, до
            1000 вторая, до 2000 грамм третья, и выше
          </p>
          <h2 className={styles.name}>Какие комиссии платежных систем?</h2>
          <p className={styles.text}>
            У платежной системы Wayforpay комиссия 0%, но при оплате происходит
            конвертация, если оплата происходит в долларах, или в любой другой
            валюте.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
