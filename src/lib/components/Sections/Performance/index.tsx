import { useState } from "react"
import { dataTablePerformance, getGasPrice, totalWeek } from "./constants"
import { PerformanceStyled } from "./Performance.styled"
import { PerformanceForm } from "./PerformanceForm"
import { PerformanceTable } from "./PerformanceTable"

export interface Data {
  hColumn: any[]
  plans: any[]
  motorcycles: any[]
}

export const Performance = () => {
  const [form, setForm] = useState({ km: 160, select: "" })
  const [dataTable, setDataTable] = useState(dataTablePerformance)

  const changeInputForm = ({ name, value }: any) => setForm({ ...form, [name]: value })

  dataTable.plans.map(({ type, total, cost, gas }: any) => { if (type === form.select) total = totalWeek(cost, gas) })
  dataTable.motorcycles.map(({ total, cost, gas }: any) => total = totalWeek(cost, gas))

  const calculate = () => {
    const moto = { ...dataTable }.motorcycles[0]

    const price = getGasPrice(Number(form.km))

    window.gtag("event", "web_calculator_tap", {
      km: form.km,
      plan: form.select
    })

    setDataTable({ ...dataTable, motorcycles: [{ ...moto, gas: price }] })
  }

  return (
    <PerformanceStyled>
      <h1>Pulina</h1>
      <PerformanceForm data={dataTable} changeInputForm={changeInputForm} form={form} calculate={calculate} />
      <PerformanceTable data={dataTable} form={form} />
    </PerformanceStyled>
  )
}
