import styled, { MainTheme } from "styled-components"

export const FQAStyled = styled.div.attrs({
  className: "FQA"
})`
  background-color: black;
  display: flex;
  justify-content: center;
  overflow-x: clip;

  .FQAContainer{
    display: flex;
    width: 100%;
    gap: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    max-width: 1300px;
    justify-content: center;
  }

  h3 {
    color: white;
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
  }

  .questions__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 81px 24px;
  }

  .questions__items {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3px;
  }

  .questions__image, .vammoBlock {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    margin-left:auto;
    margin-right: auto;
    padding-bottom: 120px;
    margin-top: 100px;
    height: 850px;

    h3 {
      margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
    }

    .questions__block {
      flex: 1 1 50%;
      padding-top: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
      min-width: 450px;
    }

    .questions__image {
      display: flex;
      flex: 1 1 50%;
      max-height: 670px;
      max-width: 800px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .vammoBlock {
      display: flex;
      width: fit-content;
      overflow-x: hidden;
      position: absolute;
      transform:translateY(-50%);
      z-index: 10;
      height: 170px;
      flex: 1 0 content;
    }
  }

  @media (min-width: 1350px) {
    .questions__block{
      padding-left: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    }
  }
`