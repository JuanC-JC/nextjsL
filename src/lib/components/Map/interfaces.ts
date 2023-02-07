/* eslint-disable */
export interface ILocation {
  lat: any
  lng: any
}

export interface IGmap {
  location?: ILocation,
  height?: string,
  address?: string,
  onChange?: (location: any) => any
  searchBox?: boolean
  data: any[]
  draggable?: boolean
}

export interface IGoogleMap {
  height: string
  coordinates?: ILocation,
  data: any[]
  children: JSX.Element | JSX.Element[]
}

export interface IMapMarker {
  position?: ILocation
  title?: string
  isOpen?: boolean
  onClick?: (location: any) => any
}