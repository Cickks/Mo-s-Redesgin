export interface LocationHour {
  label: string
  value: string
}

export interface LocationDetails {
  name: string
  address: string
  phone: string
  hours: LocationHour[]
  directionsUrl: string
}
