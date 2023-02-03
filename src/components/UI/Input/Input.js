import styles from './Input.module.css';

const Input = (props) => {

  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input onChange={props.onChange} value={props.value}  type="number" />
    </div>
  );
};

export default Input;