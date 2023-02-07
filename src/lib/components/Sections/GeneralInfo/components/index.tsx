import { Button } from "@/lib/components"
import Image from "next/image"
import { GeneralCardStyled } from "./generalCard.styled"

export const GeneralCard = ({ item }: any) => {
  const { title, image, text, goTo } = item

  return (
    <GeneralCardStyled>
      <div className="title">{title}</div>

      <Image loading="lazy" src={image} alt={text}/>

      <Button text={text} goTo={goTo} padding="1rem 1.6rem" fontSize="15.5px" />
    </GeneralCardStyled>
  )
}
