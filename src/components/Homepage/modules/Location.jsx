import styled from "styled-components";
import KakaoMap from "../atoms/KakaoMap";

const Container = styled.div`
  padding: 70px 150px;
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const Map = styled.div`
  width: 100%;
  height: 400px;
`;
const Text = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px 0px;
  h1 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 23px;
  }
  span {
    color: #269cd3;
  }
  div {
    margin-top: 46px;
  }
`;

const Location = () => {
  return (
    <Container>
      <Map>
        <KakaoMap></KakaoMap>
        {/* <img
          src={process.env.PUBLIC_URL + "/assets/homepage/location01.jpg"}
          alt="dog"
        /> */}
      </Map>
      <Text>
        <h1>LovelyPoppy</h1>
        <h2>서울특별시 강북구 수유동 288-4</h2>
        <div>
          <h2>
            대표전화:<span>1541-1588</span>
          </h2>
          <p>
            업무시간 : 09:00 ~ 18:00 / 점심시간 12:00 ~ 13:00
            <br /> 토,일, 공휴일은 휴무입니다.
          </p>
        </div>
      </Text>
    </Container>
  );
};

export default Location;
