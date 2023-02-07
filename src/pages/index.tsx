import { Theme } from "../lib/configuration/Theme.styled"
import { Layout } from '@/lib/components'
import { Advantages, Autonomy, BatteriesSection, BikeOptions, ContactUsForm, FQA, GeneralInfo, MainSection, NewUs, Performance, Plans } from "@/lib/components/Sections"
import styled from "styled-components"

const HomeStyled = styled.div.attrs({
	className: "home"
})`
	& > div {
		scroll-margin-top: 80px;
	}
`

export default function Home() {

  const location = { pathName: "home" }
  return (
    <>
      <Theme>
        <Layout location={location}>
          <HomeStyled>
            <MainSection />
            <GeneralInfo />
            <BatteriesSection />
            <Autonomy />
            <BikeOptions />
            <Advantages />
            <Plans />
            <Performance />
            <NewUs />
            <FQA />
            <ContactUsForm />
          </HomeStyled>
        </Layout>
      </Theme>
    </>
  )
}
