import { useRef } from "react";

const ProductData = ({onSubmit}) => {
  const productName = useRef("");
  const productPrice = useRef("");
  const productDescription = useRef("");

  const onSubmitHandler = (event)=>{
      event.preventDefault();
    //   console.log(productName.current.value);
    //   console.log(productPrice.current.value);
    //   console.log(productDescription.current.value);

      const product = {
          productName : productName.current.value,
          productPrice:productPrice.current.value,
          productDescription:productDescription.current.value
      }

      onSubmit(product)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Product name</label>
        <input id="name" type="text" ref={productName}/>
      </div>
      <div>
        <label htmlFor="price">Product price</label>
        <input id="price" type="text" ref={productPrice}/>
      </div>
      <div>
        <label htmlFor="description">Product description</label>
        <input id="description" type="text" ref={productDescription}/>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ProductData;
