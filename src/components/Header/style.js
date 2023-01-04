import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--color-grey-0);
  height: 140px;
  margin-bottom: 15px;

  .container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  img {
    margin-top: 18px;
    width: 150px;
  }

  form {
    width: max-content;
    position: relative;
  }

  input {
    width: 95%;
    height: 60px;
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    padding-left: 10px;
  }

  @media (min-width: 500px) {
    height: 80px;

    .container {
      flex-direction: row;
      justify-content: space-between;
    }

    img {
      margin-top: 0;
      margin-bottom: 25px;
    }

    input {
      margin-top: 7px;
    }
  }
`;
