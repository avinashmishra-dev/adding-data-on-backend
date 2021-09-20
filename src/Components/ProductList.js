// import { useEffect, useState } from "react";
// import Product from "./Product";

import React from "react";
import ProductData from "./ProductData";

const ProductList = () => {
  // const[product,setProduct] =useState([]);

  // useEffect(()=>{
  //   const fetchProducts = async ()=>{
  //     const response = await fetch('https://e-site-53120-default-rtdb.firebaseio.com/products.json');
  //     const responseData = await response.json();

  //     const loadedProducts = [];
  //     for(let key in responseData){
  //       loadedProducts.push({
  //         id:key,
  //         name:responseData[key].name,
  //         amount:responseData[key].amount,
  //         description:responseData[key].description
  //       });
  //     }
  //     setProduct(loadedProducts);
  //   };
  //   fetchProducts();
  // },[]);

  // const item = product.map((prod) => (
  //   <Product
  //     key={prod.id}
  //     name={prod.name}
  //     amount={prod.amount}
  //     description={prod.description}
  //   />
  // ));

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
    </React.Fragment>
  );
};

export default ProductList;
