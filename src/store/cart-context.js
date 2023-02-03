import React, { useState } from "react";

const CartContext = React.createContext({
  cartTotal: 0,
  onAdd: (amount, meal) => {},
  cartList: [],
});

export const CartContextProvider = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartList, setCartList] = useState([]);

  const addToCartHandler = (amount, meal) => {
    setCartTotal((prevTotal) => prevTotal + amount);
    setCartList((prevList) => [{...meal, amount: amount }, ...prevList]);
  };

  return (
    <CartContext.Provider
      value={{
        cartTotal: cartTotal,
        onAdd: addToCartHandler,
        cartList: cartList,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
