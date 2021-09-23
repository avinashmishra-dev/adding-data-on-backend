// import classes from './Product.module.css'
import * as ReactBootStrap from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{props.description}</td>
      <td>
        <button>edit</button>/<button>delete</button>
      </td>
    </>
  );
};

const Products = ({ dataSet }) => {
  
  return (
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          {dataSet.columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSet.rows.map((prod) => (
          <tr>
            <Product
              key={prod.id}
              name={prod.name}
              amount={prod.amount}
              description={prod.description}
            />
          </tr>
        ))}
      </tbody>
    </ReactBootStrap.Table>
  );
};

export default Products;
