import { useEffect, useState } from "react";
// import Product from "./Product";

import React from "react";
import ProductData from "./ProductData";

const ProductList = () => {
  const[product,setProduct] =useState([]);

  
    const fetchProducts = async ()=>{
      const response = await fetch('https://e-site-53120-default-rtdb.firebaseio.com/products.json');
      const responseData = await response.json();
      console.log(responseData);
  }

  async function onSubmitHandler(product) {
    const response = await fetch(
      "https://e-site-53120-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
    <section>
      <ProductData onSubmit={onSubmitHandler} />
    </section>
    <button onClick={fetchProducts}>Fetch Products</button>
    </React.Fragment>
  );
};

export default ProductList;
