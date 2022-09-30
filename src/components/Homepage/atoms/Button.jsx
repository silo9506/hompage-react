import styled from "styled-components";

const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.button`
  width: 160px;
  height: 45px;
  border-radius: 20px;
  margin-top: 10px;
  box-sizing: border-box;
  border: none;
  background-color: #061f5c;
  color: white;
  font-size: 16px;
`;
export default Button;
