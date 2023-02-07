import styled from "styled-components"

export const FooterStyled = styled.div.attrs({
  className: "footer"
})`
  display: flex;
  width: 100%;
  padding: 24px;
  background-color: black;
  color: white;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  font-size: 14px;

  .title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .footer__icons {
    display: flex;
    gap: 1rem;
  }

  .footer__icons-mobile {
    display: none;
  }

  @media (min-width: 1024px){
    flex-direction: row;
    gap: 64px;

    .title{
      width: fit-content;
    }

    .description{
      align-items: flex-start;
    }

    .footer__icons {
      display: none;
    }

    .footer__icons-mobile {
      display: flex;
      gap: 1rem;
    }
  }
`
