import { GeneralCard } from "./components"
import { GeneralInfoStyled } from "./generalInfo.styled"

import threebikes from "@/assets/images/bikes/3_bikes.webp"
import ImgBattery from "@/assets/images/battery.webp"
import ImgMechanic from "@/assets/images/mechanic.webp"
import vammoBg from "@/assets/images/vammo_bg.webp"
import Image from "next/image"

export const GeneralInfo = () => {
  const cards = [
    {
      title: "Autonomia ilimitada com nossas estações",
      image: ImgBattery,
      text: "Conheça nossas estações",
      goTo: "batteries_section"
    },
    {
      title: "Diferentes modelos à sua disposição",
      image: threebikes,
      text: "Conheça nossas motos",
      goTo: "bikes"
    },
    {
      title: "Todos os serviços que você precisa",
      image: ImgMechanic,
      text: "Conheça nossos serviços",
      goTo: "services"
    }
  ]

  return (
    <GeneralInfoStyled>
      <h2>Você economiza com a moto elétrica e vai mais longe com as nossas estações</h2>
      <div className="generalInfo__cardsContainer">
        {cards.map((item, index) => (
          <GeneralCard
            key={item.title + index}
            item={item}
          />
        ))}
      </div>

      <Image loading="lazy" src={vammoBg} alt="vammo img"/>
    </GeneralInfoStyled>
  )
}