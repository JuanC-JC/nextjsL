
import { NewUsContainerStyled, NewUsStyled } from "./newUs.styled"
import search from '@/assets/images/search-newUs.webp'
import { data } from "@/lib/helpers"

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import SwiperCore, { Autoplay } from "swiper"
import Image from "next/image";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay])

export const NewUs = () => {
  const breakpoints = {
    360: { slidesPerView: 1.5, },
    760: { slidesPerView: 3, },
    1024: { slidesPerView: 5, },
    1400: { slidesPerView: 7, }
  }

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <NewUsStyled>
      <NewUsContainerStyled>
        <Image loading="lazy" className="newUs__img" src={search} alt="glasses image" />

        <div className="newUs__informationBox">
          <h3>O que estão falando de nós</h3>
          <p>
            <span>VAMMO</span> (anteriormente <span>Leoparda</span>) na mídia
          </p>
        </div>

        <div className="newUs_scrollContainer">
          {
            domLoaded && (
              <Swiper
                spaceBetween={20}
                autoplay={{ "delay": 2500, "disableOnInteraction": false }}
                slidesPerView={1}
                loop={true}
                breakpoints={breakpoints}
              >
                {data.length && data.map(({ name, link, img }: any, index: number) => (
                  <SwiperSlide key={name + index}>
                    <a rel="noreferrer" href={link} target="_blank" aria-label={`Read ${name} article`}>
                      <Image className="swiper-img" loading="lazy" src={img[name]} alt={`img_${name}`} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )
          }

        </div>
      </NewUsContainerStyled>
    </NewUsStyled>
  )
}
