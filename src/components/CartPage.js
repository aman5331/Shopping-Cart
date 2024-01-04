// CartPage.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h2>My Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <button onClick={handleClearCart}>Clear Cart</button>
        {/* Add Checkout Button */}
      </div>
    </div>
  );
};

export default CartPage;
