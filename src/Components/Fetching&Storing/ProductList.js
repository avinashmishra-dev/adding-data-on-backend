import { useCallback, useEffect, useState } from "react";
// import Product from "./Product";

import React from "react";
import ProductData from "./ProductData";
import Products from "./Products";
import Button from "../Button/Button";
function ProductList() {
  const [products, setProducts] = useState([]);

  const columns = [
    "Product Name",
    "Product Price",
    "Product Description",
    "Action",
  ];

  const fetchProducts = useCallback(async () => {
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
    setProducts(loadedProducts);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  async function deleteHandler(id) {
    console.log(id);
    const deleteData = await fetch(
      "https://e-site-53120-default-rtdb.firebaseio.com/products.json" + id,
      {
        method: "DELETE",
        // body: JSON.stringify(products),
      }
    );
    const result = await deleteData.json();
    console.log(result);
  }

  async function onSubmitHandler(products) {
    const response = await fetch(
      "https://e-site-53120-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(products),
      }
    );
    // const data = await response.json();
    // // console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <ProductData onSubmit={onSubmitHandler} />
      </section>
      <section>
        <Button onFetch={fetchProducts}>Fetch Latest Products</Button>
      </section>
      <section>
        <Products
          dataSet={{ columns, rows: products }}
          onDeleteHandler={deleteHandler}
        />
      </section>
    </React.Fragment>
  );
}

export default ProductList;
