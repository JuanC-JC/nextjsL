import styled from "styled-components"

export const MainSectionStyled = styled.div.attrs({
  className: "mainSection",
  id: "home"
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 24px;
  padding: 34px 24px;
  padding-top: 80px;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  align-items: flex-start;

  .images {
    position: relative;
    width: 100%;

    img {
      height: 30vh;
      width: 100%;
      object-fit: cover;
      object-position: center 10%;
    }

    & > div {
      display: flex;
      height: 120px;
    }

    .vammoBlock {
      height: 30%;
      flex: 1 0 content;
      position: absolute;
      bottom: -3vh;
      right: 50vw;
      width: fit-content;
    }
  }

  .titleContainer {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 3rem;

    a {
      display: none;
    }
  }

  .title {
    font-weight: bolder;
    font-size: 38px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > span:first-child {
      background: linear-gradient(180deg, rgba(255, 128, 50, 0) 0%, #FF8032 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    &> span:last-child {
      background: linear-gradient(180deg, #FF8032 0%, rgba(255, 128, 50, 0) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .description {
    font-weight: 400;
  }

  h1 {
    font-size: 38px;

    & > span {
      color: #FF8032;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 0;
    height: 100vh;
    padding-right: 0;

    & > a {
      display: none;
    }

    .title {
      font-size: 50px;
    }

    h1 {
      font-size: 55px;
    }

    .titleContainer {
      max-width: 550px;
      grid-area: 1 / 1 / 3 / 2;
      justify-self: center;

      .description {
        margin-bottom: 1rem;
      }

      a {
        display: block;
        width: 100%;
        max-width: 260px;
      }
    }

    .description {
      font-size: 20px;
    }

    .images {
      width: 100%;

      height: 100% !important;
      max-width: 700px;
      justify-self: flex-end;
      grid-area: 1 / 2 / 6 / 3;
      display: flex;

      img  {
        height: 100%;
      }

      .vammoBlock {
        height: 14vh;
        right: 80%;
        bottom: 6%;
      }
    }
  }

  @media (min-width: 1500px) {
    .images {
      height: 740px;

      img  {
        width: 100%;
      }

      .vammoBlock {
        height: 200px;
        right: 80%;
        bottom: 18%;
      }
    }
  }
`
