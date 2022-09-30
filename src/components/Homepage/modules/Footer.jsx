import styled from "styled-components";
import Icon from "../atoms/Icon";
import { ReactComponent as Phone } from "../../../assets/svg/homepage/phone03.svg";
import { ReactComponent as Oldphone } from "../../../assets/svg/homepage/phone04.svg";
import { ReactComponent as Necktie } from "../../../assets/svg/homepage/necktie01.svg";
import { ReactComponent as Foot } from "../../../assets/svg/homepage/foot01.svg";
import { ReactComponent as Letter } from "../../../assets/svg/homepage/letter01.svg";
import { ReactComponent as Location } from "../../../assets/svg/homepage/location01.svg";
const Container = styled.div`
  height: 100px;
  box-sizing: border-box;
  padding: 100px 20px;
  background-color: rgb(6, 6, 6);
  display: flex;
  @media screen and (max-width: 1200px) {
    height: fit-content;
    padding: 0px 20px;
    width: 100%;
  }
`;
const Widthbox = styled.div`
  /* max-width: 800px; */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 33.33%;
  color: white;
  display: flex;
  flex-direction: column;
  /* align-items: space-between; */
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 14px;
    padding: 5px 0px;
  }
  div {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #888888;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    & + & {
      padding-top: 15px;
    }
  }
`;
const IconWrapper = styled.div`
  padding: 5px 5px;
  svg {
    width: 100%;
    height: 20px;
  }
  div {
    padding: 0;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Widthbox>
        <Box>
          <h1>LovelyPoppy</h1>
        </Box>
        <Box>
          <div>
            <IconWrapper>
              <Icon>
                <Foot />
              </Icon>
            </IconWrapper>
            대표자:김현철
            <IconWrapper>
              <Icon>
                <Necktie />
              </Icon>
            </IconWrapper>
            사업자등록번호: 030-38-10456
          </div>
          <div>
            <IconWrapper>
              <Icon>
                <Location />
              </Icon>
            </IconWrapper>
            소형견센터 : 경기도 화성시 봉담읍 매봉로210 (내리210)
          </div>
          <div>
            <IconWrapper>
              <Icon>
                <Location />
              </Icon>
            </IconWrapper>
            중·대형견센터 : 경기도 화성시 봉담읍 분천길83-38 (분천리225)
          </div>
          <div>
            <IconWrapper>
              <Icon>
                <Phone />
              </Icon>
            </IconWrapper>
            031-297-6136
            <IconWrapper>
              <Icon>
                <Oldphone />
              </Icon>
            </IconWrapper>
            031-297-3490
          </div>
          <div>
            <IconWrapper>
              <Icon>
                <Letter />
              </Icon>
            </IconWrapper>
            eyeless356@naver.com
          </div>
        </Box>
        <Box>
          <p>교육 및 상담 문의</p>
          <h2>031-100-1056</h2>
          <p>평일,토일 10:00 ~ 18:00/점심: 12:00 ~ 13:00</p>
          <p>연중무휴</p>
        </Box>
      </Widthbox>
    </Container>
  );
};
export default Footer;
