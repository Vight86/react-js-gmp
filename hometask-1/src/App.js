import './App.css';
import CounterType1 from './counterType1/counterType1'
import CounterType2 from './counterType2/counterType2'
import CounterType3 from './counterType3/counterType3'
import CounterType4 from './counterType4/counterType4'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World!
        </h1>
        <h4>Counter with React.createElement()</h4>
        <div id="counterType1">
          <CounterType1/>
        </div>
        <h4>Counter with React Component</h4>
        <div id="counterType2">
          <CounterType2/>
        </div>
        <h4>Counter with React PureComponent</h4>
        <div id="counterType3">
          <CounterType3/>
        </div>
        <h4>Counter with React functional component</h4>
        <div id="counterType4">
          <CounterType4/>
        </div>
      </header>
    </div>
  );
}

export default App;
