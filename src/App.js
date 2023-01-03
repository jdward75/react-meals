import reactDOM from "react-dom";
import styles from "./App.module.css";
import Menu from "./components/Menu/Menu";
import CartPreview from "./components/Cart/CartPreview";
import Cart from "./components/Cart/Cart";
import { useReducer, useState } from "react";
import cartReducer from "./reducers/cartReducer";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: {},
    totalQuantity: 0,
    totalPrice: 0,
  });

  const displayCart = () => {
    setShowCart(true);
  };

  const hideCart = () => {
    setShowCart(false);
  };

  const addCartItem = (cartItem) => {
    dispatchCart({
      type: "ADD_ITEM",
      value: cartItem,
    });
  };

  return (
    <div className={styles.App}>
      <header>
        <h1 className={styles["app-title"]}>React Meals</h1>
        <CartPreview onDisplayCart={displayCart} cart={cart} />
      </header>
      <main className={styles.main}>
        <div className={styles["description"]}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just in time
            and of course by experienced chefs.
          </p>
        </div>
        <div className={styles["menu-container"]}>
          <Menu onAddCartItem={addCartItem} />
        </div>
      </main>
      {showCart &&
        reactDOM.createPortal(
          <Cart
            onHideCart={hideCart}
            cart={cart}
            onAddCartItem={addCartItem}
          />,
          document.getElementById("root-overlay")
        )}
    </div>
  );
}

export default App;
