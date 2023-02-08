import React from "react";

const CartContext = React.createContext({
  cartTotal: 0,
  cartList: [],
  orderTotal: 0,
  onAddToCart: (amount, meal) => {},
  onRemoveItem: () => {},
  onAddItem: () => {},
});

export default CartContext;
