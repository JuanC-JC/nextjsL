import styled, { MainTheme } from "styled-components"
import mixinsStyled from "@/lib/configuration/mixins.styled"

export const PlanCardStyled = styled.div.attrs({
  className: "planCard"
})`
  display: flex;
  flex-direction: column;
  border: 8px solid black;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 310px;
  }

  .planCard__body {
    padding: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > .planCard__item:first-child {
      display: flex;
      align-items: center;
      ${mixinsStyled.H5_MOBILE}
      height: 40px;
    }
  }

  h4 {
    color: white;
    background-color: black;
    text-align: center;
    padding: 13px 0px;
    ${mixinsStyled.H3_MOBILE}
  }

  .planCard__price {
    ${mixinsStyled.H3_MOBILE}
  }

  .planCard__descriptions {
    & > div {
      margin-bottom: 10px;
    }
  }
`

export const PlanCardItemStyled = styled.div.attrs({
  className: "planCard__item"
})`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 56px;
    height: 100%;
  }
`

export const Separation = styled.div.attrs({
  className: "separation"
})`
  width: 100%;
  height: 3px;
  background: ${(props: any) => props.color};
`

export const PlanCardPriceStyled = styled.div.attrs({
  className: "planCard__price"
})`
  background: ${(props: any) => props.color};
  text-align: center;
  padding: 12px 0;
  margin-top: auto;
`
