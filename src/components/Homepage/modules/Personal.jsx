import styled from "styled-components";
import { trainercard } from "../data/homepage/cards";
import Edsection from "./Edsection";
const Container = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  line-height: 36px;
  strong {
    font-weight: 600;
  }
`;
const Section = styled.div`
  padding: 70px 20px 70px;
  box-sizing: border-box;
  :nth-child(2n) {
    background-color: rgb(247, 247, 247);
  }
  :last-child {
    padding: 70px 0 0;
  }
  @media screen and (max-width: 550px) {
    padding: 70px 0px;
  }
`;
const Videobox = styled.div`
  display: flex;
  justify-content: center;
  iframe {
    width: 40%;
    height: 350px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    iframe {
      width: 100%;
    }
    iframe + iframe {
      padding-left: 0px;
      margin-top: 15px;
    }
  }
`;
const Textbox = styled.div`
  margin: 0 10px;
  padding: 50px 0px 50px 30px;
  box-sizing: border-box;
  white-space: pre-wrap;
  font-size: 15px;
  line-height: 150%;
  text-align: left;
  color: #333;
  .title {
    font-size: 22px;
    line-height: 35px;
    font-weight: 500;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    padding-bottom: 0px;
    .title {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;
const Trainers = styled.div`
  padding: 70px 20px;
  margin: 0 100px;
  @media screen and (max-width: 1100px) {
    margin: 0px;
  }
  @media screen and (max-width: 800px) {
    padding: 0px;
  }
`;
const Card = styled.div`
  padding-left: 70px;
  margin-bottom: 20px;
  text-align: start;
  font-size: 18px;
  color: rgb(253, 251, 228);
  height: 230px;
  background-color: rgb(133, 172, 217);
  background-color: #061f5c;
  display: flex;
  align-items: center;
  .box {
    padding-right: 20px;
    flex: 1;
  }
  .title {
    width: fit-content;
    font-size: 34px;
    border-bottom: 2px solid rgb(253, 251, 228);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  ul {
    list-style: disc;
    list-style-position: inside;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
    .title {
      font-size: 20px;
    }
    .box {
      width: 60%;
    }
    li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
  @media screen and (max-width: 550px) {
    padding-left: 10px;
    height: 300px;
    .box {
      padding: 0px;
    }
  }
`;
const Img = styled.img`
  height: 100%;
  width: 30%;
  opacity: 0.9;
  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;
const Personal = () => {
  return (
    <Container>
      <Section>
        솔루션 교육회원을 위한 특별한 혜택
        <br /> 보듬훈련사와 일대일 맞춤<strong> 개인 레슨!</strong>
        <br /> 다른 반려견과 함께하는 교육을 통해 사회성을 길러주세요.
      </Section>
      <Section>
        <Videobox>
          <iframe
            src="https://www.youtube.com/embed/dSKMVX7YduE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Textbox>
            <h1 className="title">개인 레슨이란? </h1>
            그룹 레슨을 200회 이상 진행한 보듬훈련사와 일대일로 이루어지는
            Personal Care!
            <br />
            내 반려견의 성향과 특성에 맞는 맞춤 교육은 물론 산책 교육에 기초가
            되는
            <br />
            섬세한 핸들링 교정을 받아보세요.
            <br />
            보듬훈련사는 반려견 문제행동의 근본적인 원인을 파악하고
            <br />그 원인 치유에 주력할 것을 약속드립니다.
          </Textbox>
        </Videobox>
      </Section>
      <Section>
        <Trainers>
          {trainercard.map((item) => (
            <Card>
              <div className="box">
                <div className="title">{item.name} 훈련사</div>
                <ul>
                  {item.text.map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
              <Img src={process.env.PUBLIC_URL + item.img}></Img>
            </Card>
          ))}
        </Trainers>
      </Section>
      <Section>
        <Edsection></Edsection>
      </Section>
    </Container>
  );
};

export default Personal;
