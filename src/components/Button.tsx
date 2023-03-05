import { style } from '@macaron-css/core';
import { JSXElement } from 'solid-js';

const button = style({
  backgroundColor: 'green',
});

export default (props: { children: JSXElement }) => {
  return <button class={button}>{props.children}</button>;
};
