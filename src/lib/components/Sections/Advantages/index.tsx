import { BatteryIcon, ClockIcon, SettingsIcon, CoffeeIcon, EyeIcon, BikeIcon, FileIcon, LockIcon, ReloadIcon } from "@/lib/components/Icons"
import { AdvantageCardStyled, AdvantagesStyled, DisponibilityStyled, AutonomyContainerStyled, AutonomyStyled } from "./advantages.styled"
import { GMap } from "@/lib/components"
import { If } from "@/lib/helpers"
import Image from "next/image"

import SecondImage from "@/assets/images/advantages_second.webp"
import iconBlue from "@/assets/images/map/icon_blue.webp"
import iconGrey from "@/assets/images/map/icon_grey.webp"

export const Advantages = () => {
  const advantages = [
    {
      title: "Manutenção inclusa",
      description: "Menos problemas, resolvidos mais rápido e sem custo",
      color: "#FF8032",
      Icon: <SettingsIcon />
    },
    {
      title: "Seguro e IPVA pagos",
      description: "Sem custos e burocracia extras",
      color: "#FF8032",
      Icon: <>
        <LockIcon />
        <FileIcon />
      </>
    },
    {
      title: "Trocas ilimitadas",
      description: "Baterias sempre disponíveis próximas a você",
      color: "#FF8032",
      Icon: <>
        <BatteryIcon discharged />
        <ReloadIcon />
        <BatteryIcon />
      </>
    },
    {
      title: "Moto reserva*",
      description: "Nunca fique na mão",
      color: "#FF8032",
      Icon: <BikeIcon />
    }
  ]

  return (
    <>
      <AdvantagesStyled>
        <h3>Você cuida do seu corre, nós de todo o resto</h3>
        <div className="advantages__container">
          {advantages?.map((item, index) => (
            <AdvantageCard
              key={item?.description}
              advantage={item}
              showDisponibility={index === advantages.length - 1}
            />
          ))}
          <div />
          <DisponibilityStyled>
            *Sujeito à disponibilidade.
          </DisponibilityStyled>
        </div >
        <Image loading="lazy" src={SecondImage} alt="advantages_image"/>
      </AdvantagesStyled>
    </>
  )
}

export const Autonomy = () => {
  const advantages = [
    {
      title: "Bateria garantida",
      description: "Chegou, trocou, saiu. Leva menos de 3 minutos.",
      color: "#2EC2FF",
      Icon: <BatteryIcon />
    },
    {
      title: "Troca assistida",
      description: "Tenha um atendente sempre disponível para facilitar sua troca.",
      color: "#2EC2FF",
      Icon: <EyeIcon />
    },
    {
      title: "Rede 24h",
      description: "Nossas estações operam 365 dias no ano e algumas 24 horas.",
      color: "#2EC2FF",
      Icon: <ClockIcon />
    },
    {
      title: "Atendimento de qualidade",
      description: "Acesso a banheiro, água e café.",
      color: "#2EC2FF",
      Icon: <CoffeeIcon />
    }
  ]

  return (
    <AutonomyStyled>
      <AutonomyContainerStyled>
        <h3>Com nossas estações de troca, autonomia não é um problema</h3>

        <div className="autonomy__mapContainer">
          <div className="autonomy__map">
            <GMap data={LOCATIONS} />
          </div>

          <div className="autonomy__mapitems">
            <div>
              <Image loading="lazy" className="autonomy_map_icon-legend" src={iconBlue} alt="icon_blue"/>
              <p>Estações abertas</p>
            </div>
            <div>
              <Image loading="lazy" className="autonomy_map_icon-legend" src={iconGrey} alt="icon_grey"/>
              <p>Em processo de abertura</p>
            </div>
          </div>
        </div>

        <div className="autonomy__cardsContainer">
          {advantages?.map(item => (
            <AdvantageCard key={item?.description} advantage={item} />
          ))}
        </div >

      </AutonomyContainerStyled>
    </AutonomyStyled>
  )
}

const AdvantageCard = ({ advantage }: any) => {
  const { color, Icon, title, description, showDisponibility } = advantage

  return (
    <AdvantageCardStyled color={color}>
      <div className="advantageCard__iconsContainer">
        <If condition={Icon}>
          {Icon}
        </If>
      </div>

      <div className="advantageCard__title">
        {title}
      </div>
      <div className="advantageCard__description">
        {description}
      </div>

      <If condition={showDisponibility}>
        <DisponibilityStyled>
          *Sujeito à disponibilidade.
        </DisponibilityStyled>
      </If>
    </AdvantageCardStyled>
  )
}

const LOCATIONS = [
  {
    latitude: -23.5951967,
    longitude: -46.677229,
    address: "R. Santa Justina, 434 - Vila Olímpia",
    isOpen: true
  },
  {
    latitude: -23.6513785,
    longitude: -46.7107104,
    address: "Av. Mário Lopes Leão, 518 - Santo Amaro",
    isOpen: true
  },
  {
    latitude: -23.5655302,
    longitude: -46.6558056,
    address: "Alameda Jaú, 675 - Jardim Paulista",
    isOpen: true
  },
  {
    latitude: -23.5634751,
    longitude: -46.6868837,
    address: "R. Teodoro Sampaio, 1903 - Pinheiros",
    isOpen: true
  },
  {
    latitude: -23.5414044,
    longitude: -46.5547336,
    address: "R. Joaquim Pinto, 15 - Vila Gomes Cardim",
    isOpen: true
  },
  {
    latitude: -23.586857964915787,
    longitude: -46.642961686685524,
    address: "R. Joaquim Távora, 1105 - Vila Mariana",
  }
]