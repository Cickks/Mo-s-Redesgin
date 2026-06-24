export interface LocationHour {
  label: string
  value: string
}

export interface LocationDetails {
  name: string
  address: string
  phone: string
  email: string
  hours: LocationHour[]
  directionsUrl: string
  mapEmbedUrl?: string
}
