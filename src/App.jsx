import "./App.css";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductsList";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div>
        <ProductList filteredProducts={filteredProducts} products={products} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
