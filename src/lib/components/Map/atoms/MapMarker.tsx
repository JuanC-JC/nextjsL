import { useRef, useCallback } from "react"
import { MarkerF } from "@react-google-maps/api"

import { IMapMarker } from "../interfaces"

import iconBlue from "../../../../assets/images/map/icon_blue.webp"
import iconGrey from "../../../../assets/images/map/icon_grey.webp"

const MapMarker = ({ position, title, isOpen }: IMapMarker) => {

  const markerRef = useRef(null)

  const onLoadMarker = useCallback((marker: any) => markerRef.current = marker, [])

  if (!position?.lat || !position?.lng) return <></>

  const icon = {
    url: isOpen ? iconBlue.src : iconGrey.src,
    scaledSize: new google.maps.Size(32, 32), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }

  return (
    <MarkerF
      title={title}
      onLoad={onLoadMarker}
      position={position}
      icon={icon}
      animation={google.maps.Animation.DROP}
    />
  )
}

export default MapMarker