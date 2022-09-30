import { useRef, useState } from "react";
import styled from "styled-components";
import { frontImg } from "../data/homepage/imgs";
import Carousel from "../atoms/Carousel";
import IndexCounseling from "../modules/IndexCounseling";
import IndexLesson from "../modules/IndexLesson";
import IndexReview from "../modules/IndexReview";
import Minitopnav from "../modules/Minitopnav";
import Topnav from "../modules/Topnav";

const Index = () => {
  const scrollRef = useRef();
  console.log(scrollRef);
  // console.log(scrollRef.current.scrollHeight);
  const [nowPage, setnowPage] = useState(1);
  const [trans, setTrans] = useState(false);
  console.log(scrollRef.current);
  let delay = null;
  const onscroll = (e) => {
    const pageHeight = window.innerHeight;
    const scrollTop = Math.ceil(scrollRef.current.scrollTop);
    clearTimeout(delay);
    delay = setTimeout(() => {
      if (e.deltaY > 0 && nowPage === 1) {
        // if (nowPage === 4) return;
        // if (
        //   scrollRef.current.scrollTop + pageHeight * 2 >
        //   scrollRef.current.scrollHeight
        // )
        //   return;
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollRef.current.scrollTo({
            top: pageHeight + 1,
            left: 0,
            behavior: "smooth",
          });
          console.log(pageHeight);
          console.log(scrollRef.current.scrollTop);
          setnowPage(nowPage + 1);
          setTrans(false);
          return;
        }
      }

      if (e.deltaY > 0 && nowPage !== 1) {
        // if (nowPage === 4) return;

        // if (
        //   scrollRef.current.scrollTop + pageHeight * 2 >
        //   scrollRef.current.scrollHeight
        // )
        if (
          Math.ceil(scrollRef.current.scrollTop) + pageHeight >=
          scrollRef.current.scrollHeight - 2
        )
          return;
        if (scrollTop >= nowPage && scrollTop < pageHeight * nowPage) {
          scrollRef.current.scrollTo({
            top: pageHeight * nowPage + 1,
            left: 0,
            behavior: "smooth",
          });
          setnowPage(nowPage + 1);
          setTrans(false);
          console.log(pageHeight);
          console.log(Math.ceil(scrollRef.current.scrollTop));
          console.log(scrollRef.current.scrollHeight);
          return;
        }
      }

      if (e.deltaY < 0 && nowPage > 1) {
        // scrollRef.current.scrollTo({
        //   top: scrollTop - pageHeight,
        //   left: 0,
        //   behavior: "smooth",
        // });
        scrollRef.current.scrollTo({
          top: pageHeight * (nowPage - 2) + 1,
          left: 0,
          behavior: "smooth",
        });
        setnowPage(nowPage - 1);
        setTrans(true);
      }
    }, 100);
  };
  return (
    <Container ref={scrollRef} onWheel={(e) => onscroll(e)}>
      <Minitopnav top={nowPage - 1} trans={trans} />
      <Topnav></Topnav>
      {/* <Pages> */}
      <Carousel imgs={frontImg}></Carousel>
      {/* </Pages> */}
      {/* <Pages> */}
      <IndexLesson />
      {/* </Pages> */}
      {/* <Pages> */}
      <IndexCounseling />
      {/* </Pages> */}
      {/* <Pages> */}
      <IndexReview />
      {/* </Pages> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* display: flex;
  flex-direction: column; */
`;
const Pages = styled.header`
  height: fit-content;
  box-sizing: border-box;
  overflow: hidden;
`;

export default Index;
