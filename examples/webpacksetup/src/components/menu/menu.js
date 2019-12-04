import style from './menu.css'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

function createNav() {
  const navElem = document.createElement('nav')
  navElem.classList.add(style.menu)
  return navElem
}

function createLinks(items, mount) {
  items.forEach(({ name, href }) => {
    const aElem = document.createElement('a')
    aElem.textContent = name
    aElem.href = href
    aElem.classList.add(style.link)
    mount.appendChild(aElem)
  })
  return mount
}

export default () => createLinks(menuItems, createNav())
