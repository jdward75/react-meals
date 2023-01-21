import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const order = () => {
    console.log(cartCtx.cart);
  };

  return (
    <div className={styles.cart}>
      <div className={styles["cart-content"]}>
        {Object.entries(cartCtx.cart.items).map(([key, value]) => {
          return (
            <CartItem
              key={key}
              id={key}
              item={value}
              onAddCartItem={cartCtx.addItem}
            />
          );
        })}
        <div className={styles["cart-total-price"]}>
          <div className={styles["cart-total-price-label"]}>Total Price</div>
          <div className={styles["cart-total-price-value"]}>
            {`$${cartCtx.cart.totalPrice}`}
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
