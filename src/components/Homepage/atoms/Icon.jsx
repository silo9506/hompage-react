import styled from "styled-components";

const Icon = ({ icon, children }) => {
  return <Container>{!!children ? children : icon()}</Container>;
};
const Container = styled.div`
  width: fit-content;
  height: 100%;
`;
export default Icon;
