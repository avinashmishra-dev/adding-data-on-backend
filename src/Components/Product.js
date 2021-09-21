// import classes from './Product.module.css'
import ProductDetails from "./ProductDetails";
const Product = (props) => {
  return (
    <div>
      <ul>
        {props.product.map((prod) => (
          <ProductDetails
            key={prod.id}
            name={prod.name}
            amount={prod.amount}
            description={prod.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Product;
