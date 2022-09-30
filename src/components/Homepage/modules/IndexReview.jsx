import styled from "styled-components";
import { slideImg } from "../data/homepage/imgs";
import Button from "../atoms/Button";
import { indexreview } from "../data/homepage/cards";
import SlideCrousel from "../atoms/SlidCrousel";
import ReviewCard from "../atoms/ReviewCard";

const IndexReview = () => {
  return (
    <Container>
      <Title>
        <h1>교육을 통해 반려견을 이해하게 됐어요!</h1>
        <p>회원님들의 솔직 후기</p>
      </Title>
      <Imgbox>
        <SlideCrousel imgs={slideImg} />
      </Imgbox>
      <CardBox>
        {indexreview.map((item, index) => (
          <ReviewCard
            key={item.name}
            bgColor={"#FdFaE7"}
            list={item}
            index={index}
          />
        ))}
      </CardBox>
      <Btnwrapper>
        <Button>더 많은 후기 보기</Button>
      </Btnwrapper>
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  background-color: rgba(247, 230, 136, 0.7);
  padding: 100px 150px 0px;
  overflow: hidden;
  height: 100vh;
  @media screen and (max-width: 1200px) {
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Title = styled.div`
  text-align: center;
  padding: 10px 0;
  h1 {
    font-size: 35px;
  }
  p {
    padding-top: 15px;
  }
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 22px;
    }
  }
`;
const Imgbox = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  overflow: hidden;
  position: relative;
`;
const CardBox = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
  grid-gap: 10px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
const Btnwrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
export default IndexReview;
