import styled from "styled-components";

export const ButtonGreen = styled.button`
  width: 107px;
  height: 40px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  color: white;
  position: relative;
  top: -52px;
  right: -62%;

  :hover {
    filter: brightness(1.2);
  }
`;
