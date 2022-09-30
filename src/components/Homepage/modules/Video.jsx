import { useState } from "react";
import styled from "styled-components";
import { videoBtnitem, videocard } from "../data/homepage/cards";
import { edstep } from "../data/homepage/donut";
import { videoimglist } from "../data/homepage/imgs";
import Donut from "../atoms/Donut";
import SquareBtn from "../atoms/SquareBtn";
import VideoCard from "../atoms/VideoCard";
import Button01 from "../atoms/Button01";
import Edsection from "./Edsection";

const squarebtnlist = ["솔루션", "나 혼자 한다", "개별토픽"];

const Container = styled.div``;
const Section = styled.div`
  padding: 70px 120px 70px;
  box-sizing: border-box;
  width: 100%;
  :nth-child(2n) {
    background-color: rgb(247, 247, 247);
  }
  :last-child {
    margin: 0;
    padding: 70px 0 0 0;
  }
  @media screen and (max-width: 1200px) {
    padding: 50px 15px;
    /* margin: 20px 0px; */
  }
`;
const Imgbox = styled.div`
  white-space: pre-wrap;
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: ${({ center }) => center && "row-reverse"};
  margin-bottom: 30px;
  box-sizing: border-box;
  img {
    width: 50%;
    height: 100%;
    padding: 0 20px;
  }
  .box {
    width: 50%;
    padding: 0 20px;
  }
  .number {
    font-size: 36px;
    color: #269cd3;
    margin-bottom: 25px;
  }
  .title {
    font-size: 34px;
    margin-bottom: 25px;
    color: #333;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    word-break: keep-all;
    /* white-space: normal; */
    margin-bottom: 0px;
    img {
      width: 100%;
      padding: 0;
    }
    .box {
      width: 100%;
      padding: 0;
    }
    .number {
      font-size: 22px;
      margin-bottom: 0px;
    }
    .title {
      font-size: 24px;
    }
    .text {
      margin-bottom: 20px;
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h1 {
    font-size: 24px;
  }
  strong {
    color: #061f5c;
    font-weight: 600;
  }
  .line {
    margin: 20px 0;
    width: 44px;
    border-bottom: 3.5px solid black;
  }
`;
const Donutbox = styled.div`
  max-width: 930px;
  height: 180px;
  /* max-height: 180px; */
  width: 100%;
  display: flex;
  margin: 25px 0px;
  div + div {
    padding-left: 25px;
  }
  @media screen and (max-width: 900px) {
    height: 80px;
    justify-content: center;
    div + div {
      padding-left: 15px;
    }
    > div {
      width: 130px;
    }
  }
  @media screen and (max-width: 600px) {
    > div {
      width: 85px;
    }
  }
`;
const Cardbox = styled.div`
  display: flex;
  height: 450px;
  margin-top: 30px;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`;
const TextCardbox = styled.div`
  display: flex;
  padding: 0 25px;
  height: fit-content;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    & > div {
      margin-bottom: 10px;
    }
  }
`;
const Btnbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  div {
    width: 166px;
    height: 42px;
  }
  div + div {
    margin-left: 15px;
  }
  @media screen and (max-width: 600px) {
    div {
      width: 100%;
    }
    div + div {
      margin-left: 5px;
    }
  }
`;
const Textbox = styled.div`
  line-height: 25px;
  white-space: pre-wrap;
  padding-top: 30px;
  font-size: 15px;
  color: #555;
  text-align: center;
  .title {
    margin: 35px 0;
    font-size: 20px;
    color: #333;
  }
