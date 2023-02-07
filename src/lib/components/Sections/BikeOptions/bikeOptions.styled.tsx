import styled from "styled-components"

export const BikeOptionsStyled = styled.div.attrs({
  className: "bikeOptions",
  id: "bikes"
})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-bottom: 75px;
  margin-top: 75px;
  padding: 0px 24px;
  z-index: 1000;
  position: relative;

  button {
    width: 100%;
  }

  .bikeOptions__cardsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    .bikeOptions__cardsContainer {
      gap: 64px;
    }

    button {
      width: 380px;
    }
  }
`
