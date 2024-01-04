import React from "react";

import { Content } from "./Content";
import { Features } from "./Features";
import { ShopByCategory } from "./ShopByCategory";

function Home() {
  return (
    <main className="">
      <Content />
      <Features />
      <ShopByCategory />
    </main>
  );
}

export default Home;
