/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-20 14:24:12
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-20 17:39:46
 */

// lodash，现在通过一个 script 引入
import _ from 'lodash';

import './style.css'

// import Icon from './icon.png';

// import Notes from './data.csv';
// import Data from './data.xml';

// import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // const btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon)

  // console.log(Data, Notes);

  // btn.innerHTML = 'Click me and check the console'
  // btn.onclick = printMe

  // element.appendChild(btn);

  return element;
}

document.body.appendChild(component());