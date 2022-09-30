import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

const SlideCrousel = ({ imgs }) => {
  const lastIndex = imgs.length - 1;
  const [isActive, setisActive] = useState(lastIndex + 1);
  const [test, setTest] = useState(false);
  const newlist = imgs.concat(imgs).concat(imgs);
  const next = () => {
    if (isActive === lastIndex * 2 + 1) {
      setTimeout(() => {
        setTest(true);
        setisActive(lastIndex + 1);
      }, 450);
      setisActive(isActive + 1);
      setTest(false);
      return;
    }
    setisActive(isActive + 1);
    setTest(false);
  };
  const prev = () => {
    if (isActive === lastIndex + 1) {
      setTimeout(() => {
        setTest(true);
        setisActive(lastIndex * 2 + 1);
      }, 500);
      setisActive(isActive - 1);
      setTest(false);
      return;
    }
    setisActive(isActive - 1);
    setTest(false);
  };

  return (
    <Container>
      <BtnArrow onClick={() => prev()} prev={true}>
        ←
      </BtnArrow>
      <Box>
        <Crousel isActive={isActive} test={test}>
          {newlist.map((item, index) => (
            <Img
              border={item.border}
              key={index}
              src={item.img}
              alt={"dog"}
            ></Img>
          ))}
        </Crousel>
        <Btnbox>
          <Button
            test={test}
            isActive={isActive === lastIndex + 1}
            onClick={() => setisActive(lastIndex + 1)}
          />
          <Button
            test={test}
            isActive={isActive === lastIndex + 2}
            onClick={() => setisActive(lastIndex + 2)}
          />
          <Button
            test={test}
            isActive={isActive === lastIndex + 3}
            onClick={() => setisActive(lastIndex + 3)}
          />
          <Button
            test={test}
            isActive={isActive === lastIndex + 4}
            onClick={() => setisActive(lastIndex + 4)}
          />
        </Btnbox>
      </Box>

      <BtnArrow onClick={() => next()}>→</BtnArrow>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Img = styled.img`
  flex-shrink: 0;
  margin: 0 15px;
  box-sizing: border-box;
  /* width: calc(100% - 30px); */
  /* width: calc(50% - 30px); */
  width: calc(33% - 30px);
  border: 5px solid ${({ border }) => border};
  height: 100%;
  @media screen and (max-width: 1200px) {
    width: calc(100%);
    margin: 0px;
  }
`;
const Crousel = styled.div`
  flex: 1;
  display: flex;
  min-height: 0px;
  transform: translateX(calc(-33% * ${({ isActive }) => isActive}));
  /* transform: translateX(calc(-100% * ${({ isActive }) => isActive})); */
  /* transition: transform 0.5s ease-out; */
  transition: ${({ test }) =>
    test ? "transform 0s;" : "transform 0.5s ease-out;"};
  /* transform: translateX(calc(-100%)); */
  @media screen and (max-width: 1200px) {
    transform: translateX(calc(-100% * ${({ isActive }) => isActive}));
  }
`;
const Box = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const BtnArrow = styled.button`
  margin: 0 10px;
  width: 20px;
  height: fit-content;
  background-color: transparent;
  color: #307c53;
  border: none;
  right: 0px;
  top: 50%;
  padding: 0px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 25px;
  ${({ prev }) =>
    prev &&
    css`
      left: 0;
      right: unset;
    `}
`;
const Btnbox = styled.div`
  padding: 10px 0;
`;
const Button = styled.button`
  /* transition: background-color 0.5s; */
  transition: ${({ test }) => (test ? "background 0s;" : "background 0.5s;")};
  border-radius: 50%;
  border: 1px solid #0a1e3c;
  background-color: ${({ isActive }) => (isActive ? "#0a1e3c" : "white")};
  width: 16px;
  height: 16px;
  margin: 0px 5px;
  cursor: pointer;
`;

export default SlideCrousel;
