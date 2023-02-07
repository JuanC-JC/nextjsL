/* eslint-disable */
import { useRef, useCallback } from "react"
import { GoogleMap as GoogleMapApi } from "@react-google-maps/api"

import { IGoogleMap } from "../interfaces"

const GoogleMap = ({ coordinates, data = [], children }: IGoogleMap) => {
  const mapRef = useRef()

  const bounds = new google.maps.LatLngBounds()

  const formatData = data?.map(({ latitude, longitude }: any) => new google.maps.LatLng(latitude, longitude))

  const onLoadMap = useCallback((map: any) => {
    mapRef.current = map

    if (formatData?.length === 1 || (coordinates?.lat && coordinates?.lng)) {
      bounds.extend(formatData[0] || coordinates)

      map.fitBounds(bounds)

      const listener = google.maps.event.addListener(map, "idle", function () {
        if (map.getZoom() > 16) map.setZoom(14)
        google.maps.event.removeListener(listener)
      })
    }

    if (formatData?.length > 1) {
      formatData?.forEach(item => bounds.extend(item))
      map.fitBounds(bounds)
    }
  }, [])

  const mapStyles = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    disableDefaultUI: true,
    draggable: true,
    styles: mapStyles
  }

  const GoogleMapApiStyles = {
    height: "100%",
    borderRadius: "4px"
  }

  return (
    <GoogleMapApi mapContainerStyle={GoogleMapApiStyles} onLoad={onLoadMap} options={options} >
      {children}
    </GoogleMapApi>
  )
}

export default GoogleMap