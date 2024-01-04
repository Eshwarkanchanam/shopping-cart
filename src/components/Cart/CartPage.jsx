import React, { useState } from "react";
import { useShoppingCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
const CartPage = () => {
  const { cartItems } = useShoppingCartContext();
  const [totalPrice,setTotalPrice] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col max-w-screen-xl m-auto">
      {cartItems.length === 0 ? (
        <p className="m-8 text-2xl bg-gray-200 capitalize p-2">please add products to cart</p>
      ) : (
        <>
          <h1 className="text-xl font-semibold mt-8">Your Shopping Cart</h1>
          <ul className="w-full">
            <li className="grid mt-2 mb-4 border-2" style={{gridTemplateColumns:"1fr 2fr 1fr 1fr 1fr"}}>
              <span className=" text-center">Image</span>
              <span className=" text-center">Product Name</span>
              <span className=" text-center">Quantity</span>
              <span className=" text-center">Price</span>
              <span className=" text-center">Remove</span>
            </li>
            {cartItems.map(({ id, quantity }) => {
              return <CartItem id={id} quantity={quantity} key={id} setTotalPrice={setTotalPrice}/>;
            })}
            <li className="grid mt-2 font-semibold" style={{gridTemplateColumns:"1fr 2fr 1fr 1fr 1fr"}}>
              <span style={{gridColumnStart:"4"}}>Total price:{(totalPrice).toFixed(2)}</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default CartPage;
