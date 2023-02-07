import { Data } from "."

export const dataTablePerformance: Data = {
  hColumn: [
    {
      type: "Tipo de aluguel",
      cost: "Aluguel semanal",
      gas: "Gasolina semanal",
      total: "Total semanal"
    }
  ],
  plans: [
    // { type: "Selecione", cost: 0, gas: 0, total: 0, img: true },
    { type: "Economiza", bike: "NIU Sport", cost: 149, gas: 0, total: 149, img: true },
    { type: "Desenrola", bike: "NIU GTS", cost: 269, gas: 0, total: 269, img: true },
    { type: "Tira Onda", bike: "Super Soco", cost: 299, gas: 0, total: 299, img: true },
  ],
  motorcycles: [
    { type: "Moto a gasolina", cost: 245, gas: 135, total: 0, img: "blank" }
  ]
}

export const getGasPrice = (km: number) => {
  //consumption average Km/L
  const consumptionAverage = 40

  //price per day of gas L
  const gasPriceL = 4.84

  return Math.floor(((km / consumptionAverage) * gasPriceL) * 7)
}

export const totalWeek = (rentalPrice: number, gasPrice: number) => {
  return rentalPrice + gasPrice
}