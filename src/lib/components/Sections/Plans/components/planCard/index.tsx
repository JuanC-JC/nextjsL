import { FileIcon, BikeIcon, SettingsIcon, BatteryIcon, PlusIcon } from "@/lib/components/Icons"
import { PlanCardStyled, Separation, PlanCardItemStyled, PlanCardPriceStyled } from "./planCard.styled"

import niuSport from "@/assets/images/bikes/nova_sport.webp"
import niuGTS from "@/assets/images/bikes/niu_nqi_gts.webp"
import superSoco from "@/assets/images/bikes/super_soco_new_ts.webp"
import Image from "next/image"

export const PlanCard = ({ plan }: any) => {
  const { name, bikeName, batteries, color, descriptions, price } = plan || {}

  const bikeImages = {
    "NIU NQi Sport": niuSport,
    "NIU NQi GTS": niuGTS,
    "Super Soco New TS": superSoco
  }

  const bikeToShow = bikeImages[bikeName as keyof typeof bikeImages]

  return (
    <PlanCardStyled>
      <h4 className="title">{name}</h4>

      <div className="planCard__body">
        <PlanCardItemStyled style={{ justifyContent: "space-between" }}>
          <BikeIcon />
          <p>{bikeName}</p>
          <Image loading="lazy" src={bikeToShow} alt={bikeName}/>
        </PlanCardItemStyled>

        <Separation color={color} />

        <PlanCardItemStyled >
          <BatteryIcon />
          <div>Troca de bateria: {batteries}</div>
        </PlanCardItemStyled>

        <Separation color={color} />

        <PlanCardItemStyled>
          <SettingsIcon />
          <div>Manutenção inclusa</div>
        </PlanCardItemStyled>

        <PlanCardItemStyled>
          <FileIcon />
          <div>Seguro e IPVA pagos</div>
        </PlanCardItemStyled>

        <PlanCardItemStyled>
          <BikeIcon />
          <div>Moto reserva</div>
        </PlanCardItemStyled>

        <Separation color={color} />

        <div className="planCard__descriptions">
          <div>além de:</div>
          <div>
            {descriptions?.map((description: string, index: number) => (
              <PlanCardItemStyled key={index + description}>
                <PlusIcon />
                <p>{description}</p>
              </PlanCardItemStyled>
            ))}
          </div>
        </div>
      </div>

      <PlanCardPriceStyled color={color}>
        R$ {price}/semana
      </PlanCardPriceStyled>
    </PlanCardStyled>
  )
}
