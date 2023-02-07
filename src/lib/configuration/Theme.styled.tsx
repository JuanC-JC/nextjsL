import { ThemeProvider, MainTheme } from "styled-components"
import { GlobalStyle } from "./Global.styled"



const mainTheme: MainTheme = {
  name: "main-theme",
  colors: {
    primary: "#0056FF",
    secondary: "#FF8032"
  },
  paddings: {
    small: "24px",
    medium: "48px"
  },
  margins: {
    small: "32px",
    medium: "64px",
  },
  fonts: ["Roboto, sans-serif"],
  configFonts: {
    heading1: {
      weigth: "bolder",
      lineHeight: "64px",
      size: "48px",
    },
    heading2: {
      weigth: "bold",
      lineHeight: "32px",
      size: "32px",
    },
    heading3: {
      weigth: "bold",
      lineHeight: "32px",
      size: "24px",
    },
    heading4: {
      weigth: "bold",
      lineHeight: "24px",
      size: "20px",
    },
    heading5: {
      weigth: "600",
      lineHeight: "22px",
      size: "16px",
    },
    text: {
      weigth: "400",
      lineHeight: "20px",
      size: "14px",
    },
    button: {
      weigth: "500",
      lineHeight: "16px",
      size: "12px"
    }
  }
}

type Props = {
  children: JSX.Element
}

export const Theme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export const transformStyles = (styles: any) => Object.entries(styles).reduce((acc, [key, value]) => {
  return `${acc}${key}: ${value};`
}, "")
