import styled, { MainTheme } from "styled-components"

export const PerformanceFormStyled = styled.div.attrs({
  className: "PerformanceFormStyled"
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  background-color: black;
  padding: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};

  h3 {
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
    color: white;
  }

  .PerformanceForm__form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
    justify-content: center;
    width: 100%;
  }

  button {
    width: 100%;
    padding: 16px 0;
    font-size: 16px;
    font-weight: 700;
    max-width: 334px;
    margin-top: 36px;
    align-self: center;
  }

  input {
    padding: 16.5px 24px;
    font-weight: bold;
  }

  label {
    color: white;
  }

  @media (min-width: 720px) {
    .PerformanceForm__form {
      flex-direction: row;
    }

    .inputText, .inputSelect {
      max-width: 334px;
    }

    h3 {
      margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    }

    button {
      align-self: center;
    }
  }
`
