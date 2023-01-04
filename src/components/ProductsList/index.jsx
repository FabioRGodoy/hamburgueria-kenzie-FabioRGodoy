import { Cart } from "../Cart";
import { Product } from "../Product";
import { MainContainer } from "./style";
import { useState } from "react";
import { toast } from "react-toastify";

export const ProductList = ({ filteredProducts, products }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const arrFilter = products.filter((item) => {
    return (
      item.name
        .toLowerCase()
        .trim()
        .includes(filteredProducts.toLowerCase().trim()) ||
      item.category
        .toLowerCase()
        .trim()
        .includes(filteredProducts.toLowerCase().trim())
    );
  });

  function handleClick(productId) {
    const double = currentSale.some((item) => item.id === productId);
    const product = products.find((item) => item.id === productId);

    if (double === true) {
      toast.error("Não é possivel adicionar itens duplicados");
    } else {
      setCurrentSale([...currentSale, product]);
      toast.success("Item Adicionado ao carrinho");
    }
  }

  return (
    <MainContainer>
      <ul className="originalListProducts">
        {!filteredProducts
          ? products.map((item) => (
              <Product
                handleClick={handleClick}
                products={products}
                key={item.id}
                item={item}
              />
            ))
          : arrFilter.map((item) => (
              <Product
                handleClick={handleClick}
                products={products}
                key={item.id}
                item={item}
              />
            ))}
      </ul>
      <Cart setCurrentSale={setCurrentSale} currentSale={currentSale} />
    </MainContainer>
  );
};
