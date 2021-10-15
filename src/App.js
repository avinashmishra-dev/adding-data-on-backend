import classes from  "./App.module.css";
import ProductList from "./Components/Fetching&Storing/ProductList";
import "./firebase";

function App() {
  return (
    <div>
      <header>
        <h1 className={`${classes.title}`}>Products</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
