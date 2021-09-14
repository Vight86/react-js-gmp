import React, {useState} from 'react'

const CounterType4 = () => {
  const [value, setValue] = useState(0);

  const decrease = () => setValue(value - 1)
  const increase = () => setValue(value + 1)

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input value={value} />
      <button onClick={increase}>+</button>
    </div>
  )
}

export default CounterType4;

