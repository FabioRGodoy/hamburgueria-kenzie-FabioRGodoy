import { ButtonGreen } from "./style";

export const Button = ({ children }) => {
  return (
    <>
      <ButtonGreen onClick={(e) => e.preventDefault()}>{children}</ButtonGreen>
    </>
  );
};
