import {header} from './header';
import './styles/style.css';
import logo from './images/logo.png';

console.log(header);

console.log('hello webpack! Start!');

console.log('Change!');

const imgBlock = document.querySelector('.img-block');
const img = document.createElement('img');
img.src = logo;
imgBlock.append(img);
