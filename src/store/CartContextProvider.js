import React, { useReducer } from "react";
import CartContext from "./cart-context";

// const cartReducer = (state, action) => {
//   if (action.type === "ADD_TO_CART") {
//     if (state.cartList.length === 0) {
//       const orderSum = action.item.price * action.amount;
//       const updatedCart = state.cartList.concat(action.item);
//       return {
//         cartTotal: state.cartTotal + action.amount,
//         orderTotal: orderSum,
//         cartList: updatedCart,
//       };
//     }

//     if (state.cartList.length > 0) {
//       let orderSum = state.orderTotal + action.item.price * action.amount;
//       let existingItemIndex = state.cartList.findIndex(
//         (item) => item.id === action.item.id
//       );
//       let existingCartItem = state.cartList[existingItemIndex];
//       let newCartList;
//       let updatedItem;
//       if (existingCartItem) {
//         updatedItem = {
//           ...existingCartItem,
//           amount: existingCartItem.amount + action.item.amount,
//         };
//         newCartList = [...state.cartList];
//         newCartList[existingItemIndex] = updatedItem;
//       } else {
//         newCartList = state.cartList.concat({
//           ...action.item,
//           amount: action.amount,
//         });
//       }
//       return {
//         cartTotal: state.cartTotal + action.amount,
//         orderTotal: orderSum,
//         cartItems: newCartList,
//       };
//     }
//   }

//   return { cartTotal: 0, orderTotal: 0, cartItems: [] };
// };

const defaultCartState = {
  cartItems: [],
  orderTotal: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newOrderTotal =
      state.orderTotal + action.item.price * action.item.amount;
    const currentItems = state.cartItems;
    const existingItemIndex = currentItems.findIndex(
      (item) => action.item.id === item.id
    );
    const existingItem = state.cartItems[existingItemIndex];
    let updatedItem;
    let updatedCart;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedCart = [...state.cartItems];
      updatedCart[existingItemIndex] = updatedItem;
    } else {
      updatedCart = state.cartItems.concat(action.item);
    }
    return { cartItems: updatedCart, orderTotal: newOrderTotal };
  }

  if (action.type === "REMOVE") {
    const indexToRemove = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const itemToRemove = state.cartItems[indexToRemove];
    let newOrderTotal = state.orderTotal - itemToRemove.price;
    let updatedCart;

    if (itemToRemove.amount === 1) {
      updatedCart = state.cartItems.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = { ...itemToRemove, amount: itemToRemove.amount - 1 };
      updatedCart = [...state.cartItems];
      updatedCart[indexToRemove] = updatedItem;
    }
    return { cartItems: updatedCart, orderTotal: newOrderTotal };
  }

  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const value = {
    cartItems: cartState.cartItems,
    orderTotal: cartState.orderTotal,
    onAdd: addItemToCartHandler,
    onRemove: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
