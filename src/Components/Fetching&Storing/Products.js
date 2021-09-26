// import classes from './Product.module.css'
import Button from '../Button/Button';
import * as ReactBootStrap from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{props.description}</td>
      <td>
        <Button>edit</Button>/
        <Button onFetch={props.onDeleteHandler.bind(this, props.id)}>
          delete
        </Button>
      </td>
    </>
  );
};

const Products = ({ dataSet, onDeleteHandler }) => {
  return (
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          {dataSet.columns.map((column, id) => (
            <th key={id}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSet.rows.map((prod) => (
          <tr key={prod.id}>
            <Product
              id={prod.id}
              name={prod.name}
              amount={prod.amount}
              description={prod.description}
              onDeleteHandler = {onDeleteHandler}
            />
          </tr>
        ))}
      </tbody>
    </ReactBootStrap.Table>
  );
};

export default Products;
