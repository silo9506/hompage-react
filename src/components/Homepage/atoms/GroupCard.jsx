import styled, { css } from "styled-components";
import Donut from "./Donut";

const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #eee;
  height: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: ${({ personal }) => (personal ? "65%" : "180px")};
`;
const Box = styled.div`
  padding: ${({ personal }) => (personal ? "10px" : "24px")};
  text-align: center;
  color: #333;
  /* height: 175px; */
  box-sizing: border-box;
  h1 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .people {
    margin: 15px 0;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    white-space: pre-wrap;
  }
  strong {
    color: #061f5c;
    font-weight: 700;
    font-size: 18px;
  }
  .wrapper {
    height: 175px;
  }
  ${({ personal }) =>
    !personal &&
    css`
      width: 100%;
    `}
`;
const Donuts = styled.div`
  padding-top: 14px;
  margin-top: 15px;
  border-top: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #269cd3;
  font-size: 15px;
  @media screen and (max-width: 905px) {
    font-size: 12px;
  }
`;
const Donutwrapper = styled.div`
  height: 20px;
  width: 20px;
  color: #269cd3;
  margin-left: 5px;
  @media screen and (max-width: 905px) {
    width: 15px;
    height: 15px;
  }
`;
const Donutbox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const GroupCard = ({ item }) => {
  // console.log(item.donut);
  return (
    <Container>
      <Img
        personal={item.personal}
        src={process.env.PUBLIC_URL + item.img}
      ></Img>
      <Box personal={item.personal}>
        <div className="wrapper">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <p className="people">{item.people}</p>
          <h1>
            <strong>{item.price}</strong>원
          </h1>
        </div>
        {item.donut && (
          <Donuts>
            {item.donut.map((item) => (
              <Donutbox>
                <span>{item.text}</span>
                <Donutwrapper>
                  <Donut item={{ percent: item.percent, round: true }}></Donut>
                </Donutwrapper>
              </Donutbox>
            ))}
          </Donuts>
        )}
      </Box>
    </Container>
  );
};

export default GroupCard;
