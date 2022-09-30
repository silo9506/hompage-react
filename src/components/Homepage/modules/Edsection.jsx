import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Puppy } from "../../../assets/svg/homepage/puppyicon01.svg";
import Button01 from "../atoms/Button01";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  .line {
    margin: 20px 0;
    width: 44px;
    border-bottom: 3.5px solid black;
  }
`;
const Title = styled.div`
  font-size: 24px;
`;
const Cardbox = styled.div`
  display: flex;
  padding: 0 25px;
  margin: 0 100px;
  height: 280px;
  margin-bottom: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 1200px) {
    margin: 0px;
    padding: 0px;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: fit-content;
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
  height: 100%;
  box-sizing: border-box;
  .title {
    margin-bottom: 25px;
    font-size: 20px;
    font-size: 18px;
    color: #333;
    position: relative;
  }
  .text {
    color: #555;
    font-size: 15px;
    line-height: 24px;
  }
  @media screen and (max-width: 1000px) {
    .title {
      font-size: 16px;
    }
    .text {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    padding-bottom: 0px;
    margin: 10px 0 10px 0;
  }
`;
const PositionBox = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    position: unset;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding-top: 10px;
  }
`;
const Iconwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: yellow;
  svg {
    width: 80%;
    height: 80%;
  }
  @media screen and (max-width: 850px) {
    height: 60px;
    width: 60px;
    margin-right: 10px;
  }
`;
const Name = styled.div`
  color: #333;
  margin-top: 5px;
  font-size: 14px;
`;
const CounselingBox = styled.div`
  background: #fff4b5;
  text-align: center;
  padding: 32px 0 35px;
  color: #333;
  box-sizing: border-box;
  width: 100%;
  margin-top: 70px;

  .title {
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 24px;
  }
  p {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const Edsection = () => {
  return (
    <Container>
      <Title>교육 후기</Title>
      <div className="line"></div>
      <Cardbox>
        <Card>
          <div className="box">
            <h1 className="title">기적 같은 개인레슨 후에</h1>
            <p className="text">
              버벅이던 리드워크와 주니어클래스 때 그리가 하기 싫어하는
              앉아/엎드려&기다려를 훈련 받았어요. 리드워크는 익숙해지도록
              복습하고 있지만 능숙하게
            </p>
          </div>
          <PositionBox>
            <Iconwrapper>
              <Puppy />
            </Iconwrapper>
            <Name>김현철님</Name>
          </PositionBox>
        </Card>
        <Card>
          <div className="box">
            <h1 className="title">기적 같은 개인레슨 후에</h1>
            <p className="text">
              버벅이던 리드워크와 주니어클래스 때 그리가 하기 싫어하는
              앉아/엎드려&기다려를 훈련 받았어요. 리드워크는 익숙해지도록
              복습하고 있지만 능숙하게
            </p>
          </div>
          <PositionBox>
            <Iconwrapper>
              <Puppy />
            </Iconwrapper>
            <Name>김현철님</Name>
          </PositionBox>
        </Card>
        <Card>
          <div className="box">
            <h1 className="title">기적 같은 개인레슨 후에</h1>
            <p className="text">
              버벅이던 리드워크와 주니어클래스 때 그리가 하기 싫어하는
              앉아/엎드려&기다려를 훈련 받았어요. 리드워크는 익숙해지도록
              복습하고 있지만 능숙하게
            </p>
          </div>
          <PositionBox>
            <Iconwrapper>
              <Puppy />
            </Iconwrapper>
            <Name>김현철님</Name>
          </PositionBox>
        </Card>
      </Cardbox>
      <Link to={"/homepage/Community/review"}>
        <Button01 border={"black"} bgcolor={"transparent"} color={"#333"}>
          후기 더보기
        </Button01>
      </Link>
      <CounselingBox>
        <h1 className="title">
          <strong>어떤 교육</strong>을 들어야 할지 고민이세요?
        </h1>
        <p>상담 신청해주시면 영업일 기준 3-5일 이내로 전화드립니다.</p>
        <Button01>상담 신청</Button01>
      </CounselingBox>
    </Container>
  );
};

export default Edsection;
