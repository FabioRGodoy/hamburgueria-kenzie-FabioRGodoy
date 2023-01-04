import styled from "styled-components";

export const ProductItem = styled.li`
  min-width: 220px;
  height: 356px;
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;

  .containerImg {
    width: 100%;
    height: 170px;
    background-color: var(--color-grey-0);
    margin-bottom: 20px;
    display: flex;
  }

  img {
    width: 100%;
  }

  .containerInfos {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 15px;
  }

  button {
    width: 130px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    color: white;
  }
`;
