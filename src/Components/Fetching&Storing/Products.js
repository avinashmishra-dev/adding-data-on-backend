// import classes from './Product.module.css'
import Button from "../Button/Button";
import * as ReactBootStrap from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <td>
        {/* <Button onFetch={props.onUpdateHandler.bind(this, props.id)}>
          edit
        </Button>
        / */}
        <Button onFetch={props.onDeleteHandler.bind(this, props.id)}>
          delete
        </Button>
      </td>
    </>
  );
};

const Products = ({ rows, columns, onDeleteHandler, editHandler }) => {
  return (
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          {columns?.map((column, id) => (
            <th key={id}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((prod) => {
          return (
            <tr key={prod.id}>
              <Product
                id={prod.id}
                name={prod.name}
                price={prod.price}
                description={prod.description}
                onDeleteHandler={onDeleteHandler}
                onUpdateHandler={editHandler}
              />
            </tr>
          );
        })}
      </tbody>
    </ReactBootStrap.Table>
  );
};

export default Products;
