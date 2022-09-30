import styled from "styled-components";
import { grouplessonitem, personalitem } from "../data/homepage/cards";
import GroupCard from "../atoms/GroupCard";

const Container = styled.div`
  padding: 70px 120px 70px;
  background-color: rgb(247, 247, 247);
  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`;
const Cardbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-gap: 20px;
  div {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 50%);
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
  height: 37px;
`;
const PersonalLesson = () => {
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
          {trainer.map((item) => (
            <option value="">{item}</option>
          ))}
        </select>
        <Btn>검색</Btn>
      </Filterbox>
      <Cardbox>
        {personalitem.map((item) => (
          <GroupCard item={item}></GroupCard>
        ))}
      </Cardbox>
    </Container>
  );
};

export default PersonalLesson;
