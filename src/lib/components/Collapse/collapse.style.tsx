import styled from "styled-components"
import { ICollapseStyledProps } from "./interfaces"

export const CollapseStyled = styled.div<ICollapseStyledProps>`
  height : ${({ height }: any) => `${height}px`};
  overflow: hidden;
  transition: ${({ transition }: any) => `height ${transition}ms`};
`