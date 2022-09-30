import styled from "styled-components";
import { grouplessonitem } from "../data/homepage/cards";
import GroupCard from "../atoms/GroupCard";

const Container = styled.div`
  padding: 70px 60px 70px;
  background-color: rgb(247, 247, 247);
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    padding: 70px 10px;
  }
`;
const Cardbox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 14.5px));
  grid-gap: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, calc(33% - 10px));
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, calc(50%));
    grid-gap: 5px;
  }
`;
const Filterbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  select {
    width: 145px;
    border-radius: 3px;
    padding: 0 22px 0 10px;
    margin: 0 5px;
    color: #777;
    font-size: 13px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Btn = styled.button`
  border-radius: 3px;
  background-color: #42c5a1;
  border-color: transparent;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  width: 84px;
  min-width: 50px;
  height: 37px;
`;

const GroupLesson = () => {
  const all = ["전체", "모집중", "모집마감"];
  const date = [
    "요일선택",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const place = ["장소선택", "캠퍼스", "캠퍼스 외"];
  const keyword = [
    "키워드 전체",
    "예절교육",
    "사회화",
    "산책",
    "퍼피",
    "분리불안",
  ];
  const trainer = [
    "훈련사 전체",
    "이용선",
    "공재원",
    "성승현",
    "박단비",
    "이재영",
  ];
  return (
    <Container>
      <Filterbox>
        <select name="" id="">
          {all.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <select name="" id="">
          {date.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <select name="" id="">
          {place.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <select name="" id="">
          {keyword.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <select name="" id="">
          {trainer.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <Btn>검색</Btn>
      </Filterbox>
      <Cardbox>
        {grouplessonitem.map((item) => (
          <GroupCard item={item}></GroupCard>
        ))}
      </Cardbox>
    </Container>
  );
};

export default GroupLesson;
