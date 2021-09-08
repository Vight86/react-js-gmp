import React, {useState} from 'react'

const CounterType4 = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value - 1)}>-</button>
      <input value={value} />
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}

export default CounterType4;

