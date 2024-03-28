import styled from "styled-components";
import F1Logo from "../assets/F1_logo.png";

function Heading() {
  return <StyledHeading>
    <ImageContainer src={F1Logo}/>
    <TextContainer>Fantasy Leaderboard</TextContainer>
  </StyledHeading>;
}

const StyledHeading = styled.h1`
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 70px;

    background-color: #171717;

    gap: 3px;
`;
const ImageContainer = styled.img`
    height: 18px;
    margin: 0;
    padding: 0;
`;
const TextContainer = styled.div`
    font-size: .45em;
    margin: 0;
    padding: 0;

    color: #828282;
`;

export default Heading;