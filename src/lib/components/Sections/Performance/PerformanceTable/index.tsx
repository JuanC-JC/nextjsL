import { PerformanceTableStyled } from "./style"
import { Data } from ".."
import { ColumnPerformance } from "@/lib/components"

interface IPropsPerformanceTable {
	data: Data
	form: any
}

export const PerformanceTable = ({ data, form }: IPropsPerformanceTable) => {
	const { plans, hColumn, motorcycles } = data || {}

	const basePlan = plans?.filter(({ type, bike }: any) => `${type} (${bike})` === form.select)
	const currentPlan = basePlan?.length ? basePlan : [plans[1]]

	const style: any = { background: "#DFFF00", fontWeight: "bold" }

	const annotations = [
		"Considerando plano de contratação mensal.",
		"Referências: consumo médio = 40km/L e preço médio da gasolina = R$ 4,84/L."
	]

	return (
		<PerformanceTableStyled>
			<div className="Performance__Container">
				<ColumnPerformance dataRows={hColumn} />
				<ColumnPerformance dataRows={currentPlan} styles={style} />
				<ColumnPerformance dataRows={motorcycles} />
			</div>

			<div className="Performance__annotationsBox">
				{annotations?.map((text, index) => (
					<span key={index + text}>
						<sup>{index + 1}</sup>
						{text}
					</span>
				))}
			</div>
		</PerformanceTableStyled>
	)
}
