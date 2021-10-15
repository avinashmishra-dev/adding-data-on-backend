import Button from "../Button/Button";
import classes from "./ProductData.module.css";

const ProductData = ({ onSubmit, updateProductField, currentProduct }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className={`d-flex flex-column align-items-center justify-content-center px-4`}
    >
      <div className={`${classes.field}  d-flex flex-column`}>
        <label htmlFor="name">Product name</label>
        <input
          id="name"
          type="text"
          className="custom-input product-input"
          value={currentProduct?.name || ""}
          onChange={(event) => {
            updateProductField("name", event.target.value);
          }}
        />
      </div>
      <div className={`${classes.field} d-flex flex-column`}>
        <label htmlFor="price">Product price</label>
        <input
          id="price"
          type="text"
          className="custom-input product-input"
          value={currentProduct?.price || ""}
          onChange={(event) => {
            updateProductField("price", event.target.value);
          }}
        />
      </div>
      <div className={`${classes.field}  d-flex flex-column`}>
        <label htmlFor="description">Product description</label>
        <input
          id="description"
          type="text"
          className="custom-input product-input"
          value={currentProduct?.description || ""}
          onChange={(event) => {
            updateProductField("description", event.target.value);
          }}
        />
      </div>
      <div className="my-4">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ProductData;
