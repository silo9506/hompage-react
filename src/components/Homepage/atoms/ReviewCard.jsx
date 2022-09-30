import styled from "styled-components";

const ReviewCard = ({ bgColor, list, index }) => {
  console.log(index);
  return (
    <Container bgColor={bgColor} index={index}>
      <Thumbnail src={list.img}></Thumbnail>
      <Text>
        <h1>{list.title}</h1>
        <p>
          작성자 : {list.name}
          {"\u00a0"}
          <span> </span> {"\u00a0"} 견종 : {list.dog}
        </p>
      </Text>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: ${({ index }) => index >= 2 && "none"};
  }
`;
const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;
const Text = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 14px;

  h1 {
    width: 90%;
    min-width: 0px;
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    overflow: hidden;
  }
  span {
    border-right: 1px solid black;
  }
`;
export default ReviewCard;
