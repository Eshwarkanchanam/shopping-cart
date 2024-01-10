import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import { RegisterForm } from "./components/Form/RegisterForm.jsx";
import Login from "./components/Form/Login.jsx";
import ProductSection from "./components/products/ProductSection.jsx";
import { Products } from "./components/products/Products.jsx";
import SingleProduct from "./components/products/SingleProduct.jsx";
import CartPage from "./components/Cart/CartPage.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductSection />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },{
            path: "/products/:id",
            element:<SingleProduct />
          },
          {
            path: "/products/category/:category",
            element: <Products />,
          },
        ],
      },
      {
        path:'/cart',
        element:<CartPage />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
