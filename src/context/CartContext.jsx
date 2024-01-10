import { createContext, useContext, useState } from "react";
import { getProductById } from "../fetch/fetchProductData";

const CartContext = createContext({});
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const increaseCartItem = (id) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };
  const decreaseCartItem = (id) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };
  const removeCartItem = (id) => {
    console.log(id);
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  const addToCart = (id) => {
    setCartItems((currentItems) => {
      return [...currentItems, { id, quantity:1 }];
    });
  };
  const getItemQuantity = (id)=>{
    const q = cartItems.find(item => item.id === id)?.quantity || 0;
    return q;
  }
  

  // console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        increaseCartItem,
        addToCart,
        removeCartItem,
        decreaseCartItem,
        getItemQuantity,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(CartContext);
};

export default CartContext;
