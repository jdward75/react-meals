import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const order = () => {
    console.log(props.cart);
  };
  return (
    <div className={styles.cart}>
      <div className={styles["cart-content"]}>
        {Object.entries(props.cart.items).map(([key, value]) => {
          return (
            <CartItem
              key={key}
              id={key}
              item={value}
              onAddCartItem={props.onAddCartItem}
            />
          );
        })}
        <div className={styles["cart-total-price"]}>
          <div className={styles["cart-total-price-label"]}>Total Price</div>
          <div className={styles["cart-total-price-value"]}>
            {props.cart.totalPrice}
          </div>
        </div>
        <div className={styles["cart-content-footer"]}>
          <button
            className={styles["cart-content-button-close"]}
            onClick={props.onHideCart}
          >
            Close
          </button>
          <button
            className={styles["cart-content-button-order"]}
            onClick={order}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
