import styled from "styled-components"

export const BackgroundStyled = styled.div.attrs({
  className: "BackgroundStyled"
})`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  height: 1000px;
  width: 3000px;
  top: 0;
  left: 0;
  z-index: 1000;
`
