export const location = {
  name: 'VJ’s Kitchen | Indian Cuisine',
  street: '2600 Gateway Oaks Dr., #100',
  city: 'Sacramento, CA 95833',
  country: 'United States',
  phone: '916-927-2600',
  telephone: 'tel:+19169272600',
  plusCode: 'JF7M+69 Sacramento, California',
  mapQuery: 'VJ’s Kitchen Indian Cuisine, 2600 Gateway Oaks Dr #100, Sacramento, CA 95833',
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapQuery)}`;
export const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=17&output=embed`;
