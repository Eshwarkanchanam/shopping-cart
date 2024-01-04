import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems } = useShoppingCartContext();
  return (
    <Link to={"/cart"}>
      <span className="relative">
        <ShoppingCartIcon fontSize="large" />
        <span className="border-2 border-black inline-block text-center text-xs h-5 w-5 rounded-full absolute -right-1 -bottom-1 z-50 bg-white">
          {cartItems.length}
        </span>
      </span>
    </Link>
  );
};

export default Cart;
