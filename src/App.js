import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import FormHooks from './FormHooks';
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <FormHooks />
      <Toggle />
      <CounterClass />
      <CounterHooks />
    </div>
  );
}

export default App;
