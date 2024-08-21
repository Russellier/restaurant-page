'use strict';

import './styles.css';
import { appendHomepage } from './homepage.js';
import { appendMenu } from './menu.js';
import { appendContact } from './contact.js';

const content = document.querySelector('#content');
const navBtns = document.querySelectorAll('nav > button');
let tab = 'home';

content.className = tab;

// Initialize home page
appendHomepage(content);
navBtns[0].classList.add('active-tab');

function makeInactive() {
  navBtns.forEach((button) => {
    button.classList.remove('active-tab');
  });
}

navBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Clear content
    content.textContent = '';

    makeInactive();

    tab = e.target.textContent.toLowerCase();
    content.className = tab;

    e.target.classList.add('active-tab');

    if (tab === 'home') appendHomepage(content);
    else if (tab === 'menu') appendMenu(content);
    else if (tab === 'contact') appendContact(content);
  });
});
