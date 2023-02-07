import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  cartTotal: 0,
  onAddToCart: (amount, meal) => {},
  cartList: [],
  onRemoveItem: () => {},
  onAddItem: () => {},
  total: 0,
});

export const CartContextProvider = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [amountTotal, setAmountTotal] = useState(0);

  const addToCartHandler = (amount, meal) => {
    setCartTotal((prevTotal) => prevTotal + amount);

    if (cartList.length === 0) {
      setCartList((prevList) => [...prevList, { ...meal, amount: amount }]);
      return;
    }
    if (cartList.length > 0) {
      let existingItem = false;
      for (let i of cartList) {
        if (i.name === meal.name) {
          i.amount += amount;
          existingItem = true;
        }
      }
      if (!existingItem) {
        setCartList((prevList) => [...prevList, { ...meal, amount: amount }]);
      }
      return;
    }
  };

  const removeItemHandler = (itemName) => {
    for (let i of cartList) {
      if (i.name === itemName && i.amount > 0) {
        i.amount -= 1;
        setCartTotal((prevTotal) => prevTotal - 1);
      }
      if (i.amount === 0) {
        let list = cartList.filter((amount) => amount.amount > 0);
        setCartList(list);
      }
    }
    setCartList((prevList) => [...prevList]);
  };

  const addItemHandler = (itemName) => {
    for (let i of cartList) {
      if (i.name === itemName) {
        i.amount += 1;
        setCartTotal((prevTotal) => prevTotal + 1);
      }
    }
    setCartList((prevList) => [...prevList]);
  };

  useEffect(() => {
    let sum = 0;
    if (cartList.length > 0) {
      for (let i of cartList) {
        sum += i.amount * i.price;
      }
    }
    setAmountTotal(sum.toFixed(2));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        cartTotal: cartTotal,
        onAddToCart: addToCartHandler,
        cartList: cartList,
        onRemoveItem: removeItemHandler,
        onAddItem: addItemHandler,
        total: amountTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
