import { MainSectionStyled } from "./mainSection.styled"
import { VammoBlock, Button} from "@/lib/components"
import Image from "next/image"

import bigCharacter from "@/assets/images/hero/big.webp"
import smallCharacter from "@/assets/images/hero/big.webp"
import mediumCharacter from "@/assets/images/hero/big.webp"


export const MainSection = () => {
  return (
    <MainSectionStyled>
      <div className="titleContainer">
        <div className="title">
          <span>O tempo</span>

          <h1>
            <span>O corre</span> não para
          </h1>

          <span>A gente</span>
        </div>

        <p className="description">
          Economize tempo e dinheiro. Alugue agora sua moto elétrica com baterias ilimitadas.
        </p>
        <Button id="main_knowMore_1" goTo="contact" color="black" text="Quero conhecer" />
      </div>

      <div className="images">
        <picture>
          <source srcSet={smallCharacter.src} media="(max-width: 720px)"  />
          <source srcSet={mediumCharacter.src} media="(min-width: 1024px)"  />
          <Image src={bigCharacter} alt="main character img" className="img"/>
        </picture>
        <VammoBlock color="#FF8032" />
      </div>

      <Button id="main_knowMore_2" goTo="contact" color="black" text="Quero conhecer" width="100%" />
    </MainSectionStyled>
  )
}
