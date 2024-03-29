import { useRef, useContext } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const quantityRef = useRef();

  const cartCtx = useContext(CartContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const quantity = parseInt(+quantityRef.current.value);
    const cartItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: quantity,
    };
    cartCtx.addItem(cartItem);
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles.description}>
        <label>{props.title}</label>
        <div>{props.description}</div>
        <div className={styles.price}>{`$${props.price}`}</div>
      </div>
      <form className={styles.controls} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="quantity">Amount</label>
          <input id="quantity" type="text" ref={quantityRef}></input>
        </div>
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default MenuItem;
