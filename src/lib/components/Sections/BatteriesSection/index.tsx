import { BatteriesContainerStyled, BatteriesStyled } from "./batteriesSection.styled"
import vamminhoSwappingBattery from '@/assets/images/vamminho_swapping_battery.webp'
import cabinDrawn from '@/assets/images/cabin_drawn.webp'
import { Button } from "@/lib/components"
import Image from "next/image"

export const BatteriesSection = () => {
  return (
    <BatteriesStyled>
      <BatteriesContainerStyled>

        <div className="batteries__informationBox">
          <h3>Baterias carregadas sempre disponíveis perto de você</h3>
          <p>Bateria acabando? Não espere para carregar. Troque sua bateria em nossas estações e siga seu corre. É simples, rápido e seguro.</p>
        </div>

        <div className="batteries__img">
          <Image loading="lazy" src={vamminhoSwappingBattery} alt="vamminho swapping battery"/>
          <Image loading="lazy" src={cabinDrawn} alt="cabin drawn"/>
        </div >

        <Button color="black" goTo="stations" text="Ver estações" />
      </BatteriesContainerStyled>
    </BatteriesStyled>
  )
}
