import styled from "styled-components"

export const AdvantagesStyled = styled.div.attrs({
  className: "advantages",
  id: "services"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;
  padding:24px;

  h3 {
    margin-bottom: 32px;
  }

  .advantageCard {
    flex: 1 1 140px;
  }

  .advantages__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;
  }

  img {
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: 60%;
    min-height: 400px;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1240px) {
    height: 700px;
    justify-content: center;

    .advantages__container {
      transform: translateX(45%);
      max-width: 650px;
    }

    h3 {
      max-width: 430px;
      transform: translateX(80%);
      text-align: justify;
      line-height: 58px;
    }

    img {
      top: 0;
      left: 0;
      width: 55%;
      align-self: flex-start;
      height: 100%;
    }
  }

  @media (max-width: 600px) {
    .advantages__container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`

export const DisponibilityStyled = styled.div.attrs({
  className: "Disponibility_styled"
})`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  font-size: 12px;
  margin: 0;
  padding-right: 1rem;
  color: #767676;

  position: absolute;
  bottom: -1.5rem;
  width: fit-content;
  right: 0;

  @media (min-width: 1024px) {
    bottom: -1rem;
  }

  @media (min-width: 1240px) {
    bottom: -0.2rem;
  }
`

export const AdvantageCardStyled = styled.div.attrs({
  className: "advantageCard"
})`
  display: flex;
  flex-direction: column;
  border: 8px solid ${(props: any) => props.color};
  justify-content: center;
  align-items: center;
  padding: 26px 24px;
  text-align: center;
  background: white;

  .advantageCard__description {
    max-width: 160px;
  }


  .advantageCard__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .advantageCard__iconsContainer {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;

    svg{
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 1024px) {
    font-size: ${(props: any) => props.fontSizeDesktop};
    padding: ${(props: any) => props.paddingDesktop};
    max-width: 100%;
  }
`

export const AutonomyStyled = styled.div.attrs({
  className: "autonomy",
  id: "stations"
})`
  display: flex;
  margin-bottom: 24px;
  background-color: black;
  padding: 32px 24px;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 80px 24px;
  }

  @media (min-width: 1240px) {
    margin-bottom: 0;
  }
`

export const AutonomyContainerStyled = styled.div.attrs({
  className: "autonomy__container"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-items: center;
  max-width: 1100px;

  h3 {
    color: white;
  }

  .autonomy__cardsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;
  }

  .autonomy__mapContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 11px;

    .autonomy__map {
      width: 100%;
      height: 500px;
    }

    .autonomy__mapitems {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;

      & > div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .autonomy_map_icon-legend {
      width: 24px;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    width: 100%;
    grid-template-columns: 0.9fr 1fr;

    .autonomy__mapContainer {
      height: 100%;
      grid-area: 1 / 2 / 3 / 3;

      .autonomy__map {
        height: 100%;
      }

      .autonomy__mapitems {
        flex-direction: row;
      }
    }

    .autonomy__cardsContainer {
      margin-bottom: 30px;
    }
  }
`

