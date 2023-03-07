import './styles/style.scss';
import logo from './images/logo.png';
import {babel} from './babel';
import {header} from './header';

console.log(header);

console.log('hello webpack! Start!');

console.log('Change!');

const imgBlock = document.querySelector('.img-block');
const img = document.createElement('img');
img.src = logo;
imgBlock.append(img);

babel().then((res) => {
   console.log(res);
});
