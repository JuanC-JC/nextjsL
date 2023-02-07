import styled, { MainTheme } from "styled-components"

export const PlansStyled = styled.div.attrs({
  className: "plans",
  id: "prices"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
  margin-bottom: 24px;
  padding: 16px 24px;

  .plans__container {
    display: flex;
    gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width:1024px) {
      gap: 64px;
    }
  }

  @media (min-width: 1024px) {
    gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
    margin-bottom: 40px;
  }
`
