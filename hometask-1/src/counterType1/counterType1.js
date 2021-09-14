import React, { createElement } from 'react'
import ReactDOM from 'react-dom';

let value = 0;

const render = () => ReactDOM.render(<CounterType1 />, document.getElementById('counterType1'))

const decrease = () => {
  value -= 1
  render()
};
const increase = () => {
  value += 1
  render()
};

const UpButton = () => (
  createElement(
    'button',
    { onClick: () => increase() },
    '+'
  )
)

const DownButton = () => (
  createElement(
    'button',
    { onClick: () => decrease() },
    '-'
  )
)

const InputField = () => (
  createElement(
    'input',
    {value: value}
  )
)

const CounterType1 = () => (
  createElement(
    'div',
    null,
    DownButton(), InputField(), UpButton()
  )
)

export default  CounterType1
