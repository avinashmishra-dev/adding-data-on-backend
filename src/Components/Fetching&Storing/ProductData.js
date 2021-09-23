import { useState } from "react";
import Button from "../Button/Button";

const ProductData = ({ onSubmit }) => {
  const [productName,setProductName] =useState('');
  const[productPrice,setProductPrice] =useState('');
  const [productDescription,setProductDescription] =useState('');

  const productNameHandler = (event)=>{
    setProductName(event.target.value);
  }

  const productPriceHandler = (event)=>{
    setProductPrice(event.target.value);
  }

  const productDescriptionHandler = (event)=>{
    setProductDescription(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //   console.log(productName.current.value);
    //   console.log(productPrice.current.value);
    //   console.log(productDescription.current.value);
    

    const product = {
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
    };

    if (
      product.productName === "" ||
      product.productPrice === "" ||
      product.productDescription === ""
    ) {
      return;
    }

    onSubmit(product);
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Product name</label>
        <input id="name" type="text" value={productName} onChange={productNameHandler}/>
      </div>
      <div>
        <label htmlFor="price">Product price</label>
        <input id="price" type="text" value={productPrice} onChange={productPriceHandler}/>
      </div>
      <div>
        <label htmlFor="description">Product description</label>
        <input id="description" type="text" value={productDescription} onChange={productDescriptionHandler}/>
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ProductData;
