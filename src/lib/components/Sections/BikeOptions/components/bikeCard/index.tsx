import Image from "next/image"
import { BatteryIcon } from "@/lib/components"
import { SpeedIcon, VoltageIcon } from "@/lib/components/Icons"
import { BikeCardStyled } from "./bikeCard.styled"

export const BikeCard = ({ item }: any) => {
  const { name, image, voltage, maxSpeed, autonomy } = item

  return (
    <BikeCardStyled>
      <div className="title">
        {name}
      </div>
      <Image loading="lazy" src={image} alt={name}/>

      <div className="item">
        <VoltageIcon />
        <p>{voltage}</p>
      </div>

      <div className="item">
        <SpeedIcon />
        <p>{maxSpeed}</p>
      </div>

      <div className="item">
        <BatteryIcon />
        <p>{autonomy}</p>
      </div>
    </BikeCardStyled>
  )
}
