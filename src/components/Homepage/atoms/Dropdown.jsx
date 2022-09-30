import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/svg/homepage/arrow01.svg";

const Dropdown = ({ item, ismini }) => {
  const [isActive, setisActive] = useState(false);
  let delay = null;
  const onhover = () => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      setisActive(true);
    }, 100);
  };
  const outhover = () => {
    clearTimeout(delay);
    setisActive(false);
  };
  return (
    <Container onMouseOver={() => onhover()} onMouseLeave={() => outhover()}>
      {item.title}
      <Arrowbox isActive={isActive}>
        <Arrow />
      </Arrowbox>
      <ItemWrapper ismini={ismini} isActive={isActive}>
        {ismini &&
          item.item.map((item) => <Items key={item.text}>{item.text}</Items>)}
        {!ismini &&
          item.item.map((item) => (
            <Link to={item.link} key={item.text}>
              <Items>{item.text}</Items>
            </Link>
          ))}
      </ItemWrapper>
    </Container>
  );
};
const Container = styled.ul`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  /* padding: 0 15px; */
`;
const ItemWrapper = styled.div`
  z-index: 5;
  width: calc(90% * 2);
  position: absolute;
  left: 0;
  top: 100%;
  color: black;
  background-color: white;
  padding: 5px 0px;
  font-size: 14px;
  font-weight: 600;
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  ${({ ismini }) =>
    ismini &&
    css`
      right: 0;
      font-size: 13px;
      width: auto;
    `}
`;
const Items = styled.li`
  padding: 8px 15px;
  color: black;
  cursor: pointer;
  &:hover {
    color: #968783;
  }
`;
const Arrowbox = styled.div`
  width: 15px;
  height: 15px;
  padding: 5px;
  transition: all ease-in-out 0.1s;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

export default Dropdown;
