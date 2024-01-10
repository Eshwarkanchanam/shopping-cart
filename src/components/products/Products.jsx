import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../fetch/fetchProductData";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    (async function () {
      if (!category) {
        try {
          const products = await getAllProducts();
          setData(products);
          setIsLoading(false);
          // console.log(products);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const productsByCategory = await getAllProductsByCategory(category);
          setData(productsByCategory);
          setIsLoading(false);
          // console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
      
    })();
  }, [category]);

  return (
    <div className="p-4 max-w-7xl m-auto">
      {!isLoading ? (
        <section className="flex flex-wrap justify-center mt-4 gap-1">
          {data.map((product) => {
            return (
              <Link to={"/products/" + product.id} key={product.id}>
                <ProductCard {...product} />
              </Link>
            );
          })}
        </section>
      ) : (
        <div className="m-auto h-[50vh] flex justify-center items-center ">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
