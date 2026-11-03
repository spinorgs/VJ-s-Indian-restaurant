export const location = {
  name: 'VJ’s Kitchen | Indian Cuisine',
  street: '2600 Gateway Oaks Dr., #100',
  city: 'Sacramento, CA 95833',
  country: 'United States',
  phone: '916-927-2600',
  email: 'vjs.kitchen6@gmail.com',
  telephone: 'tel:+19169272600',
  plusCode: 'JF7M+69 Sacramento, California',
  latitude: 38.6130133,
  longitude: -121.5166057,
  googleMapsCid: '15878060886306794916',
  mapQuery: 'VJ’s Kitchen Indian Cuisine, 2600 Gateway Oaks Dr #100, Sacramento, CA 95833',
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;
export const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&ll=${location.latitude},${location.longitude}&z=17&output=embed`;

export const listingUrl = `https://www.google.com/maps?cid=${location.googleMapsCid}`;

export const communityLinks = [
  {label: 'Instagram', href: 'https://www.instagram.com/vjshub916/'},
  {label: 'Facebook', href: 'https://www.facebook.com/people/VJs-Kitchen/61574991098547/'},
  {label: 'WhatsApp group', href: 'https://chat.whatsapp.com/ByNwL39KlbEJl7S9I1AT6t'},
];
export const orderingUrl = 'https://www.vjskitchen.com/';
