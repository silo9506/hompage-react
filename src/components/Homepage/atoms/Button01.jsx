import styled from "styled-components";

const Button01 = ({ children, color, bgcolor, border }) => {
  return (
    <Container color={color} bgcolor={bgcolor} border={border}>
      {children}
    </Container>
  );
};
const Container = styled.button`
  width: 160px;
  height: 45px;
  border-radius: 20px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${({ border }) => (border ? border : "transparent")};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#061f5c")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: 16px;
  cursor: pointer;
`;

export default Button01;
