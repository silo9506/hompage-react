import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { dropdownlist } from "../data/homepage/dropdown";
import Footer from "../modules/Footer";
import Topnav from "../modules/Topnav";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 350px;
  width: 100%;
  z-index: -1;
`;
const TitleBox = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  box-sizing: border-box;
  h1 {
    font-size: 30px;
    padding-bottom: 5px;
  }
`;
const Menubar = styled.div`
  width: 100%;
  background: rgb(98, 86, 84);
`;
const Menulist = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  a {
    max-width: 180px;
    width: 100%;
  }
`;
const MenuItem = styled.li`
  height: 50px;
  color: rgb(35, 24, 21);
  box-sizing: border-box;
  font-weight: 400;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => isActive && "rgb(150, 135, 131)"};
  &:hover {
    background-color: rgb(150, 135, 131);
    transition: background-color 0.5s ease-in-out;
  }
  @media screen and (max-width: 1000px) {
    font-size: 13px;
  }
`;

const Page = () => {
  const url = useLocation();
  const params = useParams();
  // console.log(url);
  // console.log(params.p);
  // console.log(params);
  // console.log(url.pathname);
  // console.log(dropdownlist.find((item) => item.url));

  return (
    <Container>
      <Topnav />
      <Img src={process.env.PUBLIC_URL + "/assets/homepage/banner02.jpg"} />
      <TitleBox>
        <h1>Best dog training</h1>
        <p>LovelyPoppy</p>
      </TitleBox>
      <Menubar>
        <Menulist>
          {dropdownlist
            .find((item) => item.url.includes(params.p))
            .item.map((item) => (
              <Link to={item.link} key={item.text}>
                <MenuItem isActive={item.link === url.pathname}>
                  {item.text}
                </MenuItem>
              </Link>
            ))}
        </Menulist>
      </Menubar>
      <Outlet></Outlet>
      <Footer />
    </Container>
  );
};

export default Page;
