import styled from "styled-components"

export const GeneralInfoStyled = styled.div.attrs({
  className: "generalInfo"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  gap:35px;
  padding: 32px 24px;
  position: relative;
  margin-bottom: 40px;
  /* overflow-y: hidden; */
  z-index: 1000;

  h3 {
    color: white;
  }

  .generalInfo__cardsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    z-index: 1;
    position: relative;
    z-index: 500;
  }

  & > img {
    position: absolute;
    z-index: 100;
    bottom: 7%;
    transform: translateY(120px);
    right: 0;
    max-width: 80vw;
    height: auto;
  }

  @media ( min-width: 1024px ) {
    padding: 70px 32px 120px 32px;
    gap: 68px;
    /* margin-bottom: 100px; */

    .generalInfo__cardsContainer {
      max-width: 1100px;
    }

    & > img{
      transform: translateY(150px);
      max-width: 32vw;
      bottom: 10%;
    }
  }
`