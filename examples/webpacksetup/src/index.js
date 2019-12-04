import './global.css'
import menu from './components/menu/menu.js'

const mountPoint = document.querySelector('#root')
mountPoint.appendChild(menu())
