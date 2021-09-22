// import classes from './Product.module.css'
import ProductDetails from "./ProductDetails";
const Product = ({product}) => {
  return (
    <div>
      <ul>
        {product.map((prod) => (
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
