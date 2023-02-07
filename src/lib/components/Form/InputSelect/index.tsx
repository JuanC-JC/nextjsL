import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import mixinsStyled from "../../../configuration/mixins.styled"
import iconSelect from "../../../../assets/images/icon_select.webp"

interface IPropsInputSelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  optionsSelect: (string)[]
  onChange?: (args: any) => void
}

const InputSelectStyled = styled.div.attrs({
  className: "inputSelect"
})`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;

  .select {
    outline: none;
    border: 2px solid black;
    width: 100%;
    background: #fff;
    background: url(${iconSelect.src}) no-repeat 95% 50% white !important;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 20px;
    width: 100%;
    outline: none;
  }

  label {
    ${mixinsStyled.H5_MOBILE}
  }
`

const InputSelect = ({ label, optionsSelect, ...props }: IPropsInputSelect) => {
  const [option, setOption] = useState(optionsSelect[1])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (typeof props.onChange === "function") {
      const value = event.target.value

      props.onChange({ name: event.target.name, value: value })
      setOption(event.target.value)
    }
  }


  return (
    <InputSelectStyled >
      <label>{label}</label>

      <div className="select">
        <select {...props} value={option} onChange={handleChange}>
          {optionsSelect.map((optSelect: string) => (
            <option key={optSelect}>
              {optSelect}
            </option>
          ))}
        </select>
      </div>
    </InputSelectStyled>
  )
}

export default InputSelect
