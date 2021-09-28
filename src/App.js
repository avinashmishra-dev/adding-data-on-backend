import "./App.css";
import ProductList from './Components/Fetching&Storing/ProductList';
import './firebase';

function App() {
  return (
    <div>
      <header>
        <h1>Products</h1>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
