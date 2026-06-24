import type { LocationDetails } from '../types/location.ts'

export const locationDetails: LocationDetails = {
  name: "Mo's Pizza",
  address: '1112 Ave H, Westwego, LA',
  phone: '(504) 341-9650',
  email: 'mosfest@gmail.com',
  hours: [
    { label: 'Tuesday-Thursday', value: '11AM - 8PM' },
    { label: 'Friday-Saturday', value: '11AM - 9PM' },
    { label: 'Sunday-Monday', value: 'Closed' },
  ],
  directionsUrl: 'https://www.google.com/maps/search/1112+Ave+H+Westwego+LA',
  mapEmbedUrl: 'https://www.google.com/maps?q=1112+Ave+H+Westwego+LA+70094&output=embed',
}
