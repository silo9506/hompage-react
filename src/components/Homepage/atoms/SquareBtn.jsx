import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: 1px solid #231816;
  font-size: 16px;
  color: rgb(119, 119, 119);
  background: #fff;
  font-weight: 600;
  ${({ active }) =>
    active &&
    css`
      color: white;
      background-color: #061f5c;
    `}
`;

const SquareBtn = ({ activeBtn, setActiveBtn, index, children }) => {
  return (
    <Container onClick={() => setActiveBtn(index)} active={activeBtn === index}>
      {children}
    </Container>
  );
};

export default SquareBtn;
