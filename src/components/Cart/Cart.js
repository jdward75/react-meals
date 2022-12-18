import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.cart}>
      <div className={styles["cart-content"]}>
        <button onClick={props.onHideCart}>Close</button>
        {props.cart.forEach((item) => {
          return (
            <div>
              <title>item.title</title>
              <div>item.quantity</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
