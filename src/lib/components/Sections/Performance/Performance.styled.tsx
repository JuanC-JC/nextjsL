import styled, { MainTheme } from "styled-components"

export const PerformanceStyled = styled.div.attrs({
  className: "Performance"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: black;

  h3 {
    color: white;
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
  }

  @media (min-width: 1024px) {
    padding: 76px 0 112px;
  }
`
