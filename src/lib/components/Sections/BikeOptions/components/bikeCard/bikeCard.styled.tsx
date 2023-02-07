import styled from "styled-components";

export const BikeCardStyled = styled.div.attrs({
  className: "bikeCard"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px 32px;
  border: 8px solid black;
  width:310px;

  .title{
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
  }

  img{
    width:100%;
    height: 170px;
    object-fit: cover;
  }

  .item{
    display: flex;
    gap: 10px;
    align-items:center;
  }
`
