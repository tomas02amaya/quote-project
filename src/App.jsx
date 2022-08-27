import { useState } from 'react';
import './App.css';
import QuoteBox from './component/QuoteBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
