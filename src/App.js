import React from 'react';
import Child from './Child';
import {TransProvider} from './transContext';
import './App.css';

function App() {
  return (
    <TransProvider>
      <Child />
    </TransProvider>
  );
}

export default App;
