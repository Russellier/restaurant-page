import mapImg from './assets/images/contact/map.png';
import icon1 from './assets/images/contact/map-marker.svg';
import icon2 from './assets/images/contact/phone.svg';

export function appendContact(content) {
  const addressDiv = document.createElement('div');
  const addressIcon = document.createElement('img');
  const address = document.createElement('p');
  const numberDiv = document.createElement('div');
  const numberIcon = document.createElement('img');
  const number = document.createElement('p');
  const location = document.createElement('img');

  addressIcon.src = icon1;
  address.textContent = 'Hogsmeade Village';
  addressDiv.append(addressIcon, address);

  numberIcon.src = icon2;
  number.textContent = '+01-234-567-8901';
  numberDiv.append(numberIcon, number);

  location.src = mapImg;
  location.alt = 'Vicinity map';
  location.classList.add('map');

  content.append(addressDiv, numberDiv, location);
}
