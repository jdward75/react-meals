const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let prevQuantity = 0;
    if (state[action.value.id]) {
      prevQuantity = state[action.value.id].quantity;
    }
    const newState = { ...state };
    return (newState[action.value.id] = {
      title: action.value.title,
      quantity: prevQuantity + action.value.quantity,
    });
  }

  return state;
};

export default cartReducer;
