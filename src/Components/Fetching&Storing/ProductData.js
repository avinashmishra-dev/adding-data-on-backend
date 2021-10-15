import Button from "../Button/Button";

const ProductData = ({ onSubmit, updateProductField, currentProduct }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label htmlFor="name">Product name</label>
        <input
          id="name"
          type="text"
          value={currentProduct?.name || ""}
          onChange={(event) => {
            updateProductField("name", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="price">Product price</label>
        <input
          id="price"
          type="text"
          value={currentProduct?.price || ""}
          onChange={(event) => {
            updateProductField("price", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="description">Product description</label>
        <input
          id="description"
          type="text"
          value={currentProduct?.description || ""}
          onChange={(event) => {
            updateProductField("description", event.target.value);
          }}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ProductData;