`;
const Card = styled.div`
  padding: 20px;
  padding-bottom: 60px;
  position: relative;
  background-color: rgb(240, 244, 249);
  margin: 0 10px;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  height: 280px;
  box-sizing: border-box;
  .number {
    margin: 20px 0px;
    font-size: 18px;
    color: #061f5c;
    font-weight: 500;
  }
  .title {
    margin-bottom: 25px;
    font-size: 20px;
    z-index: 1;
    position: relative;
  }
  .box {
    height: 50%;
  }
  .text {
    color: #777;
    font-size: 14px;
  }
  @media screen and (max-width: 1000px) {
    .number {
      font-size: 14px;
      font-weight: 500;
    }
    .title {
      font-size: 16px;
      z-index: 1;
    }
    .text {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 15px;
    height: fit-content;
    .box {
      height: fit-content;
    }
  }
`;
const Iconwrapper = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: white;
  svg {
    width: 80%;
    height: 80%;
  }
  @media screen and (max-width: 1000px) {
    width: 70px;
    height: 70px;
  }
`;
const BtnWrapper = styled.div`
  margin-top: 20px;
`;
const Videobox = styled.div`
  display: flex;
  justify-content: space-around;
  iframe {
    width: 50%;
    height: 350px;
  }
  iframe + iframe {
    padding-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    iframe {
      width: 100%;
      justify-content: center;
    }
    iframe + iframe {
      padding-left: 0px;
      margin-top: 15px;
    }
  }
`;

const Video = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const btnitems = videoBtnitem.find((item, index) => index === activeBtn);
  console.log(btnitems);
  return (
    <Container>
      <Section>
        {videoimglist.map((item) => (
          <Imgbox center={item.center} key={item.title}>
            <img src={process.env.PUBLIC_URL + item.img} alt={"img"} />
            <div className="box">
              <div className="number">{item.number}</div>
              <h1 className="title">{item.title}</h1>
              <div className="text">{item.text}</div>
            </div>
          </Imgbox>
        ))}
      </Section>
      <Section>
        <Box>
          <h1>영상 교육 듣는 방법</h1>
          <div className="line"></div>
          <Donutbox>
            {edstep.map((item) => (
              <Donut item={item} key={item.title} />
            ))}
          </Donutbox>
          <p>
            보듬 교육은 <strong>이해 · 관찰 · 활동 · 세부교육</strong>의 단계를
            거치며 반려견의 회복을 돕습니다.
            <br /> 이해, 관찰, 활동은 국·영·수와 같이 보듬교육의 기초가 되는
            과목입니다.
            <br /> 위 세 가지를 중점으로 열심히 교육하시며 산책, 분리불안,
            화장실 등의 세부 교육을 진행하시면 효과적입니다.
          </p>
        </Box>
        <Cardbox>
          {videocard.map((item) => (
            <VideoCard key={item.text} item={item} />
          ))}
        </Cardbox>
      </Section>
      <Section>
        <Box>
          <h1>보듬의 교육영상 과정</h1>
          <div className="line"></div>
          <Btnbox>
            {squarebtnlist.map((item, index) => (
              <div key={item}>
                <SquareBtn
                  activeBtn={activeBtn}
                  setActiveBtn={(n) => setActiveBtn(n)}
                  index={index}
                >
                  {item}
                </SquareBtn>
              </div>
            ))}
          </Btnbox>
          <Textbox>
            <p>{btnitems.text}</p>
            {btnitems.card && <div className="title">솔루션 교육회원 Only</div>}
          </Textbox>
          <TextCardbox>
            {btnitems.card &&
              btnitems.card.map((item) => (
                <Card key={item.title}>
                  <Iconwrapper>{item.icon()}</Iconwrapper>
                  <div className="box">
                    <h1 className="number">{item.number}</h1>
                    <h1 className="title">{item.title}</h1>
                  </div>
                  <p className="text">{item.text}</p>
                </Card>
              ))}
          </TextCardbox>
          <BtnWrapper>
            <Button01 bgcolor={"#269cd3"}>교육신청</Button01>
          </BtnWrapper>
        </Box>
      </Section>
      <Section>
        <Box>
          <h1>샘플영상</h1>
          <div className="line"></div>
        </Box>
        <Videobox>
          <iframe
            src="https://www.youtube.com/embed/GXM-5j9NDDw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/EcOE1ScBozI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Videobox>
      </Section>
      <Section>
        <Box>
          <Edsection />
        </Box>
      </Section>
    </Container>
  );
};

export default Video;
