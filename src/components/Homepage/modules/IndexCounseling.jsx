import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Phone } from "../../../assets/svg/homepage/phone02.svg";
import { ReactComponent as Clock } from "../../../assets/svg/homepage/clock01.svg";
import Icon from "../atoms/Icon";
import Button01 from "../atoms/Button01";
const IndexCounseling = () => {
  const [counselinData, setCounselingData] = useState({
    name: "",
    detail: `맞춤교육 프로그램을 위한 상담입니다.
효과적인 교육 추천을 위해 아래 사항을 자세하게 작성해주세요.
      
관심프로그램(ex: 영상교육/그룹레슨/개인레슨 등):
캠퍼스로 방문상담 희망 시 가능한 시간 (ex. 주중/주말 오후 2시) :
반려견이름:
나이:
견종:
중성화 여부:
문제행동 :`,
    phone: ["010", "011", "016", "017", "018", "019"],
  });
  const detailChange = (e) => {
    setCounselingData({ ...counselinData, detail: e.target.value });
  };
  return (
    <Container>
      <Infobox>
        <Title>
          어떤교육을
          <br /> 들어야 할지 고민이세요?
        </Title>
        <Box>
          <IconWrapper>
            <Icon>
              <Phone />
            </Icon>
            <p>고객센터 1800 - 6358</p>
          </IconWrapper>

          <IconWrapper>
            <Icon>
              <Clock />
            </Icon>
            <p>
              업무시간 09:00 ~ 18:00,
              <br /> 점심시간 12:00 ~ 13:00
              <br /> <strong>토요일, 일요일, 공휴일 휴무</strong>
            </p>
          </IconWrapper>
        </Box>
      </Infobox>
      <Counselingform>
        <h1>상담신청하기</h1>
        <input
          placeholder="이름"
          value={counselinData.name}
          onChange={(e) =>
            setCounselingData({ ...counselinData, name: e.target.value })
          }
        />
        <PhoneInput>
          <select>
            {counselinData.phone.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {"\u00a0"}-{"\u00a0"}
          <input></input>
          {"\u00a0"}-{"\u00a0"}
          <input></input>
        </PhoneInput>
        <textarea
          value={counselinData.detail}
          onChange={(e) => detailChange(e)}
          onBlur={(e) => detailChange(e)}
        ></textarea>
        <Checkbox>
          <label>
            <input type={"checkbox"}></input>
            동의
            <span>(개인정보 취급방침)</span>
          </label>
        </Checkbox>
        <div className="btnbox">
          <Button01>상담신청</Button01>
        </div>
      </Counselingform>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  background-color: rgba(55, 170, 151, 0.7);
  padding: 50px 150px;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  @media screen and (max-width: 1000px) {
    height: 200vh;
    flex-direction: column;
    padding: 10px;
  }
`;
const Infobox = styled.div`
  /* display: flex;
flex-direction: column; */
  height: 60%;
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const IconWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
    background-color: #3a5591;
    border-radius: 50%;
    padding: 10px;
  }
  p {
    padding-left: 10px;
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
    width: 50%;
    flex-direction: column;
    background: rgba(6, 31, 92, 0.6);
    height: 120px;
    padding: 20px 10px;
    color: white;
    white-space: nowrap;
    overflow: hidden;

    & + & {
      margin-left: 10px;
    }
    svg {
      background-color: rgba(55, 170, 151, 0.7);
    }
    div {
      height: fit-content;
      margin-bottom: 10px;
    }
    strong {
      line-height: 400%;
      font-size: 11px;
      text-align: center;
    }
    & > p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      font-size: 13px;
      text-align: center;
    }
  }
`;
const Title = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
  }
`;
const Counselingform = styled.form`
  /* display: flex;
flex-direction: column; */
  height: 60%;
  width: 50%;
  font-size: 22px;
  input,
  select {
    padding: 0 20px;
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 10px;
  }
  textarea {
    resize: none;
    height: 235px;
    width: 100%;
    padding: 18px 20px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  @media screen and (max-width: 1000px) {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .btnbox {
      display: flex;
      justify-content: center;
    }
    select,
    input {
      padding: 0px;
    }
    h1 {
      text-align: center;
    }
  }
`;
const PhoneInput = styled.div`
  display: flex;
  align-items: center;
  & select {
    width: fit-content;
  }
`;
const Checkbox = styled.div`
  padding-top: 5px;
  font-size: 16px;
  input {
    height: fit-content;
    margin: 0;
    width: fit-content;
    margin-right: 5px;
  }
  span {
    padding-left: 5px;
    text-decoration: underline;
  }
`;
const Box = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;
export default IndexCounseling;
