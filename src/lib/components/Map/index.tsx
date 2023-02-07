import { useState, memo, useMemo, useEffect } from "react"
import { useJsApiLoader, LoadScriptProps } from "@react-google-maps/api"

import { IGmap } from "./interfaces"

import styled from "styled-components"
import { GoogleMap, MapMarker } from "./atoms"

const googleMapsLibraries: LoadScriptProps["libraries"] = ["places"]

const DivMapWrapper = styled.div.attrs({
  className: "mapContainer flex flex-column"
})`
  height: ${({ height }: { height: string }) => height};
  display: flex;
  flex-direction: column;
`

export const GMap = memo(({ data, height = "100%" }: IGmap) => {
  const [firstRender, setFirstRender] = useState(true)

  const watchScroll = () => window.addEventListener("scroll", () => setFirstRender(false))

  useEffect(() => {
    if (firstRender) watchScroll()

    return () => { window.removeEventListener("scroll", watchScroll) }
  }, [firstRender])

  const apiConfig = useMemo(() => ({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: googleMapsLibraries
  }), [])

  const { isLoaded } = useJsApiLoader(apiConfig)

  if (firstRender) return <></>
  if (!isLoaded) return <></>

  return (
    <DivMapWrapper height={height}>
      <GoogleMap height={height} data={data} >
        {data.map((item, index) => {
          const { id, latitude, longitude, serial, address, isOpen } = item || {}
          const position = { lat: latitude, lng: longitude }

          return (
            <MapMarker
              key={index}
              title={serial || address}
              position={position}
              // onClick={handleClick(id)}
              isOpen={isOpen}
            />
          )
        })}
      </GoogleMap>
    </DivMapWrapper>
  )
})

GMap.displayName = 'GMap'