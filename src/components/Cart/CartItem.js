import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const addCartItem = () => {
    const cartItem = {
      id: props.id,
      title: props.item.title,
      price: props.item.price,
      quantity: 1,
    };
    props.onAddCartItem(cartItem);
  };

  const removeCartItem = (event) => {
    const cartItem = {
      id: props.id,
      title: props.item.title,
      price: props.item.price,
      quantity: -1,
    };
    props.onAddCartItem(cartItem);
  };

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item-description"]}>
        <div className={styles["cart-item-description-title"]}>
          {props.item.title}
        </div>
        <span className={styles["cart-item-description-price"]}>
          {props.item.price}
        </span>
        <span className={styles["cart-item-description-quantity"]}>
          X {props.item.quantity}
        </span>
      </div>
      <div className={styles["cart-item-controls"]}>
        <button onClick={removeCartItem}>-</button>
        <button onClick={addCartItem}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
