import styled from "styled-components";

export const NewUsStyled = styled.div.attrs({
  className: "newUS",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 0 90px;
`

export const NewUsContainerStyled = styled.div.attrs({
  className: "newUS__container"
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 40px;
  width: 100%;

  & > img {
    height: 100%;
    width: 120px;
    margin: 0 auto;
  }

  .swiper {
    height: auto;
    padding: 5px 0;
    display: flex;
  }

  .swiper-slide {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .swiper-img {
    width: 100%;
    height: 100%;
  }

  a {
    object-fit: scale-down;
    box-shadow: rgb(0 0 0 / 16%) 0px 4px 12px;
  }

  .newUs__informationBox {
    width: 100%;
    max-width: 625px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    gap: 16px;
  }

  p {
    max-width: 450px;
    text-align: center;
  }

  span {
    font-weight: bold;
  }

  @media(min-width: 1024px) {
    margin: 76px 0 100px;

    .newUs__informationBox {
      margin: 28px auto 14px;
    }

    a {
      box-shadow: none;
    }
  }
`
