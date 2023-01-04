import { CartContainer } from "./style";
import { TbShoppingCartX } from "react-icons/tb";
import { toast } from "react-toastify";

export const Cart = ({ setCurrentSale, currentSale }) => {
  function handleClickCart(productId) {
    const newCurrentSale = currentSale.filter((item) => {
      return item.id !== productId;
    });
    setCurrentSale(newCurrentSale);
    toast.success("Item removido");
  }

  function removeAllCart() {
    setCurrentSale([]);
    toast.success("Itens removidos do carrinho");
  }

  const total = currentSale.reduce((acc, crr) => {
    return acc + crr.price;
  }, 0);

  return (
    <CartContainer>
      <div className="headerCartContainer">
        <p className="text-3">Carrinho de Compras</p>
      </div>
      {currentSale.length <= 0 ? (
        <div className="emptyContainer">
          <TbShoppingCartX className="iconCart" color="#828282" size={70} />
          <p className="text-3">Sua sacola está vazia</p>
          <span className="text-grey-4">Adicione intens</span>
        </div>
      ) : (
        <>
          <ul className="listContainer">
            {currentSale.map((item) => {
              return (
                <li key={item.id}>
                  <div className="imgContainer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="infosContainer">
                    <h2 className="text-4">{item.name}</h2>
                    <span className="text-grey-4">{item.category}</span>
                  </div>
                  <button
                    onClick={() => handleClickCart(item.id)}
                    className="text-grey-4"
                  >
                    Remover
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="totalContainer">
            <div className="infosTotal">
              <span className="text-grey-3-1">Total</span>
              <span className="text-grey-3-2">
                R$ {total.toFixed(2).toString().replace(".", ",")}
              </span>
            </div>
            <button onClick={() => removeAllCart()} className="btnRemoveAll">
              Remover todos
            </button>
          </div>
        </>
      )}
    </CartContainer>
  );
};
