import { GenericLinkStyled, GenericButtonStyled } from "./GenericButton.styled"

interface IPropsButton {
  text: string
  color?: string
  outline?: boolean
  padding?: string
  onClick?: any
  goTo?: string
  width?: string
  fontSize?: string
  id?: string
}

const Button = ({
  text,
  color,
  outline,
  padding,
  onClick,
  goTo,
  width,
  fontSize,
  id
}: IPropsButton) => {
  if (goTo) {
    return (
      <GenericLinkStyled
        onClick={onClick}
        href={`#${goTo}`}
        color={color}
        outline={outline}
        padding={padding}
        width={width}
        fontSize={fontSize}
        id={id}
      >
        {text}
      </GenericLinkStyled>
    )
  }

  return (
    <GenericButtonStyled
      onClick={onClick}
      color={color}
      outline={outline}
      padding={padding}
      width={width}
      fontSize={fontSize}
      id={id}
    >
      {text}
    </GenericButtonStyled>
  )
}

export default Button