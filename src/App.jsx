import { useState } from 'react';

import ImageWindow from './components/ImageWindow';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hvem stemte</h1>
      </header>
      <main>
        <ImageWindow />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
