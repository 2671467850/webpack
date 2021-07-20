/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-20 14:24:12
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-20 20:36:50
 */

// lodash，现在通过一个 script 引入
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  })

  return element;
}

document.body.appendChild(component());


// function getComponent() {
//   // const element = document.createElement('div');
//   return import('lodash')
//     .then(({default: _}) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], '');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component')
// }

// async function getComponent() {
//   const { default: _ } = await import('lodash');

//   const element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// })