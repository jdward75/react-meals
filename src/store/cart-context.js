import { useReducer, createContext } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: {},
    totalQuantity: 0,
    totalPrice: 0,
  });

  const addItem = (cartItem) => {
    dispatchCart({
      type: "ADD_ITEM",
      value: cartItem,
    });
  };

  const cartContext = {
    cart: cart,
    addItem: addItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
