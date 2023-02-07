import styled, { MainTheme } from "styled-components"

export const ContactUsFormStyled = styled.div.attrs({
  className: "ContactUsFormStyled",
  id: "contact"
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 60px;
  padding: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
  padding-bottom: 6rem;

  h3 {
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
    max-width: 1100px;
    z-index: 100;
  }

  .contactUsForm__form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
    z-index: 100;
    max-width: 1100px;
  }

  .contactUsForm__formSection {
    flex: 1 1 calc(50% - ${({ theme }: { theme: MainTheme }) => theme.margins.small});
    min-width: 280px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }: { theme: MainTheme }) => theme.margins.small};

    & > button {
      margin-top: 0;
      width: 100%;
      margin-top: 1rem;
      display: none;
    }

    & > .contactUsForm__message {
      display: none;
    }
  }

  .contactUsForm__img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 350px;
    z-index: 1;
    height: auto;
  }

  .contactUsForm__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;

    margin-top: 1rem;
    z-index: 100;
  }

  .contactUsForm__message {
    padding: 20px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin-top: 1rem;
    width: 100%;
    z-index: 100;
    margin-top: 2rem;

    background: #C3ECCC;

    &.error{
      background: #E3B3B3;
    }
  }

  button {
    margin-top: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    z-index: 100;
    margin-top: 4rem;
  }

  .loadingspinner__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-top: 1rem;
  }

  .loadingspinner {
    pointer-events: none;
    width: 2.5em;
    height: 2.5em;
    border: 0.4em solid transparent;
    border-color: #8d8d8d;
    border-top-color: #FF8032;
    background-color: white;
    outline: 8px solid white;
    border-radius: 50%;
    padding: 1rem;
    animation: loadingspin 1s linear infinite;
  }

  @keyframes loadingspin {
    100% {
      transform: rotate(360deg)
    }
  }

  @media (min-width: 720px) {
    h3 {
      margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    }

    & > button {
      display: none;
    }

    & > .contactUsForm__message {
      display: none;
    }

    .contactUsForm__formSection {
      & > button {
        display: block;
      }

      & > .contactUsForm__message {
        margin-top: 1rem;
        display: block;
      }
    }

    .contactUsForm__img {
      max-width: 400px;
    }
  }

  @media (min-width: 1080px) {
    .contactUsForm__img {
      max-width: 600px;
    }
  }
`
