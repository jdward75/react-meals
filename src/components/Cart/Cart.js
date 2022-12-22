import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.cart}>
      <div className={styles["cart-content"]}>
        {Object.entries(props.cart).map(([key, value]) => {
          return (
            <div className={styles["cart-item"]} key={key}>
              <div className={styles["cart-item-description"]}>
                <div className={styles["cart-item-description-title"]}>
                  {value.title}
                </div>
                <span className={styles["cart-item-description-price"]}>
                  {value.price}
                </span>
                <span className={styles["cart-item-description-quantity"]}>
                  X {value.quantity}
                </span>
              </div>
              <div className={styles["cart-item-controls"]}>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          );
        })}
        <button onClick={props.onHideCart}>Close</button>
      </div>
    </div>
  );
};

export default Cart;
