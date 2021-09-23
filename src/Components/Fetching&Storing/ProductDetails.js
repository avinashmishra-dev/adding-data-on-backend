import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <table className={classes.tableBorder}>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.amount}</td>
          <td>{props.description}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductDetails;
