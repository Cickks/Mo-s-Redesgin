import type { LocationDetails } from '../types/location'

export const locationDetails: LocationDetails = {
  name: "Mo's Pizza",
  address: '1112 Ave H, Westwego, LA',
  phone: '(504) 341-9650',
  hours: [
    { label: 'Tuesday-Thursday', value: '11AM-8PM' },
    { label: 'Friday-Saturday', value: '11AM-9PM' },
    { label: 'Sunday', value: 'Closed' },
    { label: 'Monday', value: 'Closed' },
  ],
  directionsUrl: 'https://www.google.com/maps/search/1112+Ave+H+Westwego+LA',
}
