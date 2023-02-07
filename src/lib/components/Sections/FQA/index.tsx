import { useState } from "react"
import { SectionCollapsible, VammoBlock } from "@/lib/components"
import { FQAStyled } from "./FQA.styled"

import FQA_image from "@/assets/images/FQA_image.webp"
import questions from './faqs.json'
import Image from "next/image"

export const FQA = () => {
  const [currentOpened, setCurrentOpened] = useState<number>(-1)

  const handleSectionCollapse = (index: number) => () => {
    console.log("emiting this fucking event")
    window.gtag('event', 'web_faq_tap', {
      title: questions[index].title,
      content: questions[index].content
    });

    if (currentOpened === index) return setCurrentOpened(-1)
    setCurrentOpened(index)
  }

  return (
    <FQAStyled>
      <div className="FQAContainer">
        <div className="questions__block">
          <h3>Tem alguma dúvida?</h3>

          <div className="questions__items">
            {questions.map(({ title, content }, index) => (
              <SectionCollapsible
                isOpen={index === currentOpened}
                onClick={handleSectionCollapse(index)}
                key={index}
                title={title}
                content={content}
              />
            ))}
          </div>
        </div>
        <div className="questions__image">
          <VammoBlock color="#2EC2FF" />
          <Image loading="lazy" src={FQA_image} alt="faq image"/>
        </div>
      </div>
    </FQAStyled>
  )
}
