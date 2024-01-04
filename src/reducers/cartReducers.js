// cartReducer.js
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      if (!state.some((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
