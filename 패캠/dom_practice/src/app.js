import {createDOM} from './react';

const vdom = {
  tag : 'p',
  props : {},
  children : [
    {
      tag : 'h1',
      props : {},
      children : ["React 만들기"]
    },
    {
      tag : 'ul',
      props : {},
      children : [
        {
          tag: 'li',
          props: {
            style: "color:red",
          },
          children:['첫 번 째 아이템']
        },
        {
          tag: 'li',
          props: {
            style: "color:blue",
          },
          children:['두 번 째 아이템']
        },
        {
          tag: 'li',
          props: {
            style: "color:green",
          },
          children:['세 번 째 아이템']
        }
      ],
    }
  ],
};
const vdom2 = {
  tag : 'div',
  props : {},
  children : [
    {
      tag : 'input',
      props : {
        type : 'text',
        name : 'first',
        id : 'root',
      },
      children : [""]
    },
  ],
};

document
  .querySelector('#root')
  .appendChild(createDOM(vdom))