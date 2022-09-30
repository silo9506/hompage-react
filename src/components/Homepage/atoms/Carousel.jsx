import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { css } from "styled-components";

const Carousel = ({ imgs }) => {
  const [isActive, setisActive] = useState(0);
  useEffect(() => {
    const changeActive = () => {
      if (isActive === imgs.length - 1) {
        setisActive(0);
        return;
      }
      setisActive(isActive + 1);
    };
    setTimeout(() => {
      changeActive();
    }, 5000);
  }, [isActive]);

  return (
    <Container>
      {imgs.map((item, index) => {
        return (
          <Fragment key={index}>
            <Img src={item.img} isActive={isActive === index}></Img>
            <Textbox>
              <Text isActive={isActive === index}>{item.text}</Text>
            </Textbox>
          </Fragment>
        );
      })}
      <Lodingbar></Lodingbar>
    </Container>
  );
};

const loding = keyframes`  
  from {
    width:0%;
  }

  to {
    width: 100%;
  }`;
const Textanimation = keyframes`  
0% {
  transform: translateY(50vh);
  display:none;
  opacity: 0;
}
15% {
  transform: translateY(0);
  opacity: 1;
}
90% {
  transform: translateY(0);
  opacity: 1;
}100% {
  transform: translateY(-50vh);
  opacity: 0;
}`;

const Container = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;
const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  /* display: ${({ isActive }) => (isActive ? "block" : "none")}; */
  opacity: ${({ isActive }) => (isActive ? "100" : "0")};
  transition: opacity ease-in 0.8s;
`;
const Textbox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  line-height: 150%;
  text-shadow: 1px 1px black;
`;
const Text = styled.div`
  max-width: 600px;
  text-align: center;
  word-break: keep-all;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  /* transform: ${({ isActive }) => (isActive ? `translateY()` : "none")}; */
  ${(isActive) =>
    isActive &&
    css`
      animation: ${Textanimation} 5s infinite;
    `}
`;
const Lodingbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: inline-block;
  height: 5px;
  background-color: skyblue;
  z-index: 1000;
  animation: ${loding} 5s infinite linear;
  transform: translateY(50%);
  box-sizing: border-box;
`;

export default Carousel;
