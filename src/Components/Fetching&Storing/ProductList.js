import { useCallback, useEffect, useState } from "react";

import React from "react";
import ProductData from "./ProductData";
import Products from "./Products";
import classes from "./ProductList.module.css";
import firebase from "firebase";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  const columns = [
    "Product Name",
    "Product price",
    "Product Description",
    "Action",
  ];

  const addProductHandler = () => {
    if (
      !currentProduct.name ||
      !currentProduct.price ||
      !currentProduct.description
    ) {
      return;
    }
    createProduct(currentProduct)
      .then((res) => {
        fetchProducts();
        setCurrentProduct({});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchProducts = useCallback(() => {
    let loadedProducts = [];
    const dbRef = firebase.database().ref("products");
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
        setProducts([]);
      }
    });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  async function deleteHandler(id) {
    const foundProductPos = products.findIndex((product) => product.id === id);
    if (foundProductPos === -1) {
      alert("Invalid product.");
      return;
    }
    let product = firebase.database().ref("products/" + id);
    product
      .remove()
      .then(function () {
        const tempProducts = [...products];
        tempProducts.splice(foundProductPos, 1);
        setProducts([...tempProducts]);
      })
      .catch(function (error) {
        alert(
          `Failed to delete ${products[foundProductPos].name} \n Error : ${error.message}. Please retry!`
        );
      });
  }

  async function editHandler(id) {
    // let updateProduct = firebase.database().ref("products/" + id);
    const foundProduct = products.find((product) => product.id === id);
    console.log(foundProduct);
    if (foundProduct) {
      setCurrentProduct({ ...foundProduct });
    } else {
      setCurrentProduct(null);
    }
  }

  async function createProduct(product) {
    firebase.database().ref("products").push().set(product);
  }

  const updateProductField = (field, value) => {
    const updatedProduct = {
      ...currentProduct,
      [field]: value,
    };
    setCurrentProduct(updatedProduct);
  };

  return (
    <React.Fragment>
      <section className={`${classes.card}`}>
        <p className={`${classes.title}`}>Add Product</p>
        <ProductData
          onSubmit={addProductHandler}
          currentProduct={currentProduct}
          updateProductField={updateProductField}
        />
      </section>
      <section className={`${classes.card}`}>
        <p className={`${classes.title} m-0`}>Products</p>
        <Products
          columns={columns}
          rows={products}
          onDeleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </section>
    </React.Fragment>
  );
}

export default ProductList;
