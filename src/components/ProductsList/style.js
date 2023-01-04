import styled from "styled-components";

export const MainContainer = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-left: 25px;

  .originalListProducts {
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    margin-bottom: 20px;
  }

  @media (min-width: 900px) {
    display: flex;

    ul {
      flex-wrap: wrap;
      width: 60%;
    }
  }
`;
