import { Button, InputText, InputSelect } from "@/lib/components"
import {PerformanceFormStyled} from "./style"
import { Data } from ".."

interface IPropsFormPerformance {
  data: Data
  changeInputForm?: (args: any) => void
  calculate: () => void
  form: any
}

export const PerformanceForm = ({ data, changeInputForm, form, calculate }: IPropsFormPerformance) => {
  const optionsArray = data.plans.map((plan: any) => `${plan.type} (${plan.bike})`)

  return (
    <PerformanceFormStyled>
      <h3>Quer saber se vale a pena mudar para uma moto elétrica?</h3>
      <div className="PerformanceForm__form">
        <InputText
          style={{ padding: "16.5px 24px", fontWeight: "bold" }}
          name="km"
          onChange={changeInputForm}
          placeholder="Ex: 160"
          label="Quantos km você roda por dia?"
          value={form.km}
          type="number"
        />

        <InputSelect
          style={{ padding: "16px 24px", fontWeight: "bold" }}
          name="select"
          onChange={changeInputForm}
          placeholder="Selecione"
          label="Selecione um plano para comparar"
          optionsSelect={optionsArray}
        />

        <Button text={"Calcular"} onClick={calculate} />
      </div>
    </PerformanceFormStyled>
  )
}
