import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input  type="number" />
    </div>
  );
};

export default Input;