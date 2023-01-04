import { ProductItem } from "./stylle";

export const Product = ({ handleClick, item }) => {
  return (
    <ProductItem>
      <div className="containerImg">
        <img src={item.img} alt="" />
      </div>
      <div className="containerInfos">
        <h2 className="text-3">{item.name}</h2>
        <span className="text-grey-4">{item.category}</span>
        <p className="text-grey-3">
          R${item.price.toFixed(2).toString().replace(".", ",")}
        </p>
        <button onClick={() => handleClick(item.id)}>Adicionar</button>
      </div>
    </ProductItem>
  );
};
