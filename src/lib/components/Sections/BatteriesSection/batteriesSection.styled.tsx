import styled from "styled-components";

export const BatteriesStyled = styled.div.attrs({
  className: "batteriesSection",
  id: "batteries_section"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BatteriesContainerStyled = styled.div.attrs({
  className: "batteries__container"
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 60px;
  align-items: center;
  width: 100%;
  padding: 24px;

  button{
    max-width: 368px;
  }

  .batteries__img{
    display: flex;
    width: 100%;
    max-width: 650px;

    img{
      align-self: flex-end;
      object-fit: contain;
    }

    img:first-child{
      width: 60%;
      height: 100%;
      margin-bottom: 40px;
    }

    img:nth-child(2){
      width: 40%;
      height: 100%;
    }
  }

  .batteries__informationBox{
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;

    p{
      max-width: 450px;
      text-align: center;
    }
  }

  @media(min-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1100px;
    gap: 10px;
    padding: 170px 24px;

    h3{
      text-align: left;
    }

    .batteries__informationBox{
      p{
        font-size: 18px;
        margin-bottom: 70px;
        align-self: flex-start;
        text-align: left;
      }
    }

    .batteries__img{
      grid-area: 1/2/3/3;
    }
  }
`
