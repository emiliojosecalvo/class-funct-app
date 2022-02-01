import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import FormHooks from './FormHooks';
import Toggle from './Toggle';
import ClickMe from './ClickMe';

function App() {
  return (
    <div className="App">
      <ClickMe />
      <FormHooks />
      <Toggle />
      <CounterClass />
      <CounterHooks />
    </div>
  );
}

export default App;
