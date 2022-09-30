import { Link } from "react-router-dom";
import styled from "styled-components";
import { dropdownlist } from "../data/homepage/dropdown";
import { icons } from "../data/homepage/icons";
import Dropdown from "../atoms/Dropdown";
import Icon from "../atoms/Icon";

const Topnav = () => {
  const login = icons.find((item) => item.name === "login");
  const register = icons.find((item) => item.name === "register");
  const language = dropdownlist.find((item) => item.title === "Languages");

  return (
    <Conatainer>
      <ContentsWrapper>
        <Box>
          <LoginBox>
            <IconWrapper>
              <Icon icon={login.icon}></Icon>
            </IconWrapper>
            <p>Login /</p>
            <IconWrapper>
              <Icon icon={register.icon}></Icon>
            </IconWrapper>
            <p> Register</p>
          </LoginBox>
          <LanguageBox>
            <Dropdown ismini={true} item={language}></Dropdown>
          </LanguageBox>
          <IconBox>
            {icons
              .filter(
                (item) => item.name !== "login" && item.name !== "register"
              )
              .map((item) => (
                <IconWrapper key={item.name}>
                  <Icon icon={item.icon}></Icon>
                </IconWrapper>
              ))}
          </IconBox>
        </Box>
      </ContentsWrapper>
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
    </Conatainer>
  );
};

const Conatainer = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  /* background-color: white; */
  /* color: black; */
`;
const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  & + & {
    border-top: 2px solid white;
  }
`;
const Box = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0px 15px;
  display: flex;
  a {
    flex: 1;
  }
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;
const IconWrapper = styled.div`
  /* width: 20px; */
  height: 20px;
  padding: 5px;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 5px 0px;
`;
const IconBox = styled.div`
  display: flex;
  border-left: 1px solid white;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const LanguageBox = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  /* font-size: 42px; */
  font-size: 2.5em;
  border-right: 2px solid white;
  padding: 30px 5px;
  text-align: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Menubox = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  ul {
    padding: 0 15px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Topnav;
