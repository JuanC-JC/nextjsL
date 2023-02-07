// import { useEffect, useState } from "react"
import styled from "styled-components"
import mixinsStyled from "../../../configuration/mixins.styled"
import { If } from "../../../helpers"

interface IPropsInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onChange?: (args: any) => void
  formatter?: (args: any) => string
  pattern?: string
  type?: string
  error?: string
  setError?: (...args: any) => void
}

const InputTextStyled = styled.div.attrs({
  className: "inputText"
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  input {
    margin-top: 16px;
    outline: none;
    border: 2px solid black;
    width: 100%;
    padding: 20px;
  }

  .inputText__error {
    border: 2px solid #DF3F3F;
    /* color: #DF3F3F; */
  }

  label {
    ${mixinsStyled.H5_MOBILE}
    /* background-color: white; */
    display: inline;
    width: fit-content;
  }

  p {
    opacity: 0;
  }

  .textError {
    position: absolute;
    color: #DF3F3F;
    background-color: white;
    padding: 0 0.5rem;
    font-size: 16px;
    opacity: 1;
    bottom: -25px;
  }
`

function InputText({ label, formatter, pattern, error, setError, ...props }: IPropsInputText) {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {

    if (typeof setError === "function") {
      setError(props.name, "")
    }

    if (typeof props.onChange === "function") {
      const value = target.value

      const formatedValue = typeof formatter === "function" ? formatter(value) : value

      props.onChange({ name: target.name, value: formatedValue })
    }
  }

  return (
    <InputTextStyled >
      <label>{label}</label>
      <input
        {...props}
        value={props.value}
        onChange={handleChange}
        pattern={pattern}
        // onBlur={handleBlur}
        className={error ? 'inputText__error' : ''}
        type={props.type || "text"}
        min={1}
      />
      <If condition={error}>
        <p className='textError'>{error}</p>
      </If>
    </InputTextStyled>
  )
}

export default InputText