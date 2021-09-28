import { useCallback, useEffect, useState } from "react";

import React from "react";
import ProductData from "./ProductData";
import Products from "./Products";
import Button from "../Button/Button";
import firebase from "firebase";
// import ProductManager from "./ProductManager";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState('');
  

  const columns = [
    "Product Name",
    "Product price",
    "Product Description",
    "Action",
  ];

  const productHandler = (product) => {
    // console.log(product);
    if (
      !product.name ||
      !product.price ||
      !product.description
    ) {
      return;
    }
    createProduct(product);
  };

  const fetchProducts = useCallback(async () => {
    let loadedProducts = [];
    const dbRef = firebase.database().ref("products");
    // dbRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data)
    // });
    dbRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        const responseData = snapshot.val();
        for (const key in responseData) {
          loadedProducts.push({
            id: key,
            name: responseData[key].name,
            price: responseData[key].price,
            description: responseData[key].description,
          });
        }
        setProducts(loadedProducts);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  async function deleteHandler(id) {
    let product = firebase.database().ref("products/" + id);
    product
      .remove()
      .then(function () {
        console.log("Remove succeeded.");
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message);
      });
      fetchProducts();
  }

  async function editHandler(id) {
    // debugger;
    // let updateProduct = firebase.database().ref("products/" + id);
    const foundProduct = products.find((product) => product.id === id);
    console.log(foundProduct);
    if (foundProduct) {
      setCurrentProduct({...foundProduct});
      // setname(foundProduct.name);
    } else {
      setCurrentProduct(null);
    }
  }

  async function createProduct(product) {
    firebase.database().ref("products").push().set(product);
  }

  return (
    <React.Fragment>
      <section>
        <ProductData
          onSubmit={productHandler}
          currentProduct={currentProduct}
        />
      </section>
      <section>
        <Button onFetch={fetchProducts}>Fetch Latest Products</Button>
      </section>
      <section>
        <Products
          dataSet={{ columns, rows: products }}
          onDeleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </section>
    </React.Fragment>
  );
}

export default ProductList;
