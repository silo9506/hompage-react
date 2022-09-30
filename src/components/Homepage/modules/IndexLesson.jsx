import styled from "styled-components";
import Icon from "../atoms/Icon";
import { indexlessonicon } from "../data/homepage/icons";
const IndexLesson = () => {
  return (
    <Container>
      <Title>
        <h1>
          세계최고 수준의
          <br />
          <span>특급훈련사와</span> 함께하는
          <br />
          온·오프라인 교육
        </h1>
        <h2>
          현재 저희의 노하우는 세계 최고 수준에 도달하였다고 자부합니다.
          <br /> 모든 영상교육 및 오프라인 교육은 오랜 기간 누적된
          <br />
          우리만의 교육 노하우를 담고 있습니다.
        </h2>
      </Title>
      <Iconbox>
        {indexlessonicon.map((item) => (
          <Iconwrapper key={item.name}>
            <Icon icon={item.icon} />
            <h1>{item.name}</h1>
            <h1>{item.text}</h1>
          </Iconwrapper>
        ))}
      </Iconbox>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  padding: 100px 150px 0px;
  background-color: rgba(7, 28, 63, 0.7);
  color: white;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    height: 200vh;
    padding: 0px;
    text-align: center;
  }
`;

const Title = styled.div`
  word-break: keep-all;
  font-size: 40px;
  h1 {
    display: inline-block;
    line-height: 120%;
  }
  span {
    color: #269cd3;
  }
  h2 {
    font-size: 16px;
    padding: 20px 0;
    line-height: 120%;
  }
  @media screen and (max-width: 1000px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Iconbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  box-sizing: border-box;
  /* align-items: center; */
  @media screen and (max-width: 1000px) {
    padding: 20px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const Iconwrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  & path {
    fill: white;
  }
  svg {
    fill: "white";
    width: 100%;
    height: 200px;
  }
  h1 {
    width: 60%;
    word-break: keep-all;
    padding-top: 5px;
    font-size: 19px;
  }
  & h1 + h1 {
    font-size: 16px;
    padding-top: 10px;
  }
  &:hover h1,
  &:hover path {
    fill: #269cd3;
    color: #269cd3;
  }
  @media screen and (max-width: 1000px) {
    height: 33%;
    svg {
      height: 100%;
    }
    div {
      height: 50%;
    }
  }
`;
export default IndexLesson;
