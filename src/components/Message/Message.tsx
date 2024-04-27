import styles from "./Message.module.scss";

const Message = () => {
  return (
    <div className={styles.message}>
      <h1>
        ЕСТЬ ТОЛЬКО <span className={styles.white}>БЕЛЫЙ</span> И ЧЕРНЫЙ.
        ОСТАЛЬНОЕ - ОТТЕНКИ.
      </h1>
    </div>
  );
};

export default Message;
