import styled from "styled-components";
// import Button from "../../Hompage/atoms/Button";
import Button01 from "./Button01";
import { ReactComponent as Discounticon } from "../../../assets/svg/homepage/discount03.svg";
const Container = styled.div`
  padding: 35px 35px;
  width: 100%;
  display: flex;
  height: fit-content;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Img = styled.div`
  width: 100%;
  height: 225px;
  padding-right: 35px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 650px) {
    height: 350px;
    padding-bottom: 15px;
  }
`;
const Text = styled.div`
  line-height: 18px;
  padding-right: 35px;
  width: 100%;
  font-size: 14px;
  color: #555;
  word-break: keep-all;
  h1 {
    font-size: 24px;
    color: #333;
  }
  ul {
    margin: 17px 0;
    list-style-type: disc;
    list-style-position: outside;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }
  li {
    padding-bottom: 8px;
  }
`;
const Btnwrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    & button {
      width: 100%;
    }
  }
`;
const Info = styled.div`
  height: 225px;
  position: relative;
  width: 33%;
  margin-left: 32px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin-top: 25px;
    width: 100%;
    padding: 0px;
    margin-left: 0px;
    height: 180px;
  }
`;
const Pricewrapper = styled.div`
  width: 100%;
  color: #777;
  font-size: 14px;
  font-weight: 500;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  strong {
    text-decoration: line-through;
    font-size: 20px;
    font-weight: 400;
  }
`;
const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  strong {
    font-size: 24px;
    color: #061f5c;
    font-weight: 400;
  }
`;
const Iconbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
`;
const Positionbox = styled.div`
  display: flex;
  position: absolute;
  /* padding-left: 32px; */
  top: 0;
  left: 0;
`;
const Label = styled.div`
  color: black;
  font-size: 12px;
  height: 18px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  margin-right: 4px;
  background-color: ${({ value }) => value};
`;
const Imgbox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 70%;
  border-right: 1px solid #cdcdcd;
  @media screen and (max-width: 900px) {
    /* flex-direction: column; */
    border-bottom: 1px solid #cdcdcd;
    border-right: none;
    width: 100%;
    padding-bottom: 25px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
const EdCard = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Imgbox>
        <Img>
          <img src={process.env.PUBLIC_URL + item.img} alt="" />
        </Img>
        <Text>
          <h1>{item.title}</h1>
          <ul>
            {item.text.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Text>
      </Imgbox>
      <Info>
        {item.price && (
          <Iconbox>
            <Discounticon />
          </Iconbox>
        )}

        <Positionbox>
          {item.best && <Label value={"#76d0f2;"}>BEST</Label>}
          {item.new && <Label value={"#fbe365;"}>NEW</Label>}
          {item.enent && <Label value={"#7dd0be;"}>EVENT</Label>}
        </Positionbox>
        <Pricewrapper>
          {item.price && (
            <Price>
              <p>수강료</p>
              <strong>{item.price}</strong>
            </Price>
          )}

          <Discount>
            <p>할인가</p>
            <strong>{item.discount}</strong>
          </Discount>
        </Pricewrapper>
        <Btnwrapper>
          <Button01 bgcolor={"#f3f3f3"} color={"black"}>
            상세설명
          </Button01>
          <Button01>신청하기</Button01>
        </Btnwrapper>
      </Info>
    </Container>
  );
};

export default EdCard;
