import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.description}>
        <label>{props.title}</label>
        <div>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <form className={styles.controls} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="quantity">Amount</label>
          <input id="quantity" type="number"></input>
        </div>
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default MenuItem;
