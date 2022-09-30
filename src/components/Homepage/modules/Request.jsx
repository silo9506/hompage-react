import styled from "styled-components";
import { edcard, edpackage, edsolution, edtopic } from "../data/homepage/cards";
import EdCard from "../atoms/EdCard";
const Container = styled.div`
  padding: 30px 100px;
  background: #f7f7f7;
  box-sizing: border-box;
  @media screen and (max-width: 1100px) {
    padding: 10px 20px;
  }
`;
const Title = styled.div`
  padding-top: 50px;
  margin-bottom: 20px;
  strong {
    font-weight: 500;
    font-size: 22px;
  }
  p {
    font-size: 14px;
  }
  @media screen and (max-width: 950px) {
    text-align: center;
    strong {
      display: block;
      margin-bottom: 5px;
    }
  }
`;
const Request = () => {
  return (
    <Container>
      <Title>
        <p>
          <strong>나 혼자 한다 패키지</strong> 영상강의 시청만을 위한
          패키지입니다. 그룹/개인 레슨은 솔루션 교육회원 가입 후 가능합니다.
        </p>
      </Title>
      {edpackage.map((item) => (
        <EdCard item={item}></EdCard>
      ))}
      <Title>
        <p>
          <strong>개별토픽 & 세미나</strong> 특정 주제의 토픽과 세미나를
          선택하여 수강하실 수 있습니다.
        </p>
      </Title>
      {edtopic.map((item) => (
        <EdCard item={item}></EdCard>
      ))}

      <Title>
        <p>
          <strong>솔루션</strong> 교육회원 수강 기간 동안 보듬교육의 모든
          영상강의가 제공되며 오프라인 레슨에 참여하실 수 있습니다.
        </p>
      </Title>
      {edsolution.map((item) => (
        <EdCard item={item}></EdCard>
      ))}
    </Container>
  );
};

export default Request;
