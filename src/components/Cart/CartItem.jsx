import React, { useEffect, useState } from "react";
import { useShoppingCartContext } from "../../context/CartContext";
import IncreaseCartItem from "./IncreaseCartItem";
import DecreaseCartItem from "./DecreaseCartItem";
import { getProductById } from "../../fetch/fetchProductData";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ id, quantity, setTotalPrice }) => {
  const { increaseCartItem, decreaseCartItem, removeCartItem } =
    useShoppingCartContext();
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const productDetails = await getProductById(id);
      setProduct(productDetails);
      setTotalPrice(
        (prevPrice) => prevPrice + productDetails.price * currentQuantity
      );
    })();
  }, []);
  const { image, title, price } = product;

  const increaseTotalPrice = () => {
    if (currentQuantity < 10) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
    }
  };
  const decreaseTotalPrice = () => {
    if (currentQuantity > 1) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
    }
  };

  return (
    <li
      className="grid grid-rows-1 border-2 p-1 mt-4"
      style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr" }}
    >
      <section className="h-full">
        <img src={image} alt="" className="h-[100px] object-contain w-full" />
      </section>
      <section className="overflow-hidden text-ellipsis flex items-center">
        <p className="text-ellipsis align-middle ">{title}</p>
      </section>
      <section className="flex items-center justify-center">
        <span onClick={decreaseTotalPrice}>
          <DecreaseCartItem
            id={id}
            quantity={currentQuantity}
            setQuantity={setCurrentQuantity}
            decreaseCartItem={decreaseCartItem}
          />
        </span>
        <p>{currentQuantity}</p>
        <span onClick={() => increaseTotalPrice()}>
          <IncreaseCartItem
            id={id}
            quantity={currentQuantity}
            setQuantity={setCurrentQuantity}
            increaseCartItem={increaseCartItem}
          />
        </span>
      </section>
      <section className="flex items-center justify-center">
        <p className="text-xs">
          {`${price}x${currentQuantity}=`}
          <span className="font-bold text-sm">{currentQuantity * price}</span>
        </p>
      </section>
      <section
        onClick={() => {
          removeCartItem(id);
          setTotalPrice(
            (prevTotalPrice) => prevTotalPrice - currentQuantity * price
          );
        }}
        className="p-2 rounded-md flex justify-center max-h-max items-center"
      >
        <DeleteIcon className="text-red-700 cursor-pointer hover:drop-shadow-2xl" fontSize="medium"/>
      </section>
    </li>
  );
};

export default CartItem;
