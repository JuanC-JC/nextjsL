import styled from "styled-components"

export const GenericButtonStyled = styled.button<any>`
  background-color: ${(props: any) => props.color || props.theme.colors.primary};
  color: white;
  outline: none;
  border: none;
  padding: ${(props: any) => props.padding || `20px`};
  font-weight: 700;
  font-size: ${(props: any) => props.fontSize || `16px`};
  cursor: pointer;
  width: ${(props: any) => props.width || `calc(100% - 48px)`};

  @media (min-width: 1024px) {
    width: 380px;
  }

  ${(props: any) => props.outline && `
    width: calc(100% - 48px);
    border: 2px solid ${props.color || props.theme.colors.primary};
    background: white;
    color: ${props.color || props.theme.colors.primary};
    padding: ${props.padding};
    font-size: 18px;

    @media (min-width: 1024px) {
      width: fit-content !important;
    }
  `}
`

export const GenericLinkStyled = styled.a<any>`
  background-color: ${(props: any) => props.color || props.theme.colors.primary};
  color: white;
  outline: none;
  border: none;
  padding: ${(props: any) => props.padding || `20px`};
  font-weight: 700;
  font-size: ${(props: any) => props.fontSize || `16px`};
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: ${(props: any) => props.width || `calc(100% - 48px)`};

  @media (min-width: 1024px) {
    width: 380px;
  }

  ${(props: any) => props.outline && `
    width: calc(100% - 48px);
    border: 2px solid ${props.color || props.theme.colors.primary};
    background: white;
    color: ${props.color || props.theme.colors.primary};
    padding: ${props.padding};
    font-size: 18px;

    @media (min-width: 1024px) {
      width: fit-content !important;
    }
  `}
`
