import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { dropdownlist } from "../data/homepage/dropdown";
import Dropdown from "../atoms/Dropdown";

const Container = styled.div`
  position: absolute;
  top: ${({ top }) => top * 100}%;
  opacity: ${({ top }) => (top === 0 ? 0 : 1)};
  left: 0;
  right: 0;
  background-color: #2a2a2a;
  z-index: 5;
  min-height: 20px;
  transition: top 0.5s ease-in-out;
  ${({ trans }) =>
    trans &&
    css`
      transition: top 0s ease-in-out;
      top: ${({ top }) => top * 100}%;
    `}
  @media screen and (max-width:500px) {
    display: none;
  }
`;
const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Box = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0px 15px;
  display: flex;
  color: white;
`;
const Title = styled.div`
  font-size: 24px;
  border-right: 1px solid #3e3e3e;
  padding: 15px 30px;
`;
const Menubox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
const Minitopnav = ({ top, trans }) => {
  return (
    <Container top={top} trans={trans}>
      <ContentsWrapper>
        <Box>
          <Link to={"/homepage"}>
            <Title>LovelyPoppy</Title>
          </Link>
          <Menubox>
            {dropdownlist
              .filter((item) => item.title !== "Languages")
              .map((item) => (
                <Dropdown key={item.title} item={item}></Dropdown>
              ))}
          </Menubox>
        </Box>
      </ContentsWrapper>
    </Container>
  );
};

export default Minitopnav;
