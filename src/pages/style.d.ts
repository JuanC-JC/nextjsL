import "styled-components"

declare module "styled-components" {
  export interface MainTheme {
    name: string,
    colors: {
      primary: string,
      secondary: string
    },
    fonts: [
      string
    ],
    paddings: {
      small: string,
      medium: string
    },
    margins: {
      small: string
      medium: string
    }
    configFonts: {
      heading1: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      heading2: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      heading3: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      heading4: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      heading5: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      text: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      caption?: {
        weigth: string,
        lineHeight: string,
        size: string;
      },
      button?: {
        weigth: string,
        lineHeight: string,
        size: string;
      }
    }
  }
}