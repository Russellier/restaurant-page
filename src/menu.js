import icon1 from './assets/images/menu/icons8-vodka-96.png';
import icon2 from './assets/images/menu/icons8-technical-fluid-96.png';
import icon3 from './assets/images/menu/icons8-rum-96.png';
import icon4 from './assets/images/menu/icons8-olive-oil-96.png';
import icon5 from './assets/images/menu/icons8-poison-bottle-96.png';
import icon6 from './assets/images/menu/icons8-wine-bottle-96.png';

export function appendMenu(content) {
  const menuList = document.createElement('ul');
  const credit = document.createElement('p');

  let menuItems = [
    {
      name: 'Felix Felicis',
      description:
        'Temporarily makes the taker lucky, allowing them to succeed in all their endeavours.',
      picture: icon1,
    },

    {
      name: 'Veritaserum',
      description: 'Forces the taker to tell the truth.',
      picture: icon2,
    },

    {
      name: 'Love Potion',
      description:
        'Makes the taker fall in love with the person that has given it to them.',
      picture: icon3,
    },

    {
      name: 'Polyjuice Potion',
      description:
        'Transforms the taker into another person whose DNA is added to the potion.',
      picture: icon4,
    },

    {
      name: 'Skele-Gro',
      description: 'Regrows missing bones.',
      picture: icon5,
    },

    {
      name: 'Babbling Beverage',
      description: 'A potion that causes uncontrollable speaking of nonsense.',
      picture: icon6,
    },
  ];

  menuItems.forEach((item) => {
    const listItem = document.createElement('li');
    const itemName = document.createElement('p');
    const itemImg = document.createElement('img');
    const itemDescription = document.createElement('p');

    itemName.textContent = item.name;
    itemImg.src = item.picture;
    itemDescription.textContent = item.description;

    listItem.append(itemName, itemImg, itemDescription);

    menuList.appendChild(listItem);
  });

  credit.textContent = 'Icons from icons8.com';

  content.append(menuList, credit);
  console.log('This is the menu page');
}
