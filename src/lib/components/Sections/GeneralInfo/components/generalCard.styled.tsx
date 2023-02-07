import styled from "styled-components"

export const GeneralCardStyled = styled.div.attrs({
  className: "generalCard"
})`
  background-color: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  width: 100%;

  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 100%;
    height:170px;
    object-fit: contain;
  }

  a {
    width: 100%;
  }

  @media (min-width: 714px) {
    width: 310px;

    img {
      object-fit: cover;
    }
  }
`
