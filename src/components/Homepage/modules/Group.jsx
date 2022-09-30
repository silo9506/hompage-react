import styled from "styled-components";
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
const Group = () => {
  return (
    <Container>
      <Section>
        솔루션 교육회원을 위한 특별한 혜택
        <br /> 보듬훈련사와 함께하는 다양한 주제의<strong> 그룹 레슨!</strong>
        <br /> 다른 반려견과 함께하는 교육을 통해 사회성을 길러주세요.
      </Section>
      <Section>
        <Videobox>
          <iframe
            src="https://www.youtube.com/embed/2QQv1_ngYtA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Textbox>
            <h1 className="title">그룹 레슨이란? </h1>
            강형욱 훈련사님이 자신 있게 추천하는 보듬교육 그룹 레슨!
            <br />
            솔루션 기간 동안 매주 풍부한 주제로 업데이트되는 그룹 레슨을 통해
            <br />
            영상교육의 연장선인 양질의 오프라인 교육을 받으실 수 있습니다.
            <br />
            경험이 풍부한 보듬훈련사의 지도 아래 분리불안, 어질리티, 예절,
            클리커 등<br />
            다양한 주제로 진행되며, 내 반려견과 성향이 맞는 다른 강아지들과
            어울려
            <br />
            사회성을 기를 수 있습니다.
            <br />
            보호자님의 반려견의 이 사회에 잘 적응하고 행복한 생활을 하는 것이
            <br />
            보듬교육의 목표이고 바람입니다.
          </Textbox>
        </Videobox>
      </Section>
      <Section>
        <Edsection></Edsection>
      </Section>
    </Container>
  );
};

export default Group;
