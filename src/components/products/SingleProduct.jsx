import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../fetch/fetchProductData";

import StarIcon from "@mui/icons-material/Star";
import { useShoppingCartContext } from "../../context/CartContext";
import AddToCart from "../Cart/AddToCart";
import RemoveCartItem from "../Cart/RemoveCartItem";
import DecreaseCartItem from "../Cart/DecreaseCartItem";
import IncreaseCartItem from "../Cart/IncreaseCartItem";
import { CircularProgress } from "@mui/material";
import ErrorPage from "../ErrorPage/ErrorPage";

const SingleProduct = () => {
  const {
    increaseCartItem,
    addToCart,
    removeCartItem,
    decreaseCartItem,
    getItemQuantity,
  } = useShoppingCartContext();
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const product = await getProductById(id);
        if (!product.id) {
          throw new Error("no product found");
        }
        setIsLoading(false);
        setProductDetails(product);
        let quantityFromCart = getItemQuantity(id);
        if (quantityFromCart !== 0) {
          setIsItemAdded(true);
          setQuantity(quantityFromCart);
        } else {
          setIsItemAdded(false);
        }
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);
  const { title, price, description, image, rating, category } = productDetails;
  return !isError ? (
    !isLoading ? (
      <section className="m-auto border-2 mt-4 max-w-5xl flex flex-col items-center sm:flex-row">
        <figure className="w-[280px] sm:w-1/2">
          <img loading="lazy" src={image} className="object-contain relative" />
        </figure>
        <figcaption className="sm:w-1/2 ml-4 mr-4">
          <h1 className="mt-2 mb-2 text-2xl font-semibold">{title}</h1>
          <span className="flex mt-2 mb-4">
            <span className="align-middle flex">
              {rating?.rate}
              <StarIcon className="p-1" />
            </span>
            <span className="opacity-70 m">
              ({rating?.count + " customer reviews"})
            </span>
          </span>
          <p className="mt-4 mb-4 font-bold">MRP: ₹ {price}</p>
          <p className="mt-4 mb-4"> {description}</p>
          <p className="">
            available : <span className="font-bold capitalize">In stock</span>
          </p>
          <p>
            category : <span className="font-bold capitalize">{category}</span>{" "}
          </p>
          <div className="border-4 mt-4 mb-6"></div>
          {
            <span className={`${!isItemAdded ? "invisible" : "visible"}`}>
              Quantity :
              <span className="m-2">
                <DecreaseCartItem
                  id={id}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  setIsItemAdded={setIsItemAdded}
                  decreaseCartItem={decreaseCartItem}
                />
              </span>
              {quantity} in cart
              <span className="m-2">
                <IncreaseCartItem
                  id={id}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  increaseCartItem={increaseCartItem}
                />
              </span>
            </span>
          }
          {!isItemAdded ? (
            <AddToCart
              id={id}
              setQuantity={setQuantity}
              setIsItemAdded={setIsItemAdded}
              addToCart={addToCart}
            />
          ) : (
            <RemoveCartItem
              id={id}
              removeCartItem={removeCartItem}
              setIsItemAdded={setIsItemAdded}
              setQuantity={setQuantity}
            />
          )}
        </figcaption>
      </section>
    ) : (
      <div className="m-auto h-[50vh] flex justify-center items-center ">
        <CircularProgress />
      </div>
    )
  ) : (
    <ErrorPage />
  );
};

export default SingleProduct;
