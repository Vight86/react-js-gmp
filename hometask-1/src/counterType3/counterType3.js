import React, {PureComponent} from 'react'

export default  class CounterType4 extends PureComponent {
  state = {
    value: 0
  }

  handleDecrease = () => this.setState(state => ({value: state.value -= 1}))
  handleIncrease = () => this.setState(state => ({value: state.value += 1}))

  render() {
    return (
      <div>
        <button onClick={this.handleDecrease}>-</button>
        <input value={this.state.value} />
        <button onClick={this.handleIncrease}>+</button>
      </div>
    )
  }
}