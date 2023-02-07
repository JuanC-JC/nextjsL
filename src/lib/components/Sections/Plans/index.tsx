import { Button } from "@/lib/components"
import { PlanCard } from "./components/planCard"
import { dataPlans } from "./dataPlans"
import { PlansStyled } from "./plans.styled"

export const Plans = () => {
  return (
    <PlansStyled>
      <h3>Seja um dos primeiros e economize com nossos planos de lançamento</h3>
      <div className="plans__container">
        {dataPlans?.map((item, index) => <PlanCard key={index + item?.name} plan={item} />)}
      </div>
      <Button id="plans_knowMore" goTo="contact" text="Quero conhecer" width="100%" />
    </PlansStyled>
  )
}
