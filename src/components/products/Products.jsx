import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../fetch/fetchProductData";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    (async function () {
      if (!category) {
        try {
          const products = await getAllProducts();
          setData(products);
          console.log(products);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const productsByCategory = await getAllProductsByCategory(category);
          setData(productsByCategory);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [category]);

  return (
    <div className="p-4 max-w-7xl m-auto">
      <section className="flex flex-wrap justify-center mt-4 gap-1">
        {data.map((product) => {
          return (
            <Link to={'/products/'+product.id} key={product.id}>
              <ProductCard {...product}  />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
