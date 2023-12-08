// import 'style.css';

// Menu data structure

// var menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

//Part 1
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

//Part 2

const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Part 3

for (let linkObjects of menuLinks) {
  const a = document.createElement('a');
  a.setAttribute('href', linkObjects.href);
  a.textContent = linkObjects.text;
  topMenuEl.appendChild(a);
}

//// ===== Part 2 Assignment =====\\\\\\

// 3. Creating the Submenu

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
// hide the subMunuEl
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// 4. Adding Menu Interactions
// get all a tags
const topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks);

// delegate top menu to listen for a click event
topMenuEl.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault(); // stop the normal action of the a tag

  if (e.target.tagName !== 'A') {
    return;
  }
  // toggle the active class on the anchor
  topMenuLinks.forEach((link)=> {
    link.classList.remove('active')
  })
  e.target.classList.toggle('active');

//   for (let anchor of topMenuLinks) {
//     console.log(e.target.textContent, anchor.textContent);
//     if (e.target.textContent !== anchor.textContent) {
//       anchor.classList.remove('active');
//     }
//   }
});

//5. Adding Submenu Interactions

function subMenu(subMenuLinks) {
  subMenuEl.innerHTML = '';
  subMenuLinks.forEach((link) => {
    const subMenuAnchor = document.createElement('a');
    subMenuAnchor.setAttribute('href', link.href);
    subMenuAnchor.textContent = link.text;
    subMenuEl.appendChild(subMenuAnchor);
  });
}
topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  topMenuLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.toggle('active');

  if (clickedLink && clickedLink.subLinks) {
    subMenu(clickedLink.subLinks);

    subMenuEl.style.top = e.target.classList.contains('active') ? '100%' : '0';
  } else {
    subMenuEl.style.top = '0';
  }
});
