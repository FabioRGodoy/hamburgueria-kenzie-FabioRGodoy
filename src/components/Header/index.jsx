import logo from "../../assets/img/Logo.png";
import { Button } from "../Button";
import { ContainerHeader } from "./style";

export const Header = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <ContainerHeader>
      <div className="container">
        <img src={logo} alt="" />
        <form>
          <input
            value={filteredProducts}
            onChange={(e) => setFilteredProducts(e.target.value)}
            placeholder="Digite sua pesquisa"
            type="text"
          />
          <Button type="submit">Pesquisar</Button>
        </form>
      </div>
    </ContainerHeader>
  );
};
