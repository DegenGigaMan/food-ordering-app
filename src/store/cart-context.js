import React from "react";

const CartContext = React.createContext({
  cartTotal: 0,
  onAddToCart: (amount, meal) => {},
  cartList: [],
  onRemoveItem: () => {},
  onAddItem: () => {},
  orderTotal: 0,
});

export default CartContext;
