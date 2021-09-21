import { useState } from "react";
// import Product from "./Product";

import React from "react";
import ProductData from "./ProductData";
import Product from "./Product";

function ProductList() {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://e-site-53120-default-rtdb.firebaseio.com/products.json"
    );
    const responseData = await response.json();
    // console.log(responseData);

    let loadedProducts = [];

    for (const key in responseData) {
      loadedProducts.push({
        id: key,
        name: responseData[key].productName,
        amount: responseData[key].productPrice,
        description: responseData[key].productDescription,
      });
    }
    setProduct(loadedProducts);
  };

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
      <section>
        <button onClick={fetchProducts}>Fetch Latest Products</button>
      </section>
      <section>
        <Product product={product} />
      </section>
    </React.Fragment>
  );
}

export default ProductList;
