import styles from "./MenuItem.module.css";

const MenuItem = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles.description}>
        <label>name</label>
        <div>description description description</div>
        <div className={styles.price}>price</div>
      </div>
      <form className={styles.controls}>
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
