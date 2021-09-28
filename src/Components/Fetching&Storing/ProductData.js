import { useEffect, useState ,useRef} from "react";
import Button from "../Button/Button";

const ProductData = ({ onSubmit, currentProduct }) => {
  // const [product, setProduct] = useState({});
  const name = useRef();
  const price = useRef();
  const description = useRef();
  
  // useEffect(() => {
  //   if (currentProduct) {
  //     setProduct(currentProduct);
  //   }
  // }, [currentProduct]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          name: name.current.value.trim() || "",
          price: price.current.value.trim() || "",
          description: description.current.value.trim() || "",
        });
      }}
    >
      <div>
        <label htmlFor="name">Product name</label>
        <input id="name" type="text" value={currentProduct?.name} ref={name}/>
      </div>
      <div>
        <label htmlFor="price">Product price</label>
        <input id="price" type="text" value={currentProduct?.price} ref={price}/>
      </div>
      <div>
        <label htmlFor="description">Product description</label>
        <input
          id="description"
          type="text"
          value={currentProduct?.description}
          ref={description}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ProductData;
