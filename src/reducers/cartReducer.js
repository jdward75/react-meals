const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let prevQuantity = 0;
    if (state.items[action.value.id]) {
      prevQuantity = state.items[action.value.id].quantity;
    }
    const newState = { ...state, items: { ...state.items } };
    let newQuantity = prevQuantity + action.value.quantity;
    if (newQuantity <= 0) {
      delete newState.items[action.value.id];
    } else {
      newState.items[action.value.id] = {
        title: action.value.title,
        price: action.value.price,
        quantity: newQuantity,
      };
    }
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const value of Object.values(newState.items)) {
      totalQuantity += value.quantity;
      totalPrice += value.quantity * value.price;
    }
    newState.totalQuantity = totalQuantity;
    newState.totalPrice = totalPrice.toFixed(2);
    return newState;
  }

  return state;
};

export default cartReducer;
