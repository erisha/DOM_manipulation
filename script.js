import './styles.css';

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
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

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
// hide the subMunuEl
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// get all a tags
const topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks);

// delegate top menu to listen for a click event
topMenuEl.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault(); // stop the normal action of the a tag

  if (e.target.localName !== 'a') {
    return;
  }
  // toggle the active class on the anchor
  e.target.classList.toggle('active');

  for (let anchor of topMenuLinks) {
    console.log(e.target.textContent, anchor.textContent);
    if (e.target.textContent !== anchor.textContent) {
      anchor.classList.remove('active');
    }
  }
});
