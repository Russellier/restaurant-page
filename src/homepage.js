import potionShelf from './assets/images/home/bright-cropped-elena-mozhvilo-J2_nIEkIpRM-unsplash.jpg';

export function appendHomepage(content) {
  const tagline = document.createElement('p');
  const description = document.createElement('p');
  const mainImg = document.createElement('img');
  const action = document.createElement('p');

  tagline.textContent = 'Your #1 potion maker';

  description.textContent = 'Brewing since 1641';

  mainImg.src = potionShelf;
  mainImg.alt = 'Shelf of potions';
  mainImg.classList.add('main-img');

  action.textContent = 'Order now or visit us!';

  content.append(tagline, description, mainImg, action);
}
