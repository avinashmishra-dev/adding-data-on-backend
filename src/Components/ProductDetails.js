const ProductDetails = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h3>{props.amount}</h3>
      <h3>{props.description}</h3>
    </li>
  );
};

export default ProductDetails;
