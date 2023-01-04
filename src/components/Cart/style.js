import styled from "styled-components";

export const CartContainer = styled.div`
  width: 90%;
  height: max-content;
  margin: 0 auto;
  border-radius: 8px;

  .headerCartContainer {
    background-color: var(--color-primary);
    height: 65px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .emptyContainer {
    background-color: var(--color-grey-0);
    height: 250px;
    text-align: center;
  }
  .iconCart {
    margin-top: 50px;
  }

  .listContainer {
    background-color: var(--color-grey-0);
    width: 100%;
    padding: 5px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 10px;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 5px;
    border: 1px solid transparent;
    animation-duration: 1.6s;
    animation-name: transaction;
    padding-right: 10px;
  }

  .imgContainer {
    width: 70px;
    height: 70px;
    margin-right: 15px;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .infosContainer {
    width: 150px;
    height: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .totalContainer {
    background-color: var(--color-grey-0);
    border-top: 1px solid var(--color-grey-20);
    height: 100px;
    padding: 10px;
  }

  .infosTotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btnRemoveAll {
    margin: 0;
    width: 100%;
    height: 60px;
    background-color: var(--color-grey-20);
    color: var(--color-grey-50);
    border-radius: 8px;
    margin-top: 20px;
  }

  @media (min-width: 900px) {
    width: 380px;
  }

  @keyframes transaction {
    from {
      opacity: 1%;
    }

    to {
      width: 100%;
    }
  }
`;
